# Construcciones Vergara - Sitio Web Corporativo

## Descripción
Sitio web profesional para Construcciones Vergara, empresa especializada en construcción, remodelación y servicios relacionados. El sitio presenta una interfaz moderna y responsive que destaca los servicios de la empresa y facilita el contacto con clientes potenciales.

## Características Principales

### Diseño y Funcionalidad
- **Diseño Responsive**: Adaptable a dispositivos móviles, tablets y desktop
- **Navegación Suave**: Menú de navegación con scroll suave entre secciones
- **Logo Corporativo**: Logo en imagen optimizado para todas las resoluciones
- **Integración WhatsApp**: Botón flotante y formulario de contacto conectado a WhatsApp
- **Carrusel de Testimonios**: Testimonios de clientes con navegación automática y manual
- **Galería Interactiva**: Carrusel de imágenes con modal para vista completa
  - 4 imágenes en vista desktop
  - 3 imágenes en vista tablet
  - 2 imágenes en vista mobile
  - Modal con navegación por teclado y botones
  - Sistema dinámico configurable para agregar/quitar imágenes
- **Formulario de Contacto**: Sistema de contacto integrado con WhatsApp Business
- **Mapa Integrado**: Ubicación de la empresa con Google Maps
- **SEO Optimizado**: Meta tags y estructura optimizada para buscadores
- **Google Analytics**: Integración preparada para seguimiento de métricas

### Elementos de Diseño
- Paleta de colores profesional (azul, naranja, grises)
- Tipografía moderna y legible
- Iconos de Font Awesome
- Animaciones suaves y transiciones
- Efectos hover en elementos interactivos
- Centrado responsive en secciones clave

### Servicios Destacados
1. **Gasfitería** - Instalaciones y reparaciones de sistemas de agua
2. **Carpintería** - Trabajos en madera y muebles a medida
3. **Construcción de Casas** - Proyectos residenciales completos
4. **Remodelaciones** - Renovación y mejoras de espacios
5. **Ampliaciones** - Expansión de espacios existentes
6. **Destapes** - Servicios de destape y mantención de cañerías

### Información de Contacto
- **Teléfono**: +56 9 1234 5678
- **Email**: contacto@construccionesvergara.cl
- **Dirección**: Av. Principal 123, Santiago, Chile
- **WhatsApp**: Integración directa para consultas rápidas

## Estructura de Archivos
```
construcciones-vergara/
├── index.html              # Página principal con carrusel y modal
├── assets/
│   ├── css/
│   │   └── style.css      # Estilos principales con responsive mejorado
│   ├── js/
│   │   └── script.js      # Funcionalidades JavaScript con carrusel dinámico
│   └── img/
│       ├── galeria/       # Imágenes de proyectos (1.jpg - 29.jpg)
│       ├── servicios/     # Imágenes de servicios organizadas
│       ├── logos/         # Logo corporativo y elementos de marca
│       ├── hero/          # Imágenes principales y de fondo
│       └── [otras]        # Recursos gráficos adicionales
└── README.md              # Documentación actualizada
```

## Tecnologías Utilizadas
- **HTML5**: Estructura semántica con meta tags SEO
- **CSS3**: Estilos modernos con Flexbox, Grid y responsive design
- **JavaScript**: Funcionalidades interactivas y carrusel dinámico
- **Font Awesome**: Iconografía profesional
- **Google Fonts**: Tipografías Roboto y Montserrat
- **Google Analytics**: Preparado para seguimiento de métricas

## Características Técnicas

### SEO y Accesibilidad
- Meta tags optimizados para buscadores
- Estructura semántica HTML5
- Alt text descriptivo en imágenes
- Navegación accesible por teclado
- Open Graph tags para redes sociales

### Performance
- Imágenes con lazy loading
- CSS optimizado con media queries eficientes
- JavaScript modular y optimizado
- Carga asíncrona de recursos externos

### Compatibilidad
- Navegadores modernos (Chrome, Firefox, Safari, Edge)
- Responsive design para móviles, tablets y desktop
- Fallbacks para funcionalidades avanzadas

## Funcionalidades JavaScript

### Navegación
- Menú hamburguesa responsive para móviles
- Scroll suave entre secciones
- Indicador de scroll en header

### Galería Interactiva
- **Carrusel dinámico**: Configurable mediante variable TOTAL_IMAGES
- **Responsive**: 4 imágenes (desktop), 3 (tablet), 2 (mobile)
- **Modal avanzado**: Vista completa con navegación
- **Controles**: Botones, indicadores y navegación por teclado
- **Auto-generación**: Las imágenes se cargan automáticamente desde la carpeta

### Interactividad
- Carrusel automático de testimonios
- Formulario de contacto con validación
- Botón "Volver arriba" dinámico
- Animaciones optimizadas al hacer scroll

### Integración WhatsApp
- Botón flotante siempre visible
- Formulario que envía mensajes directos
- Tracking de clics en botones de servicio

## Integración WhatsApp

### Botón Flotante
- Posición fija en la esquina inferior derecha
- Visible en todas las secciones
- Enlace directo a WhatsApp Business
- Tracking de clics para analytics

### Formulario de Contacto
- Campos: Nombre, Email, Teléfono, Mensaje
- Validación en tiempo real
- Envío directo a WhatsApp con formato estructurado
- Mensaje predefinido con datos del formulario
- Centrado responsive en dispositivos móviles

Todos los servicios incluyen botones directos a WhatsApp con mensajes preconfigurados:
- Enlace principal: https://wa.me/56920897688
- Mensajes personalizados por servicio
- Botón flotante para contacto rápido

## Diseño Responsive

### Mobile First
- Diseño optimizado primero para móviles
- Breakpoints: 480px, 768px, 1024px, 1200px
- Menú hamburguesa en dispositivos pequeños
- Logo optimizado para todas las resoluciones

### Adaptaciones por Dispositivo
- **Mobile**: 
  - Navegación colapsada
  - Galería 2 columnas
  - Textos centrados (contacto y footer)
  - Misión y visión centradas
- **Tablet**: 
  - Layout híbrido
  - Galería 3 columnas
  - Servicios en 2 columnas
  - Misión y visión centradas
- **Desktop**: 
  - Layout completo
  - Galería 4 columnas
  - Múltiples columnas en servicios
  - Misión y visión centradas

### Elementos Responsive
- Imágenes escalables con lazy loading
- Tipografía fluida
- Espaciado proporcional
- Botones táctiles optimizados
- Carrusel adaptativo según resolución

## Instalación y Uso

1. **Clonar o descargar** el repositorio
2. **Abrir** `index.html` en un navegador web
3. **Personalizar** contenido según necesidades:
   - Actualizar información de contacto
   - Configurar número de imágenes en galería
   - Modificar servicios y testimonios
   - Configurar Google Analytics

## Personalización

### Galería de Imágenes
Para agregar o quitar imágenes de la galería:
1. Agregar/quitar archivos numerados (1.jpg, 2.jpg, etc.) en `/assets/img/galeria/`
2. Actualizar la variable en `script.js`:
```javascript
const TOTAL_IMAGES = 29; // Cambiar por el número total de imágenes
```

### Google Analytics
Configurar tracking en `index.html`:
```html
<!-- Reemplazar 'GA_MEASUREMENT_ID' con tu ID real -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

### Colores
Modificar variables CSS en `style.css`:
```css
:root {
    --primary-color: #2c5aa0;
    --secondary-color: #ff6b35;
    --accent-color: #4a90e2;
}
```

### Contenido
- **Servicios**: Editar sección de servicios en `index.html`
- **Testimonios**: Actualizar array de testimonios en `script.js`
- **Información**: Modificar datos de contacto y empresa
- **Logo**: Reemplazar archivo en `/assets/img/logos/logo.jpeg`

### WhatsApp
Cambiar número de WhatsApp en:
- Botón flotante (href en index.html)
- Formulario de contacto (script.js)

## Mejoras Implementadas

### Versión Actual
- ✅ Galería con carrusel responsive y modal
- ✅ Logo corporativo en imagen
- ✅ Organización de imágenes en subcarpetas
- ✅ Centrado responsive mejorado
- ✅ SEO y meta tags optimizados
- ✅ Comentarios en código para mantenimiento
- ✅ Sistema dinámico para gestión de galería
- ✅ Preparación para Google Analytics

## Futuras Mejoras
- Galería completa de proyectos
- Blog de noticias y consejos
- Sistema de citas online
- Integración con redes sociales
- PWA (Progressive Web App)

## Soporte
Para consultas técnicas o modificaciones, contactar al desarrollador.

---
**Construcciones Vergara** - Tradición y Calidad en Construcción desde hace más de 40 años.