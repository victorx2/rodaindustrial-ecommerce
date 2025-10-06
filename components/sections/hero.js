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
          {data?.title || 'FSKG'}
        </h1>
        
        {/* Subtítulo */}
        <h2 className="hero-subtitle">
          {data?.subtitle || 'Rodamientos de Precisión para la Industria Global'}
        </h2>
        
        {/* Descripción */}
        <p className="hero-description">
          {data?.description || 'Desde 1999, líderes en fabricación de rodamientos de alta calidad para aplicaciones automotrices y de maquinaria pesada.'}
        </p>
        
        {/* Estadísticas */}
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">{data?.stats?.years || '25+'}</div>
            <div className="stat-label">Años de Experiencia</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{data?.stats?.customers || '5000+'}</div>
            <div className="stat-label">Clientes Satisfechos</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{data?.stats?.products || '800+'}</div>
            <div className="stat-label">Productos</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{data?.stats?.countries || '50+'}</div>
            <div className="stat-label">Países</div>
          </div>
        </div>
        
        {/* CTAs */}
        <div className="cta-buttons">
          <button className="btn-primary hero-cta-primary">
            {data?.ctaPrimary || 'Ver Catálogo de Productos'}
          </button>
          <button className="btn-secondary hero-cta-secondary">
            {data?.ctaSecondary || 'Solicitar Cotización'}
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