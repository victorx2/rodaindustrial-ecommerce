/**
 * Card Component
 * 
 * Propósito: Tarjeta reutilizable para mostrar contenido
 * Funcionalidad:
 * - Diferentes estilos (default, elevated, outlined)
 * - Header, body y footer opcionales
 * - Imagen opcional
 * - Hover effects
 * - Responsive
 * 
 * Uso: <Card title="Título" image="/path/to/image.jpg">Contenido</Card>
 * Props: title, image, header, footer, variant, children
 */

export default function Card({ 
  title, 
  image, 
  header, 
  footer, 
  variant = 'default', 
  children 
}) {
  return (
    <div className={`card card-${variant}`}>
      {image && <img src={image} alt={title} className="card-image" />}
      {header && <div className="card-header">{header}</div>}
      <div className="card-body">
        {title && <h3 className="card-title">{title}</h3>}
        {children}
      </div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
}