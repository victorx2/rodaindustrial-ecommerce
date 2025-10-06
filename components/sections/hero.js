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

import { motion } from 'framer-motion'

export default function Hero({ data }) {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 overflow-hidden">
      {/* Fondo con overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Contenido principal */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center text-white max-w-6xl mx-auto">
          
          {/* Título principal con animación */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-7xl md:text-8xl font-bold mb-4 tracking-tight"
          >
            {data.title}
          </motion.h1>
          
          {/* Subtítulo */}
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl text-blue-300 mb-6 font-light"
          >
            {data.subtitle}
          </motion.h2>
          
          {/* Descripción */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            {data.description}
          </motion.p>
          
          {/* Estadísticas */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
          >
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
          </motion.div>
          
          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex gap-6 justify-center flex-wrap"
          >
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              {data.ctaPrimary}
            </button>
            <button className="border-2 border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              {data.ctaSecondary}
            </button>
          </motion.div>
        </div>
      </div>
      
      {/* Elementos decorativos */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </motion.div>
      </div>
    </section>
  )
}