import { useState, useEffect } from 'react'
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore'
import { db } from '../firebase'
import { useNavigate } from 'react-router-dom'
import { logger } from '../firebase'

function Dashboard() {
  const [complaints, setComplaints] = useState([])
  const [filter, setFilter] = useState('All Complaints')
  const navigate = useNavigate()

  const fetchComplaints = async () => {
    try {
      logger.info('Fetching complaints from Firestore')
      const querySnapshot = await getDocs(collection(db, 'complaints'))
      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      logger.info(`Fetched ${data.length} complaints`)
      setComplaints(data)
    } catch (error) {
      logger.error('Failed to fetch complaints', error)
    }
  }

  useEffect(() => {
    fetchComplaints()
  }, [])

  const handleStatusChange = async (id, newStatus) => {
    const complaintRef = doc(db, 'complaints', id)
    await updateDoc(complaintRef, { status: newStatus })
    fetchComplaints()
  }

  const filtered = filter === 'All Complaints'
    ? complaints
    : complaints.filter(c => c.status === filter)

  const total = complaints.length
  const pending = complaints.filter(c => c.status === 'Pending').length
  const inProgress = complaints.filter(c => c.status === 'In Progress').length
  const resolved = complaints.filter(c => c.status === 'Resolved').length

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-blue-600 text-white px-8 py-6 flex justify-between items-center">
  <div>
    <h1 className="text-2xl font-bold">Barangay Complaint System</h1>
    <p className="text-sm text-blue-100">File and track complaints in your community</p>
  </div>
  <button
    onClick={async () => {
      const { signOut } = await import('firebase/auth')
      const { auth } = await import('../firebase')
      await signOut(auth)
    }}
    className="bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-50"
  >
    Logout
  </button>
</div>

      <div className="px-8 py-6">
        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <p className="text-gray-500 text-sm">Total Complaints</p>
            <p className="text-2xl font-bold">{total}</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <p className="text-gray-500 text-sm">Pending</p>
            <p className="text-2xl font-bold text-yellow-500">{pending}</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <p className="text-gray-500 text-sm">In Progress</p>
            <p className="text-2xl font-bold text-blue-500">{inProgress}</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <p className="text-gray-500 text-sm">Resolved</p>
            <p className="text-2xl font-bold text-green-500">{resolved}</p>
          </div>
        </div>

        {/* Filter & Button */}
        <div className="flex justify-between items-center mb-6">
          <select
            className="border rounded px-3 py-2 text-sm"
            value={filter}
            onChange={e => setFilter(e.target.value)}
          >
            <option>All Complaints</option>
            <option>Pending</option>
            <option>In Progress</option>
            <option>Resolved</option>
          </select>
          <button
            onClick={() => navigate('/file-complaint')}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700"
          >
            + File New Complaint
          </button>
        </div>

        {/* Complaint Cards */}
        <div className="grid grid-cols-3 gap-4">
          {filtered.map(complaint => (
            <div key={complaint.id} className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex gap-2 mb-2">
                <span className="text-xs border rounded-full px-2 py-1">{complaint.category}</span>
                <span className={`text-xs rounded-full px-2 py-1 font-medium
                  ${complaint.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' : ''}
                  ${complaint.status === 'In Progress' ? 'bg-blue-100 text-blue-700' : ''}
                  ${complaint.status === 'Resolved' ? 'bg-green-100 text-green-700' : ''}
                `}>{complaint.status}</span>
              </div>
              <h3 className="font-bold mb-2">Complaint #{complaint.id.slice(0, 8)}</h3>
              <p className="text-sm text-gray-600"> {complaint.name}</p>
              <p className="text-sm text-gray-600"> {complaint.phone}</p>
              <p className="text-sm text-gray-600"> {complaint.address}</p>
              <p className="text-sm text-gray-600"> {complaint.date}</p>
              <p className="text-sm text-gray-500 mt-2 line-clamp-2">{complaint.description}</p>
              <div className="flex gap-2 mt-3">
                <button
                  onClick={() => navigate(`/complaint/${complaint.id}`)}
                  className="flex-1 border rounded px-3 py-1 text-sm hover:bg-gray-50"
                >
                  View Details
                </button>
                <select
                  className="border rounded px-2 py-1 text-sm"
                  value={complaint.status}
                  onChange={e => handleStatusChange(complaint.id, e.target.value)}
                >
                  <option>Pending</option>
                  <option>In Progress</option>
                  <option>Resolved</option>
                </select>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center text-gray-400 mt-10">No complaints found.</div>
        )}
      </div>
    </div>
  )
}

export default Dashboard