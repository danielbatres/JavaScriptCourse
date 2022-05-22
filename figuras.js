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

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo3 = 4;

// console.log("Los lados del triangulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo3 + "cm");

// const alturaTriangulo = 5.5;
// console.log("La altura del triangulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.groupEnd();

// Codigo del círculo

console.group("Círculos");

// Radio

// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + "cm");

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