"use client"

import { motion } from "framer-motion"
import { DashboardLayout } from "@/components/dashboard-layout"
import { StatCard } from "@/components/stat-card"
import { TaskStatusChart } from "@/components/charts/task-status-chart"
import { TasksOverTimeChart } from "@/components/charts/tasks-over-time-chart"
import { RecentActivity } from "@/components/recent-activity"
import { useStore } from "@/lib/store"
import { Users, CheckSquare, Clock, TrendingUp } from "lucide-react"

export default function DashboardPage() {
  const { employees, tasks } = useStore()

  const stats = [
    {
      title: "Total Employees",
      value: employees.length,
      icon: Users,
      trend: { value: 12, positive: true },
    },
    {
      title: "Total Tasks",
      value: tasks.length,
      icon: CheckSquare,
      trend: { value: 8, positive: true },
    },
    {
      title: "In Progress",
      value: tasks.filter((t) => t.status === "in-progress").length,
      icon: Clock,
      trend: { value: 5, positive: false },
    },
    {
      title: "Completed",
      value: tasks.filter((t) => t.status === "completed").length,
      icon: TrendingUp,
      trend: { value: 24, positive: true },
    },
  ]

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here&apos;s an overview of your team&apos;s progress.</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.title}
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
              trend={stat.trend}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid gap-6 lg:grid-cols-2">
          <TaskStatusChart />
          <TasksOverTimeChart />
        </div>

        {/* Recent Activity */}
        <RecentActivity />
      </div>
    </DashboardLayout>
  )
}
