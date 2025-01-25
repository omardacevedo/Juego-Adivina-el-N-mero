function saludar(){
    console.log('Hola Mundo!');
}
saludar()

function nombre(){
    let nombre = prompt('Por favor ingresa tu nombre: ')
    console.log(`Hola, ${nombre}`)
    return nombre;
}

let saludo = nombre();
alert(`Hola, ${saludo}`);

function doble(numero){
    numero = parseInt(prompt('Ingresa un numero: '))
    let resultado = numero *numero;
    return resultado;
}


let multiplicar = doble();
alert(`Hola, ${multiplicar}`);