// File: src/components/auth/PublicOnlyRoute.jsx
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PublicOnlyRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth)
  
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />
  }
  
  return children
}

export default PublicOnlyRoute