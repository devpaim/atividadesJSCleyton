let mensagem = 'Manipulando strings com JS'
alert(mensagem.toUpperCase())
console.log('os 5 primeiros caracteres são = ' + mensagem.slice(0, 5))
alert('A string tem ' + mensagem.length + ' caracteres.')
let mensagemDois = 'Vamos concatenar as duas strings.'
console.log('Segunda string é ' + mensagemDois)
Concatenado = `${mensagem} ${mensagemDois}`
console.log(
  'Juntando as duas strings,  tera ' + Concatenado.length + ' Caracteres.'
)
