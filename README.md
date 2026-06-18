# Ávila, Lares & Asociados — Sitio web corporativo

Sitio web institucional de **Ávila, Lares & Asociados**, firma jurídica y de consultoría
estratégica con sede en Caracas (fundada en 1988).

Actualmente el repositorio contiene **dos propuestas de diseño** en evaluación, con el mismo
contenido pero arquitecturas visuales distintas. `index.html` es un **comparador** que enlaza
ambas:

- **Propuesta 1 · «Patrimonio»** (`propuesta-1.html` + `css/p1.css`) — editorial de lujo:
  composición simétrica y centrada, serif protagonista (Playfair Display), áreas como índice
  editorial con numerales romanos y reglas doradas. Paleta azul marino + dorado.
- **Propuesta 2 · «Estratega»** (`propuesta-2.html` + `css/p2.css`) — dossier oscuro:
  navegación lateral fija, alto contraste, metadatos en monospace, áreas como índice de
  informe numerado 01–10. Paleta negro azulado + ámbar (Bodoni Moda + Space Mono).

> La antigua propuesta 2 («Ejecución») fue descartada y eliminada.

## Estructura

```
.
├── index.html          # Comparador de propuestas
├── propuesta-1.html    # Propuesta 1 · Patrimonio
├── propuesta-2.html    # Propuesta 2 · Estratega
├── css/
│   ├── p1.css          # Estilos Patrimonio
│   └── p2.css          # Estilos Estratega
├── js/main.js          # Navegación, animaciones, contadores y formulario (compartido)
├── assets/             # Favicon e imágenes
└── README.md
```

`js/main.js` es **compartido** por ambas propuestas y depende de estos hooks del HTML, que no
deben renombrarse ni eliminarse: ids `siteHeader`, `navToggle`, `navLinks`, `contactForm`,
`formNote`, `year`; clase `reveal`; `.stat-num[data-count]`; las clases de grid
`.areas-grid` / `.equipo-grid` / `.enfoque-grid` / `.paises-grid`; los `id` de cada `<section>`;
y los `href="#..."` de la navegación.

## Desarrollo local

Es un sitio estático: no requiere build. Para verlo localmente puede abrir `index.html`
directamente, o levantar un servidor simple:

```bash
# Python
python -m http.server 8080

# Node
npx serve .
```

Luego abrir http://localhost:8080

## Despliegue

Compatible con cualquier hosting estático. Recomendado **GitHub Pages** o **Netlify**:

- **GitHub Pages:** Settings → Pages → Branch `main` → `/root`.
- **Netlify:** arrastrar la carpeta o conectar el repositorio (sin comando de build).

## Pendientes / próximos pasos

- [ ] Elegir entre Patrimonio y Estratega; renombrar la elegida a `index.html` y retirar el
      comparador.
- [ ] Definir y conectar el dominio.
- [ ] Reemplazar los retratos referenciales del equipo por las fotografías oficiales.
- [ ] Conectar el formulario a un servicio (Formspree/Netlify Forms) si se desea recibir
      los envíos sin depender del cliente de correo del visitante.
- [ ] Imágenes Open Graph y favicon en PNG para compatibilidad total.

## Contacto de la firma

2da. Av. Urb. Campo Alegre, Torre Credival, Piso 5, Oficina 5D — Chacao, Caracas, Venezuela
· +58 414 242 98.80 · +58 414 245 49.71 · avilalaresyasociados@gmail.com
