export function renderProducts(products, containerId) {
    const productList = document.getElementById(containerId);
    if (!productList) return;

    // Limpiamos el contenedor para que no se duplique con lo que hay en el index
    productList.innerHTML = ''; 

    products.forEach((product) => {
        const div = document.createElement('div');
        div.className = 'producto-mini'; // Mantenemos tu clase original de CSS
        
        div.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h5>${product.name}</h5>
            <span>${product.price},00€</span>
            ${product.description ? `<p style="font-size: 0.8rem; color: #666; margin-top: 5px;">${product.description}</p>` : ''}
        `;
        productList.appendChild(div);
    });
}