import AppError from "../utils/AppError.js"


export function errorHandler(err, req, res, next) {
    if (err.name === "CastError") {
        err = new AppError("Invalid note ID", 400)
    }
    return res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || "Server error"
    })
}