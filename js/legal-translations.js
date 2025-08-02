const legalTranslations = {
    es: {
        // Navigation
        nav: {
            home: "Inicio",
            backToSite: "← Volver al Sitio"
        },
        
        // Privacy Page
        privacy: {
            title: "Política de Privacidad - SapiSabe",
            metaDescription: "Política de Privacidad de SapiSabe - Cómo protegemos y utilizamos la información de nuestros usuarios y sus familias.",
            pageTitle: "Política de Privacidad",
            subtitle: "Tu privacidad y la de tus hijos es nuestra máxima prioridad. Conoce cómo protegemos y utilizamos tu información.",
            lastUpdated: "Última actualización: 15 de enero de 2024",
            
            sections: {
                introduction: {
                    title: "Introducción",
                    content: "En SapiSabe, entendemos la importancia de proteger la privacidad de las familias, especialmente cuando se trata de niños. Esta política explica cómo recopilamos, utilizamos y protegemos tu información personal y la de tus hijos cuando utilizas nuestra aplicación de aprendizaje con inteligencia artificial."
                },
                dataCollection: {
                    title: "Información que Recopilamos",
                    userInfo: "Información del Usuario:",
                    userInfoItems: [
                        "Información de registro: Email, nombre completo (solo para padres)",
                        "Perfiles infantiles: Nombre, edad, preferencias de aprendizaje",
                        "Fotografías: Imágenes capturadas para análisis con IA",
                        "Datos de uso: Historial de análisis, preferencias de la app"
                    ],
                    technicalInfo: "Información Técnica:",
                    technicalInfoItems: [
                        "Dispositivo: Tipo de dispositivo, sistema operativo, versión de la app",
                        "Uso de la app: Funciones utilizadas, tiempo de uso, errores",
                        "Conectividad: Estado de conexión, calidad de red"
                    ]
                },
                dataUsage: {
                    title: "Cómo Utilizamos la Información",
                    serviceUsage: "Para Proporcionar el Servicio:",
                    serviceUsageItems: [
                        "Análisis de imágenes con OpenAI Vision para identificar objetos y lugares",
                        "Personalización de respuestas según la edad del niño",
                        "Gestión de perfiles familiares y historial de análisis",
                        "Mejora continua de la experiencia de usuario"
                    ],
                    security: "Para la Seguridad:",
                    securityItems: [
                        "Detección y prevención de uso fraudulento",
                        "Protección contra spam y contenido inapropiado",
                        "Mantenimiento de la integridad de la plataforma"
                    ]
                },
                dataSharing: {
                    title: "Compartir Información",
                    noSelling: "No vendemos, alquilamos ni compartimos información personal con terceros con fines comerciales.",
                    sharingCases: "Compartimos información solo en estos casos:",
                    sharingItems: [
                        "Proveedores de servicios: OpenAI (análisis de imágenes), Supabase (almacenamiento)",
                        "Cumplimiento legal: Cuando lo requiera la ley o autoridades competentes",
                        "Seguridad: Para proteger nuestros derechos, propiedad o seguridad"
                    ],
                    childrenProtection: "Protección Especial para Niños: Nunca compartimos información personal de niños con terceros sin consentimiento parental explícito."
                },
                dataSecurity: {
                    title: "Seguridad de Datos",
                    measures: "Medidas de Seguridad Implementadas:",
                    measureItems: [
                        "Cifrado: Todos los datos se transmiten y almacenan cifrados",
                        "Acceso restringido: Solo personal autorizado puede acceder a datos personales",
                        "Auditorías regulares: Revisamos periódicamente nuestras medidas de seguridad",
                        "Backups seguros: Copias de seguridad encriptadas"
                    ],
                    disclaimer: "A pesar de nuestras medidas de seguridad, ningún sistema es 100% seguro. Te notificaremos inmediatamente si detectamos cualquier violación de seguridad que pueda afectar tu información personal."
                },
                dataRetention: {
                    title: "Retención de Datos",
                    periods: "Períodos de Retención:",
                    periodItems: [
                        "Datos de cuenta: Mientras mantengas tu cuenta activa",
                        "Fotografías: 30 días después del análisis (para mejorar el servicio)",
                        "Datos de uso: 2 años para análisis y mejoras",
                        "Datos de facturación: Según requerimientos legales (7 años)"
                    ],
                    deletion: "Puedes solicitar la eliminación de tus datos en cualquier momento a través de la configuración de la app o contactándonos directamente."
                },
                internationalTransfers: {
                    title: "Transferencias Internacionales",
                    content: "Nuestros servicios utilizan proveedores ubicados en diferentes países. Todas las transferencias internacionales de datos se realizan con las garantías adecuadas según el GDPR y otras leyes aplicables.",
                    providers: "Proveedores Principales:",
                    providerItems: [
                        "OpenAI: Estados Unidos (análisis de imágenes)",
                        "Supabase: Unión Europea (almacenamiento de datos)",
                        "Servicios de hosting: Varias ubicaciones para optimizar rendimiento"
                    ]
                },
                rights: {
                    title: "Tus Derechos",
                    description: "Derechos que Tienes:",
                    rightItems: [
                        "Acceso: Solicitar información sobre los datos que tenemos sobre ti",
                        "Rectificación: Corregir datos inexactos o incompletos",
                        "Eliminación: Solicitar la eliminación de tus datos personales",
                        "Portabilidad: Recibir tus datos en formato estructurado",
                        "Oposición: Oponerte al procesamiento de tus datos"
                    ],
                    exerciseRights: "Para ejercer estos derechos, contacta con nosotros a través de los medios indicados al final de esta política."
                },
                cookies: {
                    title: "Cookies y Tecnologías Similares",
                    content: "Nuestra aplicación móvil puede utilizar tecnologías similares a las cookies para mejorar la experiencia del usuario y analizar el uso de la aplicación.",
                    types: "Tipos de Tecnologías Utilizadas:",
                    typeItems: [
                        "Almacenamiento local: Para guardar preferencias y datos de sesión",
                        "Analytics: Para entender cómo se usa la aplicación",
                        "Publicidad: Para mostrar contenido relevante (solo en versión gratuita)"
                    ]
                },
                changes: {
                    title: "Cambios en esta Política",
                    content: "Podemos actualizar esta Política de Privacidad ocasionalmente. Te notificaremos sobre cambios significativos a través de:",
                    methods: [
                        "Notificación en la aplicación",
                        "Email a la dirección registrada",
                        "Actualización de la fecha en esta página"
                    ],
                    recommendation: "Te recomendamos revisar esta política periódicamente para mantenerte informado sobre cómo protegemos tu información."
                },
                contact: {
                    title: "Contacto",
                    description: "Si tienes preguntas sobre esta política de privacidad o el manejo de tus datos:",
                    email: "Email: privacy@sapisabe.com",
                    subject: "Asunto: Consulta sobre Política de Privacidad",
                    response: "Tiempo de respuesta: 48 horas hábiles"
                }
            }
        },
        
        // Terms Page
        terms: {
            title: "Términos de Uso - SapiSabe",
            metaDescription: "Términos de Uso de SapiSabe - Condiciones y reglas para el uso de nuestra aplicación educativa.",
            pageTitle: "Términos de Uso",
            subtitle: "Al usar SapiSabe, aceptas estos términos y condiciones. Te recomendamos leerlos cuidadosamente.",
            lastUpdated: "Última actualización: Agosto 2025",
            
            sections: {
                acceptance: {
                    title: "Aceptación de Términos",
                    content: "Al descargar, instalar o usar la aplicación SapiSabe, aceptas estar sujeto a estos Términos de Uso. Si no estás de acuerdo con alguna parte de estos términos, no debes usar nuestra aplicación."
                },
                service: {
                    title: "Descripción del Servicio",
                    content: "SapiSabe es una aplicación educativa que utiliza inteligencia artificial para analizar fotografías y proporcionar explicaciones adaptadas a la edad del usuario. El servicio incluye:",
                    features: [
                        "Análisis de imágenes con OpenAI Vision",
                        "Creación de perfiles familiares",
                        "Historial de análisis",
                        "Funciones de texto a voz",
                        "Contenido educativo personalizado"
                    ]
                },
                accounts: {
                    title: "Registro y Cuentas",
                    requirements: "Requisitos de Registro:",
                    responsibilities: [
                        "Debes tener al menos 18 años para crear una cuenta",
                        "Proporcionar información veraz y actualizada",
                        "Mantener la confidencialidad de tus credenciales",
                        "Notificar inmediatamente cualquier uso no autorizado"
                    ],
                    restrictions: "Responsabilidades de la Cuenta:",
                    restrictionItems: [
                        "Eres responsable de toda actividad en tu cuenta",
                        "No compartir tu cuenta con terceros",
                        "Mantener actualizada tu información de contacto"
                    ]
                },
                usage: {
                    title: "Uso Aceptable",
                    allowed: "Puedes usar SapiSabe para:",
                    allowedItems: [
                        "Fotografiar objetos y lugares para análisis educativo",
                        "Crear perfiles para niños bajo tu supervisión",
                        "Compartir resultados educativos con familiares",
                        "Usar el contenido para aprendizaje personal"
                    ],
                    prohibited: "Uso Prohibido:",
                    prohibitedItems: [
                        "Fotografiar contenido inapropiado o ilegal",
                        "Violar derechos de propiedad intelectual",
                        "Intentar hackear o comprometer la seguridad",
                        "Usar la app para fines comerciales sin autorización",
                        "Compartir contenido ofensivo o dañino"
                    ]
                },
                payment: {
                    title: "Pagos y Suscripciones",
                    freeTier: "Nivel Gratuito:",
                    freeTierItems: [
                        "3 análisis diarios gratuitos",
                        "Funcionalidades básicas",
                        "Sin compromiso de registro"
                    ],
                    premium: "Suscripción Premium:",
                    premiumItems: [
                        "Análisis ilimitados",
                        "Perfiles familiares múltiples",
                        "Historial extendido",
                        "Funciones premium exclusivas"
                    ],
                    billing: "Los pagos se procesan de forma segura y se renuevan automáticamente según el plan seleccionado."
                },
                intellectual: {
                    title: "Propiedad Intelectual",
                    ourRights: "Nuestros Derechos:",
                    ourRightItems: [
                        "La aplicación y su contenido son propiedad de SapiSabe",
                        "El diseño, código y funcionalidades están protegidos",
                        "Los análisis generados por IA son para uso educativo"
                    ],
                    yourRights: "Tus Derechos:",
                    yourRightItems: [
                        "Puedes usar los análisis para fines educativos",
                        "Puedes compartir resultados con familiares",
                        "Conservas derechos sobre tus fotografías originales"
                    ],
                    limitations: "Limitaciones:",
                    limitationsText: "No puedes reproducir, distribuir o crear obras derivadas de nuestra aplicación sin permiso explícito."
                },
                privacy: {
                    title: "Privacidad y Datos",
                    content: "El uso de SapiSabe está sujeto a nuestra Política de Privacidad, que forma parte integral de estos términos. Al usar la aplicación, aceptas:",
                    acceptanceItems: [
                        "La recopilación y procesamiento de datos según nuestra política",
                        "El uso de cookies y tecnologías similares",
                        "La transferencia de datos a proveedores de servicios",
                        "El almacenamiento seguro de información personal"
                    ]
                },
                limitation: {
                    title: "Limitación de Responsabilidad",
                    warranty: "Exclusiones de Garantía:",
                    warrantyItems: [
                        "La aplicación se proporciona \"tal como está\"",
                        "No garantizamos disponibilidad continua del servicio",
                        "Los análisis de IA pueden contener errores",
                        "No somos responsables por decisiones basadas en los análisis"
                    ],
                    damages: "Limitación de Daños:",
                    damageItems: [
                        "No seremos responsables por daños indirectos",
                        "La responsabilidad total está limitada al monto pagado por el servicio",
                        "No cubrimos daños por uso incorrecto de la aplicación"
                    ]
                },
                termination: {
                    title: "Terminación",
                    reasons: "Podemos terminar tu acceso si:",
                    reasonItems: [
                        "Violas estos términos de uso",
                        "Usas la aplicación de manera inapropiada",
                        "Intentas comprometer la seguridad",
                        "No pagas las tarifas aplicables"
                    ],
                    effects: "Efectos de la Terminación:",
                    effectItems: [
                        "Pérdida inmediata del acceso a la aplicación",
                        "Eliminación de datos según nuestra política de privacidad",
                        "Cesación de todos los derechos de licencia"
                    ]
                },
                changes: {
                    title: "Modificaciones",
                    content: "Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación.",
                    notification: "Notificación de Cambios:",
                    notificationItems: [
                        "Te notificaremos cambios significativos por email",
                        "Los cambios se publicarán en esta página",
                        "El uso continuado constituye aceptación de los nuevos términos"
                    ]
                },
                law: {
                    title: "Ley Aplicable",
                    content: "Estos términos se rigen por las leyes de España. Cualquier disputa será resuelta en los tribunales competentes de Madrid, España.",
                    disputes: "Resolución de Disputas:",
                    disputeItems: [
                        "Intentaremos resolver disputas amistosamente",
                        "En caso de no acuerdo, se aplicará la ley española",
                        "Los tribunales de Madrid tendrán jurisdicción exclusiva"
                    ]
                },
                contact: {
                    title: "Contacto",
                    description: "Si tienes preguntas sobre estos términos, contáctanos:",
                    info: "Información de Contacto",
                    email: "Email: legal@sapisabe.com",
                    subject: "Asunto: Consulta sobre Términos de Uso",
                    response: "Tiempo de respuesta: 72 horas hábiles"
                }
            }
        },
        
        // Cookies Page
        cookies: {
            title: "Política de Cookies - SapiSabe",
            metaDescription: "Política de Cookies de SapiSabe - Información sobre cómo utilizamos las cookies y tecnologías similares.",
            pageTitle: "Política de Cookies",
            subtitle: "Utilizamos cookies para mejorar tu experiencia en SapiSabe. Aquí te explicamos qué son y cómo las usamos.",
            lastUpdated: "Última actualización: Agosto 2025",
            
            sections: {
                whatAre: {
                    title: "¿Qué son las Cookies?",
                    content: "Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web o usas una aplicación. En SapiSabe, utilizamos tecnologías similares a las cookies para mejorar tu experiencia y proporcionar funcionalidades esenciales."
                },
                types: {
                    title: "Tipos de Tecnologías que Utilizamos",
                    local: "1. Almacenamiento Local (AsyncStorage)",
                    localItems: [
                        "Propósito: Guardar preferencias de usuario, datos de sesión y configuración",
                        "Duración: Persiste hasta que el usuario elimine la app o los datos",
                        "Ejemplos: Configuración de voz, preferencias de idioma, historial local"
                    ],
                    performance: "2. Analytics y Rendimiento",
                    performanceItems: [
                        "Propósito: Analizar el uso de la aplicación y mejorar el rendimiento",
                        "Duración: Según la configuración del proveedor",
                        "Ejemplos: Métricas de uso, errores de la aplicación, tiempo de respuesta"
                    ],
                    essential: "3. Funcionalidad Esencial",
                    essentialItems: [
                        "Propósito: Proporcionar funciones básicas de la aplicación",
                        "Duración: Sesión o persistente según la función",
                        "Ejemplos: Estado de autenticación, preferencias de cámara, configuración de IA"
                    ]
                },
                detail: {
                    title: "Detalle de Tecnologías Utilizadas",
                    tableHeaders: ["Nombre", "Propósito", "Duración", "Obligatorio"],
                    tableData: [
                        { purpose: "Preferencias de usuario y configuración", duration: "Persistente", required: "Sí" },
                        { purpose: "Estado de autenticación del usuario", duration: "Sesión", required: "Sí" },
                        { purpose: "Configuración de cámara y flash", duration: "Persistente", required: "No" },
                        { purpose: "Configuración de texto a voz", duration: "Persistente", required: "No" },
                        { purpose: "Métricas de uso para mejorar la app", duration: "30 días", required: "No" },
                        { purpose: "Registro de errores para debugging", duration: "7 días", required: "Sí" }
                    ]
                },
                childProtection: {
                    title: "Protección de Datos Infantiles",
                    content: "Como aplicación dirigida a niños, cumplimos estrictamente con las leyes de protección de datos infantiles:",
                    laws: [
                        "COPPA (Children's Online Privacy Protection Act): Cumplimiento total con las regulaciones estadounidenses",
                        "GDPR (General Data Protection Regulation): Protección especial para menores de 16 años",
                        "Consentimiento Parental: Requerido para usuarios menores de 13 años",
                        "Datos Mínimos: Solo recopilamos información esencial para el funcionamiento"
                    ],
                    commitment: "Compromiso Especial:",
                    commitmentText: "No utilizamos tecnologías de seguimiento para usuarios infantiles sin consentimiento parental explícito."
                },
                thirdParty: {
                    title: "Terceros y Proveedores",
                    content: "Utilizamos servicios de terceros que pueden establecer sus propias cookies:",
                    providers: [
                        "OpenAI: Análisis de imágenes (no almacena datos permanentemente)",
                        "Supabase: Almacenamiento de datos (cumple GDPR)",
                        "Expo: Analytics de rendimiento (opcional)"
                    ]
                },
                control: {
                    title: "Control y Gestión",
                    content: "Cómo Controlar las Tecnologías:",
                    methods: [
                        "Configuración de la App: Puedes desactivar analytics en Configuración > Privacidad",
                        "Eliminación de Datos: Opción disponible en Configuración > Datos",
                        "Desinstalación: Eliminar la app también elimina todos los datos locales"
                    ],
                    defaults: "Configuración por Defecto:",
                    defaultItems: [
                        "Analytics: Activado por defecto (se puede desactivar)",
                        "Funcionalidad: Tecnologías esenciales siempre activas",
                        "Personalización: Opcional y controlable por el usuario"
                    ]
                },
                thirdParty: {
                    title: "Terceros y Proveedores",
                    serviceProviders: "Proveedores de Servicios:",
                    providers: [
                        "OpenAI: Análisis de imágenes (no almacena datos permanentemente)",
                        "Supabase: Almacenamiento de datos (cumple GDPR)",
                        "Expo: Analytics de rendimiento (opcional)"
                    ],
                    policies: "Políticas de Terceros:",
                    policyItems: [
                        "Todos nuestros proveedores cumplen con estándares de privacidad",
                        "No compartimos datos con terceros para publicidad",
                        "Los datos se procesan según nuestras políticas"
                    ]
                },
                duration: {
                    title: "Duración de las Cookies",
                    session: "Cookies de Sesión: Se eliminan cuando cierras la app",
                    persistent: "Cookies Persistentes:",
                    persistentItems: [
                        "Preferencias: 1 año",
                        "Configuración: 6 meses",
                        "Análisis: 2 años"
                    ]
                },
                updates: {
                    title: "Actualizaciones de la Política",
                    content: "Esta política puede actualizarse ocasionalmente para reflejar cambios en nuestras prácticas o regulaciones legales.",
                    notification: "Notificación de Cambios:",
                    notificationItems: [
                        "Te notificaremos cambios significativos por email",
                        "Los cambios se publicarán en esta página",
                        "La fecha de \"Última actualización\" se modificará",
                        "El uso continuado constituye aceptación de los cambios"
                    ]
                },
                faq: {
                    title: "Preguntas Frecuentes",
                    questions: [
                        {
                            question: "¿Puedo desactivar todas las tecnologías?",
                            answer: "No, las tecnologías esenciales son necesarias para el funcionamiento básico de la aplicación. Sin embargo, puedes desactivar las opcionales."
                        },
                        {
                            question: "¿Los datos se comparten con terceros?",
                            answer: "Solo con nuestros proveedores de servicios esenciales (OpenAI, Supabase) y siempre según nuestras políticas de privacidad."
                        },
                        {
                            question: "¿Cómo afecta esto a los niños?",
                            answer: "Implementamos protecciones especiales para usuarios infantiles y requerimos consentimiento parental para menores de 13 años."
                        },
                        {
                            question: "¿Puedo eliminar mis datos?",
                            answer: "Sí, puedes eliminar todos tus datos desde la configuración de la aplicación o contactándonos directamente."
                        }
                    ]
                },
                contact: {
                    title: "Contacto",
                    email: "Email: privacy@sapisabe.com",
                    subject: "Asunto: Consulta sobre Política de Cookies",
                    response: "Tiempo de respuesta: 48 horas hábiles"
                }
            }
        },
        
        // Legal Page
        legal: {
            title: "Información Legal - SapiSabe",
            metaDescription: "Información legal de SapiSabe - Datos corporativos, licencias y información reglamentaria.",
            pageTitle: "Información Legal",
            subtitle: "Información corporativa, licencias y cumplimiento legal de SapiSabe.",
            lastUpdated: "Última actualización: 15 de enero de 2024",
            
            sections: {
                company: {
                    title: "Información de la Empresa",
                    name: "Nombre: SapiSabe Technologies S.L.",
                    address: "Dirección: [Dirección completa]",
                    tax: "CIF: [Número de identificación fiscal]",
                    registry: "Registro Mercantil: [Información del registro]",
                    contact: "Contacto: legal@sapisabe.com"
                },
                licenses: {
                    title: "Licencias y Cumplimiento",
                    dataProtection: "Protección de Datos:",
                    dataItems: [
                        "Cumplimiento con GDPR (Reglamento General de Protección de Datos)",
                        "Inscrito en el registro de actividades de tratamiento",
                        "Delegado de Protección de Datos designado"
                    ],
                    children: "Protección de Menores:",
                    childrenItems: [
                        "Cumplimiento con COPPA (Children's Online Privacy Protection Act)",
                        "Verificación de edad para crear cuentas",
                        "Consentimiento parental requerido para menores de 13 años"
                    ]
                },
                thirdParty: {
                    title: "Servicios de Terceros",
                    ai: "Servicios de IA:",
                    aiItems: [
                        "OpenAI API: Análisis de imágenes y generación de contenido",
                        "Cumple con políticas de uso responsable de IA",
                        "Datos procesados según términos de OpenAI"
                    ],
                    infrastructure: "Infraestructura:",
                    infraItems: [
                        "Supabase: Base de datos y autenticación",
                        "Servicios alojados en la Unión Europea",
                        "Certificaciones de seguridad SOC 2 Type II"
                    ]
                },
                compliance: {
                    title: "Cumplimiento Normativo",
                    standards: "Estándares Implementados:",
                    standardItems: [
                        "ISO 27001: Gestión de seguridad de la información",
                        "OWASP: Mejores prácticas de seguridad web",
                        "PCI DSS: Seguridad en el procesamiento de pagos"
                    ]
                },
                jurisdiction: {
                    title: "Jurisdicción y Resolución de Disputas",
                    content: "Esta aplicación se rige por las leyes españolas. Cualquier disputa legal se resolverá en los tribunales competentes de Madrid, España.",
                    mediation: "Para disputas menores, promovemos la mediación como primer paso antes de proceder judicialmente."
                },
                accessibility: {
                    title: "Accesibilidad",
                    content: "SapiSabe se compromete a cumplir con las pautas de accesibilidad WCAG 2.1 nivel AA. Trabajamos continuamente para mejorar la accesibilidad de nuestra aplicación.",
                    contact: "Si encuentras problemas de accesibilidad, contáctanos en accessibility@sapisabe.com"
                },
                open: {
                    title: "Código Abierto y Licencias",
                    content: "SapiSabe utiliza varias bibliotecas de código abierto. Una lista completa de licencias está disponible en la configuración de la aplicación.",
                    attribution: "Agradecemos a la comunidad de código abierto por hacer posible esta aplicación."
                }
            }
        }
    },
    
    en: {
        // Navigation
        nav: {
            home: "Home",
            backToSite: "← Back to Site"
        },
        
        // Privacy Page
        privacy: {
            title: "Privacy Policy - SapiSabe",
            metaDescription: "SapiSabe Privacy Policy - How we protect and use information from our users and their families.",
            pageTitle: "Privacy Policy",
            subtitle: "Your privacy and your children's privacy is our top priority. Learn how we protect and use your information.",
            lastUpdated: "Last updated: January 15, 2024",
            
            sections: {
                introduction: {
                    title: "Introduction",
                    content: "At SapiSabe, we understand the importance of protecting family privacy, especially when it comes to children. This policy explains how we collect, use and protect your personal information and that of your children when you use our artificial intelligence learning application."
                },
                dataCollection: {
                    title: "Information We Collect",
                    userInfo: "User Information:",
                    userInfoItems: [
                        "Registration information: Email, full name (parents only)",
                        "Children's profiles: Name, age, learning preferences",
                        "Photographs: Images captured for AI analysis",
                        "Usage data: Analysis history, app preferences"
                    ],
                    technicalInfo: "Technical Information:",
                    technicalInfoItems: [
                        "Device: Device type, operating system, app version",
                        "App usage: Features used, usage time, errors",
                        "Connectivity: Connection status, network quality"
                    ]
                },
                dataUsage: {
                    title: "How We Use Information",
                    serviceUsage: "To Provide the Service:",
                    serviceUsageItems: [
                        "Image analysis with OpenAI Vision to identify objects and places",
                        "Personalization of responses according to child's age",
                        "Management of family profiles and analysis history",
                        "Continuous improvement of user experience"
                    ],
                    security: "For Security:",
                    securityItems: [
                        "Detection and prevention of fraudulent use",
                        "Protection against spam and inappropriate content",
                        "Maintaining platform integrity"
                    ]
                },
                dataSharing: {
                    title: "Information Sharing",
                    noSelling: "We do not sell, rent or share personal information with third parties for commercial purposes.",
                    sharingCases: "We share information only in these cases:",
                    sharingItems: [
                        "Service providers: OpenAI (image analysis), Supabase (storage)",
                        "Legal compliance: When required by law or competent authorities",
                        "Security: To protect our rights, property or safety"
                    ],
                    childrenProtection: "Special Protection for Children: We never share children's personal information with third parties without explicit parental consent."
                },
                dataSecurity: {
                    title: "Data Security",
                    measures: "Implemented Security Measures:",
                    measureItems: [
                        "Encryption: All data is transmitted and stored encrypted",
                        "Restricted access: Only authorized personnel can access personal data",
                        "Regular audits: We periodically review our security measures",
                        "Secure backups: Encrypted backup copies"
                    ],
                    disclaimer: "Despite our security measures, no system is 100% secure. We will notify you immediately if we detect any security breach that may affect your personal information."
                },
                dataRetention: {
                    title: "Data Retention",
                    periods: "Retention Periods:",
                    periodItems: [
                        "Account data: While you keep your account active",
                        "Photographs: 30 days after analysis (to improve service)",
                        "Usage data: 2 years for analysis and improvements",
                        "Billing data: According to legal requirements (7 years)"
                    ],
                    deletion: "You can request deletion of your data at any time through app settings or by contacting us directly."
                },
                internationalTransfers: {
                    title: "International Transfers",
                    content: "Our services use providers located in different countries. All international data transfers are carried out with adequate guarantees according to GDPR and other applicable laws.",
                    providers: "Main Providers:",
                    providerItems: [
                        "OpenAI: United States (image analysis)",
                        "Supabase: European Union (data storage)",
                        "Hosting services: Various locations to optimize performance"
                    ]
                },
                rights: {
                    title: "Your Rights",
                    description: "Rights You Have:",
                    rightItems: [
                        "Access: Request information about the data we have about you",
                        "Rectification: Correct inaccurate or incomplete data",
                        "Deletion: Request deletion of your personal data",
                        "Portability: Receive your data in structured format",
                        "Opposition: Object to the processing of your data"
                    ],
                    exerciseRights: "To exercise these rights, contact us through the means indicated at the end of this policy."
                },
                cookies: {
                    title: "Cookies and Similar Technologies",
                    content: "Our mobile application may use technologies similar to cookies to improve user experience and analyze application usage.",
                    types: "Types of Technologies Used:",
                    typeItems: [
                        "Local storage: To save preferences and session data",
                        "Analytics: To understand how the application is used",
                        "Advertising: To show relevant content (free version only)"
                    ]
                },
                changes: {
                    title: "Changes to this Policy",
                    content: "We may update this Privacy Policy occasionally. We will notify you of significant changes through:",
                    methods: [
                        "In-app notification",
                        "Email to registered address",
                        "Date update on this page"
                    ],
                    recommendation: "We recommend reviewing this policy periodically to stay informed about how we protect your information."
                },
                contact: {
                    title: "Contact",
                    description: "If you have questions about this privacy policy or handling of your data:",
                    email: "Email: privacy@sapisabe.com",
                    subject: "Subject: Privacy Policy Inquiry",
                    response: "Response time: 48 business hours"
                }
            }
        },
        
        // Terms Page
        terms: {
            title: "Terms of Use - SapiSabe",
            metaDescription: "SapiSabe Terms of Use - Rules and conditions for using our educational application.",
            pageTitle: "Terms of Use",
            subtitle: "By using SapiSabe, you accept these terms and conditions. We recommend reading them carefully.",
            lastUpdated: "Last updated: August 2025",
            
            sections: {
                acceptance: {
                    title: "Acceptance of Terms",
                    content: "By downloading, installing or using the SapiSabe application, you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, you should not use our application."
                },
                service: {
                    title: "Service Description",
                    content: "SapiSabe is an educational application that uses artificial intelligence to analyze photographs and provide explanations adapted to the user's age. The service includes:",
                    features: [
                        "Image analysis with OpenAI Vision",
                        "Creation of family profiles",
                        "Analysis history",
                        "Text-to-speech functions",
                        "Personalized educational content"
                    ]
                },
                accounts: {
                    title: "Registration and Accounts",
                    requirements: "Registration Requirements:",
                    responsibilities: [
                        "You must be at least 18 years old to create an account",
                        "Providing truthful and updated information",
                        "Maintaining the confidentiality of your credentials",
                        "Immediately reporting any unauthorized use"
                    ],
                    restrictions: "Account Responsibilities:",
                    restrictionItems: [
                        "You are responsible for all activity on your account",
                        "Do not share your account with third parties",
                        "Keep your contact information updated"
                    ]
                },
                usage: {
                    title: "Acceptable Use",
                    allowed: "You can use SapiSabe for:",
                    allowedItems: [
                        "Photographing objects and places for educational analysis",
                        "Creating profiles for children under your supervision",
                        "Sharing educational results with family members",
                        "Using content for personal learning"
                    ],
                    prohibited: "Prohibited Use:",
                    prohibitedItems: [
                        "Photographing inappropriate or illegal content",
                        "Violating intellectual property rights",
                        "Attempting to hack or compromise security",
                        "Using the app for commercial purposes without authorization",
                        "Sharing offensive or harmful content"
                    ]
                },
                payment: {
                    title: "Payments and Subscriptions",
                    freeTier: "Free Tier:",
                    freeTierItems: [
                        "3 daily free analyses",
                        "Basic functionalities",
                        "No registration commitment"
                    ],
                    premium: "Premium Subscription:",
                    premiumItems: [
                        "Unlimited analyses",
                        "Multiple family profiles",
                        "Extended history",
                        "Exclusive premium features"
                    ],
                    billing: "Payments are processed securely and renewed automatically according to the selected plan."
                },
                intellectual: {
                    title: "Intellectual Property",
                    ourRights: "Our Rights:",
                    ourRightItems: [
                        "The application and its content are owned by SapiSabe",
                        "Design, code and functionalities are protected",
                        "AI-generated analysis is for educational use"
                    ],
                    yourRights: "Your Rights:",
                    yourRightItems: [
                        "You can use analysis for educational purposes",
                        "You can share results with family members",
                        "You retain rights to your original photographs"
                    ],
                    limitations: "Limitations:",
                    limitationsText: "You cannot reproduce, distribute or create derivative works of our application without explicit permission."
                },
                privacy: {
                    title: "Privacy and Data",
                    content: "The use of SapiSabe is subject to our Privacy Policy, which forms an integral part of these terms. By using the application, you accept:",
                    acceptanceItems: [
                        "Data collection and processing according to our policy",
                        "The use of cookies and similar technologies",
                        "Data transfer to service providers",
                        "Secure storage of personal information"
                    ]
                },
                limitation: {
                    title: "Limitation of Liability",
                    warranty: "Warranty Exclusions:",
                    warrantyItems: [
                        "The application is provided \"as is\"",
                        "We do not guarantee continuous service availability",
                        "AI analysis may contain errors",
                        "We are not responsible for decisions based on analysis"
                    ],
                    damages: "Damage Limitation:",
                    damageItems: [
                        "We will not be responsible for indirect damages",
                        "Total liability is limited to the amount paid for the service",
                        "We do not cover damages from incorrect use of the application"
                    ]
                },
                termination: {
                    title: "Termination",
                    reasons: "We may terminate your access if:",
                    reasonItems: [
                        "You violate these terms of use",
                        "You use the application inappropriately",
                        "You attempt to compromise security",
                        "You don't pay applicable fees"
                    ],
                    effects: "Effects of Termination:",
                    effectItems: [
                        "Immediate loss of access to the application",
                        "Data deletion according to our privacy policy",
                        "Cessation of all license rights"
                    ]
                },
                changes: {
                    title: "Modifications",
                    content: "We reserve the right to modify these terms at any time. Changes will take effect immediately after publication.",
                    notification: "Change Notification:",
                    notificationItems: [
                        "We will notify you of significant changes by email",
                        "Changes will be posted on this page",
                        "Continued use constitutes acceptance of new terms"
                    ]
                },
                law: {
                    title: "Applicable Law",
                    content: "These terms are governed by the laws of Spain. Any dispute will be resolved in the competent courts of Madrid, Spain.",
                    disputes: "Dispute Resolution:",
                    disputeItems: [
                        "We will try to resolve disputes amicably",
                        "In case of disagreement, Spanish law will apply",
                        "Madrid courts will have exclusive jurisdiction"
                    ]
                },
                contact: {
                    title: "Contact",
                    description: "If you have questions about these terms, contact us:",
                    info: "Contact Information",
                    email: "Email: legal@sapisabe.com",
                    subject: "Subject: Terms of Use Inquiry",
                    response: "Response time: 72 business hours"
                }
            }
        },
        
        // Cookies Page
        cookies: {
            title: "Cookie Policy - SapiSabe",
            metaDescription: "SapiSabe Cookie Policy - Information about how we use cookies and similar technologies.",
            pageTitle: "Cookie Policy",
            subtitle: "We use cookies to improve your experience on SapiSabe. Here we explain what they are and how we use them.",
            lastUpdated: "Last updated: August 2025",
            
            sections: {
                whatAre: {
                    title: "What are Cookies?",
                    content: "Cookies are small text files that are stored on your device when you visit a website or use an application. At SapiSabe, we use technologies similar to cookies to improve your experience and provide essential functionalities."
                },
                types: {
                    title: "Types of Technologies We Use",
                    local: "1. Local Storage (AsyncStorage)",
                    localItems: [
                        "Purpose: Save user preferences, session data and configuration",
                        "Duration: Persists until user deletes the app or data",
                        "Examples: Voice settings, language preferences, local history"
                    ],
                    performance: "2. Analytics and Performance",
                    performanceItems: [
                        "Purpose: To analyze app usage and improve performance",
                        "Duration: According to provider configuration",
                        "Examples: Usage metrics, app errors, response time"
                    ],
                    essential: "3. Essential Functionality",
                    essentialItems: [
                        "Purpose: To provide basic app functions",
                        "Duration: Session or persistent depending on function",
                        "Examples: Authentication status, camera preferences, AI configuration"
                    ]
                },
                detail: {
                    title: "Technology Details",
                    tableHeaders: ["Name", "Purpose", "Duration", "Required"],
                    tableData: [
                        { purpose: "User preferences and configuration", duration: "Persistent", required: "Yes" },
                        { purpose: "User authentication status", duration: "Session", required: "Yes" },
                        { purpose: "Camera and flash configuration", duration: "Persistent", required: "No" },
                        { purpose: "Text-to-speech configuration", duration: "Persistent", required: "No" },
                        { purpose: "Usage metrics to improve the app", duration: "30 days", required: "No" },
                        { purpose: "Error logs for debugging", duration: "7 days", required: "Yes" }
                    ]
                },
                childProtection: {
                    title: "Children's Data Protection",
                    content: "As an application aimed at children, we strictly comply with child data protection laws:",
                    laws: [
                        "COPPA (Children's Online Privacy Protection Act): Full compliance with US regulations",
                        "GDPR (General Data Protection Regulation): Special protection for children under 16",
                        "Parental Consent: Required for users under 13 years old",
                        "Minimal Data: We only collect information essential for operation"
                    ],
                    commitment: "Special Commitment:",
                    commitmentText: "We do not use tracking technologies for child users without explicit parental consent."
                },
                thirdParty: {
                    title: "Third Parties and Providers",
                    serviceProviders: "Service Providers:",
                    providers: [
                        "OpenAI: Image analysis (does not store data permanently)",
                        "Supabase: Data storage (GDPR compliant)",
                        "Expo: Performance analytics (optional)"
                    ],
                    policies: "Third Party Policies:",
                    policyItems: [
                        "All our providers comply with privacy standards",
                        "We do not share data with third parties for advertising",
                        "Data is processed according to our policies"
                    ]
                },
                control: {
                    title: "Control and Management",
                    content: "How to Control Technologies:",
                    methods: [
                        "App Settings: You can disable analytics in Settings > Privacy",
                        "Data Deletion: Option available in Settings > Data",
                        "Uninstallation: Removing the app also removes all local data"
                    ],
                    defaults: "Default Configuration:",
                    defaultItems: [
                        "Analytics: Enabled by default (can be disabled)",
                        "Functionality: Essential technologies always active",
                        "Personalization: Optional and user-controllable"
                    ]
                },
                updates: {
                    title: "Policy Updates",
                    content: "This policy may be updated occasionally to reflect changes in our practices or legal regulations.",
                    notification: "Change Notification:",
                    notificationItems: [
                        "We will notify you of significant changes by email",
                        "Changes will be posted on this page",
                        "The \"Last updated\" date will be modified",
                        "Continued use constitutes acceptance of changes"
                    ]
                },
                faq: {
                    title: "Frequently Asked Questions",
                    questions: [
                        {
                            question: "Can I disable all technologies?",
                            answer: "No, essential technologies are necessary for basic app functionality. However, you can disable optional ones."
                        },
                        {
                            question: "Is data shared with third parties?",
                            answer: "Only with our essential service providers (OpenAI, Supabase) and always according to our privacy policies."
                        },
                        {
                            question: "How does this affect children?",
                            answer: "We implement special protections for child users and require parental consent for users under 13."
                        },
                        {
                            question: "Can I delete my data?",
                            answer: "Yes, you can delete all your data from the app settings or by contacting us directly."
                        }
                    ]
                },
                contact: {
                    title: "Contact",
                    email: "Email: privacy@sapisabe.com",
                    subject: "Subject: Cookie Policy Inquiry",
                    response: "Response time: 48 business hours"
                }
            }
        },
        
        // Legal Page
        legal: {
            title: "Legal Information - SapiSabe",
            metaDescription: "SapiSabe legal information - Corporate data, licenses and regulatory information.",
            pageTitle: "Legal Information",
            subtitle: "Corporate information, licenses and legal compliance of SapiSabe.",
            lastUpdated: "Last updated: January 15, 2024",
            
            sections: {
                company: {
                    title: "Company Information",
                    name: "Name: SapiSabe Technologies S.L.",
                    address: "Address: [Complete address]",
                    tax: "Tax ID: [Tax identification number]",
                    registry: "Commercial Registry: [Registry information]",
                    contact: "Contact: legal@sapisabe.com"
                },
                licenses: {
                    title: "Licenses and Compliance",
                    dataProtection: "Data Protection:",
                    dataItems: [
                        "GDPR compliance (General Data Protection Regulation)",
                        "Registered in the processing activities registry",
                        "Data Protection Officer designated"
                    ],
                    children: "Child Protection:",
                    childrenItems: [
                        "COPPA compliance (Children's Online Privacy Protection Act)",
                        "Age verification to create accounts",
                        "Parental consent required for children under 13"
                    ]
                },
                thirdParty: {
                    title: "Third Party Services",
                    ai: "AI Services:",
                    aiItems: [
                        "OpenAI API: Image analysis and content generation",
                        "Complies with responsible AI usage policies",
                        "Data processed according to OpenAI terms"
                    ],
                    infrastructure: "Infrastructure:",
                    infraItems: [
                        "Supabase: Database and authentication",
                        "Services hosted in the European Union",
                        "SOC 2 Type II security certifications"
                    ]
                },
                compliance: {
                    title: "Regulatory Compliance",
                    standards: "Implemented Standards:",
                    standardItems: [
                        "ISO 27001: Information security management",
                        "OWASP: Web security best practices",
                        "PCI DSS: Payment processing security"
                    ]
                },
                jurisdiction: {
                    title: "Jurisdiction and Dispute Resolution",
                    content: "This application is governed by Spanish laws. Any legal dispute will be resolved in the competent courts of Madrid, Spain.",
                    mediation: "For minor disputes, we promote mediation as a first step before proceeding judicially."
                },
                accessibility: {
                    title: "Accessibility",
                    content: "SapiSabe is committed to complying with WCAG 2.1 Level AA accessibility guidelines. We work continuously to improve the accessibility of our application.",
                    contact: "If you encounter accessibility issues, contact us at accessibility@sapisabe.com"
                },
                open: {
                    title: "Open Source and Licenses",
                    content: "SapiSabe uses various open source libraries. A complete list of licenses is available in the application settings.",
                    attribution: "We thank the open source community for making this application possible."
                }
            }
        }
    },
    
    fr: {
        // Navigation
        nav: {
            home: "Accueil",
            backToSite: "← Retour au Site"
        },
        
        // Privacy Page
        privacy: {
            title: "Politique de Confidentialité - SapiSabe",
            metaDescription: "Politique de Confidentialité de SapiSabe - Comment nous protégeons et utilisons les informations de nos utilisateurs et leurs familles.",
            pageTitle: "Politique de Confidentialité",
            subtitle: "Votre vie privée et celle de vos enfants est notre priorité absolue. Découvrez comment nous protégeons et utilisons vos informations.",
            lastUpdated: "Dernière mise à jour : 15 janvier 2024",
            
            sections: {
                introduction: {
                    title: "Introduction",
                    content: "Chez SapiSabe, nous comprenons l'importance de protéger la vie privée des familles, surtout quand il s'agit d'enfants. Cette politique explique comment nous collectons, utilisons et protégeons vos informations personnelles et celles de vos enfants lorsque vous utilisez notre application d'apprentissage avec intelligence artificielle."
                },
                dataCollection: {
                    title: "Informations que Nous Collectons",
                    userInfo: "Informations Utilisateur :",
                    userInfoItems: [
                        "Informations d'inscription : Email, nom complet (parents seulement)",
                        "Profils d'enfants : Nom, âge, préférences d'apprentissage",
                        "Photographies : Images capturées pour l'analyse IA",
                        "Données d'usage : Historique d'analyse, préférences de l'app"
                    ],
                    technicalInfo: "Informations Techniques :",
                    technicalInfoItems: [
                        "Appareil : Type d'appareil, système d'exploitation, version de l'app",
                        "Usage de l'app : Fonctions utilisées, temps d'usage, erreurs",
                        "Connectivité : État de connexion, qualité réseau"
                    ]
                },
                dataUsage: {
                    title: "Comment Nous Utilisons les Informations",
                    serviceUsage: "Pour Fournir le Service :",
                    serviceUsageItems: [
                        "Analyse d'images avec OpenAI Vision pour identifier objets et lieux",
                        "Personnalisation des réponses selon l'âge de l'enfant",
                        "Gestion des profils familiaux et historique d'analyse",
                        "Amélioration continue de l'expérience utilisateur"
                    ],
                    security: "Pour la Sécurité :",
                    securityItems: [
                        "Détection et prévention d'usage frauduleux",
                        "Protection contre spam et contenu inapproprié",
                        "Maintien de l'intégrité de la plateforme"
                    ]
                },
                dataSharing: {
                    title: "Partage d'Informations",
                    noSelling: "Nous ne vendons, louons ni partageons d'informations personnelles avec des tiers à des fins commerciales.",
                    sharingCases: "Nous partageons des informations seulement dans ces cas :",
                    sharingItems: [
                        "Fournisseurs de services : OpenAI (analyse d'images), Supabase (stockage)",
                        "Conformité légale : Quand requis par la loi ou autorités compétentes",
                        "Sécurité : Pour protéger nos droits, propriété ou sécurité"
                    ],
                    childrenProtection: "Protection Spéciale pour Enfants : Nous ne partageons jamais d'informations personnelles d'enfants avec des tiers sans consentement parental explicite."
                },
                dataSecurity: {
                    title: "Sécurité des Données",
                    measures: "Mesures de Sécurité Implémentées :",
                    measureItems: [
                        "Chiffrement : Toutes les données sont transmises et stockées chiffrées",
                        "Accès restreint : Seul le personnel autorisé peut accéder aux données personnelles",
                        "Audits réguliers : Nous révisons périodiquement nos mesures de sécurité",
                        "Sauvegardes sécurisées : Copies de sauvegarde chiffrées"
                    ],
                    disclaimer: "Malgré nos mesures de sécurité, aucun système n'est 100% sécurisé. Nous vous notifierons immédiatement si nous détectons toute violation de sécurité pouvant affecter vos informations personnelles."
                },
                dataRetention: {
                    title: "Rétention des Données",
                    periods: "Périodes de Rétention :",
                    periodItems: [
                        "Données de compte : Tant que vous maintenez votre compte actif",
                        "Photographies : 30 jours après analyse (pour améliorer le service)",
                        "Données d'usage : 2 ans pour analyses et améliorations",
                        "Données de facturation : Selon exigences légales (7 ans)"
                    ],
                    deletion: "Vous pouvez demander la suppression de vos données à tout moment via les paramètres de l'app ou en nous contactant directement."
                },
                internationalTransfers: {
                    title: "Transferts Internationaux",
                    content: "Nos services utilisent des fournisseurs situés dans différents pays. Tous les transferts internationaux de données sont effectués avec les garanties adéquates selon le RGPD et autres lois applicables.",
                    providers: "Fournisseurs Principaux :",
                    providerItems: [
                        "OpenAI : États-Unis (analyse d'images)",
                        "Supabase : Union Européenne (stockage de données)",
                        "Services d'hébergement : Diverses locations pour optimiser les performances"
                    ]
                },
                rights: {
                    title: "Vos Droits",
                    description: "Droits que Vous Avez :",
                    rightItems: [
                        "Accès : Demander des informations sur les données que nous avons sur vous",
                        "Rectification : Corriger des données inexactes ou incomplètes",
                        "Suppression : Demander la suppression de vos données personnelles",
                        "Portabilité : Recevoir vos données en format structuré",
                        "Opposition : Vous opposer au traitement de vos données"
                    ],
                    exerciseRights: "Pour exercer ces droits, contactez-nous par les moyens indiqués à la fin de cette politique."
                },
                cookies: {
                    title: "Cookies et Technologies Similaires",
                    content: "Notre application mobile peut utiliser des technologies similaires aux cookies pour améliorer l'expérience utilisateur et analyser l'usage de l'application.",
                    types: "Types de Technologies Utilisées :",
                    typeItems: [
                        "Stockage local : Pour sauvegarder les préférences et données de session",
                        "Analytics : Pour comprendre comment l'application est utilisée",
                        "Publicité : Pour afficher du contenu pertinent (version gratuite seulement)"
                    ]
                },
                changes: {
                    title: "Changements dans cette Politique",
                    content: "Nous pouvons mettre à jour cette Politique de Confidentialité occasionnellement. Nous vous notifierons des changements significatifs par :",
                    methods: [
                        "Notification dans l'application",
                        "Email à l'adresse enregistrée",
                        "Mise à jour de la date sur cette page"
                    ],
                    recommendation: "Nous recommandons de réviser cette politique périodiquement pour rester informé sur comment nous protégeons vos informations."
                },
                contact: {
                    title: "Contact",
                    description: "Si vous avez des questions sur cette politique de confidentialité ou le traitement de vos données :",
                    email: "Email : privacy@sapisabe.com",
                    subject: "Sujet : Demande de Politique de Confidentialité",
                    response: "Temps de réponse : 48 heures ouvrables"
                }
            }
        },
        
        // Terms Page
        terms: {
            title: "Conditions d'Utilisation - SapiSabe",
            metaDescription: "Conditions d'Utilisation de SapiSabe - Règles et conditions pour utiliser notre application éducative.",
            pageTitle: "Conditions d'Utilisation",
            subtitle: "En utilisant SapiSabe, vous acceptez ces conditions d'utilisation. Nous recommandons de les lire attentivement.",
            lastUpdated: "Dernière mise à jour : Août 2025",
            
            sections: {
                acceptance: {
                    title: "Acceptation des Conditions",
                    content: "En téléchargeant, installant ou utilisant l'application SapiSabe, vous acceptez d'être lié par ces Conditions d'Utilisation. Si vous n'êtes pas d'accord avec une partie de ces conditions, vous ne devez pas utiliser notre application."
                },
                service: {
                    title: "Description du Service",
                    content: "SapiSabe est une application éducative qui utilise l'intelligence artificielle pour analyser des photographies et fournir des explications adaptées à l'âge de l'utilisateur. Le service inclut :",
                    features: [
                        "Analyse d'images avec OpenAI Vision",
                        "Création de profils familiaux",
                        "Historique d'analyse",
                        "Fonctions de synthèse vocale",
                        "Contenu éducatif personnalisé"
                    ]
                },
                accounts: {
                    title: "Inscription et Comptes",
                    requirements: "Exigences d'Inscription :",
                    responsibilities: [
                        "Vous devez avoir au moins 18 ans pour créer un compte",
                        "Fournir des informations véridiques et à jour",
                        "Maintenir la confidentialité de vos identifiants",
                        "Signaler immédiatement toute utilisation non autorisée"
                    ],
                    restrictions: "Responsabilités du Compte :",
                    restrictionItems: [
                        "Vous êtes responsable de toute activité sur votre compte",
                        "Ne pas partager votre compte avec des tiers",
                        "Maintenir vos informations de contact à jour"
                    ]
                },
                usage: {
                    title: "Usage Acceptable",
                    allowed: "Vous pouvez utiliser SapiSabe pour :",
                    allowedItems: [
                        "Photographier objets et lieux pour analyse éducative",
                        "Créer des profils pour enfants sous votre supervision",
                        "Partager résultats éducatifs avec la famille",
                        "Utiliser le contenu pour apprentissage personnel"
                    ],
                    prohibited: "Usage Interdit :",
                    prohibitedItems: [
                        "Photographier du contenu inapproprié ou illégal",
                        "Violer les droits de propriété intellectuelle",
                        "Tenter de pirater ou compromettre la sécurité",
                        "Utiliser l'app à des fins commerciales sans autorisation",
                        "Partager du contenu offensant ou nuisible"
                    ]
                },
                payment: {
                    title: "Paiements et Abonnements",
                    freeTier: "Niveau Gratuit :",
                    freeTierItems: [
                        "3 analyses quotidiennes gratuites",
                        "Fonctionnalités de base",
                        "Sans engagement d'inscription"
                    ],
                    premium: "Abonnement Premium :",
                    premiumItems: [
                        "Analyses illimitées",
                        "Profils familiaux multiples",
                        "Historique étendu",
                        "Fonctions premium exclusives"
                    ],
                    billing: "Les paiements sont traités de manière sécurisée et renouvelés automatiquement selon le plan sélectionné."
                },
                intellectual: {
                    title: "Propriété Intellectuelle",
                    ourRights: "Nos Droits :",
                    ourRightItems: [
                        "L'application et son contenu appartiennent à SapiSabe",
                        "Le design, code et fonctionnalités sont protégés",
                        "Les analyses générées par IA sont pour usage éducatif"
                    ],
                    yourRights: "Vos Droits :",
                    yourRightItems: [
                        "Vous pouvez utiliser les analyses à des fins éducatives",
                        "Vous pouvez partager les résultats avec votre famille",
                        "Vous conservez les droits sur vos photographies originales"
                    ],
                    limitations: "Limitations :",
                    limitationsText: "Vous ne pouvez pas reproduire, distribuer ou créer des œuvres dérivées de notre application sans permission explicite."
                },
                privacy: {
                    title: "Confidentialité et Données",
                    content: "L'utilisation de SapiSabe est soumise à notre Politique de Confidentialité, qui fait partie intégrante de ces conditions. En utilisant l'application, vous acceptez :",
                    acceptanceItems: [
                        "La collecte et traitement de données selon notre politique",
                        "L'utilisation de cookies et technologies similaires",
                        "Le transfert de données vers des fournisseurs de services",
                        "Le stockage sécurisé d'informations personnelles"
                    ]
                },
                limitation: {
                    title: "Limitation de Responsabilité",
                    warranty: "Exclusions de Garantie :",
                    warrantyItems: [
                        "L'application est fournie \"telle quelle\"",
                        "Nous ne garantissons pas la disponibilité continue du service",
                        "Les analyses IA peuvent contenir des erreurs",
                        "Nous ne sommes pas responsables des décisions basées sur les analyses"
                    ],
                    damages: "Limitation des Dommages :",
                    damageItems: [
                        "Nous ne serons pas responsables des dommages indirects",
                        "La responsabilité totale est limitée au montant payé pour le service",
                        "Nous ne couvrons pas les dommages d'usage incorrect de l'application"
                    ]
                },
                termination: {
                    title: "Résiliation",
                    reasons: "Nous pouvons résilier votre accès si :",
                    reasonItems: [
                        "Vous violez ces conditions d'utilisation",
                        "Vous utilisez l'application de manière inappropriée",
                        "Vous tentez de compromettre la sécurité",
                        "Vous ne payez pas les frais applicables"
                    ],
                    effects: "Effets de la Résiliation :",
                    effectItems: [
                        "Perte immédiate d'accès à l'application",
                        "Suppression des données selon notre politique de confidentialité",
                        "Cessation de tous les droits de licence"
                    ]
                },
                changes: {
                    title: "Modifications",
                    content: "Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications entreront en vigueur immédiatement après leur publication.",
                    notification: "Notification des Changements :",
                    notificationItems: [
                        "Nous vous notifierons des changements significatifs par email",
                        "Les changements seront publiés sur cette page",
                        "L'usage continu constitue l'acceptation des nouveaux termes"
                    ]
                },
                law: {
                    title: "Loi Applicable",
                    content: "Ces conditions sont régies par les lois d'Espagne. Tout litige sera résolu devant les tribunaux compétents de Madrid, Espagne.",
                    disputes: "Résolution des Conflits :",
                    disputeItems: [
                        "Nous essaierons de résoudre les conflits à l'amiable",
                        "En cas de désaccord, la loi espagnole s'appliquera",
                        "Les tribunaux de Madrid auront juridiction exclusive"
                    ]
                },
                contact: {
                    title: "Contact",
                    description: "Si vous avez des questions sur ces conditions, contactez-nous :",
                    info: "Informations de Contact",
                    email: "Email : legal@sapisabe.com",
                    subject: "Sujet : Demande sur les Conditions d'Utilisation",
                    response: "Temps de réponse : 72 heures ouvrables"
                }
            }
        },
        
        // Cookies Page
        cookies: {
            title: "Politique de Cookies - SapiSabe",
            metaDescription: "Politique de Cookies de SapiSabe - Informations sur comment nous utilisons les cookies et technologies similaires.",
            pageTitle: "Politique de Cookies",
            subtitle: "Nous utilisons des cookies pour améliorer votre expérience sur SapiSabe. Voici ce qu'ils sont et comment nous les utilisons.",
            lastUpdated: "Dernière mise à jour : Août 2025",
            
            sections: {
                whatAre: {
                    title: "Que sont les Cookies ?",
                    content: "Les cookies sont de petits fichiers texte stockés sur votre appareil quand vous visitez un site web ou utilisez une application. Chez SapiSabe, nous utilisons des technologies similaires aux cookies pour améliorer votre expérience et fournir des fonctionnalités essentielles."
                },
                types: {
                    title: "Types de Technologies que Nous Utilisons",
                    local: "1. Stockage Local (AsyncStorage)",
                    localItems: [
                        "Objectif : Sauvegarder préférences utilisateur, données de session et configuration",
                        "Durée : Persiste jusqu'à ce que l'utilisateur supprime l'app ou les données",
                        "Exemples : Configuration de voix, préférences de langue, historique local"
                    ],
                    performance: "2. Analytics et Performance",
                    performanceItems: [
                        "Objectif : Analyser l'usage de l'application et améliorer les performances",
                        "Durée : Selon la configuration du fournisseur",
                        "Exemples : Métriques d'usage, erreurs d'application, temps de réponse"
                    ],
                    essential: "3. Fonctionnalité Essentielle",
                    essentialItems: [
                        "Objectif : Fournir les fonctions de base de l'application",
                        "Durée : Session ou persistant selon la fonction",
                        "Exemples : État d'authentification, préférences caméra, configuration IA"
                    ]
                },
                detail: {
                    title: "Détail des Technologies Utilisées",
                    tableHeaders: ["Nom", "Objectif", "Durée", "Obligatoire"],
                    tableData: [
                        { purpose: "Préférences utilisateur et configuration", duration: "Persistant", required: "Oui" },
                        { purpose: "État d'authentification de l'utilisateur", duration: "Session", required: "Oui" },
                        { purpose: "Configuration de caméra et flash", duration: "Persistant", required: "Non" },
                        { purpose: "Configuration de synthèse vocale", duration: "Persistant", required: "Non" },
                        { purpose: "Métriques d'usage pour améliorer l'app", duration: "30 jours", required: "Non" },
                        { purpose: "Journaux d'erreurs pour débogage", duration: "7 jours", required: "Oui" }
                    ]
                },
                childProtection: {
                    title: "Protection des Données Infantiles",
                    content: "En tant qu'application destinée aux enfants, nous nous conformons strictement aux lois de protection des données infantiles :",
                    laws: [
                        "COPPA (Children's Online Privacy Protection Act) : Conformité totale avec les réglementations américaines",
                        "RGPD (Règlement Général sur la Protection des Données) : Protection spéciale pour les mineurs de moins de 16 ans",
                        "Consentement Parental : Requis pour les utilisateurs de moins de 13 ans",
                        "Données Minimales : Nous ne collectons que les informations essentielles au fonctionnement"
                    ],
                    commitment: "Engagement Spécial :",
                    commitmentText: "Nous n'utilisons pas de technologies de suivi pour les utilisateurs enfants sans consentement parental explicite."
                },
                thirdParty: {
                    title: "Tiers et Fournisseurs",
                    serviceProviders: "Fournisseurs de Services :",
                    providers: [
                        "OpenAI : Analyse d'images (ne stocke pas les données de façon permanente)",
                        "Supabase : Stockage de données (conforme RGPD)",
                        "Expo : Analytics de performance (optionnel)"
                    ],
                    policies: "Politiques de Tiers :",
                    policyItems: [
                        "Tous nos fournisseurs respectent les standards de confidentialité",
                        "Nous ne partageons pas de données avec des tiers pour la publicité",
                        "Les données sont traitées selon nos politiques"
                    ]
                },
                control: {
                    title: "Contrôle et Gestion",
                    content: "Comment Contrôler les Technologies :",
                    methods: [
                        "Paramètres de l'App : Vous pouvez désactiver les analytics dans Paramètres > Confidentialité",
                        "Suppression de Données : Option disponible dans Paramètres > Données",
                        "Désinstallation : Supprimer l'app supprime aussi toutes les données locales"
                    ],
                    defaults: "Configuration par Défaut :",
                    defaultItems: [
                        "Analytics : Activé par défaut (peut être désactivé)",
                        "Fonctionnalité : Technologies essentielles toujours actives",
                        "Personnalisation : Optionnelle et contrôlable par l'utilisateur"
                    ]
                },
                updates: {
                    title: "Mises à Jour de la Politique",
                    content: "Cette politique peut être mise à jour occasionnellement pour refléter les changements dans nos pratiques ou réglementations légales.",
                    notification: "Notification des Changements :",
                    notificationItems: [
                        "Nous vous notifierons des changements significatifs par email",
                        "Les changements seront publiés sur cette page",
                        "La date de \"Dernière mise à jour\" sera modifiée",
                        "L'usage continu constitue l'acceptation des changements"
                    ]
                },
                faq: {
                    title: "Questions Fréquentes",
                    questions: [
                        {
                            question: "Puis-je désactiver toutes les technologies ?",
                            answer: "Non, les technologies essentielles sont nécessaires pour le fonctionnement de base de l'application. Cependant, vous pouvez désactiver les optionnelles."
                        },
                        {
                            question: "Les données sont-elles partagées avec des tiers ?",
                            answer: "Seulement avec nos fournisseurs de services essentiels (OpenAI, Supabase) et toujours selon nos politiques de confidentialité."
                        },
                        {
                            question: "Comment cela affecte-t-il les enfants ?",
                            answer: "Nous implémentons des protections spéciales pour les utilisateurs enfants et exigeons le consentement parental pour les moins de 13 ans."
                        },
                        {
                            question: "Puis-je supprimer mes données ?",
                            answer: "Oui, vous pouvez supprimer toutes vos données depuis les paramètres de l'application ou en nous contactant directement."
                        }
                    ]
                },
                contact: {
                    title: "Contact",
                    email: "Email : privacy@sapisabe.com",
                    subject: "Sujet : Demande sur la Politique de Cookies",
                    response: "Temps de réponse : 48 heures ouvrables"
                }
            }
        },
        
        // Legal Page
        legal: {
            title: "Informations Légales - SapiSabe",
            metaDescription: "Informations légales de SapiSabe - Données corporatives, licences et informations réglementaires.",
            pageTitle: "Informations Légales",
            subtitle: "Informations corporatives, licences et conformité légale de SapiSabe.",
            lastUpdated: "Dernière mise à jour : 15 janvier 2024",
            
            sections: {
                company: {
                    title: "Informations de l'Entreprise",
                    name: "Nom : SapiSabe Technologies S.L.",
                    address: "Adresse : [Adresse complète]",
                    tax: "N° d'identification fiscale : [Numéro d'identification fiscale]",
                    registry: "Registre du Commerce : [Informations du registre]",
                    contact: "Contact : legal@sapisabe.com"
                },
                licenses: {
                    title: "Licences et Conformité",
                    dataProtection: "Protection des Données :",
                    dataItems: [
                        "Conformité RGPD (Règlement Général sur la Protection des Données)",
                        "Inscrit au registre des activités de traitement",
                        "Délégué à la Protection des Données désigné"
                    ],
                    children: "Protection des Mineurs :",
                    childrenItems: [
                        "Conformité COPPA (Children's Online Privacy Protection Act)",
                        "Vérification d'âge pour créer des comptes",
                        "Consentement parental requis pour les moins de 13 ans"
                    ]
                },
                thirdParty: {
                    title: "Services de Tiers",
                    ai: "Services IA :",
                    aiItems: [
                        "API OpenAI : Analyse d'images et génération de contenu",
                        "Conforme aux politiques d'usage responsable d'IA",
                        "Données traitées selon les termes d'OpenAI"
                    ],
                    infrastructure: "Infrastructure :",
                    infraItems: [
                        "Supabase : Base de données et authentification",
                        "Services hébergés dans l'Union Européenne",
                        "Certifications de sécurité SOC 2 Type II"
                    ]
                },
                compliance: {
                    title: "Conformité Réglementaire",
                    standards: "Standards Implémentés :",
                    standardItems: [
                        "ISO 27001 : Gestion de la sécurité de l'information",
                        "OWASP : Meilleures pratiques de sécurité web",
                        "PCI DSS : Sécurité du traitement des paiements"
                    ]
                },
                jurisdiction: {
                    title: "Juridiction et Résolution de Litiges",
                    content: "Cette application est régie par les lois espagnoles. Tout litige légal sera résolu devant les tribunaux compétents de Madrid, Espagne.",
                    mediation: "Pour les litiges mineurs, nous promouvons la médiation comme première étape avant de procéder judiciairement."
                },
                accessibility: {
                    title: "Accessibilité",
                    content: "SapiSabe s'engage à respecter les directives d'accessibilité WCAG 2.1 niveau AA. Nous travaillons continuellement pour améliorer l'accessibilité de notre application.",
                    contact: "Si vous rencontrez des problèmes d'accessibilité, contactez-nous à accessibility@sapisabe.com"
                },
                open: {
                    title: "Code Source Ouvert et Licences",
                    content: "SapiSabe utilise diverses bibliothèques open source. Une liste complète des licences est disponible dans les paramètres de l'application.",
                    attribution: "Nous remercions la communauté open source de rendre cette application possible."
                }
            }
        }
    }
};

// Funciones para obtener el idioma actual y cambiar idioma (similar a translations.js)
function getCurrentLanguageLegal() {
    const stored = localStorage.getItem('preferredLanguage');
    if (stored && ['es', 'en', 'fr'].includes(stored)) {
        return stored;
    }
    
    const browserLang = navigator.language.split('-')[0];
    if (['en', 'fr'].includes(browserLang)) {
        return browserLang;
    }
    
    return 'es'; // Default to Spanish
}

function changeLanguageLegal(lang) {
    localStorage.setItem('preferredLanguage', lang);
    translateLegalContent();
}

// Función para traducir contenido legal
function translateLegalContent() {
    const lang = getCurrentLanguageLegal();
    const t = legalTranslations[lang];
    
    // Detectar qué página estamos visualizando
    const path = window.location.pathname;
    let pageType = 'privacy'; // default
    
    if (path.includes('terms')) pageType = 'terms';
    else if (path.includes('cookies')) pageType = 'cookies';
    else if (path.includes('legal')) pageType = 'legal';
    else if (path.includes('privacy')) pageType = 'privacy';
    
    const pageData = t[pageType];
    if (!pageData) return;
    
    // Actualizar meta tags
    document.title = pageData.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', pageData.metaDescription);
    
    // Actualizar atributo lang del HTML
    document.documentElement.lang = lang;
    
    // Actualizar elementos comunes
    const backBtn = document.querySelector('.back-btn');
    if (backBtn) backBtn.innerHTML = `<i class="fas fa-arrow-left"></i> ${t.nav.backToSite}`;
    
    const pageTitle = document.querySelector('.legal-title');
    if (pageTitle) pageTitle.textContent = pageData.pageTitle;
    
    const pageSubtitle = document.querySelector('.legal-subtitle');
    if (pageSubtitle) pageSubtitle.textContent = pageData.subtitle;
    
    const lastUpdated = document.querySelector('.last-updated');
    if (lastUpdated) lastUpdated.textContent = pageData.lastUpdated;
    
    // Traducir secciones específicas según el tipo de página
    translatePageSections(pageData.sections, pageType);
}

function translatePageSections(sections, pageType) {
    if (pageType === 'privacy') {
        translatePrivacyPage(sections);
    } else if (pageType === 'terms') {
        translateTermsPage(sections);
    } else if (pageType === 'cookies') {
        translateCookiesPage(sections);
    } else if (pageType === 'legal') {
        translateLegalPage(sections);
    }
}

function translatePrivacyPage(sections) {
    // Traducir sección de introducción
    const introSection = document.querySelector('[data-section="introduction"]');
    if (introSection && sections.introduction) {
        const title = introSection.querySelector('.section-title');
        const content = introSection.querySelector('.section-content p');
        if (title) title.innerHTML = `<i class="fas fa-shield-alt"></i> ${sections.introduction.title}`;
        if (content) content.textContent = sections.introduction.content;
    }
    
    // Obtener todas las secciones
    const allSections = document.querySelectorAll('.legal-section');
    
    // Sección de recopilación de datos (segunda sección)
    if (allSections[1] && sections.dataCollection) {
        const title = allSections[1].querySelector('.section-title');
        if (title) title.innerHTML = `<i class="fas fa-camera"></i> ${sections.dataCollection.title}`;
        
        const sectionContent = allSections[1].querySelector('.section-content');
        if (sectionContent) {
            const userInfoH3 = sectionContent.querySelector('h3:first-of-type');
            if (userInfoH3) userInfoH3.textContent = sections.dataCollection.userInfo;
            
            const userInfoList = sectionContent.querySelector('ul:first-of-type');
            if (userInfoList && sections.dataCollection.userInfoItems) {
                const listItems = userInfoList.querySelectorAll('li');
                sections.dataCollection.userInfoItems.forEach((item, index) => {
                    if (listItems[index]) listItems[index].innerHTML = item;
                });
            }
            
            const technicalInfoH3 = sectionContent.querySelector('h3:last-of-type');
            if (technicalInfoH3) technicalInfoH3.textContent = sections.dataCollection.technicalInfo;
            
            const technicalInfoList = sectionContent.querySelector('ul:last-of-type');
            if (technicalInfoList && sections.dataCollection.technicalInfoItems) {
                const listItems = technicalInfoList.querySelectorAll('li');
                sections.dataCollection.technicalInfoItems.forEach((item, index) => {
                    if (listItems[index]) listItems[index].innerHTML = item;
                });
            }
        }
    }
    
    // Sección de uso de datos (tercera sección)
    if (allSections[2] && sections.dataUsage) {
        const title = allSections[2].querySelector('.section-title');
        if (title) title.innerHTML = `<i class="fas fa-cogs"></i> ${sections.dataUsage.title}`;
        
        const sectionContent = allSections[2].querySelector('.section-content');
        if (sectionContent) {
            const serviceH3 = sectionContent.querySelector('h3:first-of-type');
            if (serviceH3) serviceH3.textContent = sections.dataUsage.serviceUsage;
            
            const serviceList = sectionContent.querySelector('ul:first-of-type');
            if (serviceList && sections.dataUsage.serviceUsageItems) {
                const listItems = serviceList.querySelectorAll('li');
                sections.dataUsage.serviceUsageItems.forEach((item, index) => {
                    if (listItems[index]) listItems[index].textContent = item;
                });
            }
            
            const securityH3 = sectionContent.querySelector('h3:last-of-type');
            if (securityH3) securityH3.textContent = sections.dataUsage.security;
            
            const securityList = sectionContent.querySelector('ul:last-of-type');
            if (securityList && sections.dataUsage.securityItems) {
                const listItems = securityList.querySelectorAll('li');
                sections.dataUsage.securityItems.forEach((item, index) => {
                    if (listItems[index]) listItems[index].textContent = item;
                });
            }
        }
    }
    
    // Sección de compartir información (cuarta sección)
    if (allSections[3] && sections.dataSharing) {
        const title = allSections[3].querySelector('.section-title');
        if (title) title.innerHTML = `<i class="fas fa-share-alt"></i> ${sections.dataSharing.title}`;
        
        const sectionContent = allSections[3].querySelector('.section-content');
        if (sectionContent) {
            const noSellingP = sectionContent.querySelector('p:first-of-type');
            if (noSellingP) noSellingP.innerHTML = `<strong>${sections.dataSharing.noSelling}</strong>`;
            
            const sharingH3 = sectionContent.querySelector('h3');
            if (sharingH3) sharingH3.textContent = sections.dataSharing.sharingCases;
            
            const sharingList = sectionContent.querySelector('ul');
            if (sharingList && sections.dataSharing.sharingItems) {
                const listItems = sharingList.querySelectorAll('li');
                sections.dataSharing.sharingItems.forEach((item, index) => {
                    if (listItems[index]) listItems[index].innerHTML = item;
                });
            }
            
            const highlight = sectionContent.querySelector('.highlight');
            if (highlight) highlight.innerHTML = `<strong>${sections.dataSharing.childrenProtection}</strong>`;
        }
    }
    
    // Sección de seguridad (quinta sección)
    if (allSections[4] && sections.dataSecurity) {
        const title = allSections[4].querySelector('.section-title');
        if (title) title.innerHTML = `<i class="fas fa-lock"></i> ${sections.dataSecurity.title}`;
        
        const sectionContent = allSections[4].querySelector('.section-content');
        if (sectionContent) {
            const measuresH3 = sectionContent.querySelector('h3');
            if (measuresH3) measuresH3.textContent = sections.dataSecurity.measures;
            
            const measuresList = sectionContent.querySelector('ul');
            if (measuresList && sections.dataSecurity.measureItems) {
                const listItems = measuresList.querySelectorAll('li');
                sections.dataSecurity.measureItems.forEach((item, index) => {
                    if (listItems[index]) listItems[index].innerHTML = item;
                });
            }
            
            const disclaimerP = sectionContent.querySelector('p:last-of-type');
            if (disclaimerP) disclaimerP.textContent = sections.dataSecurity.disclaimer;
        }
    }
    
    // Sección de retención (sexta sección)
    if (allSections[5] && sections.dataRetention) {
        const title = allSections[5].querySelector('.section-title');
        if (title) title.innerHTML = `<i class="fas fa-calendar-alt"></i> ${sections.dataRetention.title}`;
        
        const sectionContent = allSections[5].querySelector('.section-content');
        if (sectionContent) {
            const periodsH3 = sectionContent.querySelector('h3');
            if (periodsH3) periodsH3.textContent = sections.dataRetention.periods;
            
            const periodsList = sectionContent.querySelector('ul');
            if (periodsList && sections.dataRetention.periodItems) {
                const listItems = periodsList.querySelectorAll('li');
                sections.dataRetention.periodItems.forEach((item, index) => {
                    if (listItems[index]) listItems[index].innerHTML = item;
                });
            }
            
            const deletionP = sectionContent.querySelector('p:last-of-type');
            if (deletionP) deletionP.textContent = sections.dataRetention.deletion;
        }
    }
    
    // Sección de derechos (séptima sección)
    if (allSections[6] && sections.rights) {
        const title = allSections[6].querySelector('.section-title');
        if (title) title.innerHTML = `<i class="fas fa-user-shield"></i> ${sections.rights.title}`;
        
        const sectionContent = allSections[6].querySelector('.section-content');
        if (sectionContent) {
            const descriptionP = sectionContent.querySelector('p:first-of-type');
            if (descriptionP) descriptionP.textContent = sections.rights.description;
            
            const rightsList = sectionContent.querySelector('ul');
            if (rightsList && sections.rights.rightItems) {
                const listItems = rightsList.querySelectorAll('li');
                sections.rights.rightItems.forEach((item, index) => {
                    if (listItems[index]) listItems[index].innerHTML = item;
                });
            }
            
            const exerciseP = sectionContent.querySelector('p:last-of-type');
            if (exerciseP) exerciseP.textContent = sections.rights.exerciseRights;
        }
    }
    
    // Sección de contacto (octava sección)
    if (allSections[7] && sections.contact) {
        const title = allSections[7].querySelector('.section-title');
        if (title) title.innerHTML = `<i class="fas fa-envelope"></i> ${sections.contact.title}`;
        
        const sectionContent = allSections[7].querySelector('.section-content');
        if (sectionContent) {
            const descriptionP = sectionContent.querySelector('p:first-of-type');
            if (descriptionP) descriptionP.textContent = sections.contact.description;
            
            const allPs = sectionContent.querySelectorAll('p');
            if (allPs[1]) allPs[1].textContent = sections.contact.email;
            if (allPs[2]) allPs[2].textContent = sections.contact.address;
            if (allPs[3]) allPs[3].textContent = sections.contact.response;
        }
    }
}

function translateTermsPage(sections) {
    const allSections = document.querySelectorAll('.legal-section');
    
    // Sección de aceptación (primera sección)
    if (allSections[0] && sections.acceptance) {
        const title = allSections[0].querySelector('.section-title');
        if (title) title.innerHTML = `<i class="fas fa-handshake"></i> ${sections.acceptance.title}`;
        
        const content = allSections[0].querySelector('.section-content p');
        if (content) content.textContent = sections.acceptance.content;
    }
    
    // Sección de descripción del servicio (segunda sección)
    if (allSections[1] && sections.service) {
        const title = allSections[1].querySelector('.section-title');
        if (title) title.innerHTML = `<i class="fas fa-mobile-alt"></i> ${sections.service.title}`;
        
        const sectionContent = allSections[1].querySelector('.section-content');
        if (sectionContent) {
            const descriptionP = sectionContent.querySelector('p:first-of-type');
            if (descriptionP) descriptionP.textContent = sections.service.content;
            
            const featuresList = sectionContent.querySelector('ul');
            if (featuresList && sections.service.features) {
                const listItems = featuresList.querySelectorAll('li');
                sections.service.features.forEach((item, index) => {
                    if (listItems[index]) listItems[index].textContent = item;
                });
            }
        }
    }
    
    // Sección de cuentas de usuario (tercera sección)
    if (allSections[2] && sections.accounts) {
        const title = allSections[2].querySelector('.section-title');
        if (title) title.innerHTML = `<i class="fas fa-user-circle"></i> ${sections.accounts.title}`;
        
        const sectionContent = allSections[2].querySelector('.section-content');
        if (sectionContent) {
            const responsibilityP = sectionContent.querySelector('p:first-of-type');
            if (responsibilityP) responsibilityP.textContent = sections.accounts.responsibility;
            
            const responsibilitiesList = sectionContent.querySelector('ul:first-of-type');
            if (responsibilitiesList && sections.accounts.responsibilities) {
                const listItems = responsibilitiesList.querySelectorAll('li');
                sections.accounts.responsibilities.forEach((item, index) => {
                    if (listItems[index]) listItems[index].textContent = item;
                });
            }
            
            const restrictionsH3 = sectionContent.querySelector('h3:last-of-type');
            if (restrictionsH3) restrictionsH3.textContent = sections.accounts.restrictions;
            
            const restrictionsList = sectionContent.querySelector('ul:last-of-type');
            if (restrictionsList && sections.accounts.restrictionItems) {
                const listItems = restrictionsList.querySelectorAll('li');
                sections.accounts.restrictionItems.forEach((item, index) => {
                    if (listItems[index]) listItems[index].textContent = item;
                });
            }
        }
    }
    
    // Continuar con las demás secciones...
    // Sección de uso aceptable (cuarta sección)
    if (allSections[3] && sections.usage) {
        const title = allSections[3].querySelector('.section-title');
        if (title) title.innerHTML = `<i class="fas fa-check-circle"></i> ${sections.usage.title}`;
        
        const sectionContent = allSections[3].querySelector('.section-content');
        if (sectionContent) {
            const prohibitedH3 = sectionContent.querySelector('h3');
            if (prohibitedH3) prohibitedH3.textContent = sections.usage.prohibited;
            
            const prohibitedList = sectionContent.querySelector('ul');
            if (prohibitedList && sections.usage.prohibitedItems) {
                const listItems = prohibitedList.querySelectorAll('li');
                sections.usage.prohibitedItems.forEach((item, index) => {
                    if (listItems[index]) listItems[index].textContent = item;
                });
            }
        }
    }
    
    // Sección de pagos (quinta sección)
    if (allSections[4] && sections.payment) {
        const title = allSections[4].querySelector('.section-title');
        if (title) title.innerHTML = `<i class="fas fa-credit-card"></i> ${sections.payment.title}`;
        
        const sectionContent = allSections[4].querySelector('.section-content');
        if (sectionContent) {
            const freeTierH3 = sectionContent.querySelector('h3:first-of-type');
            if (freeTierH3) freeTierH3.textContent = sections.payment.freeTier;
            
            const freeTierList = sectionContent.querySelector('ul:first-of-type');
            if (freeTierList && sections.payment.freeTierItems) {
                const listItems = freeTierList.querySelectorAll('li');
                sections.payment.freeTierItems.forEach((item, index) => {
                    if (listItems[index]) listItems[index].textContent = item;
                });
            }
            
            const premiumH3 = sectionContent.querySelector('h3:nth-of-type(2)');
            if (premiumH3) premiumH3.textContent = sections.payment.premium;
            
            const premiumList = sectionContent.querySelector('ul:nth-of-type(2)');
            if (premiumList && sections.payment.premiumItems) {
                const listItems = premiumList.querySelectorAll('li');
                sections.payment.premiumItems.forEach((item, index) => {
                    if (listItems[index]) listItems[index].textContent = item;
                });
            }
            
            const billingP = sectionContent.querySelector('p:last-of-type');
            if (billingP) billingP.textContent = sections.payment.billing;
        }
    }
}

function translateCookiesPage(sections) {
    const allSections = document.querySelectorAll('.legal-section');
    
    // Sección ¿Qué son las Cookies? (primera sección)
    if (allSections[0] && sections.whatAre) {
        const title = allSections[0].querySelector('.section-title');
        if (title) title.innerHTML = `<i class="fas fa-question-circle"></i> ${sections.whatAre.title}`;
        
        const content = allSections[0].querySelector('.section-content p');
        if (content) content.textContent = sections.whatAre.content;
    }
    
    // Sección Tipos de Cookies (segunda sección)
    if (allSections[1] && sections.types) {
        const title = allSections[1].querySelector('.section-title');
        if (title) title.innerHTML = `<i class="fas fa-list"></i> ${sections.types.title}`;
        
        const sectionContent = allSections[1].querySelector('.section-content');
        if (sectionContent) {
            const essentialH3 = sectionContent.querySelector('h3:first-of-type');
            if (essentialH3) essentialH3.textContent = sections.types.essential;
            
            const essentialList = sectionContent.querySelector('ul:first-of-type');
            if (essentialList && sections.types.essentialItems) {
                const listItems = essentialList.querySelectorAll('li');
                sections.types.essentialItems.forEach((item, index) => {
                    if (listItems[index]) listItems[index].innerHTML = item;
                });
            }
            
            const performanceH3 = sectionContent.querySelector('h3:nth-of-type(2)');
            if (performanceH3) performanceH3.textContent = sections.types.performance;
            
            const performanceList = sectionContent.querySelector('ul:nth-of-type(2)');
            if (performanceList && sections.types.performanceItems) {
                const listItems = performanceList.querySelectorAll('li');
                sections.types.performanceItems.forEach((item, index) => {
                    if (listItems[index]) listItems[index].innerHTML = item;
                });
            }
            
            const preferencesH3 = sectionContent.querySelector('h3:nth-of-type(3)');
            if (preferencesH3) preferencesH3.textContent = sections.types.preferences;
            
            const preferencesList = sectionContent.querySelector('ul:nth-of-type(3)');
            if (preferencesList && sections.types.preferencesItems) {
                const listItems = preferencesList.querySelectorAll('li');
                sections.types.preferencesItems.forEach((item, index) => {
                    if (listItems[index]) listItems[index].innerHTML = item;
                });
            }
        }
    }
    
    // Sección Cookies de Terceros (tercera sección)
    if (allSections[2] && sections.thirdParty) {
        const title = allSections[2].querySelector('.section-title');
        if (title) title.innerHTML = `<i class="fas fa-external-link-alt"></i> ${sections.thirdParty.title}`;
        
        const sectionContent = allSections[2].querySelector('.section-content');
        if (sectionContent) {
            const contentP = sectionContent.querySelector('p:first-of-type');
            if (contentP) contentP.textContent = sections.thirdParty.content;
            
            const providersList = sectionContent.querySelector('ul');
            if (providersList && sections.thirdParty.providers) {
                const listItems = providersList.querySelectorAll('li');
                sections.thirdParty.providers.forEach((item, index) => {
                    if (listItems[index]) listItems[index].textContent = item;
                });
            }
        }
    }
    
    // Sección Control de Cookies (cuarta sección)
    if (allSections[3] && sections.control) {
        const title = allSections[3].querySelector('.section-title');
        if (title) title.innerHTML = `<i class="fas fa-sliders-h"></i> ${sections.control.title}`;
        
        const sectionContent = allSections[3].querySelector('.section-content');
        if (sectionContent) {
            const contentP = sectionContent.querySelector('p:first-of-type');
            if (contentP) contentP.textContent = sections.control.content;
            
            const methodsList = sectionContent.querySelector('ul');
            if (methodsList && sections.control.methods) {
                const listItems = methodsList.querySelectorAll('li');
                sections.control.methods.forEach((item, index) => {
                    if (listItems[index]) listItems[index].innerHTML = item;
                });
            }
            
            const noteP = sectionContent.querySelector('p:last-of-type');
            if (noteP) noteP.textContent = sections.control.note;
        }
    }
    
    // Sección Duración de Cookies (quinta sección)
    if (allSections[4] && sections.duration) {
        const title = allSections[4].querySelector('.section-title');
        if (title) title.innerHTML = `<i class="fas fa-clock"></i> ${sections.duration.title}`;
        
        const sectionContent = allSections[4].querySelector('.section-content');
        if (sectionContent) {
            const sessionP = sectionContent.querySelector('p:first-of-type');
            if (sessionP) sessionP.textContent = sections.duration.session;
            
            const persistentH3 = sectionContent.querySelector('h3');
            if (persistentH3) persistentH3.textContent = sections.duration.persistent;
            
            const persistentList = sectionContent.querySelector('ul');
            if (persistentList && sections.duration.persistentItems) {
                const listItems = persistentList.querySelectorAll('li');
                sections.duration.persistentItems.forEach((item, index) => {
                    if (listItems[index]) listItems[index].innerHTML = item;
                });
            }
        }
    }
    
    // Sección Actualizaciones (sexta sección)
    if (allSections[5] && sections.updates) {
        const title = allSections[5].querySelector('.section-title');
        if (title) title.innerHTML = `<i class="fas fa-sync-alt"></i> ${sections.updates.title}`;
        
        const content = allSections[5].querySelector('.section-content p');
        if (content) content.textContent = sections.updates.content;
    }
}

function translateLegalPage(sections) {
    const allSections = document.querySelectorAll('.legal-section');
    
    // Sección Información de la Empresa (primera sección)
    if (allSections[0] && sections.company) {
        const title = allSections[0].querySelector('.section-title');
        if (title) title.innerHTML = `<i class="fas fa-building"></i> ${sections.company.title}`;
        
        const sectionContent = allSections[0].querySelector('.section-content');
        if (sectionContent) {
            const allPs = sectionContent.querySelectorAll('p');
            if (allPs[0]) allPs[0].innerHTML = `<strong>${sections.company.name}</strong>`;
            if (allPs[1]) allPs[1].innerHTML = `<strong>${sections.company.address}</strong>`;
            if (allPs[2]) allPs[2].innerHTML = `<strong>${sections.company.tax}</strong>`;
            if (allPs[3]) allPs[3].innerHTML = `<strong>${sections.company.registry}</strong>`;
            if (allPs[4]) allPs[4].innerHTML = `<strong>${sections.company.contact}</strong>`;
        }
    }
    
    // Sección Licencias y Cumplimiento (segunda sección)
    if (allSections[1] && sections.licenses) {
        const title = allSections[1].querySelector('.section-title');
        if (title) title.innerHTML = `<i class="fas fa-certificate"></i> ${sections.licenses.title}`;
        
        const sectionContent = allSections[1].querySelector('.section-content');
        if (sectionContent) {
            const dataProtectionH3 = sectionContent.querySelector('h3:first-of-type');
            if (dataProtectionH3) dataProtectionH3.textContent = sections.licenses.dataProtection;
            
            const dataList = sectionContent.querySelector('ul:first-of-type');
            if (dataList && sections.licenses.dataItems) {
                const listItems = dataList.querySelectorAll('li');
                sections.licenses.dataItems.forEach((item, index) => {
                    if (listItems[index]) listItems[index].textContent = item;
                });
            }
            
            const childrenH3 = sectionContent.querySelector('h3:last-of-type');
            if (childrenH3) childrenH3.textContent = sections.licenses.children;
            
            const childrenList = sectionContent.querySelector('ul:last-of-type');
            if (childrenList && sections.licenses.childrenItems) {
                const listItems = childrenList.querySelectorAll('li');
                sections.licenses.childrenItems.forEach((item, index) => {
                    if (listItems[index]) listItems[index].textContent = item;
                });
            }
        }
    }
    
    // Continuar con las demás secciones...
    // Sección Servicios de Terceros (tercera sección)
    if (allSections[2] && sections.thirdParty) {
        const title = allSections[2].querySelector('.section-title');
        if (title) title.innerHTML = `<i class="fas fa-plug"></i> ${sections.thirdParty.title}`;
        
        const sectionContent = allSections[2].querySelector('.section-content');
        if (sectionContent) {
            const aiH3 = sectionContent.querySelector('h3:first-of-type');
            if (aiH3) aiH3.textContent = sections.thirdParty.ai;
            
            const aiList = sectionContent.querySelector('ul:first-of-type');
            if (aiList && sections.thirdParty.aiItems) {
                const listItems = aiList.querySelectorAll('li');
                sections.thirdParty.aiItems.forEach((item, index) => {
                    if (listItems[index]) listItems[index].textContent = item;
                });
            }
            
            const infraH3 = sectionContent.querySelector('h3:last-of-type');
            if (infraH3) infraH3.textContent = sections.thirdParty.infrastructure;
            
            const infraList = sectionContent.querySelector('ul:last-of-type');
            if (infraList && sections.thirdParty.infraItems) {
                const listItems = infraList.querySelectorAll('li');
                sections.thirdParty.infraItems.forEach((item, index) => {
                    if (listItems[index]) listItems[index].textContent = item;
                });
            }
        }
    }
    
    // Sección Cumplimiento Normativo (cuarta sección)
    if (allSections[3] && sections.compliance) {
        const title = allSections[3].querySelector('.section-title');
        if (title) title.innerHTML = `<i class="fas fa-shield-check"></i> ${sections.compliance.title}`;
        
        const sectionContent = allSections[3].querySelector('.section-content');
        if (sectionContent) {
            const standardsH3 = sectionContent.querySelector('h3');
            if (standardsH3) standardsH3.textContent = sections.compliance.standards;
            
            const standardsList = sectionContent.querySelector('ul');
            if (standardsList && sections.compliance.standardItems) {
                const listItems = standardsList.querySelectorAll('li');
                sections.compliance.standardItems.forEach((item, index) => {
                    if (listItems[index]) listItems[index].innerHTML = item;
                });
            }
        }
    }
    
    // Sección Jurisdicción (quinta sección)
    if (allSections[4] && sections.jurisdiction) {
        const title = allSections[4].querySelector('.section-title');
        if (title) title.innerHTML = `<i class="fas fa-gavel"></i> ${sections.jurisdiction.title}`;
        
        const sectionContent = allSections[4].querySelector('.section-content');
        if (sectionContent) {
            const contentP = sectionContent.querySelector('p:first-of-type');
            if (contentP) contentP.textContent = sections.jurisdiction.content;
            
            const mediationP = sectionContent.querySelector('p:last-of-type');
            if (mediationP) mediationP.textContent = sections.jurisdiction.mediation;
        }
    }
    
    // Sección Accesibilidad (sexta sección)
    if (allSections[5] && sections.accessibility) {
        const title = allSections[5].querySelector('.section-title');
        if (title) title.innerHTML = `<i class="fas fa-universal-access"></i> ${sections.accessibility.title}`;
        
        const sectionContent = allSections[5].querySelector('.section-content');
        if (sectionContent) {
            const contentP = sectionContent.querySelector('p:first-of-type');
            if (contentP) contentP.textContent = sections.accessibility.content;
            
            const contactP = sectionContent.querySelector('p:last-of-type');
            if (contactP) contactP.textContent = sections.accessibility.contact;
        }
    }
    
    // Sección Código Abierto (séptima sección)
    if (allSections[6] && sections.open) {
        const title = allSections[6].querySelector('.section-title');
        if (title) title.innerHTML = `<i class="fas fa-code"></i> ${sections.open.title}`;
        
        const sectionContent = allSections[6].querySelector('.section-content');
        if (sectionContent) {
            const contentP = sectionContent.querySelector('p:first-of-type');
            if (contentP) contentP.textContent = sections.open.content;
            
            const attributionP = sectionContent.querySelector('p:last-of-type');
            if (attributionP) attributionP.textContent = sections.open.attribution;
        }
    }
}

// Inicialización del selector de idioma legal
function initLegalLanguageSelector() {
    const currentLanguage = document.getElementById('currentLanguage');
    const languageDropdown = document.getElementById('languageDropdown');
    const languageOptions = document.querySelectorAll('.language-option');
    
    if (!currentLanguage) return; // Si no existe el selector, salir
    
    const languageData = {
        'es': { flag: '🇪🇸', name: 'ES' },
        'en': { flag: '🇺🇸', name: 'EN' },
        'fr': { flag: '🇫🇷', name: 'FR' }
    };
    
    function updateCurrentLanguage(lang) {
        const flagElement = currentLanguage.querySelector('.flag');
        const textElement = currentLanguage.querySelector('.lang-text');
        if (flagElement) flagElement.textContent = languageData[lang].flag;
        if (textElement) textElement.textContent = languageData[lang].name;
        
        languageOptions.forEach(option => {
            option.classList.toggle('active', option.dataset.lang === lang);
        });
    }
    
    const currentLang = getCurrentLanguageLegal();
    updateCurrentLanguage(currentLang);
    
    if (currentLanguage && languageDropdown) {
        currentLanguage.addEventListener('click', () => {
            languageDropdown.classList.toggle('active');
        });
        
        languageOptions.forEach(option => {
            option.addEventListener('click', () => {
                const selectedLang = option.dataset.lang;
                updateCurrentLanguage(selectedLang);
                languageDropdown.classList.remove('active');
                changeLanguageLegal(selectedLang);
            });
        });
        
        document.addEventListener('click', (e) => {
            if (!currentLanguage.contains(e.target) && !languageDropdown.contains(e.target)) {
                languageDropdown.classList.remove('active');
            }
        });
    }
}

// Exportar funciones para uso global
window.legalTranslations = legalTranslations;
window.getCurrentLanguageLegal = getCurrentLanguageLegal;
window.changeLanguageLegal = changeLanguageLegal;
window.translateLegalContent = translateLegalContent;
window.initLegalLanguageSelector = initLegalLanguageSelector; 