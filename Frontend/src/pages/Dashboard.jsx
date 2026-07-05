import useAuth from "../hooks/useAuth"
import { useNavigate } from "react-router-dom"
import api from "../api/axios"

const Dashboard = () => {
  const { user, setUser } = useAuth()
  const navigate = useNavigate()
  const handleLogout = async () => {
    try {
        await api.post("/auth/logout")
        setUser(null)
        navigate("/login")
    } catch (error) {
        console.log(error)
    }
}
  return (
    <div>
      <h1>Welcome, {user?.name}</h1>

      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  )
}

export default Dashboard
