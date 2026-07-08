import useAuth from "../hooks/useAuth"
import { useNavigate, Link } from "react-router-dom"
import api from "../api/axios"
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, setUser } = useAuth()
  const navigate = useNavigate()
  const handleLogout = async () => {
    try {
      await api.post("/auth/logout")
      setUser(null)
      navigate("/login")
      toast.success("Logged out successfully!");
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <nav className="bg-zinc-900 border-b border-zinc-800 text-zinc-100 px-8 py-4 flex justify-between items-center">
      <div>
        {/* Logo */}
        <h1 className='font-bold text-2xl flex items-center gap-3 justify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-notepad-text-icon lucide-notepad-text w-7 h-7"><path d="M8 2v4" /><path d="M12 2v4" /><path d="M16 2v4" /><rect width="16" height="18" x="4" y="4" rx="2" /><path d="M8 10h6" /><path d="M8 14h8" /><path d="M8 18h5" /></svg>
          Notes
        </h1>
      </div>

      <div>
        {/* User Name */}
        <p className="text-zinc-300">
          <Link
            to="/profile"
            className="hover:text-violet-400 transition-colors"
          >
            Hi, {user?.name}
          </Link>
        </p>
      </div>

      <div>
        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors"
        >
          Logout
        </button>
      </div>
    </nav>
  )
}

export default Navbar
