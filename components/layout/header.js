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

export default function Header({ data }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header style={{ 
      backgroundColor: 'white', 
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', 
      position: 'sticky', 
      top: 0, 
      zIndex: 50 
    }}>
      {/* Barra superior de contacto */}
      <div style={{ 
        backgroundColor: '#1f2937', 
        color: 'white', 
        padding: '0.5rem 0' 
      }}>
        <div style={{ 
          maxWidth: '80rem', 
          margin: '0 auto', 
          padding: '0 1rem' 
        }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            fontSize: '0.875rem' 
          }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1.5rem' 
            }}>
              <span style={{ display: 'flex', alignItems: 'center' }}>
                <svg style={{ width: '1rem', height: '1rem', marginRight: '0.5rem' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                {data.company.fullName}
              </span>
              <span style={{ display: 'flex', alignItems: 'center' }}>
                <svg style={{ width: '1rem', height: '1rem', marginRight: '0.5rem' }} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                {data.company.email}
              </span>
            </div>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1rem' 
            }}>
              <span style={{ display: 'flex', alignItems: 'center' }}>
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
      <div style={{ 
        maxWidth: '80rem', 
        margin: '0 auto', 
        padding: '0 1rem' 
      }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          padding: '1rem 0' 
        }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ flexShrink: 0 }}>
              <div style={{ 
                width: '3rem', 
                height: '3rem', 
                backgroundColor: '#2563eb', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' 
              }}>
                <span style={{ color: 'white', fontWeight: 'bold', fontSize: '1.25rem' }}>F</span>
              </div>
            </div>
            <div style={{ marginLeft: '0.75rem' }}>
              <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', margin: 0 }}>
                {data.company.name}
              </h1>
              <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: 0 }}>
                Industrial Bearings
              </p>
            </div>
          </div>

          {/* Navegación Desktop */}
          <nav className="header-desktop-nav" style={{ display: 'flex', gap: '2rem' }}>
            {data.navigation.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                style={{
                  color: item.active ? '#2563eb' : '#374151',
                  padding: '0.5rem 0.75rem',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  textDecoration: 'none',
                  borderBottom: item.active ? '2px solid #2563eb' : '2px solid transparent',
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

          {/* CTA Button Desktop */}
          <div className="header-desktop-cta">
            <button style={{
              backgroundColor: '#2563eb',
              color: 'white',
              padding: '0.5rem 1.5rem',
              borderRadius: '0.5rem',
              fontWeight: '600',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#1d4ed8'
              e.target.style.transform = 'scale(1.05)'
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#2563eb'
              e.target.style.transform = 'scale(1)'
            }}
            >
              {data.cta.text}
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="header-mobile-menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem'
            }}
          >
            <svg style={{ width: '1.5rem', height: '1.5rem', color: '#374151' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mobile-menu">
            {data.navigation.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div style={{ padding: '0.75rem 0', borderTop: '1px solid #e5e7eb', marginTop: '0.5rem' }}>
              <button style={{
                backgroundColor: '#2563eb',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                fontWeight: '600',
                border: 'none',
                cursor: 'pointer',
                width: '100%',
                transition: 'all 0.3s ease'
              }}
              onClick={() => setIsMenuOpen(false)}
              >
                {data.cta.text}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}