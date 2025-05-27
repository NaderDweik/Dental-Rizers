// File: src/components/auth/ProtectedRoute.jsx
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

const ProtectedRoute = ({ children, requiredRole = null, requiredPermissions = [] }) => {
  const { isAuthenticated, user } = useSelector((state) => state.auth)
  const location = useLocation()

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  if (requiredRole && user.role !== requiredRole) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Access Denied</h2>
        <p>Required role: {requiredRole}</p>
        <p>Your role: {user.role}</p>
      </div>
    )
  }

  if (requiredPermissions.length > 0) {
    const hasPermissions = requiredPermissions.every(permission =>
      user.permissions?.includes(permission)
    )

    if (!hasPermissions) {
      return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h2>Insufficient Permissions</h2>
          <p>Required: {requiredPermissions.join(', ')}</p>
          <p>Your permissions: {user.permissions?.join(', ')}</p>
        </div>
      )
    }
  }

  return children
}

export default ProtectedRoute