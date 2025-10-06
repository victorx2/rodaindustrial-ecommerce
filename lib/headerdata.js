// lib/headerData.js - Modelo (siguiendo MVC de Vic Dev)
export const headerData = {
  company: {
    name: "FSKG",
    fullName: "FSKG Industrial Bearings Co., Ltd",
    email: "info@fskg.com",
    phone: "+86-510-82713083",
    address: "No. 220 Industrial Road, FSKG District, China"
  },
  navigation: [
    { name: "HOME", href: "/", active: true },
    { name: "PRODUCTOS", href: "/productos", dropdown: true },
    { name: "ACERCA DE", href: "/acerca", dropdown: true },
    { name: "PROYECTOS", href: "/proyectos" },
    { name: "CONTACTO", href: "/contacto" }
  ],
  cta: {
    text: "Solicitar Cotización",
    href: "/cotizacion"
  }
}