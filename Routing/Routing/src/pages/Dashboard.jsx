import { useState } from 'react'
import { useSelector } from 'react-redux'

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth)
  const [hoveredCard, setHoveredCard] = useState(null)

  // Common Styles
  const containerStyle = {
    minHeight: '100vh',
    backgroundColor: '#f5f7fa',
    padding: '40px 20px'
  }

  const headerStyle = {
    maxWidth: '1400px',
    margin: '0 auto 40px',
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '40px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    position: 'relative',
    overflow: 'hidden'
  }

  const headerPatternStyle = {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
    pointerEvents: 'none'
  }

  const headerContentStyle = {
    position: 'relative',
    zIndex: 1
  }

  const greetingStyle = {
    fontSize: '36px',
    fontWeight: '700',
    marginBottom: '8px',
    letterSpacing: '-1px'
  }

  const subGreetingStyle = {
    fontSize: '18px',
    opacity: '0.9',
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  }

  const roleBadgeStyle = {
    display: 'inline-block',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: '6px 16px',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  }

  const contentStyle = {
    maxWidth: '1400px',
    margin: '0 auto'
  }

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '30px'
  }

  const cardStyle = {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden'
  }

  const cardHoverStyle = {
    ...cardStyle,
    transform: 'translateY(-5px)',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.12)'
  }

  const cardHeaderStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '20px'
  }

  const cardTitleStyle = {
    fontSize: '20px',
    fontWeight: '600',
    color: '#2c3e50',
    margin: 0
  }

  const cardIconStyle = {
    width: '48px',
    height: '48px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px'
  }

  const metricStyle = {
    marginBottom: '12px'
  }

  const metricLabelStyle = {
    fontSize: '14px',
    color: '#7f8c8d',
    marginBottom: '4px'
  }

  const metricValueStyle = {
    fontSize: '28px',
    fontWeight: '700',
    color: '#2c3e50'
  }

  const metricSubValueStyle = {
    fontSize: '14px',
    color: '#7f8c8d',
    fontWeight: '400',
    marginLeft: '8px'
  }

  const progressBarStyle = {
    width: '100%',
    height: '8px',
    backgroundColor: '#e9ecef',
    borderRadius: '4px',
    overflow: 'hidden',
    marginTop: '8px'
  }

  const progressFillStyle = {
    height: '100%',
    transition: 'width 0.6s ease',
    borderRadius: '4px'
  }

  // Role-specific colors and icons
  const roleThemes = {
    admin: {
      primary: '#3498db',
      secondary: '#e8f4fd',
      icon: '⚙️'
    },
    doctor: {
      primary: '#27ae60',
      secondary: '#e8f8f5',
      icon: '👨‍⚕️'
    },
    designer: {
      primary: '#f39c12',
      secondary: '#fef5e7',
      icon: '🎨'
    }
  }

  const currentTheme = roleThemes[user?.role] || roleThemes.admin

  const getRoleSpecificContent = () => {
    switch (user?.role) {
      case 'admin':
        return (
          <div style={gridStyle}>
            <div 
              style={hoveredCard === 0 ? cardHoverStyle : cardStyle}
              onMouseEnter={() => setHoveredCard(0)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={cardHeaderStyle}>
                <h3 style={cardTitleStyle}>User Management</h3>
                <div style={{
                  ...cardIconStyle,
                  backgroundColor: currentTheme.secondary,
                  color: currentTheme.primary
                }}>
                  👥
                </div>
              </div>
              <div style={metricStyle}>
                <p style={metricLabelStyle}>Total Users</p>
                <p style={metricValueStyle}>
                  156
                  <span style={metricSubValueStyle}>+12 this week</span>
                </p>
              </div>
              <div style={metricStyle}>
                <p style={metricLabelStyle}>Active Sessions</p>
                <p style={metricValueStyle}>23</p>
                <div style={progressBarStyle}>
                  <div style={{
                    ...progressFillStyle,
                    width: '75%',
                    backgroundColor: currentTheme.primary
                  }}></div>
                </div>
              </div>
            </div>

            <div 
              style={hoveredCard === 1 ? cardHoverStyle : cardStyle}
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={cardHeaderStyle}>
                <h3 style={cardTitleStyle}>System Overview</h3>
                <div style={{
                  ...cardIconStyle,
                  backgroundColor: '#e8f8f5',
                  color: '#27ae60'
                }}>
                  🖥️
                </div>
              </div>
              <div style={metricStyle}>
                <p style={metricLabelStyle}>Server Status</p>
                <p style={{
                  ...metricValueStyle,
                  color: '#27ae60',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <span style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: '#27ae60',
                    display: 'inline-block'
                  }}></span>
                  Online
                </p>
              </div>
              <div style={metricStyle}>
                <p style={metricLabelStyle}>System Health</p>
                <p style={metricValueStyle}>98.5%</p>
                <div style={progressBarStyle}>
                  <div style={{
                    ...progressFillStyle,
                    width: '98.5%',
                    backgroundColor: '#27ae60'
                  }}></div>
                </div>
              </div>
            </div>

            <div 
              style={hoveredCard === 2 ? cardHoverStyle : cardStyle}
              onMouseEnter={() => setHoveredCard(2)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={cardHeaderStyle}>
                <h3 style={cardTitleStyle}>Reports</h3>
                <div style={{
                  ...cardIconStyle,
                  backgroundColor: '#fef5e7',
                  color: '#f39c12'
                }}>
                  📊
                </div>
              </div>
              <div style={metricStyle}>
                <p style={metricLabelStyle}>Daily Reports</p>
                <p style={metricValueStyle}>45</p>
              </div>
              <div style={metricStyle}>
                <p style={metricLabelStyle}>Pending Reviews</p>
                <p style={{
                  ...metricValueStyle,
                  color: '#e74c3c'
                }}>12</p>
              </div>
            </div>
          </div>
        )
      
      case 'doctor':
        return (
          <div style={gridStyle}>
            <div 
              style={hoveredCard === 0 ? cardHoverStyle : cardStyle}
              onMouseEnter={() => setHoveredCard(0)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={cardHeaderStyle}>
                <h3 style={cardTitleStyle}>My Patients</h3>
                <div style={{
                  ...cardIconStyle,
                  backgroundColor: currentTheme.secondary,
                  color: currentTheme.primary
                }}>
                  🏥
                </div>
              </div>
              <div style={metricStyle}>
                <p style={metricLabelStyle}>Active Cases</p>
                <p style={metricValueStyle}>
                  23
                  <span style={metricSubValueStyle}>across 3 clinics</span>
                </p>
              </div>
              <div style={metricStyle}>
                <p style={metricLabelStyle}>Pending Approvals</p>
                <p style={{
                  ...metricValueStyle,
                  color: '#e74c3c'
                }}>5</p>
              </div>
            </div>

            <div 
              style={hoveredCard === 1 ? cardHoverStyle : cardStyle}
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={cardHeaderStyle}>
                <h3 style={cardTitleStyle}>Treatments</h3>
                <div style={{
                  ...cardIconStyle,
                  backgroundColor: '#e8f4fd',
                  color: '#3498db'
                }}>
                  💊
                </div>
              </div>
              <div style={metricStyle}>
                <p style={metricLabelStyle}>In Progress</p>
                <p style={metricValueStyle}>18</p>
                <div style={progressBarStyle}>
                  <div style={{
                    ...progressFillStyle,
                    width: '72%',
                    backgroundColor: '#3498db'
                  }}></div>
                </div>
              </div>
              <div style={metricStyle}>
                <p style={metricLabelStyle}>Completed This Week</p>
                <p style={metricValueStyle}>7</p>
              </div>
            </div>

            <div 
              style={hoveredCard === 2 ? cardHoverStyle : cardStyle}
              onMouseEnter={() => setHoveredCard(2)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={cardHeaderStyle}>
                <h3 style={cardTitleStyle}>Schedule</h3>
                <div style={{
                  ...cardIconStyle,
                  backgroundColor: '#fee',
                  color: '#e74c3c'
                }}>
                  📅
                </div>
              </div>
              <div style={metricStyle}>
                <p style={metricLabelStyle}>Today's Appointments</p>
                <p style={metricValueStyle}>
                  8
                  <span style={metricSubValueStyle}>2 urgent</span>
                </p>
              </div>
              <div style={metricStyle}>
                <p style={metricLabelStyle}>This Week</p>
                <p style={metricValueStyle}>32</p>
              </div>
            </div>
          </div>
        )
      
      case 'designer':
        return (
          <div style={gridStyle}>
            <div 
              style={hoveredCard === 0 ? cardHoverStyle : cardStyle}
              onMouseEnter={() => setHoveredCard(0)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={cardHeaderStyle}>
                <h3 style={cardTitleStyle}>Active Designs</h3>
                <div style={{
                  ...cardIconStyle,
                  backgroundColor: currentTheme.secondary,
                  color: currentTheme.primary
                }}>
                  ✏️
                </div>
              </div>
              <div style={metricStyle}>
                <p style={metricLabelStyle}>In Progress</p>
                <p style={metricValueStyle}>
                  12
                  <span style={metricSubValueStyle}>4 high priority</span>
                </p>
              </div>
              <div style={metricStyle}>
                <p style={metricLabelStyle}>Awaiting Review</p>
                <p style={metricValueStyle}>6</p>
              </div>
            </div>

            <div 
              style={hoveredCard === 1 ? cardHoverStyle : cardStyle}
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={cardHeaderStyle}>
                <h3 style={cardTitleStyle}>Completed Work</h3>
                <div style={{
                  ...cardIconStyle,
                  backgroundColor: '#e8f8f5',
                  color: '#27ae60'
                }}>
                  ✅
                </div>
              </div>
              <div style={metricStyle}>
                <p style={metricLabelStyle}>This Week</p>
                <p style={metricValueStyle}>15</p>
              </div>
              <div style={metricStyle}>
                <p style={metricLabelStyle}>This Month</p>
                <p style={metricValueStyle}>
                  67
                  <span style={metricSubValueStyle}>+23% vs last month</span>
                </p>
              </div>
            </div>

            <div 
              style={hoveredCard === 2 ? cardHoverStyle : cardStyle}
              onMouseEnter={() => setHoveredCard(2)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={cardHeaderStyle}>
                <h3 style={cardTitleStyle}>Quality Metrics</h3>
                <div style={{
                  ...cardIconStyle,
                  backgroundColor: '#fef5e7',
                  color: '#f39c12'
                }}>
                  ⭐
                </div>
              </div>
              <div style={metricStyle}>
                <p style={metricLabelStyle}>Approval Rate</p>
                <p style={metricValueStyle}>94%</p>
                <div style={progressBarStyle}>
                  <div style={{
                    ...progressFillStyle,
                    width: '94%',
                    backgroundColor: '#f39c12'
                  }}></div>
                </div>
              </div>
              <div style={metricStyle}>
                <p style={metricLabelStyle}>Avg. Design Time</p>
                <p style={metricValueStyle}>3.2 hrs</p>
              </div>
            </div>
          </div>
        )
      
      default:
        return (
          <div style={{
            textAlign: 'center',
            padding: '60px',
            backgroundColor: 'white',
            borderRadius: '16px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
          }}>
            <p style={{ fontSize: '18px', color: '#7f8c8d' }}>Welcome to your dashboard</p>
          </div>
        )
    }
  }

  // Add current date/time
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <div style={headerPatternStyle}></div>
        <div style={headerContentStyle}>
          <h1 style={greetingStyle}>Welcome back, {user?.name}! 👋</h1>
          <div style={subGreetingStyle}>
            <span>{currentDate}</span>
            <span style={roleBadgeStyle}>
              {currentTheme.icon} {user?.role}
            </span>
          </div>
        </div>
      </div>
      
      <div style={contentStyle}>
        {getRoleSpecificContent()}
      </div>
    </div>
  )
}

export default Dashboard