// lib/footerData.js - Modelo de datos (siguiendo MVC de Vic Dev)
export const footerData = {
  company: {
    name: "FSKG Industrial Bearings Co., Ltd",
    description: "Líderes en fabricación de rodamientos de alta calidad desde 1999. Servimos a clientes en más de 50 países con productos de precisión para aplicaciones industriales y automotrices.",
    address: "No. 220 Industrial Road, FSKG District, China",
    phone: "+86-510-82713083",
    email: "info@fskg.com",
    fax: "+86-510-82713082"
  },
  links: {
    products: [
      { name: "Rodamientos Automotrices", href: "/productos/automotrices" },
      { name: "Rodamientos Industriales", href: "/productos/industriales" },
      { name: "Rodamientos de Camión", href: "/productos/camion" },
      { name: "Rodamientos Especiales", href: "/productos/especiales" }
    ],
    company: [
      { name: "Acerca de FSKG", href: "/acerca" },
      { name: "Nuestra Historia", href: "/historia" },
      { name: "Certificaciones", href: "/certificaciones" },
      { name: "Instalaciones", href: "/instalaciones" }
    ],
    support: [
      { name: "Soporte Técnico", href: "/soporte" },
      { name: "Catálogo de Productos", href: "/catalogo" },
      { name: "Guías de Instalación", href: "/guias" },
      { name: "Preguntas Frecuentes", href: "/faq" }
    ],
    legal: [
      { name: "Términos y Condiciones", href: "/terminos" },
      { name: "Política de Privacidad", href: "/privacidad" },
      { name: "Política de Calidad", href: "/calidad" },
      { name: "Garantías", href: "/garantias" }
    ]
  },
  social: [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/fskg",
      icon: "💼"
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/8651082713083",
      icon: "💬"
    },
    {
      name: "Email",
      href: "mailto:info@fskg.com",
      icon: "📧"
    }
  ],
  certifications: [
    "ISO 9001:2015",
    "CE Certified",
    "25 Years Experience",
    "Quality Guaranteed"
  ],
  copyright: "© 2024 FSKG Industrial Bearings Co., Ltd. Todos los derechos reservados."
}
