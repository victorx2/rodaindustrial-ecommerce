/**
 * Products Section Component - VERSIÓN FANCY CARDS ELEGANTE
 * 
 * Propósito: Sección de catálogo de productos FSKG con diseño moderno
 * Funcionalidad:
 * - Cards elegantes con animaciones hover
 * - Imágenes reales de rodamientos + placeholders
 * - Especificaciones técnicas con overlay
 * - Efectos de borde animados
 * - Diseño responsive y profesional
 * 
 * Uso: Importar en pages/index.js como <Products />
 * Props: data (productsData)
 */

import { useState } from 'react'

export default function Products({ data }) {
  const [hoveredCard, setHoveredCard] = useState(null)

  return (
    <section className="products-section-fancy">
      <div className="container">
        {/* Header de la sección */}
        <div className="products-header">
          <h2 className="products-title-fancy">
            {data.title}
          </h2>
          <h3 className="products-subtitle-fancy">
            {data.subtitle}
          </h3>
          <p className="products-description-fancy">
            {data.description}
          </p>
        </div>
        
        {/* Grid de productos fancy */}
        <div className="products-grid-fancy">
          {data?.products?.map((product, index) => (
            <article 
              key={product.id} 
              className={`fancy-card fancy-card-${index + 1}`}
              onMouseEnter={() => setHoveredCard(product.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ 
                backgroundImage: `url(${product.image})`,
                '--category-color': product.color
              }}
            >
              {/* Overlay de fondo */}
              <div className="bg-overlay"></div>
              
              {/* Bordes animados */}
              <div className="v-border"></div>
              <div className="h-border"></div>
              
              {/* Contenido de la card */}
              <div className="content">
                {/* Contenido principal (visible por defecto) */}
                <div className="primary">
                  <div className="category-badge" style={{ backgroundColor: product.color }}>
                    <span className="category-icon">{product.icon}</span>
                    <span className="category-text">{product.category}</span>
                  </div>
                  <h2 className="product-name-fancy">{product.name}</h2>
                  <div className="product-model-fancy">{product.model}</div>
                </div>
                
                {/* Contenido secundario (visible en hover) */}
                <div className="secondary">
                  <h3 className="product-title-hover">{product.name}</h3>
                  
                  {/* Especificaciones técnicas */}
                  <div className="product-specs-fancy">
                    <div className="spec-item">
                      <span className="spec-label">Tamaño:</span>
                      <span className="spec-value">{product.size}</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Peso:</span>
                      <span className="spec-value">{product.weight}</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Aplicación:</span>
                      <span className="spec-value">{product.category}</span>
                    </div>
                  </div>
                  
                  {/* Badge de certificación */}
                  <div className="certification-badge">
                    <span className="cert-text">CE 25 AÑOS FABRICANTE</span>
                  </div>
                  
                  {/* Botón CTA */}
                  <button className="cta-button-fancy">
                    Solicitar Cotización
                  </button>
                </div>
              </div>
            </article>
          )) || []}
        </div>
        
        {/* Sección de características */}
        <div className="products-features-fancy">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <h4>25+ Años de Experiencia</h4>
              <p>Fabricante líder en rodamientos de precisión</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌍</div>
              <h4>Distribución Global</h4>
              <p>Envíos a más de 50 países</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">✅</div>
              <h4>Certificación CE</h4>
              <p>Cumplimiento de estándares internacionales</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}