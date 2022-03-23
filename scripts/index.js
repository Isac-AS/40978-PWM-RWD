$.getJSON("data/products.json", function (json) {
    let productsContainer = document.getElementById("productsContainer");
    for (let i = 0; i < json.length; i++) {
        $.getJSON(json[i], function (products) {
            for (let j = 0; j < products.length; j+=2) {
                let product = products[j];
                productsContainer.innerHTML +=
                    `
                    <a class="product" href="concreteProduct.html?url=${json[i]}&id=${product.id}">
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
    }
});