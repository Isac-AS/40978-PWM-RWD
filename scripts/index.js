$.getJSON("data/products.json", function (json) {
    let productsContainer = document.getElementById("productsContainer");
    for (let i = 0; i < json.length; i++) {
        $.getJSON(json[i], function (products) {
            for (let j = 0; j < products.length; j++) {
                let product = products[j];
                console.log(product);
                productsContainer.innerHTML +=
                    `
                    <a class="product" href="concreteProduct.html">
                    <img src=${product.image}>
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