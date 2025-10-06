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
    <section className="contact-section">
      <div className="contact-container">
        {/* Título de la sección */}
        <div className="contact-header">
          <h2 className="contact-title">
            {data.title}
          </h2>
          
          <h3 className="contact-subtitle">
            {data.subtitle}
          </h3>
          
          <p className="contact-description">
            {data.description}
          </p>
        </div>

        {/* Contenido principal - Split Layout */}
        <div className="contact-main-grid">
          
          {/* Lado izquierdo - Imagen y características */}
          <div className="contact-left-side">
            <div className="contact-image-placeholder">
              Imagen de Instalaciones FSKG
            </div>

            {/* Características destacadas */}
            <div className="contact-features-grid">
              {data.features.map((feature, index) => (
                <div key={index} className="contact-feature-card">
                  <div className="contact-feature-icon">
                    {feature.icon}
                  </div>
                  <h4 className="contact-feature-title">
                    {feature.title}
                  </h4>
                  <p className="contact-feature-description">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Lado derecho - Formulario */}
          <div className="contact-form-side">
            <h4 className="contact-form-title">
              Envíanos tu Consulta
            </h4>

            {isSubmitted ? (
              <div className="contact-success-message">
                {data.form.successMessage}
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label className="form-label">
                  {data.form.inquiryPlaceholder}
                </label>
                <textarea
                  value={formData.inquiry}
                  onChange={(e) => setFormData({...formData, inquiry: e.target.value})}
                  className="form-textarea"
                  placeholder="Describe tu necesidad de rodamientos..."
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  {data.form.emailPlaceholder}
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="form-input"
                  placeholder="tu@email.com"
                  required
                />
              </div>

              <button type="submit" className="btn-primary contact-submit-btn">
                {data.form.submitText}
              </button>
            </form>

            {/* Información de contacto */}
            <div className="contact-info-section">
              <h5 className="contact-info-title">
                Información de Contacto
              </h5>
              
              <div className="contact-info-content">
                <div className="contact-info-item">
                  <strong>{data.company.name}</strong>
                </div>
                <div className="contact-info-item">
                  📍 {data.company.address}
                </div>
                <div className="contact-info-item">
                  📞 {data.company.phone}
                </div>
                <div className="contact-info-item">
                  📧 {data.company.email}
                </div>
                <div className="contact-info-item">
                  📠 {data.company.fax}
                </div>
              </div>
            </div>

            <button onClick={handleWhatsApp} className="btn-whatsapp">
              💬 Chatear por WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}