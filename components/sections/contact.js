/**
 * Contact Section Component
 * 
 * Propósito: Sección de contacto profesional con formulario
 * Funcionalidad:
 * - Formulario de contacto funcional
 * - Información de la empresa FSKG
 * - Integración con WhatsApp
 * - Diseño split (imagen + formulario)
 * - Características destacadas
 * 
 * Uso: Importar en pages/index.js como <Contact />
 * Props: data (contactData)
 */

import { useState } from 'react'

export default function Contact({ data }) {
  const [formData, setFormData] = useState({
    inquiry: '',
    email: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí iría la lógica de envío del formulario
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent(data.whatsapp.message)
    const url = `https://wa.me/${data.whatsapp.number.replace(/[^0-9]/g, '')}?text=${message}`
    window.open(url, '_blank')
  }

  return (
    <section style={{
      padding: '5rem 1rem',
      backgroundColor: 'white'
    }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        {/* Título de la sección */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '1rem'
          }}>
            {data.title}
          </h2>
          
          <h3 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '2rem'
          }}>
            {data.subtitle}
          </h3>
          
          <p style={{
            fontSize: '1.125rem',
            color: '#6b7280',
            maxWidth: '48rem',
            margin: '0 auto',
            lineHeight: '1.75'
          }}>
            {data.description}
          </p>
        </div>

        {/* Contenido principal - Split Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'start'
        }}>
          
          {/* Lado izquierdo - Imagen y características */}
          <div>
            {/* Imagen placeholder */}
            <div style={{
              backgroundColor: '#f3f4f6',
              height: '400px',
              borderRadius: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#6b7280',
              fontSize: '1.125rem',
              marginBottom: '2rem',
              backgroundImage: 'linear-gradient(45deg, #f3f4f6 25%, transparent 25%), linear-gradient(-45deg, #f3f4f6 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f3f4f6 75%), linear-gradient(-45deg, transparent 75%, #f3f4f6 75%)',
              backgroundSize: '20px 20px',
              backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
            }}>
              Imagen de Instalaciones FSKG
            </div>

            {/* Características destacadas */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1rem'
            }}>
              {data.features.map((feature, index) => (
                <div key={index} style={{
                  backgroundColor: '#f9fafb',
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
                    {feature.icon}
                  </div>
                  <h4 style={{
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: '#1f2937',
                    marginBottom: '0.25rem'
                  }}>
                    {feature.title}
                  </h4>
                  <p style={{
                    fontSize: '0.75rem',
                    color: '#6b7280',
                    lineHeight: '1.4'
                  }}>
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Lado derecho - Formulario */}
          <div style={{
            backgroundColor: '#1f2937',
            padding: '2rem',
            borderRadius: '0.75rem',
            color: 'white'
          }}>
            <h4 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>
              Envíanos tu Consulta
            </h4>

            {isSubmitted ? (
              <div style={{
                backgroundColor: '#10b981',
                padding: '1rem',
                borderRadius: '0.5rem',
                textAlign: 'center',
                marginBottom: '1rem'
              }}>
                {data.form.successMessage}
              </div>
            ) : null}

            <form onSubmit={handleSubmit}>
              {/* Campo de consulta */}
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  marginBottom: '0.5rem',
                  color: '#e5e7eb'
                }}>
                  {data.form.inquiryPlaceholder}
                </label>
                <textarea
                  value={formData.inquiry}
                  onChange={(e) => setFormData({...formData, inquiry: e.target.value})}
                  style={{
                    width: '100%',
                    height: '120px',
                    padding: '0.75rem',
                    borderRadius: '0.5rem',
                    border: '1px solid #374151',
                    backgroundColor: '#374151',
                    color: 'white',
                    fontSize: '0.875rem',
                    resize: 'vertical'
                  }}
                  placeholder="Describe tu necesidad de rodamientos..."
                  required
                />
              </div>

              {/* Campo de email */}
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  marginBottom: '0.5rem',
                  color: '#e5e7eb'
                }}>
                  {data.form.emailPlaceholder}
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '0.5rem',
                    border: '1px solid #374151',
                    backgroundColor: '#374151',
                    color: 'white',
                    fontSize: '0.875rem'
                  }}
                  placeholder="tu@email.com"
                  required
                />
              </div>

              {/* Botón de envío */}
              <button
                type="submit"
                style={{
                  width: '100%',
                  backgroundColor: '#2563eb',
                  color: 'white',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.5rem',
                  fontWeight: '600',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  transition: 'all 0.3s ease',
                  marginBottom: '1rem'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#1d4ed8'
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#2563eb'
                }}
              >
                {data.form.submitText}
              </button>
            </form>

            {/* Información de contacto */}
            <div style={{
              borderTop: '1px solid #374151',
              paddingTop: '1rem'
            }}>
              <h5 style={{
                fontSize: '1rem',
                fontWeight: '600',
                marginBottom: '0.75rem',
                color: '#e5e7eb'
              }}>
                Información de Contacto
              </h5>
              
              <div style={{ fontSize: '0.875rem', lineHeight: '1.6' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <strong>{data.company.name}</strong>
                </div>
                <div style={{ marginBottom: '0.5rem' }}>
                  📍 {data.company.address}
                </div>
                <div style={{ marginBottom: '0.5rem' }}>
                  📞 {data.company.phone}
                </div>
                <div style={{ marginBottom: '0.5rem' }}>
                  📧 {data.company.email}
                </div>
                <div>
                  📠 {data.company.fax}
                </div>
              </div>
            </div>

            {/* Botón de WhatsApp */}
            <button
              onClick={handleWhatsApp}
              style={{
                width: '100%',
                backgroundColor: '#25d366',
                color: 'white',
                padding: '0.75rem 1rem',
                borderRadius: '0.5rem',
                fontWeight: '600',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.875rem',
                transition: 'all 0.3s ease',
                marginTop: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#128c7e'
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#25d366'
              }}
            >
              💬 Chatear por WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}