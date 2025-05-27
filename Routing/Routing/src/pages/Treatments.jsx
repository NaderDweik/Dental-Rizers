import { useState } from 'react'

const Treatments = () => {
  const [hoveredRow, setHoveredRow] = useState(null)
  const [hoveredButton, setHoveredButton] = useState(null)

  const mockTreatments = [
    { id: 1, patient: 'John Smith', type: 'Invisalign', progress: 60, nextStep: 'Adjustment', status: 'active' },
    { id: 2, patient: 'Sarah Johnson', type: 'Clear Aligners', progress: 100, nextStep: 'Complete', status: 'complete' },
    { id: 3, patient: 'Mike Wilson', type: 'Retainer', progress: 25, nextStep: 'Fitting', status: 'active' },
    { id: 4, patient: 'Emma Davis', type: 'Invisalign', progress: 85, nextStep: 'Final Check', status: 'active' },
    { id: 5, patient: 'Robert Brown', type: 'Clear Aligners', progress: 45, nextStep: 'Mid-treatment Review', status: 'active' },
  ]

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
    marginBottom: '30px'
  }

  const titleStyle = {
    fontSize: '32px',
    fontWeight: '700',
    color: '#2c3e50',
    marginBottom: '8px',
    letterSpacing: '-1px'
  }

  const subtitleStyle = {
    fontSize: '16px',
    color: '#7f8c8d',
    margin: 0
  }

  const statsContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    marginBottom: '30px'
  }

  const statCardStyle = {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '24px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    display: 'flex',
    alignItems: 'center',
    gap: '20px'
  }

  const statIconStyle = {
    width: '60px',
    height: '60px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '28px'
  }

  const statContentStyle = {
    flex: 1
  }

  const statValueStyle = {
    fontSize: '28px',
    fontWeight: '700',
    color: '#2c3e50',
    marginBottom: '4px'
  }

  const statLabelStyle = {
    fontSize: '14px',
    color: '#7f8c8d'
  }

  const tableContainerStyle = {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '30px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    overflow: 'hidden'
  }

  const tableTitleStyle = {
    fontSize: '20px',
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: '24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }

  const addButtonStyle = {
    padding: '10px 20px',
    backgroundColor: '#27ae60',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  }

  const addButtonHoverStyle = {
    ...addButtonStyle,
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(39, 174, 96, 0.3)'
  }

  const tableStyle = {
    width: '100%',
    borderCollapse: 'separate',
    borderSpacing: 0
  }

  const thStyle = {
    padding: '16px 20px',
    textAlign: 'left',
    fontWeight: '600',
    color: '#7f8c8d',
    fontSize: '14px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    borderBottom: '2px solid #e9ecef',
    backgroundColor: '#f8f9fa'
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

  const patientNameStyle = {
    fontWeight: '600',
    fontSize: '16px',
    color: '#2c3e50'
  }

  const treatmentTypeStyle = {
    display: 'inline-block',
    padding: '6px 12px',
    borderRadius: '6px',
    fontSize: '14px',
    fontWeight: '500'
  }

  const getTreatmentTypeStyle = (type) => {
    const colors = {
      'Invisalign': { bg: '#e8f4fd', color: '#3498db' },
      'Clear Aligners': { bg: '#e8f8f5', color: '#27ae60' },
      'Retainer': { bg: '#fef5e7', color: '#f39c12' }
    }
    const style = colors[type] || colors['Invisalign']
    return {
      ...treatmentTypeStyle,
      backgroundColor: style.bg,
      color: style.color
    }
  }

  const progressContainerStyle = {
    width: '100%',
    maxWidth: '150px'
  }

  const progressBarStyle = {
    width: '100%',
    height: '8px',
    backgroundColor: '#e9ecef',
    borderRadius: '4px',
    overflow: 'hidden',
    marginBottom: '4px'
  }

  const progressFillStyle = (progress) => ({
    height: '100%',
    backgroundColor: progress === 100 ? '#27ae60' : '#3498db',
    transition: 'width 0.6s ease',
    width: `${progress}%`
  })

  const progressTextStyle = {
    fontSize: '13px',
    fontWeight: '600',
    color: '#2c3e50'
  }

  const nextStepStyle = {
    display: 'inline-block',
    padding: '6px 12px',
    borderRadius: '6px',
    fontSize: '14px',
    fontWeight: '500'
  }

  const getNextStepStyle = (step) => {
    if (step === 'Complete') {
      return {
        ...nextStepStyle,
        backgroundColor: '#e8f8f5',
        color: '#27ae60'
      }
    }
    if (step === 'Final Check') {
      return {
        ...nextStepStyle,
        backgroundColor: '#fee',
        color: '#e74c3c'
      }
    }
    return {
      ...nextStepStyle,
      backgroundColor: '#f8f9fa',
      color: '#7f8c8d'
    }
  }

  const actionButtonStyle = {
    padding: '6px 12px',
    border: 'none',
    borderRadius: '6px',
    fontSize: '13px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    marginLeft: '8px'
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
    transform: 'translateY(-1px)',
    boxShadow: '0 2px 8px rgba(52, 152, 219, 0.3)'
  }

  // Calculate stats
  const activeCount = mockTreatments.filter(t => t.status === 'active').length
  const completeCount = mockTreatments.filter(t => t.status === 'complete').length
  const avgProgress = Math.round(mockTreatments.reduce((acc, t) => acc + t.progress, 0) / mockTreatments.length)

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        {/* Header */}
        <div style={headerStyle}>
          <h1 style={titleStyle}>Treatment Management</h1>
          <p style={subtitleStyle}>Monitor and manage patient treatments</p>
        </div>

        {/* Stats Cards */}
        <div style={statsContainerStyle}>
          <div style={statCardStyle}>
            <div style={{
              ...statIconStyle,
              backgroundColor: '#e8f4fd',
              color: '#3498db'
            }}>
              🏥
            </div>
            <div style={statContentStyle}>
              <div style={statValueStyle}>{activeCount}</div>
              <div style={statLabelStyle}>Active Treatments</div>
            </div>
          </div>

          <div style={statCardStyle}>
            <div style={{
              ...statIconStyle,
              backgroundColor: '#e8f8f5',
              color: '#27ae60'
            }}>
              ✅
            </div>
            <div style={statContentStyle}>
              <div style={statValueStyle}>{completeCount}</div>
              <div style={statLabelStyle}>Completed</div>
            </div>
          </div>

          <div style={statCardStyle}>
            <div style={{
              ...statIconStyle,
              backgroundColor: '#fef5e7',
              color: '#f39c12'
            }}>
              📊
            </div>
            <div style={statContentStyle}>
              <div style={statValueStyle}>{avgProgress}%</div>
              <div style={statLabelStyle}>Average Progress</div>
            </div>
          </div>

          <div style={statCardStyle}>
            <div style={{
              ...statIconStyle,
              backgroundColor: '#fee',
              color: '#e74c3c'
            }}>
              ⏰
            </div>
            <div style={statContentStyle}>
              <div style={statValueStyle}>3</div>
              <div style={statLabelStyle}>Due This Week</div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div style={tableContainerStyle}>
          <div style={tableTitleStyle}>
            <span>Current Treatments</span>
            <button 
              style={hoveredButton === 'add' ? addButtonHoverStyle : addButtonStyle}
              onMouseEnter={() => setHoveredButton('add')}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <span>+</span> New Treatment
            </button>
          </div>

          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Patient</th>
                <th style={thStyle}>Treatment Type</th>
                <th style={thStyle}>Progress</th>
                <th style={thStyle}>Next Step</th>
                <th style={{ ...thStyle, textAlign: 'center' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {mockTreatments.map((treatment, index) => (
                <tr 
                  key={treatment.id}
                  style={hoveredRow === index ? rowHoverStyle : rowStyle}
                  onMouseEnter={() => setHoveredRow(index)}
                  onMouseLeave={() => setHoveredRow(null)}
                >
                  <td style={tdStyle}>
                    <div style={patientNameStyle}>{treatment.patient}</div>
                  </td>
                  <td style={tdStyle}>
                    <span style={getTreatmentTypeStyle(treatment.type)}>
                      {treatment.type}
                    </span>
                  </td>
                  <td style={tdStyle}>
                    <div style={progressContainerStyle}>
                      <div style={progressBarStyle}>
                        <div style={progressFillStyle(treatment.progress)}></div>
                      </div>
                      <div style={progressTextStyle}>{treatment.progress}%</div>
                    </div>
                  </td>
                  <td style={tdStyle}>
                    <span style={getNextStepStyle(treatment.nextStep)}>
                      {treatment.nextStep}
                    </span>
                  </td>
                  <td style={{ ...tdStyle, textAlign: 'center' }}>
                    <button 
                      style={hoveredButton === `view-${treatment.id}` ? viewButtonHoverStyle : viewButtonStyle}
                      onMouseEnter={() => setHoveredButton(`view-${treatment.id}`)}
                      onMouseLeave={() => setHoveredButton(null)}
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Treatments