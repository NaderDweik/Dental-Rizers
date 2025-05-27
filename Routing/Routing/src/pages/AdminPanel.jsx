import { useState } from 'react'
import { useSelector } from 'react-redux'

const AdminPanel = () => {
  const { user } = useSelector((state) => state.auth)
  const [hoveredCard, setHoveredCard] = useState(null)
  const [hoveredItem, setHoveredItem] = useState(null)

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
    padding: '40px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    marginBottom: '30px',
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
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    pointerEvents: 'none'
  }

  const headerContentStyle = {
    position: 'relative',
    zIndex: 1
  }

  const titleStyle = {
    fontSize: '42px',
    fontWeight: '800',
    marginBottom: '12px',
    letterSpacing: '-1px'
  }

  const subtitleStyle = {
    fontSize: '18px',
    opacity: '0.9',
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  }

  const adminBadgeStyle = {
    display: 'inline-block',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: '6px 16px',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  }

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '30px',
    marginBottom: '30px'
  }

  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '30px',
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
    gap: '20px',
    marginBottom: '24px'
  }

  const cardIconStyle = {
    width: '60px',
    height: '60px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '28px'
  }

  const cardTitleStyle = {
    fontSize: '24px',
    fontWeight: '700',
    color: '#2c3e50',
    margin: 0
  }

  const listStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0
  }

  const listItemStyle = {
    padding: '12px 16px',
    marginBottom: '8px',
    borderRadius: '8px',
    fontSize: '15px',
    color: '#34495e',
    backgroundColor: '#f8f9fa',
    transition: 'all 0.2s ease',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    borderLeft: '3px solid transparent'
  }

  const listItemHoverStyle = {
    ...listItemStyle,
    backgroundColor: '#e9ecef',
    transform: 'translateX(5px)',
    borderLeftColor: '#667eea'
  }

  const statsGridStyle = {
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
    textAlign: 'center'
  }

  const statValueStyle = {
    fontSize: '36px',
    fontWeight: '700',
    color: '#2c3e50',
    marginBottom: '8px'
  }

  const statLabelStyle = {
    fontSize: '14px',
    color: '#7f8c8d',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  }

  const quickActionStyle = {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '30px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    marginBottom: '30px'
  }

  const actionButtonStyle = {
    padding: '12px 24px',
    borderRadius: '8px',
    border: 'none',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    marginRight: '12px',
    marginBottom: '12px',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px'
  }

  const primaryButtonStyle = {
    ...actionButtonStyle,
    backgroundColor: '#667eea',
    color: 'white'
  }

  const primaryButtonHoverStyle = {
    ...primaryButtonStyle,
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 20px rgba(102, 126, 234, 0.4)'
  }

  const secondaryButtonStyle = {
    ...actionButtonStyle,
    backgroundColor: '#e9ecef',
    color: '#34495e'
  }

  const secondaryButtonHoverStyle = {
    ...secondaryButtonStyle,
    backgroundColor: '#dee2e6',
    transform: 'translateY(-2px)'
  }

  // Mock data
  const systemManagementItems = [
    { icon: '👥', text: 'User Account Management', count: '156 users' },
    { icon: '🔐', text: 'Role & Permission Settings', count: '12 roles' },
    { icon: '⚙️', text: 'System Configuration', count: 'Last updated 2h ago' },
    { icon: '💾', text: 'Database Maintenance', count: 'Healthy' }
  ]

  const reportsItems = [
    { icon: '📊', text: 'User Activity Reports', count: 'View reports' },
    { icon: '⚡', text: 'System Performance Metrics', count: '98.5% uptime' },
    { icon: '🔍', text: 'Security Audit Logs', count: '0 threats' },
    { icon: '📈', text: 'Business Intelligence Dashboard', count: 'Real-time' }
  ]

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        {/* Header */}
        <div style={headerStyle}>
          <div style={headerPatternStyle}></div>
          <div style={headerContentStyle}>
            <h1 style={titleStyle}>Admin Control Center</h1>
            <p style={subtitleStyle}>
              Welcome back, {user?.name}
              <span style={adminBadgeStyle}>⚡ Super Admin</span>
            </p>
          </div>
        </div>

        {/* Stats */}
        <div style={statsGridStyle}>
          <div style={statCardStyle}>
            <div style={statValueStyle}>156</div>
            <div style={statLabelStyle}>Total Users</div>
          </div>
          <div style={statCardStyle}>
            <div style={statValueStyle}>98.5%</div>
            <div style={statLabelStyle}>System Uptime</div>
          </div>
          <div style={statCardStyle}>
            <div style={statValueStyle}>2,847</div>
            <div style={statLabelStyle}>Active Sessions</div>
          </div>
          <div style={statCardStyle}>
            <div style={statValueStyle}>0</div>
            <div style={statLabelStyle}>Critical Issues</div>
          </div>
        </div>

        {/* Quick Actions */}
        <div style={quickActionStyle}>
          <h3 style={{ ...cardTitleStyle, marginBottom: '20px' }}>Quick Actions</h3>
          <div>
            <button 
              style={hoveredItem === 'backup' ? primaryButtonHoverStyle : primaryButtonStyle}
              onMouseEnter={() => setHoveredItem('backup')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              💾 Backup Database
            </button>
            <button 
              style={hoveredItem === 'users' ? secondaryButtonHoverStyle : secondaryButtonStyle}
              onMouseEnter={() => setHoveredItem('users')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              👥 Manage Users
            </button>
            <button 
              style={hoveredItem === 'security' ? secondaryButtonHoverStyle : secondaryButtonStyle}
              onMouseEnter={() => setHoveredItem('security')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              🔒 Security Settings
            </button>
            <button 
              style={hoveredItem === 'reports' ? secondaryButtonHoverStyle : secondaryButtonStyle}
              onMouseEnter={() => setHoveredItem('reports')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              📊 Generate Reports
            </button>
          </div>
        </div>

        {/* Main Grid */}
        <div style={gridStyle}>
          {/* System Management */}
          <div 
            style={hoveredCard === 0 ? cardHoverStyle : cardStyle}
            onMouseEnter={() => setHoveredCard(0)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div style={cardHeaderStyle}>
              <div style={{
                ...cardIconStyle,
                backgroundColor: '#fff3cd',
                color: '#856404'
              }}>
                🛠️
              </div>
              <h3 style={cardTitleStyle}>System Management</h3>
            </div>
            <ul style={listStyle}>
              {systemManagementItems.map((item, index) => (
                <li
                  key={index}
                  style={hoveredItem === `sys-${index}` ? listItemHoverStyle : listItemStyle}
                  onMouseEnter={() => setHoveredItem(`sys-${index}`)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <span style={{ fontSize: '20px' }}>{item.icon}</span>
                  <span style={{ flex: 1 }}>{item.text}</span>
                  <span style={{ fontSize: '13px', color: '#7f8c8d' }}>{item.count}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Reports & Analytics */}
          <div 
            style={hoveredCard === 1 ? cardHoverStyle : cardStyle}
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div style={cardHeaderStyle}>
              <div style={{
                ...cardIconStyle,
                backgroundColor: '#d1ecf1',
                color: '#004085'
              }}>
                📊
              </div>
              <h3 style={cardTitleStyle}>Reports & Analytics</h3>
            </div>
            <ul style={listStyle}>
              {reportsItems.map((item, index) => (
                <li
                  key={index}
                  style={hoveredItem === `rep-${index}` ? listItemHoverStyle : listItemStyle}
                  onMouseEnter={() => setHoveredItem(`rep-${index}`)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <span style={{ fontSize: '20px' }}>{item.icon}</span>
                  <span style={{ flex: 1 }}>{item.text}</span>
                  <span style={{ fontSize: '13px', color: '#7f8c8d' }}>{item.count}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Activity Feed */}
        <div style={cardStyle}>
          <h3 style={{ ...cardTitleStyle, marginBottom: '20px' }}>Recent Activity</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
              <span style={{ fontSize: '20px' }}>🟢</span>
              <span style={{ flex: 1, fontSize: '14px' }}>Database backup completed successfully</span>
              <span style={{ fontSize: '12px', color: '#7f8c8d' }}>2 min ago</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
              <span style={{ fontSize: '20px' }}>👤</span>
              <span style={{ flex: 1, fontSize: '14px' }}>New user registration: John Doe</span>
              <span style={{ fontSize: '12px', color: '#7f8c8d' }}>15 min ago</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
              <span style={{ fontSize: '20px' }}>🔄</span>
              <span style={{ flex: 1, fontSize: '14px' }}>System update installed</span>
              <span style={{ fontSize: '12px', color: '#7f8c8d' }}>1 hour ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminPanel