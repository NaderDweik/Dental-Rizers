// File: src/pages/NotFound.jsx
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '72px', margin: '0', color: '#6c757d' }}>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you're looking for doesn't exist.</p>
      <div style={{ marginTop: '20px' }}>
        <Link 
          to="/"
          style={{ 
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '4px'
          }}
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}

export default NotFound