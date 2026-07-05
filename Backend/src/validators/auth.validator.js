import { z } from "zod"

export const registerSchema = z.object({
    name: z.string().trim().min(3, "Name should be 3 characters"),
    email: z.string().trim().toLowerCase().email(),
    password: z.string().trim().min(8, "Password should be 8 characters")
})

export const loginSchema = z.object({
    email: z.string().trim().toLowerCase().email(),
    password: z.string().trim().min(8, "Password should be 8 characters")
})