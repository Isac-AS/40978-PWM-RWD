const urlParams = new URLSearchParams(window.location.search);
const url = urlParams.get('url');
const id = urlParams.get('id');
$.getJSON(url, function (products) {
    let productsContainer = document.getElementById("productView");
        console.log(id);
    for (let i = 0; i < products.length; i++) {
        let product = products[i];
        console.log(product.id)
        if (product.id === id) {
            productsContainer.innerHTML += `
            <img alt={product.name} src=${product.image}>
            <div id="productInfo">
                <h2>${product.extendedName}</h2>
                <div class="auxContainer">
                    <h1 class="productPrice">${product.price}</h1>
                    <h3 class="additionalPriceInformation">Sin iva: ${product.priceWithoutTax}</h3>
                </div>
                <div class="auxContainer">
                    <u class="leftHandBoldTag">Marca:</u>
                    <u>${product.brand} - P/N: 2W1D7EA | Cod. Artículo: 350514</u>
                </div>
                <div class="auxContainer">
                    <u class="leftHandBoldTag">Envío:</u>
                    <u>Envío Gratis</u>
                </div>
                <div class="auxContainer">
                    <u class="leftHandBoldTag">Devolución:</u>
                    <u>Devolución Gratis</u>
                </div>
                <div class="auxContainer">
                    <u class="leftHandBoldTag">Cantidad:</u>
                    <u>1</u>
                </div>
                <div id="actionButtons">
                    <button>
                        Añadir al carrito
                    </button>
                    <button>
                        Comprar
                    </button>
                    <button>
                        Añadir a la lista de deseos
                    </button>
                </div>
            </div>
            `;
        }
    }
});