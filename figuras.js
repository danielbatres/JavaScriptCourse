// Codigo del cuadrado

console.group("Cuadrados");


function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();

// Codigo del triangulo

console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.groupEnd();

// Codigo del círculo

console.group("Círculos");

// Diametro

function diametroCirculo(radio) {
    return radio * 2;
}

// PI

const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Área

function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();

// Aqui interactuamos con HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularArea() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo() {
    const lado1 = document.getElementById("Lado1");
    const lado2 = document.getElementById("Lado2");
    const base = document.getElementById("Base");
    const value1 = parseInt(lado1.value);
    const value2 = parseInt(lado2.value);
    const value3 = parseInt(base.value);

    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro)
}

function calcularAreaTriangulo() {
    const base = document.getElementById("Base");
    const altura = document.getElementById("Altura");
    const value1 = parseInt(base.value);
    const value2 = parseInt(altura.value);

    const area = areaTriangulo(value1, value2);
    alert(area);
}

function calcularPerimetroCirculo() {
    const radio = document.getElementById("radio");
    const value = radio.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const radio = document.getElementById("radio");
    const value = radio.value;

    const area = areaCirculo(value);
    alert(area);
}