import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser, clearError } from '../store/authSlice.js'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { isLoading, error, isAuthenticated } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(clearError())
  }, [dispatch]) 

  // Simple redirect - when use becomes authenticated, redirect them
  useEffect(() => {
    if (isAuthenticated) {
      window.location.href = '/dashboard'
    }
  }, [isAuthenticated])

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(loginUser({ username, password }))
  }

  // Styles
  const containerStyle = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f7fa',
    padding: '20px'
  }

  const formContainerStyle = {
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    width: '100%',
    maxWidth: '420px'
  }

  const titleStyle = {
    fontSize: '28px',
    fontWeight: '700',
    color: '#2c3e50',
    marginBottom: '8px',
    textAlign: 'center'
  }

  const subtitleStyle = {
    fontSize: '14px',
    color: '#7f8c8d',
    marginBottom: '30px',
    textAlign: 'center'
  }

  const errorStyle = {
    backgroundColor: '#fee',
    color: '#c33',
    padding: '12px 16px',
    borderRadius: '8px',
    marginBottom: '20px',
    fontSize: '14px',
    borderLeft: '4px solid #c33'
  }

  const inputGroupStyle = {
    marginBottom: '20px'
  }

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#34495e'
  }

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '8px',
    border: '2px solid #e1e8ed',
    fontSize: '16px',
    transition: 'border-color 0.3s ease',
    boxSizing: 'border-box',
    outline: 'none'
  }

  const inputFocusStyle = {
    ...inputStyle,
    borderColor: '#3498db'
  }

  const buttonStyle = {
    width: '100%',
    padding: '14px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: isLoading ? '#95a5a6' : '#3498db',
    color: 'white',
    fontSize: '16px',
    fontWeight: '600',
    cursor: isLoading ? 'not-allowed' : 'pointer',
    transition: 'all 0.3s ease',
    marginTop: '10px'
  }

  const buttonHoverStyle = {
    ...buttonStyle,
    backgroundColor: '#2980b9',
    transform: 'translateY(-1px)',
    boxShadow: '0 4px 12px rgba(52, 152, 219, 0.3)'
  }

  const demoUsersContainerStyle = {
    marginTop: '40px',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    border: '1px solid #e9ecef'
  }

  const demoUsersTitleStyle = {
    fontSize: '16px',
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: '16px'
  }

  const userCardStyle = {
    backgroundColor: 'white',
    padding: '12px',
    borderRadius: '6px',
    marginBottom: '12px',
    border: '1px solid #e1e8ed',
    transition: 'all 0.2s ease'
  }

  const userCardHoverStyle = {
    ...userCardStyle,
    borderColor: '#3498db',
    boxShadow: '0 2px 8px rgba(52, 152, 219, 0.1)'
  }

  const userRoleStyle = {
    fontSize: '14px',
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: '4px'
  }

  const credentialStyle = {
    fontSize: '12px',
    color: '#7f8c8d',
    fontFamily: 'monospace',
    backgroundColor: '#f8f9fa',
    padding: '4px 8px',
    borderRadius: '4px',
    display: 'inline-block',
    marginTop: '4px'
  }

  const noteStyle = {
    fontSize: '12px',
    color: '#95a5a6',
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: '16px'
  }

  const [hoveredButton, setHoveredButton] = useState(false)
  const [focusedInput, setFocusedInput] = useState('')
  const [hoveredCard, setHoveredCard] = useState(null)

  return (
    <div style={containerStyle}>
      <div style={formContainerStyle}>
        <h2 style={titleStyle}> Dental Rizers Login</h2>
        <p style={subtitleStyle}>
          Welcome back! Please login to your account.
        </p>
        
        {error && (         
          <div style={errorStyle}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div style={inputGroupStyle}>
            <label style={labelStyle}>Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              style={focusedInput === 'username' ? inputFocusStyle : inputStyle}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onFocus={() => setFocusedInput('username')}
              onBlur={() => setFocusedInput('')}
              required
            />
          </div>
          
          <div style={inputGroupStyle}>
            <label style={labelStyle}>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              style={focusedInput === 'password' ? inputFocusStyle : inputStyle}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setFocusedInput('password')}
              onBlur={() => setFocusedInput('')}
              required
            />
          </div>
          
          <button 
            type="submit"
            style={hoveredButton && !isLoading ? buttonHoverStyle : buttonStyle}
            onMouseEnter={() => setHoveredButton(true)}
            onMouseLeave={() => setHoveredButton(false)}
            disabled={isLoading}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <div style={demoUsersContainerStyle}>
          <h4 style={demoUsersTitleStyle}>Demo Accounts</h4>
          
          <div 
            style={hoveredCard === 0 ? userCardHoverStyle : userCardStyle}
            onMouseEnter={() => setHoveredCard(0)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div style={userRoleStyle}>👨‍💼 Admin User (Emily)</div>
            <div>
              <span style={credentialStyle}>Username: emilys</span>
              {' '}
              <span style={credentialStyle}>Password: emilyspass</span>
            </div>
          </div>

          <div 
            style={hoveredCard === 1 ? userCardHoverStyle : userCardStyle}
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div style={userRoleStyle}>👨‍⚕️ Doctor User (Michael)</div>
            <div>
              <span style={credentialStyle}>Username: michaelw</span>
              {' '}
              <span style={credentialStyle}>Password: michaelwpass</span>
            </div>
          </div>

          <div 
            style={hoveredCard === 2 ? userCardHoverStyle : userCardStyle}
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div style={userRoleStyle}>🎨 Designer User (Sophia)</div>
            <div>
              <span style={credentialStyle}>Username: sophiab</span>
              {' '}
              <span style={credentialStyle}>Password: sophiabpass</span>
            </div>
          </div>

          <p style={noteStyle}>
            * These are real working credentials from DummyJSON API
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login