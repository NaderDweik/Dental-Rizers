import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice.js'

const Navigation = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const location = useLocation()
  const [hoveredLink, setHoveredLink] = useState(null)
  const [hoveredButton, setHoveredButton] = useState(null)

  const handleLogout = () => {
    dispatch(logout())
  }

  // Styles
  const navStyle = {
    backgroundColor: 'white',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)',
    padding: '0 40px',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    borderBottom: '1px solid #e9ecef'
  }

  const navContainerStyle = {
    maxWidth: '1400px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '70px'
  }

  const logoStyle = {
    fontSize: '24px',
    fontWeight: '800',
    color: '#667eea',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    letterSpacing: '-0.5px'
  }

  const navLinksStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  }

  const linkStyle = {
    padding: '8px 16px',
    color: '#7f8c8d',
    textDecoration: 'none',
    borderRadius: '8px',
    fontSize: '15px',
    fontWeight: '500',
    transition: 'all 0.2s ease',
    position: 'relative'
  }

  const activeLinkStyle = {
    ...linkStyle,
    color: '#667eea',
    backgroundColor: '#f0f3ff'
  }

  const hoveredLinkStyle = {
    ...linkStyle,
    color: '#667eea',
    backgroundColor: '#f0f3ff',
    transform: 'translateY(-1px)'
  }

  const userSectionStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '20px'
  }

  const userInfoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginRight: '12px',
    padding: '8px 16px',
    backgroundColor: '#f8f9fa',
    borderRadius: '50px',
    border: '2px solid #e9ecef'
  }

  const userNameStyle = {
    fontSize: '14px',
    fontWeight: '600',
    color: '#2c3e50'
  }

  const roleBadgeStyle = {
    backgroundColor: '#667eea',
    color: 'white',
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  }

  const logoutButtonStyle = {
    padding: '10px 20px',
    backgroundColor: '#fee',
    color: '#e74c3c',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '6px'
  }

  const logoutButtonHoverStyle = {
    ...logoutButtonStyle,
    backgroundColor: '#e74c3c',
    color: 'white',
    transform: 'translateY(-1px)',
    boxShadow: '0 4px 12px rgba(231, 76, 60, 0.3)'
  }

  const loginButtonStyle = {
    padding: '12px 28px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '8px',
    fontSize: '15px',
    fontWeight: '600',
    transition: 'all 0.2s ease',
    display: 'inline-block',
    boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)'
  }

  const loginButtonHoverStyle = {
    ...loginButtonStyle,
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 20px rgba(102, 126, 234, 0.4)'
  }

  const separatorStyle = {
    width: '1px',
    height: '24px',
    backgroundColor: '#e9ecef',
    margin: '0 8px'
  }

  // Check if link is active
  const isActive = (path) => location.pathname === path

  // Get navigation items based on role
  const getNavItems = () => {
    const commonItems = [
      { path: '/about', label: 'About' }
    ]

    if (!isAuthenticated) return commonItems

    const authenticatedItems = [
      { path: '/dashboard', label: 'Dashboard' }
    ]

    const roleSpecificItems = {
      admin: [
        { path: '/admin', label: 'Admin Panel' },
        { path: '/patients', label: 'Patients' },
        { path: '/designs', label: 'Designs' }
      ],
      doctor: [
        { path: '/treatments', label: 'Treatments' },
        { path: '/patients', label: 'Patients' }
      ],
      designer: [
        { path: '/designs', label: 'Designs' }
      ]
    }

    const userRoleItems = roleSpecificItems[user?.role] || []

    return [
      ...commonItems,
      ...authenticatedItems,
      ...userRoleItems,
      { path: '/profile', label: 'Profile' }
    ]
  }

  return (
    <nav style={navStyle}>
      <div style={navContainerStyle}>
        <div style={navLinksStyle}>
          <Link 
            to="/" 
            style={logoStyle}
            onMouseEnter={() => setHoveredLink('logo')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <span style={{ fontSize: '28px' }}>🦷</span>
             Dental Rizers
          </Link>
          
          <div style={separatorStyle}></div>
          
          {getNavItems().map((item) => (
            <Link
              key={item.path}
              to={item.path}
              style={
                isActive(item.path) 
                  ? activeLinkStyle 
                  : hoveredLink === item.path 
                    ? hoveredLinkStyle 
                    : linkStyle
              }
              onMouseEnter={() => setHoveredLink(item.path)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div style={userSectionStyle}>
          {isAuthenticated ? (
            <>
              <div style={userInfoStyle}>
                <span style={userNameStyle}>👋 {user?.name}</span>
                <span style={roleBadgeStyle}>{user?.role}</span>
              </div>
              <button 
                onClick={handleLogout}
                style={hoveredButton === 'logout' ? logoutButtonHoverStyle : logoutButtonStyle}
                onMouseEnter={() => setHoveredButton('logout')}
                onMouseLeave={() => setHoveredButton(null)}
              >
                <span style={{ fontSize: '16px' }}>↪</span>
                Logout
              </button>
            </>
          ) : (
            <Link 
              to="/login" 
              style={hoveredButton === 'login' ? loginButtonHoverStyle : loginButtonStyle}
              onMouseEnter={() => setHoveredButton('login')}
              onMouseLeave={() => setHoveredButton(null)}
            >
              Login to Account
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navigation