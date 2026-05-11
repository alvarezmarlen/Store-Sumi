export function injectLayout() {
    const headerContainer = document.querySelector('header');
    const footerContainer = document.querySelector('footer');
    const footerBajo = document.querySelector('.footer-bajo');

    // Detectar profundidad de la carpeta para ajustar rutas relativas
    const path = window.location.pathname;
    const isSubPage = path.includes('/pages/');
    const basePath = isSubPage ? '../' : '';
    const pagesPath = isSubPage ? '' : 'pages/';

    if (headerContainer) {
        headerContainer.id = 'header';
        headerContainer.innerHTML = `
            <nav class="header-nav">
                <ul>
                    <li><a href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a></li>
                </ul>
                <ul>
                    <li><a class="contact" href="${basePath}${pagesPath}contacto.html">Contáctanos</a></li>
                </ul>
            </nav>

            <section class="header-top">
                <div class="logo-header">
                    <img src="${basePath}assets/img/logo-nombre.png" alt="Logo Sumi.chh">
                </div>

                <div class="header-center">
                    <div class="envio-info">
                        <p>
                            <img src="${basePath}assets/img/envio.jpg" alt="Camion envio">ENVIOS A TODA ESPAÑA &nbsp;&nbsp;&nbsp;
                            <img src="${basePath}assets/img/icono-pago-seguro.jpg" alt="pago seguro">PAGO 100% SEGURO
                        </p>
                    </div>
                    <div class="buscar-nav">
                        <form action="/search" class="buscar-form">
                            <input type="text" class="form-control" name="s" placeholder="Buscar en el catálogo" autocomplete="off">
                            <button type="submit" class="buscar-btn"><i class="fa fa-search"></i></button>
                        </form>
                    </div>
                </div>

                <div class="header-right">
                    <a href=""><img src="${basePath}assets/img/icono-cuenta.jpg" alt="Icono Iniciar Sesión"> <span class="title">Iniciar Sesión</span></a>
                    <a href=""><img src="${basePath}assets/img/icono-cesta.jpg" alt="Icono Carrito"> <span class="title">Carrito</span></a>
                </div>
            </section>

            <nav class="nav-inferior">
                <ul>
                    <li><a href="${basePath}index.html"><i class='bx bx-home'></i><span>Inicio</span></a></li>
                    <li><a href="${basePath}${pagesPath}productos.html"><i class='bx bxs-grid'></i><span>Productos</span></a></li>
                    <li><a href=""><i class='bx bx-group'></i><span>Nosotros</span></a></li>
                    <li><a href="${basePath}${pagesPath}contacto.html"><i class='bx bx-envelope'></i><span>Contacto</span></a></li>
                </ul>
            </nav>
        `;
    }

    if (footerContainer) {
        footerContainer.className = 'container-footer';
        footerContainer.innerHTML = `
            <section class="sobre-nosotros">
                <p class="titulos-footer"><span>SOBRE NOSOTROS</span></p>
                <a href=""><i class="fa-solid fa-pen-nib"></i>Sumi.chh Blog</a>
                <a href=""><i class="fa-solid fa-heart"></i>Sobre la marca</a>
            </section>

            <section class="central">
                <a href="${basePath}index.html"><img src="${basePath}assets/img/logo-sumi.png" alt="Sumi.chh - Ir a inicio"></a>
                <nav class="redes-sociales" aria-label="Redes sociales">
                    <a href="https://www.facebook.com/?locale=es_ES"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://x.com/?lang=es"><i class="fa-brands fa-twitter"></i></a>
                    <a href="https://www.youtube.com/?app=desktop&hl=e"><i class="fa-brands fa-youtube"></i></a>
                    <a href="https://www.tiktok.com/"><i class="fa-brands fa-tiktok"></i></a>
                </nav>
            </section>

            <section class="informacion-legal">
                <p class="titulos-footer"><span>INFORMACIÓN</span></p>
                <a href=""><i class="fa-solid fa-lock"></i>Política de privacidad</a>
                <a href=""><i class="fa-solid fa-circle-info"></i> Política de cookies</a>
                <a href=""><i class="fa-solid fa-scale-balanced"></i>Términos y condiciones</a>
            </section>
        `;

        // USAMOS LA VARIABLE QUE YA TENEMOS O LA BUSCAMOS DE NUEVO
        let lowerFooter = footerBajo;   // Intentamos usar la del principio
        if (!lowerFooter) {
            lowerFooter = document.createElement('div');
            lowerFooter.className = 'footer-bajo';
            footerContainer.after(lowerFooter);
        }
        lowerFooter.innerHTML = `<p><em>Copyright 2026 | Dev/Marlen Alvarez</em></p>`;
    }
}
