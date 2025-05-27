// File: src/components/PatientForm.jsx
import { useState } from 'react'

const PatientForm = ({ patient, onSave, onCancel }) => {
  const [name, setName] = useState(patient?.name || '')
  const [email, setEmail] = useState(patient?.email || '')
  const [phone, setPhone] = useState(patient?.phone || '')
  const [status, setStatus] = useState(patient?.status || 'Active')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name && email) {
      onSave({ name, email, phone, status })
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ 
      backgroundColor: '#f8f9fa', 
      padding: '20px', 
      borderRadius: '8px',
      marginBottom: '20px'
    }}>
      <h3>{patient ? 'Edit Patient' : 'Add New Patient'}</h3>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '15px' }}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ padding: '10px' }}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ padding: '10px' }}
        />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '15px' }}>
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={{ padding: '10px' }}
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          style={{ padding: '10px' }}
        >
          <option value="Active">Active</option>
          <option value="Complete">Complete</option>
          <option value="Pending">Pending</option>
        </select>
      </div>

      <div>
        <button 
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            marginRight: '10px'
          }}
        >
          {patient ? 'Update' : 'Add'} Patient
        </button>
        <button 
          type="button"
          onClick={onCancel}
          style={{
            padding: '10px 20px',
            backgroundColor: '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '4px'
          }}
        >
          Cancel
        </button>
      </div>
    </form>
  )
}

export default PatientForm