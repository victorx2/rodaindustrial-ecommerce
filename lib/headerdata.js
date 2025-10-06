// lib/headerData.js - Modelo (siguiendo MVC de Vic Dev)
export const headerData = {
  company: {
    name: "FSKG",
    fullName: "FSKG Industrial Bearings Co., Ltd",
    email: "fskbearing@hotmail.com",
    phone: "86-510-82713083",
    address: "No. 220 Middle Renmin Road, Liangxi District, Wuxi, Jiangsu, China"
  },
  navigation: [
    { name: "HOME", href: "/", active: true },
    { name: "PRODUCTOS", href: "/productos", dropdown: true },
    { name: "VIDEOS", href: "/videos" },
    { name: "ACERCA DE", href: "/acerca", dropdown: true },
    { name: "NOTICIAS", href: "/noticias" },
    { name: "CASOS", href: "/casos" }
  ],
  cta: {
    text: "Obtener Mejor Precio",
    href: "/cotizacion"
  }
}