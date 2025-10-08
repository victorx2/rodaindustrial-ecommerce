import { useRouter } from 'next/router'

/**
 * Hook personalizado para traducciones - VERSIÓN PRODUCCIÓN
 * 
 * Uso: const t = useTranslations('header')
 * Acceso: t.company.name, t.navigation.home
 * 
 * Ventajas:
 * - Funciona en SSR (Server-Side Rendering)
 * - Bundle optimizado por Webpack
 * - SEO optimizado con URLs por idioma
 * - Escalable y mantenible
 */
export const useTranslations = (namespace) => {
  const router = useRouter()
  const { locale } = router
  
  // Importación estática - funciona en SSR y es optimizada por Webpack
  const translations = {
    es: require(`../locale/es/${namespace}.json`),
    en: require(`../locale/en/${namespace}.json`),
    fr: require(`../locale/fr/${namespace}.json`),
    de: require(`../locale/de/${namespace}.json`),
    it: require(`../locale/it/${namespace}.json`),
    pt: require(`../locale/pt/${namespace}.json`),
  }
  
  // Retornar traducciones del idioma actual o español como fallback
  return translations[locale] || translations['es']
}

export default useTranslations