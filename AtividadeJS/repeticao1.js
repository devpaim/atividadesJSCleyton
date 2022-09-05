alert('Bem vindo(a) a Escola MACH1')

let anosPiloto = Number(prompt('Digite quantos anos você tem na escola: '))
let contador = 0
let totalreciclagem = 0

if (anosPiloto < 2) {
  alert('Você não tem tempo minimo de dois anos para ter uma reciclagem')
} else if (isNaN(anosPiloto)) {
  alert('Digite um numero inteiro')
} else if (anosPiloto != isNaN && anosPiloto >= 2) {
  while (contador <= anosPiloto) {
    if (anosPiloto % 2 == 0) {
      totalreciclagem = anosPiloto / 2
    } else if (anosPiloto % 2 != 0) {
      totalreciclagem = anosPiloto / 2 - 0.5
    }
    contador += 2
  }
  alert(
    'Durante ' +
      anosPiloto +
      ' anos voce tem ' +
      totalreciclagem +
      ' anos de reciclagem'
  )
}
