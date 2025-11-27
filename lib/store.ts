import { create } from "zustand"

export interface Employee {
  id: string
  name: string
  email: string
  role: string
  avatar?: string
  status: "active" | "inactive"
}

export interface Task {
  id: string
  title: string
  description: string
  status: "todo" | "in-progress" | "completed" | "cancelled"
  priority: "low" | "medium" | "high"
  assigneeId: string
  dueDate: string
  createdAt: string
}

interface AppState {
  employees: Employee[]
  tasks: Task[]
  addEmployee: (employee: Employee) => void
  updateEmployee: (id: string, employee: Partial<Employee>) => void
  deleteEmployee: (id: string) => void
  addTask: (task: Task) => void
  updateTask: (id: string, task: Partial<Task>) => void
  deleteTask: (id: string) => void
}

export const useStore = create<AppState>((set) => ({
  employees: [
    { id: "1", name: "Sarah Johnson", email: "sarah@taskflow.io", role: "Product Manager", status: "active" },
    { id: "2", name: "Michael Chen", email: "michael@taskflow.io", role: "Senior Developer", status: "active" },
    { id: "3", name: "Emily Davis", email: "emily@taskflow.io", role: "UX Designer", status: "active" },
    { id: "4", name: "James Wilson", email: "james@taskflow.io", role: "DevOps Engineer", status: "inactive" },
    { id: "5", name: "Lisa Anderson", email: "lisa@taskflow.io", role: "Marketing Lead", status: "active" },
  ],
  tasks: [
    {
      id: "1",
      title: "Design System Update",
      description: "Update the design system with new components",
      status: "in-progress",
      priority: "high",
      assigneeId: "3",
      dueDate: "2025-12-01",
      createdAt: "2025-11-20",
    },
    {
      id: "2",
      title: "API Integration",
      description: "Integrate third-party payment API",
      status: "todo",
      priority: "high",
      assigneeId: "2",
      dueDate: "2025-12-05",
      createdAt: "2025-11-21",
    },
    {
      id: "3",
      title: "User Research",
      description: "Conduct user interviews for new feature",
      status: "completed",
      priority: "medium",
      assigneeId: "1",
      dueDate: "2025-11-25",
      createdAt: "2025-11-15",
    },
    {
      id: "4",
      title: "Infrastructure Upgrade",
      description: "Upgrade server infrastructure",
      status: "in-progress",
      priority: "medium",
      assigneeId: "4",
      dueDate: "2025-12-10",
      createdAt: "2025-11-22",
    },
    {
      id: "5",
      title: "Marketing Campaign",
      description: "Launch Q4 marketing campaign",
      status: "todo",
      priority: "low",
      assigneeId: "5",
      dueDate: "2025-12-15",
      createdAt: "2025-11-23",
    },
    {
      id: "6",
      title: "Bug Fixes",
      description: "Fix critical bugs in production",
      status: "completed",
      priority: "high",
      assigneeId: "2",
      dueDate: "2025-11-24",
      createdAt: "2025-11-20",
    },
    {
      id: "7",
      title: "Documentation",
      description: "Update API documentation",
      status: "cancelled",
      priority: "low",
      assigneeId: "2",
      dueDate: "2025-11-28",
      createdAt: "2025-11-18",
    },
  ],
  addEmployee: (employee) => set((state) => ({ employees: [...state.employees, employee] })),
  updateEmployee: (id, employee) =>
    set((state) => ({
      employees: state.employees.map((e) => (e.id === id ? { ...e, ...employee } : e)),
    })),
  deleteEmployee: (id) => set((state) => ({ employees: state.employees.filter((e) => e.id !== id) })),
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
  updateTask: (id, task) =>
    set((state) => ({
      tasks: state.tasks.map((t) => (t.id === id ? { ...t, ...task } : t)),
    })),
  deleteTask: (id) => set((state) => ({ tasks: state.tasks.filter((t) => t.id !== id) })),
}))
