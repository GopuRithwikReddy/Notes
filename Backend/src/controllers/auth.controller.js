import authModel from "../models/user.model.js"
import AppError from "../utils/AppError.js"
import asyncHandler from "../utils/asyncHandler.js"
import { sendToken } from "../utils/sendToken.js"
import Note from "../models/note.model.js";

/**
 * creates the new user
 */
export const register = asyncHandler(async (req, res, next) => {
    const { email } = req.body
    const existingEmail = await authModel.findOne({ email })
    if (existingEmail) {
        return next(new AppError("Email already exists", 409))
    }


    const user = await authModel.create(req.body);
    const { name, _id } = user
    sendToken(res, _id)

    return res.status(201).json({
        success: true,
        message: "User successfully registered",
        data: { name, email, _id }
    })
})


/**
 * Logins the user
 */
export const login = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body
    const user = await authModel.findOne({ email }).select("+password")
    if (!user) {
        return next(new AppError("Invalid email or password", 401))
    }
    const { name, _id } = user
    const isPasswordMatch = await user.comparePassword(password)
    if (!isPasswordMatch) {
        return next(new AppError("Invalid email or password", 401))
    }

    sendToken(res, _id)

    return res.status(200).json({
        success: true,
        message: "User logged in successfully",
        data: { _id, name, email }
    })
})


/**
 * Logs out the user
 */
export const logout = asyncHandler(async (req, res) => {
    res.clearCookie("token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production"
    })

    return res.status(200).json({
        success: true,
        message: "User logged out successfully"
    })
})

/**
 * Who is currently logged in
 */
export const me = asyncHandler(async (req, res) => {
    const { _id, name, email, createdAt } = req.user
    const totalNotes = await Note.countDocuments({
        user: req.user.id,
    });

    return res.status(200).json({
        success: true,
        message: "User Data",
        data: { _id, name, email, createdAt, totalNotes }
    })
})