function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento
}

const coupons = [
    "JuanDC_es_Batman",
    "pero_no_le_digas_a_nadie",
    "es_un_secreto"
];

function onClickButtonPriceDiscount() {
    const InputPrice = document.getElementById("inputPrice");
    const InputDiscount = document.getElementById("inputDiscount");
    const InputCoupon = document.getElementById("inputCoupon");
    const priceValue = InputPrice.value;
    const discountValue = InputDiscount.value;
    const couponValue = InputCoupon.value;

    let descuento;

    switch(couponValue) {
        case coupons[0]:
            descuento = 15;
        break;
        case coupons[1]:
            descuento = 30;
        break;
        case coupons[2]:
            descuento = 25;
        break;
    }

    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
    const resultPrice = document.getElementById("ResultPrice")
    resultPrice.innerText = "El precio con descuento son: $" + precioConDescuento;
}

