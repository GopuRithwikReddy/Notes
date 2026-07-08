import { useState, useEffect } from "react";
import api from "../api/axios"
import toast from "react-hot-toast";

const NoteModel = ({ onClose, onAddNote, onUpdateNote, note, isEditing }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    if (isEditing && note) {
      setFormData({
        title: note.title,
        description: note.description,
      });
    } else {
      setFormData({
        title: "",
        description: "",
      });
    }
  }, [isEditing, note]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      setError("")
      let res;

      if (isEditing) {
        res = await api.put(`/notes/${note._id}`, formData);

        onUpdateNote(res.data.data);
        toast.success("Note updated successfully!");
      } else {
        res = await api.post("/notes", formData);

        onAddNote(res.data.data);
        toast.success("Note created successfully!");
      }

      setFormData({
        title: "",
        description: "",
      });

      onClose();
    } catch (error) {
      const message =
        error.response?.data?.message ?? error.message;

      setError(message);
      toast.error(message);
    } finally {
      setLoading(false)
    }
  };
  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
      <div className="w-full max-w-lg rounded-xl bg-zinc-900 border border-zinc-800 p-6 max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-semibold mb-2">
          {isEditing ? "Update Note" : "Create Note"}
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Title */}
          <label className="block text-sm font-medium text-zinc-300 mt-6 mb-2">
            Title
          </label>
          <input
            type="text"
            placeholder="Enter note title"
            value={formData.title}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                title: e.target.value,
              }))
            }
            required
            className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-600"
          />

          {/* Description */}
          <label className="block text-sm font-medium text-zinc-300 mt-6 mb-2">
            Description
          </label>
          <textarea
            rows={6}
            placeholder="Write your note..."
            value={formData.description}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                description: e.target.value,
              }))
            }
            required
            className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 text-zinc-100 placeholder:text-zinc-500 resize-none focus:outline-none focus:ring-2 focus:ring-violet-600"
          />

          {error && (
            <p className="mt-4 text-sm text-red-500">
              {error}
            </p>
          )}

          {/* Buttons */}
          <div className='mt-6 flex justify-end gap-3'>
            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              className="rounded-lg bg-zinc-800 px-5 py-2.5 text-zinc-100 transition-colors hover:bg-zinc-700"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="rounded-lg bg-violet-600 px-5 py-2.5 font-medium text-white transition-colors hover:bg-violet-700"
            >
              {loading
                ? isEditing
                  ? "Updating..."
                  : "Creating..."
                : isEditing
                  ? "Update Note"
                  : "Create Note"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default NoteModel
