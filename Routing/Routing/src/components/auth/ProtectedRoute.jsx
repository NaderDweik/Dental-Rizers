// File: src/components/auth/ProtectedRoute.jsx
import { useSelector } from 'react-redux'

const ProtectedRoute = ({ children, requiredRole = null, requiredPermissions = [] }) => {
  const { isAuthenticated, user } = useSelector((state) => state.auth)

  // Gate 1: Check if logged in
  if (!isAuthenticated) {
    window.location.href = '/login'
    return <div>Redirecting to login...</div>
  }

  // Gate 2: Check role
  if (requiredRole && user.role !== requiredRole) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Access Denied</h2>
        <p>You need <strong>{requiredRole}</strong> role to access this page.</p>
        <p>Your role: <strong>{user.role}</strong></p>
        <button 
          onClick={() => window.location.href = '/dashboard'}
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            marginTop: '10px'
          }}
        >
          Go to Dashboard
        </button>
      </div>
    )
  }

  // Gate 3: Check permissions
  if (requiredPermissions.length > 0) {
    const hasPermissions = requiredPermissions.every(permission =>
      user.permissions?.includes(permission)
    )

    if (!hasPermissions) {
      return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h2>Insufficient Permissions</h2>
          <p>Required: <strong>{requiredPermissions.join(', ')}</strong></p>
          <p>Your permissions: <strong>{user.permissions?.join(', ')}</strong></p>
          <button 
            onClick={() => window.location.href = '/dashboard'}
            style={{
              padding: '10px 20px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              marginTop: '10px'
            }}
          >
            Go to Dashboard
          </button>
        </div>
      )
    }
  }

  // All checks passed - show the content
  return children
}

export default ProtectedRoute