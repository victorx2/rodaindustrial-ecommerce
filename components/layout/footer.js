/**
 * Footer Component
 * 
 * Propósito: Pie de página completo con información de la empresa
 * Funcionalidad:
 * - Enlaces organizados por categorías
 * - Información de contacto
 * - Redes sociales
 * - Certificaciones
 * - Copyright
 * 
 * Uso: Importar en Layout.js como <Footer />
 * Props: data (footerData)
 */

export default function Footer({ data }) {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* Contenido principal del footer */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          
          {/* Información de la empresa */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '1rem'
            }}>
              <div style={{
                width: '2.5rem',
                height: '2.5rem',
                backgroundColor: '#2563eb',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '0.75rem'
              }}>
                <span style={{ color: 'white', fontWeight: 'bold', fontSize: '1.125rem' }}>F</span>
              </div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 'bold',
                margin: 0
              }}>
                FSKG
              </h3>
            </div>
            
            <p style={{
              fontSize: '0.875rem',
              color: '#d1d5db',
              lineHeight: '1.6',
              marginBottom: '1rem'
            }}>
              {data.company.description}
            </p>
            
            <div style={{ fontSize: '0.875rem', color: '#d1d5db' }}>
              <div style={{ marginBottom: '0.5rem' }}>
                📍 {data.company.address}
              </div>
              <div style={{ marginBottom: '0.5rem' }}>
                📞 {data.company.phone}
              </div>
              <div style={{ marginBottom: '0.5rem' }}>
                📧 {data.company.email}
              </div>
              <div>
                📠 {data.company.fax}
              </div>
            </div>
          </div>

          {/* Enlaces de productos */}
          <div>
            <h4 style={{
              fontSize: '1rem',
              fontWeight: '600',
              marginBottom: '1rem',
              color: '#e5e7eb'
            }}>
              Productos
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {data.links.products.map((link, index) => (
                <li key={index} style={{ marginBottom: '0.5rem' }}>
                  <a href={link.href} style={{
                    color: '#d1d5db',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#60a5fa'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#d1d5db'
                  }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Enlaces de empresa */}
          <div>
            <h4 style={{
              fontSize: '1rem',
              fontWeight: '600',
              marginBottom: '1rem',
              color: '#e5e7eb'
            }}>
              Empresa
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {data.links.company.map((link, index) => (
                <li key={index} style={{ marginBottom: '0.5rem' }}>
                  <a href={link.href} style={{
                    color: '#d1d5db',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#60a5fa'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#d1d5db'
                  }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Enlaces de soporte */}
          <div>
            <h4 style={{
              fontSize: '1rem',
              fontWeight: '600',
              marginBottom: '1rem',
              color: '#e5e7eb'
            }}>
              Soporte
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {data.links.support.map((link, index) => (
                <li key={index} style={{ marginBottom: '0.5rem' }}>
                  <a href={link.href} style={{
                    color: '#d1d5db',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#60a5fa'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#d1d5db'
                  }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certificaciones */}
        <div style={{
          borderTop: '1px solid #374151',
          borderBottom: '1px solid #374151',
          padding: '1.5rem 0',
          marginBottom: '1.5rem'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            {data.certifications.map((cert, index) => (
              <div key={index} style={{
                backgroundColor: '#374151',
                color: '#e5e7eb',
                padding: '0.5rem 1rem',
                borderRadius: '0.5rem',
                fontSize: '0.875rem',
                fontWeight: '600'
              }}>
                {cert}
              </div>
            ))}
          </div>
        </div>

        {/* Redes sociales y copyright */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          {/* Redes sociales */}
          <div style={{
            display: 'flex',
            gap: '1rem'
          }}>
            {data.social.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#d1d5db',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#60a5fa'
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#d1d5db'
                }}
              >
                <span>{social.icon}</span>
                <span>{social.name}</span>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div style={{
            fontSize: '0.875rem',
            color: '#9ca3af',
            textAlign: 'right'
          }}>
            {data.copyright}
          </div>
        </div>
      </div>
    </footer>
  )
}