/* 
  # Vista (View)
*/

/**
 * Hero Section Component
 * 
 * Propósito: Sección principal del landing page que captura la atención del usuario
 * Funcionalidad: 
 * - Muestra el mensaje principal de la empresa
 * - Incluye call-to-action (CTA) principal
 * - Diseño impactante con imagen de fondo
 * - Responsive para móvil y desktop
 * 
 * Uso: Importar en pages/index.js como <Hero />
 * Props: title, subtitle, ctaText, backgroundImage
 */

export default function Hero({ data }) {
  return (
    <section className="hero-section">
      {/* Fondo con overlay */}
      <div className="hero-overlay"></div>
      
      {/* Contenido principal */}
      <div className="hero-content">
        {/* Título principal */}
        <h1 className="hero-title">
          {data.title}
        </h1>
        
        {/* Subtítulo */}
        <h2 className="hero-subtitle">
          {data.subtitle}
        </h2>
        
        {/* Descripción */}
        <p className="hero-description">
          {data.description}
        </p>
        
        {/* Estadísticas */}
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">{data.stats.years}</div>
            <div className="stat-label">Años de Experiencia</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{data.stats.customers}</div>
            <div className="stat-label">Clientes Satisfechos</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{data.stats.products}</div>
            <div className="stat-label">Productos</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{data.stats.countries}</div>
            <div className="stat-label">Países</div>
          </div>
        </div>
        
        {/* CTAs */}
        <div className="cta-buttons">
          <button className="btn-primary hero-cta-primary">
            {data.ctaPrimary}
          </button>
          <button className="btn-secondary hero-cta-secondary">
            {data.ctaSecondary}
          </button>
        </div>
      </div>
      
      {/* Elementos decorativos */}
      <div className="scroll-indicator">
        <div className="scroll-dot"></div>
      </div>
    </section>
  )
}