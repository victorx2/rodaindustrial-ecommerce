/**
 * About Section Component
 * 
 * Propósito: Sección "Quiénes Somos" que presenta la empresa
 * Funcionalidad:
 * - Muestra información sobre Rodaindustrial
 * - Incluye valores, misión y visión
 * - Diseño con imagen y texto balanceado
 * - Animaciones suaves al hacer scroll
 * 
 * Uso: Importar en pages/index.js como <About />
 * Props: title, description, image, values
 */

export default function About({ data }) {
  return (
      <section className="about-section" style={{
        padding: '1rem 0.5rem',
        backgroundColor: 'white',
        textAlign: 'center'
      }}>
        <div className="container" style={{
          maxWidth: '100%',
          margin: '0 auto',
          padding: '0'
        }}>
          {/* Título de la sección */}
          <h2>
            ACERCA DE NOSOTROS
          </h2>
          
          <h3>
            ¿Por Qué Elegirnos?
          </h3>
          
          {/* Descripción */}
          <p style={{
            fontSize: '0.875rem',
            lineHeight: '1.5',
            marginBottom: '0.5rem',
            padding: '0 0.5rem'
          }}>
            Establecidos en 1999, FSKG se ha convertido en uno de los principales proveedores profesionales de rodamientos en todo el mundo. Nos enorgullecemos de cada producto que fabricamos, garantizando la más alta calidad y confiabilidad para nuestros clientes internacionales.
          </p>
          
          {/* Botón CTA */}
          <button className="btn-primary" style={{
            backgroundColor: '#2563eb',
            color: 'white',
            padding: '0.875rem 1.5rem',
            borderRadius: '0.5rem',
            fontWeight: '600',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1rem',
            marginBottom: '0.5rem'
          }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#1d4ed8'
              e.target.style.transform = 'scale(1.05)'
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#2563eb'
              e.target.style.transform = 'scale(1)'
            }}
          >
            Ver Más
          </button>
          
          {/* Galería de imágenes */}
          <div className="image-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '1rem',
            marginTop: '0.5rem'
          }}>
            <div className="image-placeholder" style={{
              backgroundColor: '#f3f4f6',
              height: '150px',
              borderRadius: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#6b7280',
              fontSize: '0.875rem'
            }}>
              Imagen de la Empresa
            </div>
            <div className="image-placeholder" style={{
              backgroundColor: '#f3f4f6',
              height: '150px',
              borderRadius: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#6b7280',
              fontSize: '0.875rem'
            }}>
              Instalaciones FSKG
            </div>
            <div className="image-placeholder" style={{
              backgroundColor: '#f3f4f6',
              height: '150px',
              borderRadius: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#6b7280',
              fontSize: '0.875rem'
            }}>
              Proceso de Fabricación
            </div>
          </div>
      </div>
    </section>
  )
}