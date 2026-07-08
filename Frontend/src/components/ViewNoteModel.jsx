import { useEffect } from "react";

const ViewNoteModel = ({ note, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl border border-zinc-800 bg-zinc-900 p-6"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-100">
            {note?.title}
          </h2>

          <button
            onClick={onClose}
            className="text-2xl text-zinc-400 transition-colors hover:text-red-500"
          >
            ✕
          </button>
        </div>

        <p className="mt-2 text-sm text-zinc-500">
          {new Date(note?.createdAt).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </p>

        <hr className="my-6 border-zinc-800" />

        <p className="whitespace-pre-wrap leading-7 text-zinc-300">
          {note?.description}
        </p>
      </div>
    </div>
  );
};

export default ViewNoteModel;