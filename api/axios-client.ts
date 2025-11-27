// API Client placeholder for TaskFlow
// Replace baseURL with your actual API endpoint

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.taskflow.io/v1"

interface RequestOptions {
  headers?: Record<string, string>
}

async function request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`

  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  })

  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`)
  }

  return response.json()
}

// Employee API
export const employeesApi = {
  getAll: () => request<Employee[]>("/employees"),
  getById: (id: string) => request<Employee>(`/employees/${id}`),
  create: (data: Omit<Employee, "id">) =>
    request<Employee>("/employees", { method: "POST", body: JSON.stringify(data) }),
  update: (id: string, data: Partial<Employee>) =>
    request<Employee>(`/employees/${id}`, { method: "PUT", body: JSON.stringify(data) }),
  delete: (id: string) => request<void>(`/employees/${id}`, { method: "DELETE" }),
}

// Tasks API
export const tasksApi = {
  getAll: () => request<Task[]>("/tasks"),
  getById: (id: string) => request<Task>(`/tasks/${id}`),
  create: (data: Omit<Task, "id">) => request<Task>("/tasks", { method: "POST", body: JSON.stringify(data) }),
  update: (id: string, data: Partial<Task>) =>
    request<Task>(`/tasks/${id}`, { method: "PUT", body: JSON.stringify(data) }),
  delete: (id: string) => request<void>(`/tasks/${id}`, { method: "DELETE" }),
}

interface Employee {
  id: string
  name: string
  email: string
  role: string
  status: "active" | "inactive"
}

interface Task {
  id: string
  title: string
  description: string
  status: "todo" | "in-progress" | "completed" | "cancelled"
  priority: "low" | "medium" | "high"
  assigneeId: string
  dueDate: string
  createdAt: string
}
