/**
 * About Section Component
 * 
 * Propósito: Sección informativa sobre la empresa FSKG
 * Funcionalidad:
 * - Historia de la empresa desde 1999
 * - Experiencia en rodamientos industriales
 * - Certificaciones y calidad
 * - Equipo técnico especializado
 * 
 * Uso: Importar en pages/index.js como <About />
 * Props: data (información de la empresa)
 */

export default function About({ data }) {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-content">
          {/* Título principal */}
          <div className="about-header">
            <h2 className="about-title">{data.title}</h2>
            <p className="about-subtitle">{data.subtitle}</p>
          </div>

          {/* Contenido principal */}
          <div className="about-main">
            {/* Texto descriptivo */}
            <div className="about-text">
              <p className="about-description">{data.description}</p>
              <p className="about-description">{data.description2}</p>
            </div>

            {/* Características destacadas */}
            <div className="about-features">
              {data.features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <div className="feature-icon">
                    <span className="icon-text">{feature.icon}</span>
                  </div>
                  <div className="feature-content">
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Estadísticas adicionales */}
          <div className="about-stats">
            {data.stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}