// File: src/App.jsx
import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from './store/authSlice.js'
import Navigation from './components/layout/Navigation.jsx'
import ProtectedRoute from './components/auth/ProtectedRoute.jsx'
import PublicOnlyRoute from './components/auth/PublicOnlyRoute.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import AdminPanel from './pages/AdminPanel.jsx'
import Patients from './pages/Patients.jsx'
import Treatments from './pages/Treatments.jsx'
import Designs from './pages/Designs.jsx'
import Profile from './pages/Profile.jsx'
import NotFound from './pages/NotFound.jsx'

function App() {
  const dispatch = useDispatch()

  // Helper function to check if JWT token is expired
  const isTokenExpired = (token) => {
    try {
      // JWT tokens have 3 parts separated by dots
      const tokenParts = token.split('.')
      if (tokenParts.length !== 3) return true
      
      // Decode the payload (middle part)
      const payload = JSON.parse(atob(tokenParts[1]))
      
      // Check expiration (exp is in seconds, Date.now() is in milliseconds)
      const currentTime = Date.now() / 1000
      return payload.exp < currentTime
    } catch (error) {
      console.error('Error checking token expiration:', error)
      return true // If we can't check, assume expired
    }
  }

  useEffect(() => {
    // Check if user is already logged in on app start
    const savedUser = localStorage.getItem('currentUser')
    if (savedUser) {
      try {
        const user = JSON.parse(savedUser)
        
        // Check if token exists and is valid
        if (user.token) {
          // Check if token is expired
          if (isTokenExpired(user.token)) {
            console.log('Token expired, logging out user')
            localStorage.removeItem('currentUser')
            // Don't set user - they need to login again
          } else {
            // Token is still valid
            console.log('Token is still valid, logging in user')
            dispatch(setUser({ user }))
          }
        } else {
          // Old format user without token, still valid for now
          dispatch(setUser({ user }))
        }
      } catch (error) {
        // If parsing fails, clear the bad data
        console.error('Error parsing saved user:', error)
        localStorage.removeItem('currentUser')
      }
    }
  }, [dispatch])

  return (
    <div>
      <Navigation />
      
      <main>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          
          {/* Public-only routes (redirect if authenticated) */}
          <Route path="/login" element={
            <PublicOnlyRoute>
              <Login />
            </PublicOnlyRoute>
          } />
          
          {/* Protected routes (require authentication) */}
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          
          <Route path="/profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
          
          <Route path="/patients" element={
            <ProtectedRoute requiredPermissions={['view_patients']}>
              <Patients />
            </ProtectedRoute>
          } />
          
          {/* Role-based protected routes */}
          <Route path="/admin" element={
            <ProtectedRoute requiredRole="admin">
              <AdminPanel />
            </ProtectedRoute>
          } />
          
          <Route path="/treatments" element={
            <ProtectedRoute requiredRole="doctor">
              <Treatments />
            </ProtectedRoute>
          } />
          
          <Route path="/designs" element={
            <ProtectedRoute requiredRole="designer">
              <Designs />
            </ProtectedRoute>
          } />
          
          {/* 404 route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}

export default App