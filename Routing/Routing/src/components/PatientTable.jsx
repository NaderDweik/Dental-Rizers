import { useState } from 'react'

const PatientTable = ({ patients, user, onEdit, onDelete }) => {
  const [hoveredRow, setHoveredRow] = useState(null)
  const [hoveredButton, setHoveredButton] = useState(null)

  // Styles
  const tableStyle = {
    width: '100%',
    borderCollapse: 'separate',
    borderSpacing: 0,
    fontSize: '15px'
  }

  const theadStyle = {
    backgroundColor: '#f8f9fa'
  }

  const thStyle = {
    padding: '16px 20px',
    textAlign: 'left',
    fontWeight: '600',
    color: '#7f8c8d',
    fontSize: '14px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    borderBottom: '2px solid #e9ecef'
  }

  const tdStyle = {
    padding: '20px',
    borderBottom: '1px solid #e9ecef',
    color: '#2c3e50',
    transition: 'all 0.2s ease'
  }

  const rowStyle = {
    backgroundColor: 'white',
    transition: 'all 0.2s ease',
    cursor: 'pointer'
  }

  const rowHoverStyle = {
    ...rowStyle,
    backgroundColor: '#f8f9fa',
    transform: 'scale(1.01)',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
  }

  const nameStyle = {
    fontWeight: '600',
    color: '#2c3e50',
    fontSize: '16px'
  }

  const emailStyle = {
    color: '#3498db',
    textDecoration: 'none'
  }

  const phoneStyle = {
    fontFamily: 'monospace',
    color: '#7f8c8d'
  }

  const getStatusStyle = (status) => {
    const baseStyle = {
      padding: '6px 16px',
      borderRadius: '20px',
      fontSize: '13px',
      fontWeight: '600',
      display: 'inline-block',
      textTransform: 'uppercase',
      letterSpacing: '0.5px'
    }

    if (status === 'Active') {
      return {
        ...baseStyle,
        backgroundColor: '#e8f8f5',
        color: '#27ae60'
      }
    }
    if (status === 'Complete') {
      return {
        ...baseStyle,
        backgroundColor: '#e8f4fd',
        color: '#3498db'
      }
    }
    return {
      ...baseStyle,
      backgroundColor: '#fef5e7',
      color: '#f39c12'
    }
  }

  const actionButtonStyle = {
    padding: '8px 16px',
    marginRight: '8px',
    border: 'none',
    borderRadius: '6px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px'
  }

  const viewButtonStyle = {
    ...actionButtonStyle,
    backgroundColor: '#e8f4fd',
    color: '#3498db'
  }

  const viewButtonHoverStyle = {
    ...viewButtonStyle,
    backgroundColor: '#3498db',
    color: 'white',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(52, 152, 219, 0.3)'
  }

  const editButtonStyle = {
    ...actionButtonStyle,
    backgroundColor: '#e8f8f5',
    color: '#27ae60'
  }

  const editButtonHoverStyle = {
    ...editButtonStyle,
    backgroundColor: '#27ae60',
    color: 'white',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(39, 174, 96, 0.3)'
  }

  const deleteButtonStyle = {
    ...actionButtonStyle,
    backgroundColor: '#fee',
    color: '#e74c3c',
    marginRight: 0
  }

  const deleteButtonHoverStyle = {
    ...deleteButtonStyle,
    backgroundColor: '#e74c3c',
    color: 'white',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(231, 76, 60, 0.3)'
  }

  const emptyStateStyle = {
    textAlign: 'center',
    padding: '60px',
    color: '#7f8c8d'
  }

  const emptyIconStyle = {
    fontSize: '48px',
    marginBottom: '16px',
    opacity: '0.5'
  }

  if (patients.length === 0) {
    return (
      <div style={emptyStateStyle}>
        <div style={emptyIconStyle}>📋</div>
        <h3 style={{ color: '#7f8c8d', marginBottom: '8px' }}>No patients found</h3>
        <p>Add your first patient to get started</p>
      </div>
    )
  }

  return (
    <table style={tableStyle}>
      <thead style={theadStyle}>
        <tr>
          <th style={{ ...thStyle, width: '25%' }}>Patient Name</th>
          <th style={{ ...thStyle, width: '25%' }}>Email</th>
          <th style={{ ...thStyle, width: '20%' }}>Phone</th>
          <th style={{ ...thStyle, width: '15%' }}>Status</th>
          <th style={{ ...thStyle, width: '15%', textAlign: 'center' }}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {patients.map((patient, index) => (
          <tr 
            key={patient.id}
            style={hoveredRow === index ? rowHoverStyle : rowStyle}
            onMouseEnter={() => setHoveredRow(index)}
            onMouseLeave={() => setHoveredRow(null)}
          >
            <td style={tdStyle}>
              <div style={nameStyle}>{patient.name}</div>
            </td>
            <td style={tdStyle}>
              <a href={`mailto:${patient.email}`} style={emailStyle}>
                {patient.email}
              </a>
            </td>
            <td style={tdStyle}>
              <span style={phoneStyle}>{patient.phone}</span>
            </td>
            <td style={tdStyle}>
              <span style={getStatusStyle(patient.status)}>
                {patient.status === 'Active' && '● '}
                {patient.status === 'Complete' && '✓ '}
                {patient.status === 'Pending' && '◷ '}
                {patient.status}
              </span>
            </td>
            <td style={{ ...tdStyle, textAlign: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
                <button 
                  style={hoveredButton === `view-${patient.id}` ? viewButtonHoverStyle : viewButtonStyle}
                  onMouseEnter={() => setHoveredButton(`view-${patient.id}`)}
                  onMouseLeave={() => setHoveredButton(null)}
                >
                  👁️ View
                </button>
                
                {user?.permissions?.includes('edit_patients') && (
                  <>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation()
                        onEdit(patient)
                      }}
                      style={hoveredButton === `edit-${patient.id}` ? editButtonHoverStyle : editButtonStyle}
                      onMouseEnter={() => setHoveredButton(`edit-${patient.id}`)}
                      onMouseLeave={() => setHoveredButton(null)}
                    >
                      ✏️ Edit
                    </button>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation()
                        onDelete(patient.id)
                      }}
                      style={hoveredButton === `delete-${patient.id}` ? deleteButtonHoverStyle : deleteButtonStyle}
                      onMouseEnter={() => setHoveredButton(`delete-${patient.id}`)}
                      onMouseLeave={() => setHoveredButton(null)}
                    >
                      🗑️ Delete
                    </button>
                  </>
                )}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default PatientTable