let numeroSecreto =0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
function asignarElementoTexto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorDeUsuario').value);
    if (numeroUsuario === numeroSecreto) {
        asignarElementoTexto('p', `Acertaste el numero secreto! en el ${intentos} ${(intentos ===1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroUsuario > numeroSecreto) {
            asignarElementoTexto('p', 'El numero secreto es menor');
        } else {
            asignarElementoTexto('p', 'El numero secreto es mayor');
        }
        intentos ++;
        limpiarCaja();
    }return
}

function condicionesIniciales(){
    asignarElementoTexto('h1', 'Juego del número secreto! ');
    asignarElementoTexto('p', 'Indica un número del 1 al 10:');
    numeroSecreto = generarNumeroSecreto();
    intentos =1;
}

function reiniciarJuego(){
    //Limpiar la caja
    limpiarCaja();
    //Condiciones iniciales
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();

function generarNumeroSecreto() {
    let numeroGenerado= Math.floor(Math.random() * numeroMaximo) + 1;

    console.log(listaNumerosSorteados);
    console.log(numeroGenerado);
    
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarElementoTexto('p','Ya se sortearon todos los numeros posibles. ')
    }else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto()
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }    
}

function limpiarCaja(){
    document.querySelector('#valorDeUsuario').value= '';
}