import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import FileComplaint from './pages/FileComplaint'
import ComplaintDetails from './pages/ComplaintDetails'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/file-complaint" element={<FileComplaint />} />
      <Route path="/complaint/:id" element={<ComplaintDetails />} />
    </Routes>
  )
}

export default App