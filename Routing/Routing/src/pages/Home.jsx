import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Home = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth)
  const [hoveredButton, setHoveredButton] = useState(false)
  const [hoveredFeature, setHoveredFeature] = useState(null)

  // Styles
  const containerStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    position: 'relative',
    overflow: 'hidden'
  }

  const backgroundPatternStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    pointerEvents: 'none'
  }

  const contentStyle = {
    position: 'relative',
    zIndex: 1,
    padding: '60px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh'
  }

  const heroSectionStyle = {
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto'
  }

  const titleStyle = {
    fontSize: '64px',
    fontWeight: '800',
    color: 'white',
    marginBottom: '20px',
    letterSpacing: '-2px',
    textShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    animation: 'fadeInUp 0.8s ease-out'
  }

  const subtitleStyle = {
    fontSize: '24px',
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: '40px',
    fontWeight: '300',
    letterSpacing: '1px',
    animation: 'fadeInUp 0.8s ease-out 0.2s backwards'
  }

  const userSectionStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    borderRadius: '20px',
    padding: '40px',
    marginTop: '40px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    animation: 'fadeInUp 0.8s ease-out 0.4s backwards'
  }

  const welcomeTextStyle = {
    fontSize: '32px',
    fontWeight: '600',
    color: 'white',
    marginBottom: '12px'
  }

  const roleStyle = {
    fontSize: '18px',
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px'
  }

  const roleBadgeStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: '6px 16px',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  }

  const buttonStyle = {
    padding: '16px 40px',
    fontSize: '18px',
    fontWeight: '600',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '50px',
    display: 'inline-block',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
    position: 'relative',
    overflow: 'hidden'
  }

  const dashboardButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#27ae60',
    background: 'linear-gradient(135deg, #27ae60 0%, #229954 100%)'
  }

  const loginButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#3498db',
    background: 'linear-gradient(135deg, #3498db 0%, #2980b9 100%)'
  }

  const buttonHoverStyle = {
    transform: 'translateY(-3px)',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)'
  }

  const featuresStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '30px',
    marginTop: '80px',
    maxWidth: '800px',
    width: '100%'
  }

  const featureCardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    borderRadius: '16px',
    padding: '30px',
    textAlign: 'center',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  }

  const featureCardHoverStyle = {
    ...featureCardStyle,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    transform: 'translateY(-5px)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
  }

  const featureIconStyle = {
    fontSize: '48px',
    marginBottom: '16px',
    display: 'block'
  }

  const featureTitleStyle = {
    fontSize: '18px',
    fontWeight: '600',
    color: 'white',
    marginBottom: '8px'
  }

  const featureDescStyle = {
    fontSize: '14px',
    color: 'rgba(255, 255, 255, 0.8)',
    lineHeight: '1.5'
  }

  const floatingShapeStyle = {
    position: 'absolute',
    borderRadius: '50%',
    background: 'rgba(255, 255, 255, 0.1)',
    animation: 'float 20s infinite ease-in-out'
  }

  const shape1Style = {
    ...floatingShapeStyle,
    width: '300px',
    height: '300px',
    top: '-150px',
    right: '-150px',
    animationDelay: '0s'
  }

  const shape2Style = {
    ...floatingShapeStyle,
    width: '200px',
    height: '200px',
    bottom: '-100px',
    left: '-100px',
    animationDelay: '5s'
  }

  const shape3Style = {
    ...floatingShapeStyle,
    width: '150px',
    height: '150px',
    top: '50%',
    left: '10%',
    animationDelay: '10s'
  }

  // Add keyframes animation
  const styleSheet = document.styleSheets[0] || document.head.appendChild(document.createElement('style')).sheet
  const animations = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    @keyframes float {
      0%, 100% {
        transform: translate(0, 0) rotate(0deg);
      }
      33% {
        transform: translate(30px, -30px) rotate(120deg);
      }
      66% {
        transform: translate(-20px, 20px) rotate(240deg);
      }
    }
  `
  
  // Check if animations are already added
  if (!document.getElementById('home-animations')) {
    const styleElement = document.createElement('style')
    styleElement.id = 'home-animations'
    styleElement.textContent = animations
    document.head.appendChild(styleElement)
  }

  return (
    <div style={containerStyle}>
      <div style={backgroundPatternStyle}></div>
      
      {/* Floating shapes */}
      <div style={shape1Style}></div>
      <div style={shape2Style}></div>
      <div style={shape3Style}></div>

      <div style={contentStyle}>
        <div style={heroSectionStyle}>
          <h1 style={titleStyle}>Welcome to Dental Rizers</h1>
          <p style={subtitleStyle}>Advanced Dental Aligner Solutions</p>
          
          {isAuthenticated ? (
            <div style={userSectionStyle}>
              <h2 style={welcomeTextStyle}>Hello, {user?.name}! 👋</h2>
              <div style={roleStyle}>
                <span>Role:</span>
                <span style={roleBadgeStyle}>{user?.role}</span>
              </div>
              <Link 
                to="/dashboard"
                style={{
                  ...dashboardButtonStyle,
                  ...(hoveredButton ? buttonHoverStyle : {})
                }}
                onMouseEnter={() => setHoveredButton(true)}
                onMouseLeave={() => setHoveredButton(false)}
              >
                Go to Dashboard →
              </Link>
            </div>
          ) : (
            <div style={userSectionStyle}>
              <h2 style={welcomeTextStyle}>Transform Your Smile Today</h2>
              <p style={{
                fontSize: '18px',
                color: 'rgba(255, 255, 255, 0.8)',
                marginBottom: '30px'
              }}>
                Please log in to access your personalized treatment dashboard
              </p>
              <Link 
                to="/login"
                style={{
                  ...loginButtonStyle,
                  ...(hoveredButton ? buttonHoverStyle : {})
                }}
                onMouseEnter={() => setHoveredButton(true)}
                onMouseLeave={() => setHoveredButton(false)}
              >
                Login to Your Account →
              </Link>
            </div>
          )}

          <div style={featuresStyle}>
            <div 
              style={hoveredFeature === 0 ? featureCardHoverStyle : featureCardStyle}
              onMouseEnter={() => setHoveredFeature(0)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <span style={featureIconStyle}>🦷</span>
              <h3 style={featureTitleStyle}>Custom Aligners</h3>
              <p style={featureDescStyle}>Personalized treatment plans designed for your unique smile</p>
            </div>

            <div 
              style={hoveredFeature === 1 ? featureCardHoverStyle : featureCardStyle}
              onMouseEnter={() => setHoveredFeature(1)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <span style={featureIconStyle}>🔬</span>
              <h3 style={featureTitleStyle}>Advanced Technology</h3>
              <p style={featureDescStyle}>3D modeling and precision manufacturing for perfect results</p>
            </div>

            <div 
              style={hoveredFeature === 2 ? featureCardHoverStyle : featureCardStyle}
              onMouseEnter={() => setHoveredFeature(2)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <span style={featureIconStyle}>👨‍⚕️</span>
              <h3 style={featureTitleStyle}>Expert Care</h3>
              <p style={featureDescStyle}>Licensed professionals monitoring your progress every step</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home