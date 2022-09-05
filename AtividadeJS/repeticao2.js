alert('Bom dia a todos, bem vindo a Corrida MACH1')
let posicao = 1
let listaPilotos = prompt(
  'Por favor digite os nomes dos ganhadores conforme a ordem de chegada separado por (,)'
)
let ArrayPiloto = listaPilotos.split(',')

for (let piloto of ArrayPiloto) {
  if (posicao <= 3) {
    console.log('Podio ' + posicao + piloto)
    alert('Podio ' + posicao + piloto)
  } else {
    console.log(posicao + piloto)
    alert(posicao + piloto)
  }
  posicao++
}
