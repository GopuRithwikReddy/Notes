import express from "express"
import validate from "../middleware/validate.middleware.js"
import { registerSchema, loginSchema } from "../validators/auth.validator.js"
import { login, logout, me, register } from "../controllers/auth.controller.js"
import {protect} from "../middleware/auth.middleware.js"

const router = express.Router()

/**
 * @route POST /api/auth/register
 * @description Creates a new user
 */
router.post("/register", validate(registerSchema), register)

/**
 * @route POST /api/auth/login
 * @description logins the user
 */
router.post("/login", validate(loginSchema), login)

/**
 * @route POST /api/auth/logout
 * @description Logs out the user
 */
router.post("/logout", protect, logout)
/**
 * @route POST /api/auth/me
 * @description gets the user data
 */
router.get("/me", protect ,me)

export default router