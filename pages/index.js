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
      <div style={{ padding: '5rem 1rem', backgroundColor: '#f3f4f6', textAlign: 'center' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>
            Próximamente: Más Secciones
          </h2>
          <p style={{ fontSize: '1.125rem', color: '#6b7280' }}>
            Siguiendo la metodología de Vic Dev, continuaremos con About, Productos y Contacto
          </p>
        </div>
      </div>
    </Layout>
  )
}