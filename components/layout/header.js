/**
 * Header Component
 * 
 * Propósito: Navegación principal del sitio
 * Funcionalidad:
 * - Logo de la empresa
 * - Menú de navegación
 * - Botones de acción (Login, Registro)
 * - Responsive con menú hamburguesa
 * - Sticky header al hacer scroll
 * b
 * Uso: Importar en Layout.js como <Header />
 * Props: logo, menuItems, user, onLogin, onRegister
 */

// components/layout/header.js - Vista (siguiendo MVC de Vic Dev)

import { useRouter } from 'next/router'
import { useState, useEffect, useMemo } from 'react'
import { useTranslations } from '../../hooks/useTranslations'



export default function Header() {
  const router = useRouter()
  const { locale } = router
  const t = useTranslations('header')  // ← HOOK OPTIMIZADO PARA PRODUCCIÓN

  // Estados
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const [languageSearchTerm, setLanguageSearchTerm] = useState('')
  const [isSticky, setIsSticky] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false) // ← ESTADO PARA STICKY

  // Función para filtrar idiomas
  const filteredLanguages = useMemo(() => {
    if (!languageSearchTerm.trim()) {
      return t?.languages?.available || []
    }
    
    const searchTerm = languageSearchTerm.toLowerCase()
    
    return t?.languages?.available?.filter(language => 
      language.name.toLowerCase().includes(searchTerm) ||
      language.nativeName.toLowerCase().includes(searchTerm) ||
      language.code.toLowerCase().includes(searchTerm) ||
      language.searchTerms.some(term => 
        term.toLowerCase().includes(searchTerm)
      )
    ) || []
  }, [languageSearchTerm, t?.languages?.available])

  // Función para cambiar idioma
  const handleLanguageChange = (languageCode) => {
    setIsLanguageOpen(false)
    setLanguageSearchTerm('')
    router.push(router.asPath, router.asPath, { locale: languageCode })
  }

  // Detectar si es móvil

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 767)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Manejar sticky header ← ESTE ES EL CÓDIGO CLAVE
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      setIsSticky(scrollTop > 10) // ← Más sensible (antes era 50)
    }

    window.addEventListener('scroll', handleScroll)
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Función para abrir/cerrar menú móvil
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // Función para cerrar menú móvil
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  // Prevenir scroll del body cuando el menú está abierto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <header className={`header-main ${isSticky ? 'sticky' : ''}`}>
      {/* Barra superior de contacto */}
      <div className="header-top">
        <div className="container">
          <div className="header-contact-info">
            <div className="header-contact-left">
              <span className="header-contact-item">
                <svg className="header-icon" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                {t.company.name}
              </span>
              <span className="header-contact-item">
                <svg className="header-icon" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                {t.company.email}
              </span>
            </div>
            <div className="header-contact-right">
              <span className="header-contact-item">
                <svg className="header-icon" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                {t.company.phone}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Navegación principal */}
      <div className="container">
        <div className="header-main-content">
          {/* Logo */}
          <div className="header-logo">
            <div className="logo-container">
              <div className="logo">
                <span className="logo-text">F</span>
              </div>
            </div>
            <div className="company-info">
              <h1 className="company-name">
                {t.company.name}
              </h1>
              <p className="company-tagline">
                Industrial Bearings
              </p>
            </div>
            </div>

          {/* Navegación Desktop */}
          {!isMobile && (
            <nav className="header-desktop-nav">
              {Object.entries(t?.navigation || {}).map(([key, navItem]) => (
                <div key={key} className="nav-item">
                  {navItem.type === 'simple' ? (
                    <a href={`#${key}`} className="nav-link">
                      {typeof navItem.label === 'string' ? navItem.label : navItem.label.label || key}
                    </a>
                  ) : (
                    <div className="nav-dropdown">
                      <a href={`#${key}`} className="nav-link dropdown-toggle">
                        {typeof navItem.label === 'string' ? navItem.label : navItem.label.label || key}
                        <svg className="dropdown-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                      </a>
                      <div className="dropdown-menu">
                        {Object.entries(navItem.items || {}).map(([subKey, subLabel]) => (
                          <a key={subKey} href={`#${key}/${subKey}`} className="dropdown-item">
                            {typeof subLabel === 'string' ? subLabel : subLabel.label || subKey}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
            ))}
          </nav>
          )}

          {/* SEARCH TOGGLE - MOBILE */}
          {isMobile && (
            <div className="header-search-form-wrapper mobile-search">
              <div className="searchBox">
                <input 
                  className="searchInput"
                  type="text" 
                  placeholder={t?.search?.placeholder || "Buscar productos..."}
                />
                <button className="searchButton">
                  <svg className="search-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {/* SEARCH TOGGLE - DESKTOP */}
          {!isMobile && (
            <div className="header-search-form-wrapper">
              <div className="searchBox">
                <input 
                  className="searchInput"
                  type="text" 
                  placeholder={t?.search?.placeholder || "Buscar productos..."}
                />
                <button className="searchButton">
                  <svg className="search-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {/* Selector de idiomas con búsqueda */}
          <div className="header-language">
              <div className="language-search-container">
                <input 
                  type="text"
                  className="language-search-input"
                  placeholder="Buscar idioma..."
                  value={languageSearchTerm}
                  onChange={(e) => setLanguageSearchTerm(e.target.value)}
                  onFocus={() => setIsLanguageOpen(true)}
                />
                <button 
                  className="language-button"
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                >
                  <svg className="language-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              
              {/* Menú desplegable con resultados filtrados */}
              {isLanguageOpen && (
                <div className="language-dropdown">
                  {filteredLanguages.map((language) => (
                    <button
                      key={language.code}
                      className={`language-option ${t.languages.current === language.code ? 'active' : ''}`}
                      onClick={() => handleLanguageChange(language.code)}
                    >
                      <span className="language-flag">{language.flag}</span>
                      <span className="language-name">{language.name}</span>
                      <span className="language-native">({language.nativeName})</span>
                    </button>
                  ))}
                  
                  {/* Mensaje si no hay resultados */}
                  {filteredLanguages.length === 0 && (
                    <div className="language-no-results">
                      No se encontraron idiomas
                    </div>
                  )}
                </div>
              )}
            </div>

          {/* CTA Button Desktop */}
          {!isMobile && (
            <div className="header-desktop-cta">
              <button className="btn-primary">
                {t?.cta?.text || "Solicitar Cotización"}
            </button>
            </div>
          )}

          {/* Botón hamburguesa móvil */}
          {isMobile && (
            <button 
              className="header-mobile-menu"
              onClick={toggleMobileMenu}
            >
              <svg className="mobile-menu-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          )}

        </div>

      {/* Menú móvil desplegable */}
      <div className={`mobileMenu ${isMobileMenuOpen ? 'show' : ''}`}>
        <div className="menu-close">
          <div className="clox" onClick={closeMobileMenu}>
            <i className="ti-close">×</i>
          </div>
        </div>
        
        <ul className="responsivemenu">
          {Object.entries(t?.navigation || {}).map(([key, navItem]) => (
            <li key={key}>
              {navItem.type === 'simple' ? (
                <a 
                  href={`#${key}`} 
                  className={key === 'home' ? 'active' : ''}
                  onClick={closeMobileMenu}
                >
                  {typeof navItem.label === 'string' ? navItem.label : navItem.label.label || key}
                </a>
              ) : (
                <p>
                  {typeof navItem.label === 'string' ? navItem.label : navItem.label.label || key}
                  <i className="fa fa-angle-down"></i>
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
      </div>
    </header>
  )
}