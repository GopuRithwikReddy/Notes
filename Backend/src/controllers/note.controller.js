import noteModel from "../models/note.model.js"
import AppError from "../utils/AppError.js"
import asyncHandler from "../utils/asyncHandler.js"
import { createNoteSchema, updateNoteSchema } from "../validators/note.validator.js"

/**
 * Creates a new note in database
 */
export const createNote = asyncHandler(async (req, res) => {
    const { title, description } = req.body
    const note = await noteModel.create({
        title,
        description,
        user: req.user._id
    })

    return res.status(201).json({
        success: true,
        message: "Note created",
        data: note
    })
})


/**
 * Fetches all the notes
 */
export const getNotes = asyncHandler(async (req, res) => {
    const notes = await noteModel.find({
        user: req.user._id
    })
    return res.status(200).json({
        success: true,
        message: "Fetched notes",
        data: notes,
    })
})

/**
 * Fetches specific notes
 */
export const getSpecificNote = asyncHandler(async (req, res, next) => {
    const { id } = req.params
    const note = await noteModel.findOne({
        _id: id,
        user: req.user._id
    })
    if (!note) {
        return next(new AppError("Not found", 404))
    }

    return res.status(200).json({
        success: true,
        message: "Fetched a specific note",
        data: note
    })
})

/**
 * updates a specific notes 
 */
export const putNote = asyncHandler(async (req, res, next) => {
    const { id } = req.params
    const { title, description } = req.body
    if (Object.keys(req.body).length === 0) {
        return next(new AppError("At least one field is required", 400))
    }
    const updateData = {}

    if (title !== undefined) {
        updateData.title = title
    }

    if (description !== undefined) {
        updateData.description = description
    }

    const note = await noteModel.findOneAndUpdate(
        {
            _id: id,
            user: req.user._id
        },
        updateData,
        {
            new: true
        }
    )

    if (!note) {
        return next(new AppError("Not found", 404))
    }

    return res.status(200).json({
        success: true,
        message: "Updated the note",
        data: note
    })
})


/**
 * deletes a specific notes
 */
export const deleteNote = asyncHandler(async (req, res, next) => {
    const { id } = req.params
    const delnote = await noteModel.findOneAndDelete({
        _id: id,
        user: req.user._id
    })

    if (!delnote) {
        return next(new AppError("Not found", 404))
    }

    return res.status(200).json({
        success: true,
        message: "Deleted the note",
        data: delnote
    })
})
