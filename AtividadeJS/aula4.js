let letra = 0
let mensagem = ''
letra = prompt('Digite uma letra do alfabeto:')
letra = letra.toLowerCase()
if (!isNaN(letra)) {
  alert(
    (mensagem = 'Deve digitar uma letra do alfabeto para obter o resultado.')
  )
} else if (
  letra == 'a' ||
  letra == 'e' ||
  letra == 'i' ||
  letra == 'o' ||
  letra == 'u'
) {
  alert((mensagem = 'Letra digitada é uma vogal'))
} else {
  alert((mensagem = 'Letra digitada é uma consoante'))
}
