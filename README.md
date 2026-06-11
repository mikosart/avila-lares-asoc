# Ávila, Lares & Asociados — Sitio web corporativo

Sitio web institucional de **Ávila, Lares & Asociados**, firma jurídica y de consultoría
estratégica con sede en Caracas (fundada en 1988).

Concepto de diseño: **"Ejecución"** — moderno, corporativo y estratégico.
Paleta verde petróleo + cobre, tipografía Fraunces (serif editorial) + Inter Tight.

## Estructura

```
.
├── index.html          # Página principal (single-page)
├── css/styles.css      # Sistema de diseño y estilos
├── js/main.js          # Navegación, animaciones, contadores y formulario
├── assets/             # Favicon e imágenes
└── README.md
```

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

- [ ] Definir y conectar el dominio.
- [ ] Reemplazar iniciales del equipo por fotografías profesionales (opcional).
- [ ] Conectar el formulario a un servicio (Formspree/Netlify Forms) si se desea recibir
      los envíos sin depender del cliente de correo del visitante.
- [ ] Agregar versión en inglés (estructura ya preparada).
- [ ] Imágenes Open Graph y favicon en PNG para compatibilidad total.

## Contacto de la firma

2da. Av. Urb. Campo Alegre, Torre Credival, Piso 5, Oficina 5D — Chacao, Caracas, Venezuela
· +58 414 242 98.80 · +58 414 245 49.71 · avilalaresyasociados@gmail.com
