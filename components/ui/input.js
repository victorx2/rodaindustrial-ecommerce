/**
 * Input Component
 * 
 * Propósito: Campo de entrada reutilizable
 * Funcionalidad:
 * - Diferentes tipos (text, email, password, tel)
 * - Validación en tiempo real
 * - Mensajes de error
 * - Placeholder y labels
 * - Iconos opcionales
 * 
 * Uso: <Input type="email" label="Email" placeholder="tu@email.com" />
 * Props: type, label, placeholder, value, onChange, error, icon
 */

export default function Input({ 
  type = 'text', 
  label, 
  placeholder, 
  value, 
  onChange, 
  error, 
  icon 
}) {
  return (
    <div className="input-group">
      {label && <label className="input-label">{label}</label>}
      <input 
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`input ${error ? 'input-error' : ''}`}
      />
      {error && <span className="error-message">{error}</span>}
    </div>
  );
}