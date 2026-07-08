const DeleteModel = ({ note, onClose, onConfirm }) => {
    return (
        <div
            onClick={onClose}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-md rounded-xl border border-zinc-800 bg-zinc-900 p-6"
            >
                <h2 className="text-2xl font-bold text-zinc-100">
                    Delete Note
                </h2>

                <p className="mt-4 text-zinc-400">
                    Are you sure you want to delete
                    <span className="font-semibold text-zinc-200">
                        {" "}
                        "{note?.title}"
                    </span>
                    ?
                </p>

                <p className="mt-2 text-sm text-red-400">
                    This action cannot be undone.
                </p>

                <div className="mt-8 flex justify-end gap-3">
                    <button
                        onClick={onClose}
                        className="rounded-lg bg-zinc-800 px-5 py-2.5 text-zinc-100 hover:bg-zinc-700 transition-colors"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={onConfirm}
                        className="rounded-lg bg-red-600 px-5 py-2.5 font-medium text-white hover:bg-red-700 transition-colors"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteModel;