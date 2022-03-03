// código del cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}

//console.log("el perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado){
    return lado * lado;
} 

//console.log("el área del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

// código del triangulo
console.group("Triangulos");
// const ladoTriangulo1 = 7;
// const ladoTrinagulo2 = 7;
// const baseTriangulo = 5;
// console.log("los lados del triangulo miden: " + ladoTriangulo1 + "cm, " + ladoTrinagulo2 + "cm, " + baseTriangulo + "cm");
// const alturaTriangulo = 6.5;
// console.log("la altura del triangulo es: " + alturaTriangulo + "cm");
function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
} 
// console.log("el perimetro del triangulo es: " + perimetroTriangulo + "cm");
function areaTriangulo(base, altura){
    return (base * altura)/ 2;
}
// console.log("el área del triangulo es: " + areaTriangulo + "cm")

console.group("Circulos");
// código del circulos
// const radioCirculo = 4;
// console.log("el radio del circulo es: " + radioCirculo+ "cm");
function diametroCirculo(radio){
    return radio * 2;
} 
// console.log("el diametro del circulo es: " + diametroCirculo + "cm");
const PI = Math.PI;
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
} 
// console.log("el perimetro del circulo es: " + perimetroCirculo + "cm");
function areaCirculo(radio){
    return radio * radio * PI;
} 
// console.log("el área del triangulo es: " +areaCirculo + "cm^2")

console.groupEnd();



