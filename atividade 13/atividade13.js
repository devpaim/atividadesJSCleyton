let btnCalcular = document.getElementById('Calcular')
let btnLimpar = document.getElementById('Limpar')
let numero = document.getElementById('numero')
let arrValores = []
let resultadoDiv = document.getElementById('resultado')

function addEvent() {
  document.getElementById('limpar').addEventListener('click', () => {
    limpar(resultadoDiv)
  })
  document.getElementById('calcular').addEventListener('click', () => {
    adicionarArr()
  })
}

function limpar(arr) {
  arr.innerHTML = ''
  arrValores = []
}

function adicionarArr() {
  if (numero.value > 0) {
    arrValores.push(numero.value)
    calculado = calcularTriplo(arrValores)
    resultadoDiv.innerHTML = calculado
  }
}
function calcularTriplo(arr) {
  let arrValoresTriplo = arr.map(function (arr) {
    return arr * 3
  })
  return arrValoresTriplo
}
addEvent()
