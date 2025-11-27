"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const activities = [
  { id: 1, user: "Sarah Johnson", action: "completed", task: "User Research", time: "2 hours ago" },
  { id: 2, user: "Michael Chen", action: "started", task: "API Integration", time: "4 hours ago" },
  { id: 3, user: "Emily Davis", action: "updated", task: "Design System Update", time: "5 hours ago" },
  { id: 4, user: "James Wilson", action: "commented on", task: "Infrastructure Upgrade", time: "1 day ago" },
  { id: 5, user: "Lisa Anderson", action: "created", task: "Marketing Campaign", time: "1 day ago" },
]

const actionColors = {
  completed: "bg-success/10 text-success border-success/20",
  started: "bg-accent/10 text-accent border-accent/20",
  updated: "bg-warning/10 text-warning border-warning/20",
  "commented on": "bg-muted text-muted-foreground border-muted",
  created: "bg-primary/10 text-primary border-primary/20",
}

export function RecentActivity() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="flex items-center gap-4 rounded-lg p-3 hover:bg-muted/50 transition-colors"
              >
                <Avatar className="h-10 w-10">
                  <AvatarImage src={`/.jpg?height=40&width=40&query=${activity.user} avatar`} />
                  <AvatarFallback>
                    {activity.user
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">
                    <span className="font-semibold">{activity.user}</span>{" "}
                    <Badge variant="outline" className={actionColors[activity.action as keyof typeof actionColors]}>
                      {activity.action}
                    </Badge>{" "}
                    <span className="text-muted-foreground">{activity.task}</span>
                  </p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
