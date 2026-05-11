export function renderProducts(products, containerId) {
    const productList = document.getElementById(containerId);
    if (!productList) return;

    productList.innerHTML = ''; // Limpiar contenedor

    products.forEach((product) => {
        const col = document.createElement('div');
        col.className = 'col';
        
        // Manejo de descripción para evitar 'undefined'
        const descripcion = product.descripcion || '';

        col.innerHTML = `
            <div class="card" style="width: 18rem;">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p><strong>€ ${product.price}</strong></p>
                    ${descripcion ? `<p class="card-text">${descripcion}</p>` : ''}
                </div>
            </div>
        `;
        productList.appendChild(col);
    });
}
