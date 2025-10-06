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
        <div className="footer-main-content">
          
          {/* Información de la empresa */}
          <div className="footer-brand">
            <div className="footer-logo-section">
              <div className="footer-logo">
                <span className="footer-logo-text">F</span>
              </div>
              <h3 className="footer-brand-title">
                FSKG
              </h3>
            </div>
            
            <p className="footer-description">
              {data.company.description}
            </p>
            
            <div className="footer-contact-info">
              <div className="footer-contact-item">
                📍 {data.company.address}
              </div>
              <div className="footer-contact-item">
                📞 {data.company.phone}
              </div>
              <div className="footer-contact-item">
                📧 {data.company.email}
              </div>
              <div className="footer-contact-item">
                📠 {data.company.fax}
              </div>
            </div>
          </div>

          {/* Enlaces de productos */}
          <div className="footer-links-section">
            <h4 className="footer-links-title">
              Productos
            </h4>
            <ul className="footer-links-list">
              {data.links.products.map((link, index) => (
                <li key={index} className="footer-links-item">
                  <a href={link.href} className="footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Enlaces de empresa */}
          <div className="footer-links-section">
            <h4 className="footer-links-title">
              Empresa
            </h4>
            <ul className="footer-links-list">
              {data.links.company.map((link, index) => (
                <li key={index} className="footer-links-item">
                  <a href={link.href} className="footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Enlaces de soporte */}
          <div className="footer-links-section">
            <h4 className="footer-links-title">
              Soporte
            </h4>
            <ul className="footer-links-list">
              {data.links.support.map((link, index) => (
                <li key={index} className="footer-links-item">
                  <a href={link.href} className="footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certificaciones */}
        <div className="footer-certifications">
          <div className="footer-certifications-grid">
            {data.certifications.map((cert, index) => (
              <div key={index} className="footer-certification-badge">
                {cert}
              </div>
            ))}
          </div>
        </div>

        {/* Redes sociales y copyright */}
        <div className="footer-bottom">
          {/* Redes sociales */}
          <div className="footer-social-links">
            {data.social.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                <span>{social.icon}</span>
                <span>{social.name}</span>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="footer-copyright">
            {data.copyright}
          </div>
        </div>
      </div>
    </footer>
  )
}