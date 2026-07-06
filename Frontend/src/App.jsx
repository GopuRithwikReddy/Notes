import { Routes, Route } from 'react-router-dom'
import Dashboard from "./pages/Dashboard"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
    </>
  )
}

export default App
