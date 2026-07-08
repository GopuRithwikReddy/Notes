import { useEffect, useState } from "react";
import Navbar from "../components/Navbar"
import NoteCard from "../components/NoteCard"
import api from "../api/axios";
import NoteModel from "../components/NoteModel";
import ViewNoteModel from "../components/ViewNoteModel";
import DeleteModel from "../components/DeleteModel";
import toast from "react-hot-toast";

const Dashboard = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showModel, setShowModel] = useState(false);
  const [showDeleteModel, setShowDeleteModel] = useState(false);
  const [noteToDelete, setNoteToDelete] = useState(null);
  const [search, setSearch] = useState("");
  const handleAddNote = (newNote) => {
    setNotes((prev) => [newNote, ...prev]);
  };
  const handleUpdateNote = (updatedNote) => {
    setNotes((prev) =>
      prev.map((note) =>
        note._id === updatedNote._id ? updatedNote : note
      )
    );
  };
  const handleDeleteNote = (id) => {
    setNotes((prev) => prev.filter((note) => note._id !== id));
  };
  const [showViewModel, setShowViewModel] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const handleViewNote = (note) => {
    setSelectedNote(note);
    setShowViewModel(true);
  };
  const handleEditNote = (note) => {
    setSelectedNote(note);
    setIsEditing(true);
    setShowModel(true);
  };
  const handleOpenDelete = (note) => {
    setNoteToDelete(note);
    setShowDeleteModel(true);
  };
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase()) ||
    note.description.toLowerCase().includes(search.toLowerCase())
  );
  const handleConfirmDelete = async () => {
    try {
      await api.delete(`/notes/${noteToDelete._id}`);

      setNotes((prev) =>
        prev.filter((note) => note._id !== noteToDelete._id)
      );
      toast.success("Note deleted successfully!");
      setShowDeleteModel(false);
      setNoteToDelete(null);
    } catch (error) {
      toast.error(error.response?.data?.message ?? error.message);
    }
  };
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await api.get("/notes")
        setNotes(res.data.data);

      } catch (error) {
        setError(error.response?.data?.message ?? error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchApi()

  }, [])

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-zinc-950 text-zinc-100">
        {showModel && (
          <NoteModel
            onClose={() => {
              setShowModel(false);
              setIsEditing(false);
              setSelectedNote(null);
            }}
            onAddNote={handleAddNote}
            onUpdateNote={handleUpdateNote}
            note={selectedNote}
            isEditing={isEditing}
          />
        )}
        {showViewModel && (
          <ViewNoteModel
            note={selectedNote}
            onClose={() => setShowViewModel(false)}
          />
        )}
        {showDeleteModel && (
          <DeleteModel
            note={noteToDelete}
            onClose={() => {
              setShowDeleteModel(false);
              setNoteToDelete(null);
            }}
            onConfirm={handleConfirmDelete}
          />
        )}
        <section className="flex flex-col gap-4 px-8 py-6 md:flex-row md:items-center md:justify-between ">
          <div>
            {/* New Note Button */}
            <button
              onClick={() => setShowModel(true)}
              className="bg-violet-600 px-4 py-2 rounded-lg hover:bg-violet-700 transition-colors"
            >+ New Note
            </button>
          </div>
          <div className="relative ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search-icon lucide-search absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400"><path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" /></svg>

            <input
              type="text"
              placeholder="Search notes..."
              className="w-80 bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 pl-10 text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-600 transition-all duration-200"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </section>

        <section className="flex flex-wrap justify-center gap-6 px-8 pb-8 md:justify-start">
          {notes.length === 0 ? (
            <div className="w-full flex flex-col items-center justify-center py-20">
              <h2 className="text-2xl font-semibold text-zinc-200">
                No notes yet
              </h2>

              <p className="mt-2 text-zinc-500">
                Create your first note and start organizing your ideas.
              </p>
            </div>
          ) : filteredNotes.length === 0 ? (
            <div className="w-full flex flex-col items-center justify-center py-20">
              <h2 className="text-2xl font-semibold text-zinc-200">
                No matching notes
              </h2>

              <p className="mt-2 text-zinc-500">
                Try a different search term.
              </p>
            </div>
          ) : (
            filteredNotes.map((note) => (
              <NoteCard
                key={note._id}
                note={note}
                title={note.title}
                content={note.description}
                createdAt={note.createdAt}
                onView={handleViewNote}
                onEdit={handleEditNote}
                onDelete={handleOpenDelete}
              />
            ))
          )}
        </section>
      </main>
    </>
  )
}

export default Dashboard
