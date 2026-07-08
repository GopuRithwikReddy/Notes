import { useState } from 'react'
import useAuth from "../../hooks/useAuth"
import { Navigate, useNavigate, Link } from "react-router-dom"
import api from '../../api/axios'
import AuthLayout from '../../components/auth/AuthLayout'
import toast from "react-hot-toast";

const Register = () => {
  const { user, setUser } = useAuth()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  })
  const [error, setError] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const handleClick = () => {
    setShowPassword(prev => !prev)
  }
  const [loading, setLoading] = useState(false)


  if (user) {
    return <Navigate to="/" />
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await api.post("/auth/register", formData)
      setError("")
      setUser(res.data.data)
      navigate("/")
      toast.success("Account created successfully!");
    } catch (error) {
      setError(error.response?.data?.message ?? "Something went wrong")
    } finally {
      setLoading(false)
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
      <AuthLayout>
        <div className="text-center mb-4">
          <h2 className='text-2xl font-bold'>Join Notes</h2>
          <p className="text-zinc-400">Create an account to get started.</p>
        </div>
        <form
          className="flex flex-col gap-6"
          onSubmit={handleSubmit}
        >
          <div>
            <label
              htmlFor="name"
              className='text-sm font-medium block mb-2'
            >Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className='bg-zinc-700 px-4 w-full h-14 rounded-xl text-zinc-300 border border-zinc-700 focus:outline-2 outline-indigo-600 outline-offset-2'
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className='text-sm font-medium block mb-2'
            >Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder='Enter your email'
              required
              autoComplete="off"
              className='bg-zinc-700 px-4 w-full h-14 rounded-xl text-zinc-300 border border-zinc-700 focus:outline-2 outline-indigo-600 outline-offset-2'
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className='text-sm font-medium block mb-2'
            >Password:</label>
            <div className='relative'>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder='Enter your password'
                required
                className='bg-zinc-700 px-4 w-full h-14 rounded-xl text-zinc-300  border border-zinc-700 focus:outline-2 outline-indigo-600 outline-offset-2'
              />
              <button
                type='button'
                onClick={handleClick}
                className='absolute right-4 top-1/2 -translate-1/2 cursor-pointer'
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye-off-icon lucide-eye-off"><path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" /><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" /><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" /><path d="m2 2 20 20" /></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye-icon lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" /><circle cx="12" cy="12" r="3" /></svg>

                )}

              </button>
            </div>
          </div>

          {error && (
            <p className="text-red-500 text-sm mb-3">
              {error}
            </p>
          )}
          <button
            type="submit"
            disabled={loading}
            className='w-full h-14 rounded-xl bg-violet-600 font-medium transition-colors duration-200 hover:bg-violet-700  hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed'
          >
            {loading ? "Signing up...." : "Sign Up"}
          </button>

          <p className='text-center'>
            Already have an account?
            <Link
              to="/login"
              className='text-violet-600 ml-1 hover:text-violet-500'
            >Login</Link>
          </p>
        </form>
      </AuthLayout>
    </div>
  )
}

export default Register
