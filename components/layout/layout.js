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
import { headerData } from '../../lib/headerdata'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header data={headerData} />
      <main className="flex-1">
        {children}
      </main>
    </div>
  )
}