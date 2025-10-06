/**
 * Button Component
 * 
 * Propósito: Botón reutilizable con diferentes estilos
 * Funcionalidad:
 * - Múltiples variantes (primary, secondary, outline)
 * - Diferentes tamaños (small, medium, large)
 * - Estados (loading, disabled)
 * - Iconos opcionales
 * - Accesibilidad completa
 * 
 * Uso: <Button variant="primary" size="large" onClick={handleClick}>Texto</Button>
 * Props: variant, size, loading, disabled, icon, onClick, children
 */

export default function Button({ 
  variant = 'primary', 
  size = 'medium', 
  loading = false, 
  disabled = false, 
  icon, 
  onClick, 
  children 
}) {
  return (
    <button 
      className={`btn btn-${variant} btn-${size}`}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {loading ? 'Cargando...' : children}
    </button>
  );
}