"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"
import { useStore } from "@/lib/store"

const COLORS = {
  todo: "hsl(var(--chart-2))",
  "in-progress": "hsl(var(--chart-4))",
  completed: "hsl(var(--chart-3))",
  cancelled: "hsl(var(--muted-foreground))",
}

export function TaskStatusChart() {
  const tasks = useStore((state) => state.tasks)

  const data = [
    { name: "To Do", value: tasks.filter((t) => t.status === "todo").length, status: "todo" },
    { name: "In Progress", value: tasks.filter((t) => t.status === "in-progress").length, status: "in-progress" },
    { name: "Completed", value: tasks.filter((t) => t.status === "completed").length, status: "completed" },
    { name: "Cancelled", value: tasks.filter((t) => t.status === "cancelled").length, status: "cancelled" },
  ].filter((d) => d.value > 0)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Task Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={4} dataKey="value">
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[entry.status as keyof typeof COLORS]}
                      className="stroke-background stroke-2"
                    />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                    color: "hsl(var(--foreground))",
                  }}
                />
                <Legend formatter={(value) => <span className="text-foreground text-sm">{value}</span>} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
