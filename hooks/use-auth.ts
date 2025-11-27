"use client"

import { useEffect, useState, useCallback } from "react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

interface User {
  email: string
  password: string
}

const AUTH_KEY = "taskflow_user"
const SESSION_KEY = "taskflow_session"

export function useAuth() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
  const [user, setUser] = useState<{ email: string } | null>(null)

  // Check if user is logged in on mount
  useEffect(() => {
    const session = localStorage.getItem(SESSION_KEY)
    if (session) {
      const userData = JSON.parse(session)
      setUser(userData)
      setIsAuthenticated(true)
    } else {
      setIsAuthenticated(false)
    }
  }, [])

  const signUp = useCallback(async (email: string, password: string): Promise<boolean> => {
    // Check if user already exists
    const existingUser = localStorage.getItem(AUTH_KEY)
    if (existingUser) {
      const parsed = JSON.parse(existingUser)
      if (parsed.email === email) {
        toast.error("An account with this email already exists")
        return false
      }
    }

    // Save new user
    const newUser: User = { email, password }
    localStorage.setItem(AUTH_KEY, JSON.stringify(newUser))
    toast.success("Account created! Please log in.")
    return true
  }, [])

  const login = useCallback(async (email: string, password: string): Promise<boolean> => {
    const storedUser = localStorage.getItem(AUTH_KEY)

    if (!storedUser) {
      toast.error("Invalid email or password")
      return false
    }

    const user: User = JSON.parse(storedUser)

    if (user.email !== email || user.password !== password) {
      toast.error("Invalid email or password")
      return false
    }

    // Create session
    localStorage.setItem(SESSION_KEY, JSON.stringify({ email: user.email }))
    setUser({ email: user.email })
    setIsAuthenticated(true)
    toast.success("Welcome back!")
    return true
  }, [])

  const logout = useCallback(() => {
    localStorage.removeItem(SESSION_KEY)
    setUser(null)
    setIsAuthenticated(false)
    toast.success("Logged out successfully")
    router.push("/login")
  }, [router])

  return {
    isAuthenticated,
    user,
    signUp,
    login,
    logout,
  }
}
