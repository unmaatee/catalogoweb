# UNMAATEE - Catálogo modular actualizado

Esta versión mantiene la estética y las funciones de la página actual, pero separa el proyecto en archivos más profesionales.

## Estructura

```text
unmaatee_catalogo_modular_actualizado/
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── products.js
│   └── app.js
└── assets/
    └── images/
```

## Qué editar

- `index.html`: estructura general de la página.
- `css/styles.css`: colores, estilos, tarjetas, responsive y estética.
- `js/products.js`: productos, precios, stock, categorías, imágenes y número de WhatsApp.
- `js/app.js`: carrito, filtros, buscador, galería y envío del pedido por WhatsApp.
- `assets/images/`: imágenes reales del catálogo.

## Cómo subirlo a GitHub Pages

1. Subí todo el contenido de esta carpeta a tu repositorio.
2. Asegurate de que `index.html` quede en la raíz del repositorio.
3. En GitHub: `Settings` → `Pages`.
4. En `Branch`, elegí `main` y carpeta `/root`.
5. Guardá y esperá unos minutos.

## Imágenes

Se extrajeron 28 imágenes del HTML original y quedaron guardadas en `assets/images/`.

## Nota técnica

No hace falta Java para esta etapa. Esta versión usa HTML, CSS y JavaScript separados, que es lo adecuado para una página estática publicada en GitHub Pages.
Más adelante se puede sumar backend con Node.js, Firebase o Java si querés usuarios, stock real, panel de administración o pagos online.
