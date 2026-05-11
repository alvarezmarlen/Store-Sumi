import { products } from './modules/data.js';
import { initStarAnimation } from './modules/animations.js';
import { renderProducts } from './modules/ui.js';
import { injectLayout } from './modules/layout.js';

document.addEventListener('DOMContentLoaded', () => {
    // Inyectar Header y Footer
    injectLayout();

    // Inicializar animación de estrellas si el elemento existe
    initStarAnimation();

    // Renderizar productos si estamos en una página con lista de productos
    renderProducts(products, 'product-list');
});
