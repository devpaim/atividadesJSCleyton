alert(
  'Bem vindo ao Petshop do João, vamos ver qual serviço temos para seu animal'
)

let nomeAnimal = prompt('Qual é o seu bicho de estimação?')

switch (nomeAnimal.toLowerCase()) {
  case 'cachorro':
  case 'gato':
  case 'coelho':
    alert('Para ' + nomeAnimal + ' nossos produtos são: Ração, banho e tosa')
    break
  case ('cavalo', 'cabra', 'jumento'):
    alert(
      'Para ' +
        nomeAnimal +
        ' nós temos ração e indicação para um veterinario especializado.'
    )
    break
  case 'rato':
    alert(
      'Para ' + nomeAnimal + ' nossos produtos são: Ração e gaiolas especiais'
    )
    break
  case 'passaro':
    alert(
      'Para ' +
        nomeAnimal +
        ' nossos produtos são: Ração e um serviço para implante de rastreador na ave.'
    )
    break
  default:
    alert('Infelizmente não temos produtos para o seu animal.')
    break
}
