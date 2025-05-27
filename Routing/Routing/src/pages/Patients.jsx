import { useSelector } from 'react-redux'
import { useState } from 'react'
import PatientForm from '../components/PatientForm.jsx'
import PatientTable from '../components/PatientTable.jsx'

const Patients = () => {
  const { user } = useSelector((state) => state.auth)
  const [hoveredButton, setHoveredButton] = useState(false)

  // Simple patient data
  const [patients, setPatients] = useState([
    { id: 1, name: 'John Smith', email: 'john@email.com', phone: '555-0123', status: 'Active' },
    { id: 2, name: 'Jane Doe', email: 'jane@email.com', phone: '555-0124', status: 'Complete' },
    { id: 3, name: 'Bob Wilson', email: 'bob@email.com', phone: '555-0125', status: 'Pending' },
    { id: 4, name: 'Alice Brown', email: 'alice@email.com', phone: '555-0126', status: 'Active' },
    { id: 5, name: 'Mike Davis', email: 'mike@email.com', phone: '555-0127', status: 'Complete' }
  ])

  const [showForm, setShowForm] = useState(false)
  const [editingPatient, setEditingPatient] = useState(null)

  // Styles
  const containerStyle = {
    minHeight: '100vh',
    backgroundColor: '#f5f7fa',
    padding: '40px 20px'
  }

  const contentStyle = {
    maxWidth: '1400px',
    margin: '0 auto'
  }

  const headerStyle = {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '30px 40px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    marginBottom: '30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }

  const titleSectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }

  const titleStyle = {
    fontSize: '32px',
    fontWeight: '700',
    color: '#2c3e50',
    margin: 0,
    letterSpacing: '-1px'
  }

  const subtitleStyle = {
    fontSize: '16px',
    color: '#7f8c8d',
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  }

  const userBadgeStyle = {
    display: 'inline-block',
    backgroundColor: '#e8f4fd',
    color: '#3498db',
    padding: '4px 12px',
    borderRadius: '16px',
    fontSize: '14px',
    fontWeight: '600'
  }

  const addButtonStyle = {
    padding: '14px 28px',
    backgroundColor: '#27ae60',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    boxShadow: '0 4px 12px rgba(39, 174, 96, 0.2)'
  }

  const addButtonHoverStyle = {
    ...addButtonStyle,
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 20px rgba(39, 174, 96, 0.3)'
  }

  const tableContainerStyle = {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '30px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    marginBottom: '30px',
    overflow: 'hidden'
  }

  const statsStyle = {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '20px 30px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '30px',
  }

  const statItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '15px'
  }

  const statIconStyle = {
    width: '48px',
    height: '48px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px'
  }

  const statTextStyle = {
    display: 'flex',
    flexDirection: 'column'
  }

  const statValueStyle = {
    fontSize: '24px',
    fontWeight: '700',
    color: '#2c3e50'
  }

  const statLabelStyle = {
    fontSize: '14px',
    color: '#7f8c8d'
  }

  // Add new patient
  const handleAdd = (patientData) => {
    const newPatient = {
      id: Math.max(...patients.map(p => p.id)) + 1,
      ...patientData
    }
    setPatients([...patients, newPatient])
    setShowForm(false)
  }

  // Edit patient
  const handleEdit = (patient) => {
    setEditingPatient(patient)
    setShowForm(true)
  }

  // Update patient
  const handleUpdate = (patientData) => {
    setPatients(patients.map(p => 
      p.id === editingPatient.id ? { ...patientData, id: editingPatient.id } : p
    ))
    setShowForm(false)
    setEditingPatient(null)
  }

  // Delete patient
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this patient?')) {
      setPatients(patients.filter(p => p.id !== id))
    }
  }

  // Cancel form
  const handleCancel = () => {
    setShowForm(false)
    setEditingPatient(null)
  }

  // Calculate stats
  const activeCount = patients.filter(p => p.status === 'Active').length
  const completeCount = patients.filter(p => p.status === 'Complete').length
  const pendingCount = patients.filter(p => p.status === 'Pending').length

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        {/* Header */}
        <div style={headerStyle}>
          <div style={titleSectionStyle}>
            <h1 style={titleStyle}>Patient Management</h1>
            <p style={subtitleStyle}>
              Logged in as: <strong>{user?.name}</strong>
              <span style={userBadgeStyle}>{user?.role}</span>
            </p>
          </div>
          
          {user?.permissions?.includes('edit_patients') && !showForm && (
            <button 
              onClick={() => setShowForm(true)}
              style={hoveredButton ? addButtonHoverStyle : addButtonStyle}
              onMouseEnter={() => setHoveredButton(true)}
              onMouseLeave={() => setHoveredButton(false)}
            >
              <span style={{ fontSize: '20px' }}>+</span>
              Add New Patient
            </button>
          )}
        </div>



        {/* Stats Footer */}
        <div style={statsStyle}>
          <div style={statItemStyle}>
            <div style={{
              ...statIconStyle,
              backgroundColor: '#e8f4fd',
              color: '#3498db'
            }}>
              👥
            </div>
            <div style={statTextStyle}>
              <span style={statValueStyle}>{patients.length}</span>
              <span style={statLabelStyle}>Total Patients</span>
            </div>
          </div>

          <div style={statItemStyle}>
            <div style={{
              ...statIconStyle,
              backgroundColor: '#e8f8f5',
              color: '#27ae60'
            }}>
              ✅
            </div>
            <div style={statTextStyle}>
              <span style={statValueStyle}>{activeCount}</span>
              <span style={statLabelStyle}>Active</span>
            </div>
          </div>

          <div style={statItemStyle}>
            <div style={{
              ...statIconStyle,
              backgroundColor: '#e8f4fd',
              color: '#3498db'
            }}>
              🏁
            </div>
            <div style={statTextStyle}>
              <span style={statValueStyle}>{completeCount}</span>
              <span style={statLabelStyle}>Complete</span>
            </div>
          </div>

          <div style={statItemStyle}>
            <div style={{
              ...statIconStyle,
              backgroundColor: '#fef5e7',
              color: '#f39c12'
            }}>
              ⏳
            </div>
            <div style={statTextStyle}>
              <span style={statValueStyle}>{pendingCount}</span>
              <span style={statLabelStyle}>Pending</span>
            </div>
          </div>
        </div>


        {/* Form (Add or Edit) */}
        {showForm && (
          <div style={{ marginBottom: '30px' }}>
            <PatientForm
              patient={editingPatient}
              onSave={editingPatient ? handleUpdate : handleAdd}
              onCancel={handleCancel}
            />
          </div>
        )}

        {/* Table */}
        <div style={tableContainerStyle}>
          <PatientTable
            patients={patients}
            user={user}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>
        





     




      </div>
    </div>
  )
}

export default Patients