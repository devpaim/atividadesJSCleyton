alert('Problema letra a')
let pacote = 7
let adesivos = 30
let repetidos = 15
let totalDeAdesivos = parseInt(pacote) * parseInt(adesivos)
const mensagem = 'Marcia tem '
console.log(mensagem + totalDeAdesivos + ' Adesivos')
let coladasAlbum = parseInt(totalDeAdesivos) - parseInt(repetidos)
console.log(mensagem + coladasAlbum + ' Adesivos colados')

alert('Problema letra b')
let duzia = 12
let caixaRefrigerantes = parseInt(2) * parseInt(duzia)
let quantidade = 0
quantidade = prompt(
  'Cada caixa cabe 2 duzias de latas, quantas caixas voce necessita?'
)
console.log(
  'Voce tera ' + parseInt(quantidade) * parseInt(caixaRefrigerantes) + ' latas'
)

let totalCaixa = 4
console.log(
  'Em quatro caixas voce podera guardar ' +
    parseInt(totalCaixa) * parseInt(caixaRefrigerantes) +
    ' latas'
)

alert('Letra c')
let numeroDecremento = 10
numeroDecremento = numeroDecremento--
let aviso = 'Numeros Impares de 0 a 10:'
console.log(aviso)
console.log(numeroDecremento-- - 1)
console.log(numeroDecremento-- - 2)
console.log(numeroDecremento-- - 3)
console.log(numeroDecremento-- - 4)
console.log(numeroDecremento-- - 5)
