import { useState } from 'react'
import useAuth from "../../hooks/useAuth"
import { Navigate, useNavigate } from "react-router-dom"
import api from '../../api/axios'

const Register = () => {
  const { user, setUser } = useAuth()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  })
  const [error, setError] = useState("")

  if (user) {
    return <Navigate to="/" />
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await api.post("/auth/register", formData)
      setError("")
      setUser(res.data.data)
      navigate("/")
    } catch (error) {
      setError(error.response?.data?.message ?? "Something went wrong")
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder='Enter Email'
          required
        />

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder='Enter Password'
          required
        />

        {error && (
          <p className="text-red-500 text-sm mb-3">
            {error}
          </p>
        )}
        <button type="submit">Register</button>

      </form>
    </div>
  )
}

export default Register
