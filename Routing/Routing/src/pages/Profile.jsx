import { useState } from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
  const { user } = useSelector((state) => state.auth)
  const [hoveredPermission, setHoveredPermission] = useState(null)

  // Styles
  const containerStyle = {
    minHeight: '100vh',
    backgroundColor: '#f5f7fa',
    padding: '40px 20px'
  }

  const contentStyle = {
    maxWidth: '800px',
    margin: '0 auto'
  }

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '40px'
  }

  const titleStyle = {
    fontSize: '36px',
    fontWeight: '700',
    color: '#2c3e50',
    marginBottom: '8px',
    letterSpacing: '-1px'
  }

  const subtitleStyle = {
    fontSize: '16px',
    color: '#7f8c8d'
  }

  const profileCardStyle = {
    backgroundColor: 'white',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    overflow: 'hidden',
    marginBottom: '30px'
  }

  const profileHeaderStyle = {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '40px',
    textAlign: 'center',
    position: 'relative'
  }

  const avatarStyle = {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)',
    border: '4px solid rgba(255, 255, 255, 0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '48px',
    margin: '0 auto 20px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
  }

  const userNameStyle = {
    fontSize: '28px',
    fontWeight: '700',
    color: 'white',
    marginBottom: '8px'
  }

  const userRoleStyle = {
    display: 'inline-block',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: '8px 20px',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: '600',
    color: 'white',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  }

  const infoSectionStyle = {
    padding: '40px'
  }

  const sectionTitleStyle = {
    fontSize: '20px',
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: '24px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  }

  const infoGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    marginBottom: '40px'
  }

  const infoItemStyle = {
    backgroundColor: '#f8f9fa',
    padding: '20px',
    borderRadius: '12px',
    border: '1px solid #e9ecef',
    transition: 'all 0.2s ease'
  }

  const infoItemHoverStyle = {
    ...infoItemStyle,
    borderColor: '#667eea',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(102, 126, 234, 0.1)'
  }

  const infoLabelStyle = {
    fontSize: '13px',
    color: '#7f8c8d',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginBottom: '8px',
    fontWeight: '600'
  }

  const infoValueStyle = {
    fontSize: '18px',
    color: '#2c3e50',
    fontWeight: '600'
  }

  const permissionsContainerStyle = {
    backgroundColor: 'white',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    padding: '30px'
  }

  const permissionsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '12px'
  }

  const permissionBadgeStyle = {
    backgroundColor: '#e8f4fd',
    color: '#3498db',
    padding: '10px 16px',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '500',
    textAlign: 'center',
    transition: 'all 0.2s ease',
    cursor: 'pointer',
    border: '2px solid transparent'
  }

  const permissionBadgeHoverStyle = {
    ...permissionBadgeStyle,
    backgroundColor: '#3498db',
    color: 'white',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(52, 152, 219, 0.3)'
  }

  const statsCardStyle = {
    backgroundColor: 'white',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    padding: '30px',
    marginBottom: '30px'
  }

  const statsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '30px',
    textAlign: 'center'
  }

  const statItemStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }

  const statIconStyle = {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '28px',
    marginBottom: '12px'
  }

  const statValueStyle = {
    fontSize: '24px',
    fontWeight: '700',
    color: '#2c3e50',
    marginBottom: '4px'
  }

  const statLabelStyle = {
    fontSize: '14px',
    color: '#7f8c8d'
  }

  // Get first letter of name for avatar
  const avatarLetter = user?.name?.charAt(0).toUpperCase() || '?'

  // Role-based colors
  const roleColors = {
    admin: { bg: '#e8f4fd', color: '#3498db' },
    doctor: { bg: '#e8f8f5', color: '#27ae60' },
    designer: { bg: '#fef5e7', color: '#f39c12' }
  }

  const currentRoleColor = roleColors[user?.role] || roleColors.admin

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <div style={headerStyle}>
          <h1 style={titleStyle}>My Profile</h1>
          <p style={subtitleStyle}>Manage your account information and preferences</p>
        </div>

        {/* Profile Card */}
        <div style={profileCardStyle}>
          <div style={profileHeaderStyle}>
            <div style={avatarStyle}>{avatarLetter}</div>
            <h2 style={userNameStyle}>{user?.name}</h2>
            <span style={userRoleStyle}>{user?.role}</span>
          </div>

          <div style={infoSectionStyle}>
            <h3 style={sectionTitleStyle}>
              <span style={{ fontSize: '24px' }}>📋</span>
              Personal Information
            </h3>
            
            <div style={infoGridStyle}>
              <div style={infoItemStyle}>
                <p style={infoLabelStyle}>Full Name</p>
                <p style={infoValueStyle}>{user?.name}</p>
              </div>
              
              <div style={infoItemStyle}>
                <p style={infoLabelStyle}>Username</p>
                <p style={infoValueStyle}>@{user?.username}</p>
              </div>
              
              <div style={infoItemStyle}>
                <p style={infoLabelStyle}>User ID</p>
                <p style={{ ...infoValueStyle, fontFamily: 'monospace' }}>#{user?.id}</p>
              </div>
              
              <div style={infoItemStyle}>
                <p style={infoLabelStyle}>Account Type</p>
                <p style={infoValueStyle}>{user?.role}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Card */}
        <div style={statsCardStyle}>
          <h3 style={{ ...sectionTitleStyle, marginBottom: '30px' }}>
            <span style={{ fontSize: '24px' }}>📊</span>
            Account Statistics
          </h3>
          
          <div style={statsGridStyle}>
            <div style={statItemStyle}>
              <div style={{
                ...statIconStyle,
                backgroundColor: currentRoleColor.bg,
                color: currentRoleColor.color
              }}>
                🔐
              </div>
              <span style={statValueStyle}>{user?.permissions?.length || 0}</span>
              <span style={statLabelStyle}>Permissions</span>
            </div>
            
            <div style={statItemStyle}>
              <div style={{
                ...statIconStyle,
                backgroundColor: '#e8f8f5',
                color: '#27ae60'
              }}>
                ✅
              </div>
              <span style={statValueStyle}>Active</span>
              <span style={statLabelStyle}>Status</span>
            </div>
            
            <div style={statItemStyle}>
              <div style={{
                ...statIconStyle,
                backgroundColor: '#fef5e7',
                color: '#f39c12'
              }}>
                ⭐
              </div>
              <span style={statValueStyle}>Pro</span>
              <span style={statLabelStyle}>Tier</span>
            </div>
          </div>
        </div>

        {/* Permissions */}
        <div style={permissionsContainerStyle}>
          <h3 style={sectionTitleStyle}>
            <span style={{ fontSize: '24px' }}>🔑</span>
            Access Permissions
          </h3>
          
          {user?.permissions?.length > 0 ? (
            <div style={permissionsGridStyle}>
              {user.permissions.map((permission, index) => (
                <div
                  key={index}
                  style={hoveredPermission === index ? permissionBadgeHoverStyle : permissionBadgeStyle}
                  onMouseEnter={() => setHoveredPermission(index)}
                  onMouseLeave={() => setHoveredPermission(null)}
                >
                  {permission.replace(/_/g, ' ').toLowerCase().replace(/\b\w/g, l => l.toUpperCase())}
                </div>
              ))}
            </div>
          ) : (
            <p style={{ color: '#7f8c8d', textAlign: 'center', padding: '20px' }}>
              No special permissions assigned
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Profile