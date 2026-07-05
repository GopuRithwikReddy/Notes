import jwt from "jsonwebtoken"
import authModel from "../models/user.model.js"
import AppError from "../utils/AppError.js"
import asyncHandler from "../utils/asyncHandler.js"

export const protect = asyncHandler(async (req, res, next) => {
    const token = req.cookies.token

    if (!token) {
        return next(new AppError("Unauthorized", 401))
    }

    let decoded

    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET)
    } catch (err) {
        return next(new AppError("Unauthorized", 401))
    }

    const user = await authModel.findById(decoded.userId)

    if (!user) {
        return next(new AppError("Unauthorized", 401))
    }

    req.user = user
    return next()
})