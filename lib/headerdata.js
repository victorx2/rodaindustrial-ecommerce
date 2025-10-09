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
  },
  search: {
    placeholder: "Buscar rodamientos, modelos, categorías...",
    buttonText: "Buscar",
    categories: [
      "Rodamientos de bolas",
      "Rodamientos de rodillos",
      "Rodamientos cónicos",
      "Rodamientos axiales",
      "Rodamientos automotrices",
      "Rodamientos industriales"
    ]
  },

  languages: {
    current: "es",
    available: [
      { 
        name: "Español", 
        code: "es", 
        flag: "🇪🇸",
        nativeName: "Español",
        searchTerms: ["español", "spanish", "españo", "esp"]
      },
      { 
        name: "English", 
        code: "en", 
        flag: "🇺🇸",
        nativeName: "English",
        searchTerms: ["english", "inglés", "eng", "en"]
      },
      { 
        name: "Français", 
        code: "fr", 
        flag: "🇫🇷",
        nativeName: "Français",
        searchTerms: ["français", "french", "fran", "fr"]
      },
      { 
        name: "Deutsch", 
        code: "de", 
        flag: "🇩🇪",
        nativeName: "Deutsch",
        searchTerms: ["deutsch", "german", "alemán", "deut", "de"]
      },
      { 
        name: "Italiano", 
        code: "it", 
        flag: "🇮🇹",
        nativeName: "Italiano",
        searchTerms: ["italiano", "italian", "ital", "it"]
      },
      { 
        name: "Português", 
        code: "pt", 
        flag: "🇵🇹",
        nativeName: "Português",
        searchTerms: ["português", "portuguese", "portugués", "port", "pt"]
      }
    ]
  }


  /* languages: [ */
  /*   { name: "Español", code: "es" }, */
  /*   { name: "English", code: "en" } */
  /* ], */

  /* search: { */
  /*   placeholder: "Buscar productos", */
  /*   href: "/buscar" */
  /* } */
}