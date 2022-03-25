const urlParams = new URLSearchParams(window.location.search);
const url = urlParams.get('url');
$.getJSON(url, function (products) {
    let productsContainer = document.getElementById("catProductsContainer");
    for (let i = 0; i < products.length; i++) {
        let product = products[i];
        console.log(product)
        productsContainer.innerHTML +=
            `
                <a class="product" href="concreteProduct.html?url=${url}&id=${product.id}">
                <img src=${product.image} alt="${product.name}">
                <div class="info">
                    <p>${product.extendedName}</p>
                    <h2>${product.price}</h2>
                    Sin iva ${product.priceWithoutTax}
                </div>
                <div class="name">
                    ${product.name}
                </div>
                </a>
            `;
    }
});
