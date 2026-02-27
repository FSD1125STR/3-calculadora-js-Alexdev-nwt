let resultado = document.querySelector('.resultado');
let numeros = document.querySelectorAll('.numeros');
let limpiar = document.querySelector('.limpiar');
let igual = document.querySelector('.igual');
let operadores = document.querySelectorAll('.operadores');
let sumar = document.querySelector('.sumar');
let restar = document.querySelector('.restar');
let multiplicar = document.querySelector('.multiplicar');
let dividir = document.querySelector('.dividir');
let numero1 = undefined;
let numero2 = undefined;
let numeroClick = undefined;
let valorActual = undefined;
let operadorSeleccionado = false;
let escribiendoSegundoNumero = false;

numeros.forEach(function(numero) {
    numero.addEventListener('click', function() {
        numeroClick = numero.textContent;
        valorActual = resultado.textContent;

        if(!operadorSeleccionado) {
            if(resultado.textContent === "0") {
                numero1 = resultado.textContent = numeroClick;
                console.log(numero1);
            } else {
                numero1 = resultado.textContent = valorActual + numeroClick;
                console.log(numero1);
            }
        } else {
            if(resultado.textContent === "0") {
                numero2 = resultado.textContent = numeroClick;
                console.log(numero2)
            } else {
                numero2 = resultado.textContent = valorActual + numeroClick;
                console.log(numero2);
            }
        }
    })
})
    


operadores.forEach(function(operador) {
    operador.addEventListener('click', function() {
        resultado.textContent = 0;
        operadorSeleccionado = true;
    }) 
})

sumar.addEventListener('click', function() {
    operadorSeleccionado = 'sumar';
})

restar.addEventListener('click', function() {
    operadorSeleccionado = 'restar';
})

multiplicar.addEventListener('click', function() {
    operadorSeleccionado = 'multiplicar';
})

dividir.addEventListener('click', function() {
    operadorSeleccionado = 'dividir';
})

igual.addEventListener('click', function() {
    switch(operadorSeleccionado) {
        case "sumar":
            let resultadoFinalSuma = suma(parseInt(numero1), parseInt(numero2));
            resultado.textContent = resultadoFinalSuma;
        break;

        case "restar":
            let resultadoFinalResta = resta(parseInt(numero1), parseInt(numero2));
            resultado.textContent = resultadoFinalResta;
        break;

        case "multiplicar":
            let resultadoFinalMultiplicacion = multiplicacion(parseInt(numero1), parseInt(numero2));
            resultado.textContent = resultadoFinalMultiplicacion;
        break;

        case "dividir":
            let resultadoFinalDivision = division(parseInt(numero1), parseInt(numero2));
            resultado.textContent = resultadoFinalDivision;
        break;
    }
    numero1 = resultado.textContent;
    numero2 = undefined;
    operadorSeleccionado = false;
})

limpiar.addEventListener('click', function() {
    resultado.textContent = 0;
})

function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function multiplicacion(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}