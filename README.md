# David Pérez Iglesias - Portfolio Personal

Portfolio profesional desarrollado con HTML, CSS (Tailwind), y JavaScript vanilla. Diseñado para ser moderno, responsive y accesible.

## 🚀 Características

- **Diseño Moderno**: Tema oscuro profesional con animaciones suaves
- **Responsive**: Optimizado para escritorio, tablet y móvil
- **Animaciones**: Animaciones al hacer scroll con AOS y microinteracciones personalizadas
- **Accesibilidad**: Semántica HTML5, navegación por teclado, alto contraste
- **Rendimiento**: Optimizado para carga rápida y rendimiento
- **SEO**: Meta etiquetas optimizadas para motores de búsqueda

## 🛠️ Tecnologías

- HTML5
- CSS3 (Tailwind CSS vía CDN)
- JavaScript (Nativo)
- AOS (Animate On Scroll)
- Google Fonts (Manrope)
- Material Symbols Icons

## 📦 Estructura del Proyecto

```
d4vbit_web/
├── index.html          # Contenedor principal
├── header.html         # Cabecera y navegación
├── footer.html         # Scripts y cierre
├── sections/           # Secciones modulares
│   ├── hero.html
│   ├── about.html
│   ├── experience.html
│   ├── skills.html
│   └── contact.html
├── script.js           # JavaScript personalizado
├── local_server.js     # Servidor local (Soporte SSI)
├── recursos/           # Recursos del proyecto
│   ├── CV_David_Perez_Iglesias.pdf
│   └── imagen.jpg
└── README.md          # Este archivo
```


## 🌐 Despliegue en GitHub Pages

Debido a que el proyecto ahora es modular utilizando Server Side Includes (SSI) simulados, **GitHub Pages no lo renderizará correctamente por defecto** si solo subes los archivos.

Para desplegarlo en producción, se recomienda:
1. Usar un script de "build" que combine los archivos (próximamente).
2. O mantener la versión de un solo archivo para producción si no dispones de un servidor backend.

## 💻 Desarrollo Local

Este proyecto utiliza una estructura modular. Para verlo correctamente, necesitas usar el servidor local incluido que combina los archivos dinámicamente.

### Requisitos
- [Node.js](https://nodejs.org/) instalado.

### Pasos
1. Abre una terminal en la carpeta del proyecto.
2. Ejecuta el siguiente comando:

```bash
node local_server.js
```

3. Abre tu navegador en [http://localhost:3000](http://localhost:3000).

> **Nota**: Si abres `index.html` directamente en el navegador, verás la página vacía o incompleta porque los navegadores no procesan las directivas `<!--#include -->` nativamente.

## 📱 Puntos de Ruptura (Responsive)

- **Móvil**: < 768px
- **Tablet**: 768px - 1024px
- **Escritorio**: > 1024px

## ♿ Accesibilidad

- Navegación por teclado completa
- Etiquetas ARIA apropiadas
- Alto contraste de colores
- Textos alternativos en imágenes
- Estructura semántica HTML5

## 🎨 Personalización

### Colores

Los colores principales se definen en la configuración de Tailwind en `index.html`:

```javascript
colors: {
    "primary": "#3B82F6",        // Azul principal
    "midnight-bg": "#0B0E14",    // Fondo oscuro
    "surface": "#161B22",        // Superficie de tarjetas
    "border-color": "#30363D",   // Color de bordes
}
```

### Animaciones

Las animaciones se pueden ajustar en `script.js`:

```javascript
AOS.init({
    duration: 600,      // Duración de animación
    easing: 'ease-out',
    once: true,         // Animar solo una vez
    offset: 0,          // Offset de activación
    delay: 0            // Delay inicial
});
```

## 📄 Licencia

Este proyecto es de uso personal. Siéntete libre de usarlo como inspiración para tu propio portfolio.

## 📞 Contacto

- **Email**: david.perez.glesias2004@gmail.com
- **GitHub**: [@erpereh](https://github.com/erpereh)
- **LinkedIn**: [David Pérez Iglesias](https://www.linkedin.com/in/david-peerez-iglesias/)
- **Teléfono**: +34 626 287 189

---

Desarrollado con ❤️ por David Pérez Iglesias
