/* 
  # Controlador (Controller) 
*/
// pages/index.js - Controlador principal
import Layout from '../components/layout/layout'
import Hero from '../components/sections/hero'
import { heroData } from '../lib/herodata'

export default function Home() {
  return (
    <Layout>
      {/* Hero Section - Sección principal */}
      <Hero data={heroData} />
      
      {/* Otras secciones vendrán después */}
      <div className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Próximamente: Más Secciones
          </h2>
          <p className="text-lg text-gray-600">
            Siguiendo la metodología de Vic Dev, continuaremos con About, Productos y Contacto
          </p>
        </div>
      </div>
    </Layout>
  )
}