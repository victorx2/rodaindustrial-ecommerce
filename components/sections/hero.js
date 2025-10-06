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
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 overflow-hidden">
      {/* Fondo con overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Contenido principal */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center text-white max-w-6xl mx-auto">
          
          {/* Título principal */}
          <h1 className="text-7xl md:text-8xl font-bold mb-4 tracking-tight animate-fade-in">
            {data.title}
          </h1>
          
          {/* Subtítulo */}
          <h2 className="text-2xl md:text-3xl text-blue-300 mb-6 font-light animate-fade-in-delay-1">
            {data.subtitle}
          </h2>
          
          {/* Descripción */}
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay-2">
            {data.description}
          </p>
          
          {/* Estadísticas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 animate-fade-in-delay-3">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-300">{data.stats.years}</div>
              <div className="text-sm md:text-base">Años de Experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-300">{data.stats.customers}</div>
              <div className="text-sm md:text-base">Clientes Satisfechos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-300">{data.stats.products}</div>
              <div className="text-sm md:text-base">Productos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-300">{data.stats.countries}</div>
              <div className="text-sm md:text-base">Países</div>
            </div>
          </div>
          
          {/* CTAs */}
          <div className="flex gap-6 justify-center flex-wrap animate-fade-in-delay-4">
            <button className="btn-primary">
              {data.ctaPrimary}
            </button>
            <button className="btn-secondary">
              {data.ctaSecondary}
            </button>
          </div>
        </div>
      </div>
      
      {/* Elementos decorativos */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center animate-bounce">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}