let listaGenerica = [];

let listanumerica = [1,2,3,5,8,10]

let leguajesDeProgramacion = [ 'JavaScript', 'C', 'C++', 'Kotlin','Python'];

leguajesDeProgramacion.push('Java', 'Ruby', 'GoLang')

function mostrarLista(lista){
    console.log(lista)
}

let imprimir = mostrarLista(leguajesDeProgramacion);

function mostrarListaInversa(lista){
    return lista.reverse()
}

let imprimirInversa = mostrarListaInversa(leguajesDeProgramacion);

console.log(imprimirInversa)


function promedio(lista){
    suma= 0;
    for(i=0;i<lista.length;i++){
        suma+=lista[i];
    }return suma/lista.length;
}

let imprimirPromedio=promedio(listanumerica);
console.log(imprimirPromedio);


function numeroMenorMayor(lista){
    let menor = lista[0];
    let mayor = lista[0];
    for(let i=1;i<lista.length;i++){
        if(lista[i]<menor){
            menor= lista[i];
        }
        if(lista[i]>mayor){
            mayor=lista[i];
        }
    }
    return {menor,mayor}
}

let resultadoNumeros= numeroMenorMayor(listanumerica);

console.log(`El numero menor es: ${resultadoNumeros.menor}`)

console.log(`El numero mayor es: ${resultadoNumeros.mayor}`)

function devueltaPusicion(elemento,lista){
    let posicion = lista.indexOf(elemento);
    if(posicion!==-1){
        return posicion;
    }else{
        return 1;
    }
}

resultado3 = devueltaPusicion(3,listanumerica)
console.log(resultado3)

lista1 = [1,2,3,4,5,6,7,8,9,10];
lista2= [11,12,13,14,15,16,17,18,19,20]

function sumaListas(lista,listas){
    if(lista.length!== listas.length){
        return "Las listas no tienen el mismo tamaño.";
    }
    let resultado= [];
    for(let i=0; i<lista.length;i++){
        resultado.push(lista[i]+listas[i]);
    }
    return resultado
}

let sumarListas= sumaListas(lista1,lista2);
console.log(sumarListas);

function cuadradoNumero(lista){
    if(lista.length<1){
        return "La lista está vacia"
    }
    listaCuadrada= [];
    for(let i=0 ;i<lista.length;i++){
        listaCuadrada.push(lista[i]**2);
    }
    return listaCuadrada;
}

let result = cuadradoNumero(lista1);
console.log(result);
