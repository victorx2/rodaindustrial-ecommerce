/**
 * Layout Component
 * 
 * Propósito: Estructura principal que envuelve todas las páginas
 * Funcionalidad:
 * - Header fijo
 * - Contenido principal
 * - Footer fijo
 * - Manejo de estados globales
 * - SEO y meta tags
 * 
 * Uso: Envolver páginas como <Layout><PageContent /></Layout>
 * Props: children, title, description, keywords
 */

import Header from './header'
import Footer from './footer'
import { headerData } from '../../lib/headerdata'
import { footerData } from '../../lib/footerData'

export default function Layout({ children }) {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      <Header data={headerData} />
      <main>
        {children}
      </main>
      <Footer data={footerData} />
    </div>
  )
}