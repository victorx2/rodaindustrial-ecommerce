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
        <h2>
          {data.title}
        </h2>
        
        <h3>
          {data.subtitle}
        </h3>
        
        {/* Descripción */}
        <p style={{
          fontSize: '1.125rem',
          color: '#6b7280',
          maxWidth: '48rem',
          margin: '0 auto 4rem',
          lineHeight: '1.75'
        }}>
          {data.description}
        </p>
        
        {/* Grid de productos */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {data.products.map((product) => (
            <div key={product.id} style={{
              backgroundColor: 'white',
              borderRadius: '0.75rem',
              padding: '1.5rem',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease',
              border: '1px solid #e5e7eb'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
            >
              {/* Imagen del producto */}
              <div style={{
                backgroundColor: '#f3f4f6',
                height: '200px',
                borderRadius: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#6b7280',
                fontSize: '1rem',
                marginBottom: '1rem',
                backgroundImage: 'linear-gradient(45deg, #f3f4f6 25%, transparent 25%), linear-gradient(-45deg, #f3f4f6 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f3f4f6 75%), linear-gradient(-45deg, transparent 75%, #f3f4f6 75%)',
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
              }}>
                {product.name}
              </div>
              
              {/* Información del producto */}
              <div style={{ textAlign: 'left' }}>
                <h4 style={{
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: '#1f2937',
                  marginBottom: '0.5rem',
                  lineHeight: '1.4'
                }}>
                  {product.name}
                </h4>
                
                <p style={{
                  fontSize: '0.875rem',
                  color: '#6b7280',
                  marginBottom: '1rem',
                  lineHeight: '1.5'
                }}>
                  {product.description}
                </p>
                
                {/* Especificaciones */}
                <div style={{
                  backgroundColor: '#f9fafb',
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  marginBottom: '1rem'
                }}>
                  <div style={{ marginBottom: '0.5rem' }}>
                    <span style={{ fontWeight: '600', color: '#374151' }}>Modelo:</span>
                    <span style={{ color: '#6b7280', marginLeft: '0.5rem' }}>{product.model}</span>
                  </div>
                  <div style={{ marginBottom: '0.5rem' }}>
                    <span style={{ fontWeight: '600', color: '#374151' }}>Tamaño:</span>
                    <span style={{ color: '#6b7280', marginLeft: '0.5rem' }}>{product.size}</span>
                  </div>
                  <div>
                    <span style={{ fontWeight: '600', color: '#374151' }}>Peso:</span>
                    <span style={{ color: '#6b7280', marginLeft: '0.5rem' }}>{product.weight}</span>
                  </div>
                </div>
                
                {/* Badge de categoría */}
                <div style={{
                  display: 'inline-block',
                  backgroundColor: '#dbeafe',
                  color: '#1e40af',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  marginBottom: '1rem'
                }}>
                  {product.category}
                </div>
                
                {/* Botón CTA */}
                <button style={{
                  width: '100%',
                  backgroundColor: '#2563eb',
                  color: 'white',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.5rem',
                  fontWeight: '600',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#1d4ed8'
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#2563eb'
                }}
                >
                  Solicitar Cotización
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Badges de certificación */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          flexWrap: 'wrap',
          marginTop: '3rem'
        }}>
          {data.certifications.map((cert, index) => (
            <div key={index} style={{
              backgroundColor: '#1f2937',
              color: 'white',
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
    </section>
  )
}
