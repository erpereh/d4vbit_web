# David Pérez Iglesias - Portfolio Personal

Portfolio profesional desarrollado con HTML, CSS (Tailwind), y JavaScript vanilla. Diseñado para ser moderno, responsive y accesible.

## 🚀 Características

- **Diseño Moderno**: Dark theme profesional con animaciones suaves
- **Responsive**: Optimizado para desktop, tablet y móvil
- **Animaciones**: Scroll animations con AOS y microinteracciones personalizadas
- **Accesibilidad**: Semántica HTML5, navegación por teclado, alto contraste
- **Performance**: Optimizado para carga rápida y rendimiento
- **SEO**: Meta tags optimizados para motores de búsqueda

## 🛠️ Tecnologías

- HTML5
- CSS3 (Tailwind CSS via CDN)
- JavaScript (Vanilla)
- AOS (Animate On Scroll)
- Google Fonts (Manrope)
- Material Symbols Icons

## 📦 Estructura del Proyecto

```
d4vbit_web/
├── index.html          # Página principal
├── script.js           # JavaScript personalizado
├── recursos/           # Recursos del proyecto
│   ├── CV_David_Perez_Iglesias.pdf  # CV profesional
│   ├── imagen.jpg     # Foto de perfil
│   ├── diseño.png     # Referencia de diseño
│   └── code.html      # HTML base original
└── README.md          # Este archivo
```

## 🌐 Despliegue en GitHub Pages

### Opción 1: Configuración Manual

1. Sube el proyecto a un repositorio de GitHub
2. Ve a Settings > Pages
3. En "Source", selecciona la rama `main` y carpeta `/ (root)`
4. Guarda y espera unos minutos
5. Tu sitio estará disponible en `https://[tu-usuario].github.io/[nombre-repo]`

### Opción 2: Usando Git

```bash
# Inicializar repositorio
git init

# Añadir archivos
git add .

# Commit inicial
git commit -m "Initial commit: Portfolio personal"

# Conectar con repositorio remoto
git remote add origin https://github.com/[tu-usuario]/[nombre-repo].git

# Subir cambios
git branch -M main
git push -u origin main
```

## 💻 Desarrollo Local

Simplemente abre `index.html` en tu navegador favorito. No requiere servidor local ni proceso de build.

Para un mejor desarrollo, puedes usar:

```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (npx)
npx serve

# Con VS Code
# Instala la extensión "Live Server" y haz clic derecho > "Open with Live Server"
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

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
