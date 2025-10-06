/**
 * Products Section Component
 * 
 * Propósito: Sección de catálogo de productos FSKG
 * Funcionalidad:
 * - Muestra productos destacados de rodamientos
 * - Incluye especificaciones técnicas
 * - Botones CTA para cotización
 * - Diseño grid responsive
 * - Badges de certificación
 * 
 * Uso: Importar en pages/index.js como <Products />
 * Props: data (productsData)
 */

export default function Products({ data }) {
  return (
    <section className="products-section">
      <div className="container">
        {/* Título de la sección */}
        <h2 className="products-title">
          {data.title}
        </h2>
        
        <h3 className="products-subtitle">
          {data.subtitle}
        </h3>
        
        {/* Descripción */}
        <p className="products-description">
          {data.description}
        </p>
        
        {/* Grid de productos */}
        <div className="products-grid">
          {data?.products?.map((product) => (
            <div key={product.id} className="product-card">
              {/* Imagen del producto */}
              <div className="product-image-container">
                <div className="product-image-placeholder">
                  {product.imagePlaceholder}
                </div>
              </div>
              
              {/* Contenido del producto */}
              <div className="product-content">
                <div className="product-header">
                  <p className="product-category">{product.category}</p>
                  <h4 className="product-name">{product.name}</h4>
                </div>
                
                {/* Especificaciones técnicas */}
                <div className="product-specs">
                  <div className="product-spec-item">
                    <span className="product-spec-label">Modelo:</span>
                    <span className="product-spec-value">{product.model}</span>
                  </div>
                  <div className="product-spec-item">
                    <span className="product-spec-label">Tamaño:</span>
                    <span className="product-spec-value">{product.size}</span>
                  </div>
                  <div className="product-spec-item">
                    <span className="product-spec-label">Peso:</span>
                    <span className="product-spec-value">{product.weight}</span>
                  </div>
                </div>
                
                {/* Badge de certificación */}
                <div className="product-badge-container">
                  <span className="product-badge">
                    CE 25 AÑOS FABRICANTE
                  </span>
                </div>
                
                {/* Botón CTA */}
                <button className="btn-primary product-cta-button"
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#1d4ed8'
                    e.target.style.transform = 'scale(1.05)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#2563eb'
                    e.target.style.transform = 'scale(1)'
                  }}
                >
                  Solicitar Cotización
                </button>
              </div>
            </div>
          )) || []}
        </div>
        
        {/* Características destacadas */}
        <div className="products-features">
          <div className="products-features-grid">
            {data?.features?.map((feature, index) => (
              <div key={index} className="products-feature-card">
                <div className="products-feature-icon">
                  {feature.icon}
                </div>
                <h4 className="products-feature-title">
                  {feature.title}
                </h4>
                <p className="products-feature-description">
                  {feature.description}
                </p>
              </div>
            )) || []}
          </div>
        </div>
      </div>
    </section>
  )
}