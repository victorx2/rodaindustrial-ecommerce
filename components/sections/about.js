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
    <section style={{
      padding: '5rem 1rem',
      backgroundColor: 'white',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        {/* Título de la sección */}
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          color: '#1f2937',
          marginBottom: '1rem'
        }}>
          ACERCA DE NOSOTROS
        </h2>
        
        <h3 style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          color: '#1f2937',
          marginBottom: '2rem'
        }}>
          ¿Por Qué Elegirnos?
        </h3>
        
        {/* Descripción */}
        <p style={{
          fontSize: '1.125rem',
          color: '#6b7280',
          maxWidth: '48rem',
          margin: '0 auto 3rem',
          lineHeight: '1.75'
        }}>
          Establecidos en 1999, FSKG se ha convertido en uno de los principales proveedores profesionales de rodamientos en todo el mundo. Nos enorgullecemos de cada producto que fabricamos, garantizando la más alta calidad y confiabilidad para nuestros clientes internacionales.
        </p>
        
        {/* Botón CTA */}
        <button style={{
          backgroundColor: '#2563eb',
          color: 'white',
          padding: '1rem 2rem',
          borderRadius: '0.5rem',
          fontWeight: '600',
          border: 'none',
          cursor: 'pointer',
          fontSize: '1.125rem',
          transition: 'all 0.3s ease',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
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
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem',
          marginTop: '4rem'
        }}>
          <div style={{
            backgroundColor: '#f3f4f6',
            height: '300px',
            borderRadius: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#6b7280',
            fontSize: '1.125rem'
          }}>
            Imagen de la Empresa
          </div>
          <div style={{
            backgroundColor: '#f3f4f6',
            height: '300px',
            borderRadius: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#6b7280',
            fontSize: '1.125rem'
          }}>
            Instalaciones FSKG
          </div>
          <div style={{
            backgroundColor: '#f3f4f6',
            height: '300px',
            borderRadius: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#6b7280',
            fontSize: '1.125rem'
          }}>
            Proceso de Fabricación
          </div>
        </div>
      </div>
    </section>
  )
}