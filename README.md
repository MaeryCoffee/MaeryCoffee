# Maery Coffee — Sitio Web

Landing page de una sola página para **Maery Coffee**, presentando el café de especialidad de la Finca "De La Cruz" (Los Mellizos, Villa Rica — Oxapampa, Perú).

Sitio estático hecho en HTML, CSS y JavaScript vanilla, sin frameworks ni proceso de build.

## 🚀 Demo local

No requiere instalación ni dependencias. Simplemente abre `index.html` en tu navegador, o levanta un servidor local:

```bash
# Con Python
python3 -m http.server 8000

# Con Node (npx)
npx serve .
```

Luego visita `http://localhost:8000`.

## 📁 Estructura del proyecto

```
├── index.html          # Estructura y contenido de la página
├── style.css            # Estilos (paleta, tipografía, animaciones, responsive)
├── script.js             # Interactividad (scroll reveal, contador de cantidad, botón WhatsApp, autoplay del video)
├── logo.png              # Logo de Maery Coffee
├── Foto1.jpeg             # Entrada a la Finca "De La Cruz"
├── foto_granos.jpeg        # Café verde secándose
├── Foto3.jpeg               # Secado solar en invernadero
├── Sabino.jpg                 # Foto de cosecha en la parcela (sección Historia)
└── Video.mp4                   # Video de cerezas de café en la rama (sección Galería)
```

## ✏️ Cómo editar el contenido

Todo el contenido vive directamente en `index.html`, dividido por secciones con comentarios (`<!-- HERO -->`, `<!-- ABOUT -->`, `<!-- STORY -->`, `<!-- GALLERY -->`, `<!-- BUY -->`, etc.). No hay CMS ni datos externos: se edita el HTML a mano.

### Número de WhatsApp

El botón "Pedir por WhatsApp" arma el enlace dinámicamente en `script.js`. Para cambiar el número de contacto:

```js
// script.js, línea ~26
const phone = '51940612537'; // ← REEMPLAZA con tu número de WhatsApp
```

### Reemplazar imágenes o video

Basta con sustituir el archivo manteniendo el mismo nombre, o cambiar el nombre y actualizar el `src` correspondiente en `index.html`.

## 🎨 Stack

- HTML5 semántico
- CSS puro (variables CSS, grid, flexbox, animaciones con `IntersectionObserver`)
- JavaScript vanilla (sin dependencias)
- Fuentes: [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) y [DM Sans](https://fonts.google.com/specimen/DM+Sans) vía Google Fonts

## 📦 Despliegue

Al ser un sitio 100% estático, se puede desplegar directamente en:

- **GitHub Pages** — activa Pages en la configuración del repo apuntando a la rama `main` (o `gh-pages`), carpeta raíz `/`.
- **Netlify / Vercel** — arrastra la carpeta o conecta el repositorio; no requiere comando de build.
- Cualquier hosting estático (S3, Cloudflare Pages, etc.)

## ℹ️ Sobre el contenido

La información técnica del café (origen, altitud, proceso, variedades, humedad, notas de cata) proviene de la ficha técnica oficial de la Finca De La Cruz. La historia de Sabino De La Cruz y Paulina Montoya está basada en información pública verificada de la Cámara de Turismo de Villa Rica ([turismovillarica.pe](https://turismovillarica.pe/de_la_cruz_cafe/)).

## 📄 Licencia

Todos los derechos reservados © Maery Coffee. Las fotografías y videos son propiedad de sus respectivos autores.
