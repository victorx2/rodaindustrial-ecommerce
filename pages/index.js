/* 
  # Controlador (Controller) 
*/
// pages/index.js - Controlador principal
import Layout from '../components/layout/layout'
import Hero from '../components/sections/hero'
import About from '../components/sections/about'
import { heroData } from '../lib/herodata'
import { aboutData } from '../lib/aboutData'

export default function Home() {
  return (
    <Layout>
      {/* Hero Section - Sección principal */}
      <Hero data={heroData} />
      
      {/* About Section - Información de la empresa */}
      <About data={aboutData} />
      
      {/* Otras secciones vendrán después */}
      <div style={{ padding: '5rem 1rem', backgroundColor: '#f3f4f6', textAlign: 'center' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>
            Próximamente: Más Secciones
          </h2>
          <p style={{ fontSize: '1.125rem', color: '#6b7280' }}>
            Siguiendo la metodología de Vic Dev, continuaremos con Productos, Servicios y Contacto
          </p>
        </div>
      </div>
    </Layout>
  )
}