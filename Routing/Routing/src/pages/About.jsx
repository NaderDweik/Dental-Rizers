import { useState } from 'react'

const About = () => {
  const [hoveredCard, setHoveredCard] = useState(null)

  // Styles
  const containerStyle = {
    minHeight: '100vh',
    backgroundColor: '#f5f7fa',
    padding: '40px 20px'
  }

  const contentStyle = {
    maxWidth: '1200px',
    margin: '0 auto'
  }

  const heroSectionStyle = {
    textAlign: 'center',
    marginBottom: '60px'
  }

  const titleStyle = {
    fontSize: '48px',
    fontWeight: '700',
    color: '#2c3e50',
    marginBottom: '20px',
    letterSpacing: '-1px'
  }

  const subtitleStyle = {
    fontSize: '20px',
    color: '#7f8c8d',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.6'
  }

  const sectionStyle = {
    marginBottom: '60px'
  }

  const sectionTitleStyle = {
    fontSize: '36px',
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: '16px',
    textAlign: 'center'
  }

  const missionBoxStyle = {
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    textAlign: 'center',
    marginBottom: '60px'
  }

  const missionTextStyle = {
    fontSize: '18px',
    color: '#34495e',
    lineHeight: '1.8',
    maxWidth: '800px',
    margin: '0 auto'
  }

  const highlightStyle = {
    color: '#3498db',
    fontWeight: '600'
  }

  const teamGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '30px',
    marginTop: '40px'
  }

  const teamCardStyle = {
    backgroundColor: 'white',
    padding: '40px 30px',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    transition: 'all 0.3s ease',
    border: '2px solid transparent',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden'
  }

  const teamCardHoverStyle = {
    ...teamCardStyle,
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.12)',
    borderColor: '#3498db'
  }

  const iconContainerStyle = {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 20px',
    fontSize: '36px',
    transition: 'all 0.3s ease'
  }

  const adminIconStyle = {
    ...iconContainerStyle,
    backgroundColor: '#e8f4fd',
    color: '#3498db'
  }

  const doctorIconStyle = {
    ...iconContainerStyle,
    backgroundColor: '#e8f8f5',
    color: '#27ae60'
  }

  const designerIconStyle = {
    ...iconContainerStyle,
    backgroundColor: '#fef5e7',
    color: '#f39c12'
  }

  const teamTitleStyle = {
    fontSize: '24px',
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: '12px',
    textAlign: 'center'
  }

  const teamDescriptionStyle = {
    fontSize: '16px',
    color: '#7f8c8d',
    lineHeight: '1.6',
    textAlign: 'center'
  }

  const statsStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '30px',
    marginTop: '60px',
    marginBottom: '60px'
  }

  const statBoxStyle = {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    textAlign: 'center'
  }

  const statNumberStyle = {
    fontSize: '42px',
    fontWeight: '700',
    color: '#3498db',
    marginBottom: '8px'
  }

  const statLabelStyle = {
    fontSize: '16px',
    color: '#7f8c8d'
  }

  const decorativeLineStyle = {
    width: '80px',
    height: '4px',
    backgroundColor: '#3498db',
    margin: '0 auto 40px',
    borderRadius: '2px'
  }

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        {/* Hero Section */}
        <div style={heroSectionStyle}>
          <h1 style={titleStyle}>About Dental Rizers</h1>
          <p style={subtitleStyle}>
            Revolutionizing orthodontic care through innovation, expertise, and dedication to perfect smiles.
          </p>
        </div>

        {/* Mission Section */}
        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Our Mission</h2>
          <div style={decorativeLineStyle}></div>
          <div style={missionBoxStyle}>
            <p style={missionTextStyle}>
              Dental Rizers is committed to providing <span style={highlightStyle}>advanced dental aligner solutions</span> that 
              transform smiles and improve lives. We combine <span style={highlightStyle}>cutting-edge technology</span> with 
              expert care to deliver personalized treatment plans that ensure optimal results 
              for every patient. Our mission is to make beautiful, healthy smiles accessible 
              to everyone through innovative orthodontic solutions.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div style={statsStyle}>
          <div style={statBoxStyle}>
            <div style={statNumberStyle}>10k+</div>
            <div style={statLabelStyle}>Happy Patients</div>
          </div>
          <div style={statBoxStyle}>
            <div style={statNumberStyle}>50+</div>
            <div style={statLabelStyle}>Expert Doctors</div>
          </div>
          <div style={statBoxStyle}>
            <div style={statNumberStyle}>15+</div>
            <div style={statLabelStyle}>Years Experience</div>
          </div>
          <div style={statBoxStyle}>
            <div style={statNumberStyle}>98%</div>
            <div style={statLabelStyle}>Success Rate</div>
          </div>
        </div>

        {/* Team Section */}
        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Our Team</h2>
          <div style={decorativeLineStyle}></div>
          
          <div style={teamGridStyle}>
            <div 
              style={hoveredCard === 0 ? teamCardHoverStyle : teamCardStyle}
              onMouseEnter={() => setHoveredCard(0)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={hoveredCard === 0 ? {...adminIconStyle, transform: 'scale(1.1)'} : adminIconStyle}>
                👨‍💼
              </div>
              <h3 style={teamTitleStyle}>Administrators</h3>
              <p style={teamDescriptionStyle}>
                Our dedicated administrators manage system operations, user accounts, and oversee 
                the entire platform to ensure smooth and efficient service delivery for all stakeholders.
              </p>
            </div>

            <div 
              style={hoveredCard === 1 ? teamCardHoverStyle : teamCardStyle}
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={hoveredCard === 1 ? {...doctorIconStyle, transform: 'scale(1.1)'} : doctorIconStyle}>
                👨‍⚕️
              </div>
              <h3 style={teamTitleStyle}>Doctors</h3>
              <p style={teamDescriptionStyle}>
                Licensed dental professionals who review cases, approve treatments, and monitor 
                patient progress throughout their journey to a perfect smile.
              </p>
            </div>

            <div 
              style={hoveredCard === 2 ? teamCardHoverStyle : teamCardStyle}
              onMouseEnter={() => setHoveredCard(2)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={hoveredCard === 2 ? {...designerIconStyle, transform: 'scale(1.1)'} : designerIconStyle}>
                🎨
              </div>
              <h3 style={teamTitleStyle}>Designers</h3>
              <p style={teamDescriptionStyle}>
                Skilled technicians who create custom aligner designs using advanced 3D modeling 
                software to ensure precise and effective treatment outcomes.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Our Values</h2>
          <div style={decorativeLineStyle}></div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <div style={{
              textAlign: 'center',
              padding: '20px'
            }}>
              <div style={{
                fontSize: '48px',
                marginBottom: '16px'
              }}>🎯</div>
              <h4 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#2c3e50',
                marginBottom: '8px'
              }}>Precision</h4>
              <p style={{
                fontSize: '14px',
                color: '#7f8c8d',
                lineHeight: '1.5'
              }}>Every treatment is crafted with meticulous attention to detail</p>
            </div>

            <div style={{
              textAlign: 'center',
              padding: '20px'
            }}>
              <div style={{
                fontSize: '48px',
                marginBottom: '16px'
              }}>💡</div>
              <h4 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#2c3e50',
                marginBottom: '8px'
              }}>Innovation</h4>
              <p style={{
                fontSize: '14px',
                color: '#7f8c8d',
                lineHeight: '1.5'
              }}>Leveraging the latest technology for optimal results</p>
            </div>

            <div style={{
              textAlign: 'center',
              padding: '20px'
            }}>
              <div style={{
                fontSize: '48px',
                marginBottom: '16px'
              }}>❤️</div>
              <h4 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#2c3e50',
                marginBottom: '8px'
              }}>Care</h4>
              <p style={{
                fontSize: '14px',
                color: '#7f8c8d',
                lineHeight: '1.5'
              }}>Patient comfort and satisfaction is our top priority</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About