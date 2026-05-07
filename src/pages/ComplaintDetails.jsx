import { useState, useEffect } from 'react'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { useParams, useNavigate } from 'react-router-dom'

function ComplaintDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [complaint, setComplaint] = useState(null)
  const [loading, setLoading] = useState(true)
  const [updating, setUpdating] = useState(false)

  useEffect(() => {
    const fetchComplaint = async () => {
      try {
        const docRef = doc(db, 'complaints', id)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
          setComplaint({ id: docSnap.id, ...docSnap.data() })
        } else {
          alert('Complaint not found!')
          navigate('/')
        }
      } catch (error) {
        console.error(error)
      }
      setLoading(false)
    }
    fetchComplaint()
  }, [id])

  const handleStatusChange = async (newStatus) => {
    setUpdating(true)
    try {
      const complaintRef = doc(db, 'complaints', id)
      await updateDoc(complaintRef, { status: newStatus })
      setComplaint({ ...complaint, status: newStatus })
    } catch (error) {
      console.error(error)
    }
    setUpdating(false)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-gray-500">Loading complaint details...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-blue-600 text-white px-8 py-6">
        <h1 className="text-2xl font-bold">Barangay Complaint System</h1>
        <p className="text-sm text-blue-100">File and track complaints in your community</p>
      </div>

      <div className="max-w-2xl mx-auto py-10 px-4">
        <div className="bg-white rounded-lg shadow-sm p-8">

          {/* Back Button */}
          <button
            onClick={() => navigate('/')}
            className="text-blue-600 text-sm mb-6 hover:underline flex items-center gap-1"
          >
            ← Back to Dashboard
          </button>

          {/* Title & Status */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-xl font-bold">Complaint #{complaint.id.slice(0, 8)}</h2>
              <p className="text-gray-500 text-sm mt-1">Filed on {complaint.date}</p>
            </div>
            <span className={`text-xs rounded-full px-3 py-1 font-medium
              ${complaint.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' : ''}
              ${complaint.status === 'In Progress' ? 'bg-blue-100 text-blue-700' : ''}
              ${complaint.status === 'Resolved' ? 'bg-green-100 text-green-700' : ''}
            `}>
              {complaint.status}
            </span>
          </div>

          {/* Category */}
          <div className="mb-4">
            <p className="text-sm font-medium text-gray-500">Category</p>
            <p className="text-sm font-semibold mt-1">{complaint.category}</p>
          </div>

          {/* Complainant Info */}
          <div className="bg-gray-50 rounded-lg p-4 mb-4 space-y-2">
            <p className="text-sm font-medium text-gray-500 mb-2">Complainant Information</p>
            <p className="text-sm"> <span className="font-medium">{complaint.name}</span></p>
            <p className="text-sm"> <span className="font-medium">{complaint.phone}</span></p>
            <p className="text-sm"> <span className="font-medium">{complaint.address}</span></p>
          </div>

          {/* Description */}
          <div className="mb-6">
            <p className="text-sm font-medium text-gray-500 mb-2">Description</p>
            <p className="text-sm text-gray-700 leading-relaxed">{complaint.description}</p>
          </div>

          {/* Update Status */}
          <div className="border-t pt-4">
            <p className="text-sm font-medium text-gray-700 mb-2">Update Status</p>
            <div className="flex gap-2">
              {['Pending', 'In Progress', 'Resolved'].map(status => (
                <button
                  key={status}
                  onClick={() => handleStatusChange(status)}
                  disabled={updating || complaint.status === status}
                  className={`flex-1 rounded-lg px-3 py-2 text-sm font-medium border transition
                    ${complaint.status === status
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-gray-700 hover:bg-gray-50'}
                    disabled:opacity-50`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ComplaintDetails