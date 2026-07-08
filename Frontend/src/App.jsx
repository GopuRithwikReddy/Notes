import { Routes, Route } from 'react-router-dom'
import Dashboard from "./pages/Dashboard"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import ProtectedRoute from './components/ProtectedRoute'
import Profile from './pages/Profile'
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#18181b",
            color: "#fff",
            border: "1px solid #3f3f46",
          },
        }}
      />
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App
