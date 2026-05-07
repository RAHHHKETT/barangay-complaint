import { describe, it, expect, vi } from 'vitest'

// Helper function to get status class
const getStatusClass = (status) => {
  if (status === 'Pending') return 'bg-yellow-100 text-yellow-700'
  if (status === 'In Progress') return 'bg-blue-100 text-blue-700'
  if (status === 'Resolved') return 'bg-green-100 text-green-700'
  return ''
}

// Helper function to validate complaint form
const validateComplaintForm = (form) => {
  if (!form.name || form.name.trim() === '') return false
  if (!form.phone || form.phone.trim() === '') return false
  if (!form.address || form.address.trim() === '') return false
  if (!form.description || form.description.trim() === '') return false
  return true
}

// Helper function to format complaint ID
const formatComplaintId = (id) => {
  return `Complaint #${id.slice(0, 8)}`
}

// Helper function to filter complaints
const filterComplaints = (complaints, filter) => {
  if (filter === 'All Complaints') return complaints
  return complaints.filter(c => c.status === filter)
}

// Helper function to get complaint stats
const getComplaintStats = (complaints) => {
  return {
    total: complaints.length,
    pending: complaints.filter(c => c.status === 'Pending').length,
    inProgress: complaints.filter(c => c.status === 'In Progress').length,
    resolved: complaints.filter(c => c.status === 'Resolved').length,
  }
}

//  Test 1: Status class returns correct value
describe('getStatusClass', () => {
  it('returns correct class for Pending', () => {
    expect(getStatusClass('Pending')).toBe('bg-yellow-100 text-yellow-700')
  })

  it('returns correct class for In Progress', () => {
    expect(getStatusClass('In Progress')).toBe('bg-blue-100 text-blue-700')
  })

  it('returns correct class for Resolved', () => {
    expect(getStatusClass('Resolved')).toBe('bg-green-100 text-green-700')
  })

  it('returns empty string for unknown status', () => {
    expect(getStatusClass('Unknown')).toBe('')
  })
})

//  Test 2: Form validation works correctly
describe('validateComplaintForm', () => {
  it('returns true when all fields are filled', () => {
    const form = {
      name: 'Maria Santos',
      phone: '09123456789',
      address: 'Blk 5 Lot 12',
      description: 'There is noise from construction'
    }
    expect(validateComplaintForm(form)).toBe(true)
  })

  it('returns false when name is empty', () => {
    const form = {
      name: '',
      phone: '09123456789',
      address: 'Blk 5 Lot 12',
      description: 'There is noise'
    }
    expect(validateComplaintForm(form)).toBe(false)
  })

  it('returns false when description is empty', () => {
    const form = {
      name: 'Maria Santos',
      phone: '09123456789',
      address: 'Blk 5 Lot 12',
      description: ''
    }
    expect(validateComplaintForm(form)).toBe(false)
  })
})

//  Test 3: Format complaint ID
describe('formatComplaintId', () => {
  it('formats complaint ID correctly', () => {
    expect(formatComplaintId('7e577080abcd1234')).toBe('Complaint #7e577080')
  })
})

//  Test 4: Filter complaints by status
describe('filterComplaints', () => {
  const complaints = [
    { id: '1', status: 'Pending' },
    { id: '2', status: 'In Progress' },
    { id: '3', status: 'Resolved' },
    { id: '4', status: 'Pending' },
  ]

  it('returns all complaints when filter is All Complaints', () => {
    expect(filterComplaints(complaints, 'All Complaints')).toHaveLength(4)
  })

  it('returns only Pending complaints', () => {
    expect(filterComplaints(complaints, 'Pending')).toHaveLength(2)
  })

  it('returns only Resolved complaints', () => {
    expect(filterComplaints(complaints, 'Resolved')).toHaveLength(1)
  })
})

//  Test 5: Get complaint stats
describe('getComplaintStats', () => {
  const complaints = [
    { id: '1', status: 'Pending' },
    { id: '2', status: 'In Progress' },
    { id: '3', status: 'Resolved' },
    { id: '4', status: 'Pending' },
  ]

  it('calculates total correctly', () => {
    expect(getComplaintStats(complaints).total).toBe(4)
  })

  it('calculates pending correctly', () => {
    expect(getComplaintStats(complaints).pending).toBe(2)
  })

  it('calculates inProgress correctly', () => {
    expect(getComplaintStats(complaints).inProgress).toBe(1)
  })

  it('calculates resolved correctly', () => {
    expect(getComplaintStats(complaints).resolved).toBe(1)
  })
})