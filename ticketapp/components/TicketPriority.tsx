import { Priority } from "@prisma/client"
import { Flame } from "lucide-react"
import React from "react"

interface Props {
  priority: Priority
}

const PriorityMap: Record<Priority, { label: string; level: 1 | 2 | 3 }> = {
  HIGH: { label: "High", level: 3 },
  MEDIUM: { label: "Medium", level: 2 },
  LOW: { label: "Low", level: 1 },
}

const TicketPriority = ({ priority }: Props) => {
  return (
    <>
      <Flame className="text-red-500" />
      <Flame
        className={`${PriorityMap[priority].level >= 2 ? "text-red-500" : "text-muted"}`}
      />
      <Flame
        className={`${PriorityMap[priority].level >= 3 ? "text-red-500" : "text-muted"}`}
      />
    </>
  )
}

export default TicketPriority
