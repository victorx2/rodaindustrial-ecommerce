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
 * 
 * Uso: Importar en Layout.js como <Header />
 * Props: logo, menuItems, user, onLogin, onRegister
 */

// components/layout/header.js - Vista (siguiendo MVC de Vic Dev)
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Header({ data }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header-main">
      {/* Barra superior de contacto */}
      <div className="header-top">
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="flex items-center" style={{ gap: '1.5rem' }}>
              <span className="flex items-center">
                <svg style={{ width: '1rem', height: '1rem', marginRight: '0.5rem' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                {data.company.fullName}
              </span>
              <span className="flex items-center">
                <svg style={{ width: '1rem', height: '1rem', marginRight: '0.5rem' }} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                {data.company.email}
              </span>
            </div>
            <div className="flex items-center">
              <span className="flex items-center">
                <svg style={{ width: '1rem', height: '1rem', marginRight: '0.5rem' }} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                {data.company.phone}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Navegación principal */}
      <div className="container">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="logo">
              <span>F</span>
            </div>
            <div style={{ marginLeft: '0.75rem' }}>
              <h1 className="company-name">{data.company.name}</h1>
              <p className="company-tagline">Industrial Bearings</p>
            </div>
          </div>

          {/* Navegación Desktop */}
          <nav style={{ display: 'flex', gap: '2rem' }} className="desktop-nav">
            {data.navigation.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                style={{
                  color: item.active ? '#2563eb' : '#374151',
                  fontWeight: '500',
                  fontSize: '0.875rem',
                  textDecoration: 'none',
                  borderBottom: item.active ? '2px solid #2563eb' : 'none',
                  paddingBottom: '0.5rem',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  if (!item.active) {
                    e.target.style.color = '#2563eb'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!item.active) {
                    e.target.style.color = '#374151'
                  }
                }}
              >
                {item.name}
                {item.dropdown && (
                  <svg style={{ width: '1rem', height: '1rem', marginLeft: '0.25rem', display: 'inline' }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                )}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="desktop-cta">
            <button className="btn-primary" style={{ padding: '0.5rem 1.5rem', fontSize: '0.875rem' }}>
              {data.cta.text}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="mobile-menu-btn">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{
                background: 'none',
                border: 'none',
                color: '#374151',
                cursor: 'pointer',
                padding: '0.5rem'
              }}
            >
              <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <div style={{ padding: '0.5rem 0' }}>
              {data.navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  style={{
                    display: 'block',
                    padding: '0.75rem',
                    fontSize: '1rem',
                    fontWeight: '500',
                    color: item.active ? '#2563eb' : '#374151',
                    backgroundColor: item.active ? '#eff6ff' : 'transparent',
                    textDecoration: 'none',
                    borderBottom: '1px solid #e5e7eb'
                  }}
                >
                  {item.name}
                </a>
              ))}
              <button className="btn-primary" style={{ width: '100%', marginTop: '1rem', padding: '0.75rem' }}>
                {data.cta.text}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}