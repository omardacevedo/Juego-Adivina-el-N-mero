let nota1 = 7;
let nota2 = 6;
let nota3 = 3;
let nota4 = 5;

function calcularPromedio(nota1,nota2,nota3,nota4){
    let promedio = (nota1+nota2+nota3+nota4)/4
    return promedio;
}

function verificarAprobacion(promedio){
   return promedio >=5 ?"Aprobado": 'Reprobado'
}


resultado = verificarAprobacion();
alert(resultado);