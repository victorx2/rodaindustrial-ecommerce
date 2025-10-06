/* 
  # Controlador (Controller) 
*/
// pages/index.js - Controlador principal
import Layout from '../components/layout/layout'
import Hero from '../components/sections/hero'
import About from '../components/sections/about'
import Products from '../components/sections/products'
import Contact from '../components/sections/contact'
import { heroData } from '../lib/herodata'
import { aboutData } from '../lib/aboutData'
import { productsData } from '../lib/productsData'
import { contactData } from '../lib/contactData'

export default function Home() {
  return (
    <Layout>
      {/* Hero Section - Sección principal */}
      <Hero data={heroData} />
      
      {/* About Section - Sección sobre la empresa */}
      <About data={aboutData} />
      
      {/* Products Section - Catálogo de productos */}
      <Products data={productsData} />
      
      {/* Contact Section - Formulario de contacto */}
      <Contact data={contactData} />
      
      {/* Footer incluido en Layout */}
    </Layout>
  )
}