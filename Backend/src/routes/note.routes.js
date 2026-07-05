import express from "express"
import { createNote, deleteNote, getNotes, getSpecificNote, putNote } from "../controllers/note.controller.js"
import validate from "../middleware/validate.middleware.js"
import { createNoteSchema, updateNoteSchema } from "../validators/note.validator.js"
import { protect } from "../middleware/auth.middleware.js"

const router = express.Router()

/**
 * @route POST /api/notes
 * @description Create a new note
 */
router.post("/notes", protect, validate(createNoteSchema), protect ,createNote)

/**
 * @route GET /api/notes
 * @description Fetches all the notes
 */
router.get("/notes", protect ,getNotes)

/**
 * @route GET /api/notes/:id
 * @description Fetches specific notes
 */
router.get("/notes/:id", protect,getSpecificNote)

/**
 * @route PUT /api/notes/:id
 * @description updates a specific notes
 */
router.put("/notes/:id",protect, validate(updateNoteSchema) ,putNote)

/**
 * @route DELETE /api/notes/:id
 * @description deletes a specific notes
 */
router.delete("/notes/:id", protect, deleteNote)

export default router