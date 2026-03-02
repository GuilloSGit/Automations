# 🏨 Automatización Hotelera | GA Software

Landing page profesional que presenta una propuesta modular de automatización con IA para hoteles y empresas europeas.

## ✨ Características

- **5 módulos independientes** de automatización (Atención, Reservas, Pagos, Info al Huésped, Operaciones)
- **Precios centralizados** en un solo archivo — cambiás un precio y se actualiza en toda la web
- **Diseño premium** dark + gold con animaciones suaves
- **Imágenes generadas con IA** por cada módulo
- **Responsive** — mobile-first
- **Favicon personalizado** con temática de hotel e IA
- **SEO optimizado** para posicionamiento orgánico

## 🚀 Inicio rápido

```bash
npm install
npm run dev
```

## 📦 Build para producción

```bash
npm run build
```

El output estático queda en `dist/`. Compatible con Vercel, Netlify o cualquier hosting estático.

## 💰 Cómo modificar precios

Editá **un solo archivo**: [`src/data/modulesData.js`](src/data/modulesData.js)

Los totales del pack completo y la tabla resumen se recalculan automáticamente. No necesitás buscar precios en el HTML o componentes.

## 🏗️ Stack

- React 19
- Vite 7
- React Icons
- CSS vanilla (sin frameworks pesados para máxima performance)

## 📁 Estructura del Proyecto

```
src/
├── data/modulesData.js    ← Precios y datos de módulos (Single Source of Truth)
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── ModuleCard.jsx
│   ├── PricingTable.jsx
│   └── Footer.jsx
├── App.jsx
└── index.css              ← Design system (tokens, animaciones, layout)
```

## 🌐 Deploy a Vercel

1. Subí el repo a GitHub.
2. En [vercel.com](https://vercel.com): Import Project → Seleccioná el repo → Framework: Vite → **Deploy**.
3. O desde terminal usando Vercel CLI: `npx vercel --prod`.

---

Desarrollado por **[GA Software](https://ga-software.dev)** — Automatización con IA
