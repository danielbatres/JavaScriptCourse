// Codigo del cuadrado

console.group("Cuadrados");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado  + "cm 2");

const areaCuadrada = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrada + "cm 2");

console.groupEnd();

// Codigo del triangulo

console.group("Triangulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo3 = 4;

console.log("Los lados del triangulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo3 + "cm");

const alturaTriangulo = 5.5;
console.log("La altura del triangulo es de: " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo3;
console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo3 * alturaTriangulo) / 2;
console.log("El área del triangulo es: " + areaTriangulo + "cm 2");

console.groupEnd();

// Codigo del círculo

console.group("Círculos");

// Radio

const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo + "cm");

// Diametro

const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es: " + diametroCirculo + "cm");

// PI

const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia

const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");

// Área

const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El area del circulo es: " + areaCirculo + "cm 2");

console.groupEnd();