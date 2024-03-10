import { ticketSchema, TicketType } from "@/validationSchemas/ticket"
import prisma from "@/prisma/db"
import { NextRequest, NextResponse } from "next/server"
import { ZodFormattedError } from "zod"

// Define a more flexible type for error responses to accommodate various error structures
type ErrorResponse = {
  message: string
  details?: ZodFormattedError<TicketType>
}

// Adjust the success and error response types to be more generic and flexible
type ResponseType = NextResponse<TicketType | ErrorResponse>

export async function POST(request: NextRequest): Promise<ResponseType> {
  return request
    .json()
    .then((body) => {
      const validation = ticketSchema.safeParse(body)
      if (!validation.success) {
        // Return a generic error response that conforms to the ErrorResponse structure
        return NextResponse.json(
          { message: "Validation failed", details: validation.error.format() },
          { status: 400 }
        ) as ResponseType
      }

      return prisma.ticket
        .create({ data: { ...body } })
        .then(
          (NewTicket) =>
            NextResponse.json(NewTicket, { status: 201 }) as ResponseType
        )
    })
    .catch((error) => {
      console.error(error)
      // Handle unexpected errors by returning a generic error response
      return NextResponse.json(
        { message: "An error occurred while creating the ticket." },
        { status: 500 }
      ) as ResponseType
    })
}
