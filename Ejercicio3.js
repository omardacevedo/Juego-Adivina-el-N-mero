let altura = 1.70;
let peso  = 85;
let imc = 0;
let numero = 5;
let dolares = 20;

function indiceMasaCorporal(altura,peso){
    return peso / (altura**2)
}

let IMC =  indiceMasaCorporal(altura,peso);
alert(`el indice de masa corporal es: ${IMC}`);


function factorial(numero){
    if(numero<0){
        return"El numero no es válido";
    }
    let factorial = 1;
    for(let i=1; i<=numero;i++){
        factorial *=i;
    }
    return factorial;
}

let resultado = factorial(numero);
console.log(`el factorial de ${numero} es: ${resultado}`);


function convertirDolares(dolares){
    return dolares * 4.80;
}

let conversion = convertirDolares(dolares);
alert(`El valor de ${dolares} dolares a Reales, es: ${conversion}`);

function calcularCirculo(radio) {
    const pi = Math.PI; // Valor de pi
    const area = pi * (radio ** 2); // Área: π * r^2
    const perimetro = 2 * pi * radio; // Perímetro: 2 * π * r
    return {
        area: area,
        perimetro: perimetro
    };
}

// Ejemplo de uso:
let radio = 5; // Cambia el valor según el radio del círculo
let resultado1 = calcularCirculo(radio);

if (resultado1 && typeof resultado1.area === "number" && typeof resultado1.perimetro === "number") {
    console.log(`Para un círculo con radio ${radio}:`);
    console.log(`- Área: ${resultado1.area.toFixed(2)}`);
    console.log(`- Perímetro: ${resultado1.perimetro.toFixed(2)}`);
} else {
    console.error("Hubo un error al calcular el círculo.");
}


function tablaMultiplicar(numero){
    let resultado= " ";
    for(i=1;i<=10;i++){
        resultado+= `${numero} * ${i} = ${numero*i}\n`;
    }
    return resultado
}

let multiplicar= tablaMultiplicar(numero);
console.log(multiplicar);