import express from "express"
import noteRoutes from "./routes/note.routes.js"
import authRoutes from "./routes/auth.routes.js"
import { errorHandler } from "./middleware/error.middleware.js"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()

app.use(express.json())

app.use(
    cors({
        origin: [
            "http://localhost:5173",
            "https://notes-sigma-mocha.vercel.app",
        ],
        credentials: true,
    })
);

app.use(cookieParser())

app.use("/api", noteRoutes)
app.use("/api/auth", authRoutes)

app.use(errorHandler)

export default app