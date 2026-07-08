import { useEffect, useState } from "react";
import api from "../api/axios";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [totalNotes, setTotalNotes] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await api.get("/auth/me");
        setUser(res.data.data);
        setTotalNotes(res.data.data.totalNotes);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-zinc-950 flex items-center justify-center text-zinc-100">
          Loading...
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-zinc-950 px-6 py-10 text-zinc-100">
        <div className="mx-auto max-w-2xl rounded-2xl border border-zinc-800 bg-zinc-900 p-8">

          {/* Back Button */}
          <button
            onClick={() => navigate("/")}
            className="mb-8 flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-violet-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>

            Back to Dashboard
          </button>

          {/* Avatar */}
          <div className="flex flex-col items-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-violet-600 text-4xl font-bold text-white">
              {user.name.charAt(0).toUpperCase()}
            </div>

            <h1 className="mt-4 text-3xl font-bold">
              {user.name}
            </h1>

            <p className="mt-1 text-zinc-400">
              {user.email}
            </p>
          </div>

          {/* Details */}
          <div className="mt-10 space-y-6">

            <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
              <span className="text-zinc-400">Name</span>
              <span>{user.name}</span>
            </div>

            <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
              <span className="text-zinc-400">Email</span>
              <span>{user.email}</span>
            </div>

            <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
              <span className="text-zinc-400">Joined</span>
              <span>
                {new Date(user.createdAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
              <span className="text-zinc-400">Total Notes</span>
              <span>{totalNotes}</span>
            </div>

          </div>

        </div>
      </main>
    </>
  );
};

export default Profile;