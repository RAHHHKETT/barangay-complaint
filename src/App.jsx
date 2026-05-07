import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import FileComplaint from './pages/FileComplaint'
import ComplaintDetails from './pages/ComplaintDetails'
import Login from './pages/Login'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/file-complaint" element={<FileComplaint />} />
      <Route path="/" element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      } />
      <Route path="/complaint/:id" element={
        <ProtectedRoute>
          <ComplaintDetails />
        </ProtectedRoute>
      } />
    </Routes>
  )
}

export default App