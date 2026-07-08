import api from "../api/axios";

const NoteCard = ({ title, content, createdAt, note,
    onView, onEdit, onDelete }) => {
    const formattedDate = new Date(createdAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });
    const handleDelete = async () => {
        try {
            await api.delete(`/notes/${note._id}`);

            onDelete(note._id);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="w-80 min-h-64 bg-zinc-900 border border-zinc-800 rounded-xl p-5 flex flex-col transition-all duration-200 hover:border-violet-600 hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-950/30">
            <h2 className="text-2xl font-semibold mb-4">
                {/* Title */}
                {title}
            </h2>

            <p className="text-zinc-400 mt-3 line-clamp-4 whitespace-pre-wrap">
                {/* Content */}
                {content}
            </p>

            <div className="mt-auto pt-4 border-t border-zinc-800 flex items-center justify-between">
                <p className="text-xs text-zinc-500">
                    {formattedDate}
                </p>

                <div className="flex items-center gap-3">
                    {/* View Icon*/}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" onClick={() => onView(note)} className="lucide lucide-eye-icon lucide-eye w-5 h-5 text-zinc-400 cursor-pointer hover:text-sky-500 transition-colors"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" /><circle cx="12" cy="12" r="3" /></svg>

                    {/* Edit Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" onClick={() => onEdit(note)} className="lucide lucide-square-pen-icon lucide-square-pen w-5 h-5 text-zinc-400 cursor-pointer hover:text-emerald-500 transition-colors"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" /></svg>


                    {/* Delete Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" onClick={() => onDelete(note)} className="lucide lucide-trash2-icon lucide-trash-2 w-5 h-5 text-zinc-400 cursor-pointer hover:text-red-500 transition-colors"><path d="M10 11v6" /><path d="M14 11v6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" /><path d="M3 6h18" /><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
                </div>
            </div>
        </div>
    )
}

export default NoteCard
