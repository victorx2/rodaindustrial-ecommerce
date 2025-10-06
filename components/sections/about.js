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
      <section className="about-section">
        <div className="container">
          {/* Título de la sección */}
          <h2>
            ACERCA DE NOSOTROS
          </h2>
          
          <h3>
            ¿Por Qué Elegirnos?
          </h3>
          
          {/* Descripción */}
          <p className="about-description">
            Establecidos en 1999, FSKG se ha convertido en uno de los principales proveedores profesionales de rodamientos en todo el mundo. Nos enorgullecemos de cada producto que fabricamos, garantizando la más alta calidad y confiabilidad para nuestros clientes internacionales.
          </p>
          
          {/* Botón CTA */}
          <button className="btn-primary about-cta-button"
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
          <div className="image-grid">
            <div className="image-placeholder">
              Imagen de la Empresa
            </div>
            <div className="image-placeholder">
              Instalaciones FSKG
            </div>
            <div className="image-placeholder">
              Proceso de Fabricación
            </div>
          </div>
      </div>
    </section>
  )
}