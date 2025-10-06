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

export default function Layout({ children, title, description, keywords }) {
  return (
    <div className="app-layout">
      <Header />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
}