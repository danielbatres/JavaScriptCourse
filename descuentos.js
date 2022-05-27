const precioOriginal = 120;
const descuento = 18;

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento
}

function onClickButtonPriceDiscount() {
    const InputPrice = document.getElementById("inputPrice");
    const InputDiscount = document.getElementById("inputDiscount")
    const priceValue = InputPrice.value;
    const discountValue = InputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
    const resultPrice = document.getElementById("ResultPrice")
    resultPrice.innerText = "El precio con descuento son: $" + precioConDescuento;
}

