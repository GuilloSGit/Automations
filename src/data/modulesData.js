/**
 * =============================================
 *  DATOS CENTRALIZADOS DE MÓDULOS Y PRECIOS
 * =============================================
 *
 *  Para cambiar un precio, modificá SOLO este archivo.
 *  El total se calcula automáticamente en toda la web.
 */

export const CURRENCY = "€";

// Descuento del pack completo (en euros). Si es 0, se calcula como suma de módulos.
export const PACK_DISCOUNT = 300;

export const modules = [
    {
        id: "MOD-ATT-001",
        slug: "atencion-triaje",
        title: "Atención y Triaje",
        subtitle: "El Front-End de tu Hotel",
        description:
            "La puerta de entrada inteligente. Un sistema que atiende llamadas y mensajes con IA conversacional, eliminando los tiempos de espera y las llamadas perdidas.",
        image: "/images/module_atencion.png",
        price: 350,
        maintenance: 100,
        fixedCosts: [
            { name: "Twilio (telefonía)", cost: "~30€/mes" },
            { name: "Vapi (voice AI)", cost: "~25€/mes" },
            { name: "OpenAI (GPT)", cost: "~15€/mes según volumen" },
        ],
        features: [
            {
                name: "Voice Bot Inteligente",
                desc: "Contestador con IA que entiende lenguaje natural — no el clásico «marque 1».",
            },
            {
                name: "Chatbot Omnicanal",
                desc: "Atención automatizada en WhatsApp, Instagram y Web simultáneamente.",
            },
            {
                name: "Derivación Inteligente",
                desc: "Transferencia a un humano solo si la IA no puede resolver la consulta (ej. quejas complejas).",
            },
        ],
        maintenanceIncludes: [
            "Ajustes de prompts y respuestas",
            "Monitoreo de calidad de interacciones",
            "Actualizaciones de modelo de IA",
        ],
    },
    {
        id: "MOD-RES-002",
        slug: "reservas-disponibilidad",
        title: "Reservas y Disponibilidad",
        subtitle: "La Lógica del Negocio",
        description:
            "Integración directa con el PMS o calendario del hotel para consultar disponibilidad en tiempo real, recoger datos del huésped y bloquear fechas automáticamente.",
        image: "/images/module_reservas.png",
        price: 400,
        maintenance: 100,
        fixedCosts: [
            { name: "Make.com (integraciones)", cost: "~20€/mes" },
            { name: "Google Calendar / PMS API", cost: "Variable" },
        ],
        features: [
            {
                name: "Consulta de Disponibilidad",
                desc: "La IA consulta el calendario en tiempo real y ofrece habitaciones y fechas disponibles.",
            },
            {
                name: "Toma de Datos del Huésped",
                desc: "Recolección automatizada de nombre, DNI/Pasaporte, número de personas y preferencias.",
            },
            {
                name: "Sincronización Anti-Overbooking",
                desc: "Bloqueo inmediato de la fecha en el calendario al confirmar, evitando dobles reservas.",
            },
        ],
        maintenanceIncludes: [
            "Sincronización con actualizaciones del PMS",
            "Ajustes de reglas de disponibilidad",
            "Soporte técnico para integraciones",
        ],
    },
    {
        id: "MOD-PAY-003",
        slug: "pagos-seguridad",
        title: "Pagos y Seguridad",
        subtitle: "Módulo Fintech",
        description:
            "El módulo de mayor responsabilidad. Gestiona cobros automáticos, tokenización de tarjetas para garantías y envío de comprobantes, todo bajo estándares de seguridad PCI.",
        image: "/images/module_pagos.png",
        price: 500,
        maintenance: 120,
        fixedCosts: [
            { name: "Stripe / PayPal (comisiones)", cost: "~1.4% + 0.25€/transacción" },
            { name: "SMS (envío de links)", cost: "~0.07€/SMS" },
        ],
        features: [
            {
                name: "Pasarela de Pago Automática",
                desc: "Generación de links de pago por SMS o WhatsApp durante la llamada o chat con el huésped.",
            },
            {
                name: "Garantía de Reserva (Tokenización)",
                desc: "Retención de tarjeta de crédito para cobrar penalización por no-show sin justificación.",
            },
            {
                name: "Confirmación y Factura Automática",
                desc: "Envío instantáneo de comprobante y factura tras la validación exitosa del pago.",
            },
        ],
        maintenanceIncludes: [
            "Monitoreo de transacciones fallidas",
            "Actualización de pasarelas de pago",
            "Cumplimiento normativo PCI-DSS",
        ],
    },
    {
        id: "MOD-INF-004",
        slug: "informacion-huesped",
        title: "Información al Huésped",
        subtitle: "Knowledge Base Inteligente",
        description:
            "Ideal para hoteles saturados de preguntas frecuentes. Un asistente que responde al instante sobre servicios, horarios, políticas y recomendaciones del entorno.",
        image: "/images/module_info.png",
        price: 250,
        maintenance: 80,
        fixedCosts: [
            { name: "OpenAI (embeddings + GPT)", cost: "~10€/mes" },
        ],
        features: [
            {
                name: "FAQ Dinámica",
                desc: "Respuestas inmediatas sobre check-in, desayuno, spa, parking, mascotas y más.",
            },
            {
                name: "Guía del Entorno",
                desc: "Recomendaciones de restaurantes, puntos turísticos y actividades cercanas integradas en la conversación.",
            },
            {
                name: "Base de Conocimiento Personalizable",
                desc: "Se entrena con la información específica de cada hotel para respuestas 100% precisas.",
            },
        ],
        maintenanceIncludes: [
            "Actualizaciones de contenido y FAQ",
            "Re-entrenamiento con nueva información",
            "Optimización de respuestas",
        ],
    },
    {
        id: "MOD-OPS-005",
        slug: "operaciones-internas",
        title: "Operaciones Internas",
        subtitle: "Back-Office Automatizado",
        description:
            "Automatiza las tareas del staff del hotel: notificaciones en tiempo real, reportes de métricas y visibilidad total sobre la operación del asistente de IA.",
        image: "/images/module_operaciones.png",
        price: 300,
        maintenance: 100,
        fixedCosts: [
            { name: "Make.com (automatizaciones)", cost: "~15€/mes" },
            { name: "Hosting de dashboard", cost: "~10€/mes" },
        ],
        features: [
            {
                name: "Notificaciones al Staff",
                desc: "Aviso instantáneo por Slack, Telegram o Email ante cada reserva nueva o pago fallido.",
            },
            {
                name: "Dashboard de Métricas",
                desc: "Reporte visual de llamadas atendidas por la IA, ventas cerradas y tasa de resolución.",
            },
            {
                name: "Alertas Personalizables",
                desc: "Configuración de reglas para notificaciones según prioridad o tipo de evento.",
            },
        ],
        maintenanceIncludes: [
            "Mantenimiento del dashboard",
            "Ajustes de reglas de notificación",
            "Reportes mensuales de rendimiento",
        ],
    },
];

/**
 * Calcula el total de desarrollo de todos los módulos
 */
export const getTotalDevelopment = () =>
    modules.reduce((sum, m) => sum + m.price, 0);

/**
 * Calcula el total de mantenimiento mensual de todos los módulos
 */
export const getTotalMaintenance = () =>
    modules.reduce((sum, m) => sum + m.maintenance, 0);

/**
 * Precio del pack completo (con descuento aplicado)
 */
export const getPackPrice = () => getTotalDevelopment() - PACK_DISCOUNT;

/**
 * Mantenimiento del pack completo (con descuento)
 */
export const getPackMaintenance = () => getTotalMaintenance() - 100;
