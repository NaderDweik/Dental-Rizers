import { useState } from 'react'

const Designs = () => {
  const [hoveredRow, setHoveredRow] = useState(null)
  const [hoveredButton, setHoveredButton] = useState(null)
  const [selectedFilter, setSelectedFilter] = useState('all')

  const mockDesigns = [
    { id: 1, patient: 'John Smith', status: 'In Progress', designer: 'Alex Designer', deadline: '2025-01-25', priority: 'high', progress: 65 },
    { id: 2, patient: 'Sarah Johnson', status: 'Completed', designer: 'Alex Designer', deadline: '2025-01-20', priority: 'medium', progress: 100 },
    { id: 3, patient: 'Mike Wilson', status: 'Pending Review', designer: 'Alex Designer', deadline: '2025-01-30', priority: 'medium', progress: 90 },
    { id: 4, patient: 'Emma Davis', status: 'In Progress', designer: 'Alex Designer', deadline: '2025-01-28', priority: 'low', progress: 30 },
    { id: 5, patient: 'Robert Brown', status: 'Not Started', designer: 'Alex Designer', deadline: '2025-02-05', priority: 'high', progress: 0 }
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
    marginBottom: '30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }

  const titleSectionStyle = {
    flex: 1
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

  const headerActionsStyle = {
    display: 'flex',
    gap: '12px'
  }
  const newDesignButtonStyle = {
    padding: '12px 24px',
    backgroundColor: '#3498DB', // A common, vibrant blue
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    boxShadow: '0 4px 8px rgba(52, 152, 219, 0.4)' // Blue shadow with some transparency
  }
  
  const newDesignButtonHoverStyle = {
    ...newDesignButtonStyle,
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 12px rgba(52, 152, 219, 0.6)' // Slightly larger, more intense blue shadow on hover
  }

  const statsContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
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
    gap: '16px'
  }

  const statIconStyle = {
    width: '50px',
    height: '50px',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px'
  }

  const statContentStyle = {
    flex: 1
  }

  const statValueStyle = {
    fontSize: '24px',
    fontWeight: '700',
    color: '#2c3e50',
    marginBottom: '4px'
  }

  const statLabelStyle = {
    fontSize: '13px',
    color: '#7f8c8d',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  }

  const filterContainerStyle = {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    marginBottom: '20px',
    display: 'flex',
    gap: '10px',
    alignItems: 'center'
  }

  const filterLabelStyle = {
    fontSize: '14px',
    fontWeight: '600',
    color: '#3498db',
    marginRight: '10px'
  }

  const filterButtonStyle = {
    padding: '8px 16px',
    border: '2px solid #e9ecef',
    backgroundColor: 'white',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    color: '#3498db'
  }

  const filterButtonActiveStyle = {
    ...filterButtonStyle,
    backgroundColor: '#3498db',
    borderColor: '#3498db',
    color: 'white'
  }

  const tableContainerStyle = {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '30px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    overflow: 'hidden'
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
    color: '#2c3e50',
    marginBottom: '4px'
  }

  const patientIdStyle = {
    fontSize: '12px',
    color: '#7f8c8d'
  }

  const getStatusStyle = (status) => {
    const baseStyle = {
      padding: '6px 14px',
      borderRadius: '20px',
      fontSize: '13px',
      fontWeight: '600',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px'
    }

    const statusStyles = {
      'In Progress': {
        backgroundColor: '#e8f4fd',
        color: '#3498db'
      },
      'Completed': {
        backgroundColor: '#e8f8f5',
        color: '#27ae60'
      },
      'Pending Review': {
        backgroundColor: '#fef5e7',
        color: '#f39c12'
      },
      'Not Started': {
        backgroundColor: '#f8f9fa',
        color: '#7f8c8d'
      }
    }

    return { ...baseStyle, ...statusStyles[status] }
  }

  const designerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  }

  const avatarStyle = {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    backgroundColor: '#3498db',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    fontWeight: '600'
  }

  const deadlineStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px'
  }

  const deadlineDateStyle = {
    fontWeight: '600',
    fontSize: '15px'
  }

  const daysLeftStyle = {
    fontSize: '12px',
    color: '#7f8c8d'
  }

  const priorityStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '6px'
  }

  const getPriorityColor = (priority) => {
    const colors = {
      high: '#e74c3c',
      medium: '#f39c12',
      low: '#27ae60'
    }
    return colors[priority] || colors.medium
  }

  const progressBarContainerStyle = {
    width: '120px'
  }

  const progressBarStyle = {
    width: '100%',
    height: '6px',
    backgroundColor: '#e9ecef',
    borderRadius: '3px',
    overflow: 'hidden',
    marginBottom: '4px'
  }

  const progressFillStyle = (progress) => ({
    height: '100%',
    backgroundColor: progress === 100 ? '#27ae60' : '#3498db',
    width: `${progress}%`,
    transition: 'width 0.6s ease'
  })

  const progressTextStyle = {
    fontSize: '12px',
    fontWeight: '600',
    color: '#7f8c8d'
  }

  const actionButtonStyle = {
    padding: '6px 14px',
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

  // Calculate days left
  const getDaysLeft = (deadline) => {
    const today = new Date()
    const deadlineDate = new Date(deadline)
    const diffTime = deadlineDate - today
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    
    if (diffDays < 0) return 'Overdue'
    if (diffDays === 0) return 'Due today'
    if (diffDays === 1) return '1 day left'
    return `${diffDays} days left`
  }

  // Filter designs
  const filteredDesigns = selectedFilter === 'all' 
    ? mockDesigns 
    : mockDesigns.filter(design => design.status.toLowerCase().includes(selectedFilter))

  // Calculate stats
  const inProgressCount = mockDesigns.filter(d => d.status === 'In Progress').length
  const completedCount = mockDesigns.filter(d => d.status === 'Completed').length
  const reviewCount = mockDesigns.filter(d => d.status === 'Pending Review').length

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        {/* Header */}
        <div style={headerStyle}>
          <div style={titleSectionStyle}>
            <h1 style={titleStyle}>Aligner Designs</h1>
            <p style={subtitleStyle}>Create and manage custom aligner designs for patients</p>
          </div>
          <div style={headerActionsStyle}>
            <button 
              style={hoveredButton === 'new' ? newDesignButtonHoverStyle : newDesignButtonStyle}
              onMouseEnter={() => setHoveredButton('new')}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <span>🎨</span> New Design
            </button>
          </div>
        </div>

        {/* Stats */}
        <div style={statsContainerStyle}>
          <div style={statCardStyle}>
            <div style={{
              ...statIconStyle,
              backgroundColor: '#e8f4fd',
              color: '#3498db'
            }}>
              🎯
            </div>
            <div style={statContentStyle}>
              <div style={statValueStyle}>{inProgressCount}</div>
              <div style={statLabelStyle}>In Progress</div>
            </div>
          </div>

          <div style={statCardStyle}>
            <div style={{
              ...statIconStyle,
              backgroundColor: '#fef5e7',
              color: '#f39c12'
            }}>
              👁️
            </div>
            <div style={statContentStyle}>
              <div style={statValueStyle}>{reviewCount}</div>
              <div style={statLabelStyle}>Pending Review</div>
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
              <div style={statValueStyle}>{completedCount}</div>
              <div style={statLabelStyle}>Completed</div>
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
              <div style={statValueStyle}>2</div>
              <div style={statLabelStyle}>Due This Week</div>
            </div>
          </div>
        </div>

        {/* Filter */}
        <div style={filterContainerStyle}>
          <span style={filterLabelStyle}>Filter by:</span>
          <button 
            style={selectedFilter === 'all' ? filterButtonActiveStyle : filterButtonStyle}
            onClick={() => setSelectedFilter('all')}
          >
            All Designs
          </button>
          <button 
            style={selectedFilter === 'progress' ? filterButtonActiveStyle : filterButtonStyle}
            onClick={() => setSelectedFilter('progress')}
          >
            In Progress
          </button>
          <button 
            style={selectedFilter === 'review' ? filterButtonActiveStyle : filterButtonStyle}
            onClick={() => setSelectedFilter('review')}
          >
            Pending Review
          </button>
          <button 
            style={selectedFilter === 'completed' ? filterButtonActiveStyle : filterButtonStyle}
            onClick={() => setSelectedFilter('completed')}
          >
            Completed
          </button>
        </div>

        {/* Table */}
        <div style={tableContainerStyle}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Patient</th>
                <th style={thStyle}>Status</th>
                <th style={thStyle}>Progress</th>
                <th style={thStyle}>Designer</th>
                <th style={thStyle}>Deadline</th>
                <th style={thStyle}>Priority</th>
                <th style={{ ...thStyle, textAlign: 'center' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredDesigns.map((design, index) => (
                <tr 
                  key={design.id}
                  style={hoveredRow === index ? rowHoverStyle : rowStyle}
                  onMouseEnter={() => setHoveredRow(index)}
                  onMouseLeave={() => setHoveredRow(null)}
                >
                  <td style={tdStyle}>
                    <div>
                      <div style={patientNameStyle}>{design.patient}</div>
                      <div style={patientIdStyle}>ID: #00{design.id}</div>
                    </div>
                  </td>
                  <td style={tdStyle}>
                    <span style={getStatusStyle(design.status)}>
                      {design.status === 'In Progress' && '🔄'}
                      {design.status === 'Completed' && '✓'}
                      {design.status === 'Pending Review' && '👁️'}
                      {design.status === 'Not Started' && '⏸️'}
                      {design.status}
                    </span>
                  </td>
                  <td style={tdStyle}>
                    <div style={progressBarContainerStyle}>
                      <div style={progressBarStyle}>
                        <div style={progressFillStyle(design.progress)}></div>
                      </div>
                      <div style={progressTextStyle}>{design.progress}%</div>
                    </div>
                  </td>
                  <td style={tdStyle}>
                    <div style={designerStyle}>
                      <div style={avatarStyle}>AD</div>
                      <span>{design.designer}</span>
                    </div>
                  </td>
                  <td style={tdStyle}>
                    <div style={deadlineStyle}>
                      <div style={deadlineDateStyle}>{design.deadline}</div>
                      <div style={daysLeftStyle}>{getDaysLeft(design.deadline)}</div>
                    </div>
                  </td>
                  <td style={tdStyle}>
                    <div style={priorityStyle}>
                      <span style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: getPriorityColor(design.priority)
                      }}></span>
                      <span style={{ textTransform: 'capitalize' }}>{design.priority}</span>
                    </div>
                  </td>
                  <td style={{ ...tdStyle, textAlign: 'center' }}>
                    <button 
                      style={hoveredButton === `view-${design.id}` ? viewButtonHoverStyle : viewButtonStyle}
                      onMouseEnter={() => setHoveredButton(`view-${design.id}`)}
                      onMouseLeave={() => setHoveredButton(null)}
                    >
                      View Design
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

export default Designs