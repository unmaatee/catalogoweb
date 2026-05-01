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


## Cómo subir esta versión a GitHub Pages

1. Descomprimí el archivo ZIP.
2. Entrá a la carpeta `unmaatee_catalogo_modular_actualizado`.
3. Subí o reemplazá en tu repositorio estos archivos y carpetas:
   - `index.html`
   - `css/`
   - `js/`
   - `assets/`
4. En GitHub, entrá a tu repositorio y tocá **Add file > Upload files**.
5. Arrastrá el contenido de la carpeta, no el ZIP completo.
6. Tocá **Commit changes**.
7. Si usás GitHub Pages, verificá en **Settings > Pages** que esté publicado desde la rama `main` y carpeta `/root`.
8. Abrí el link de tu página y actualizá con `Ctrl + F5` para evitar que el navegador muestre una versión vieja.

### Combo destacado

El botón `🎁 Combos` y la sección `Combo perfecto para todos los días` abren la imagen `assets/images/combo-diario.jpg` con el precio de $55.000 y permiten agregarlo al carrito.
