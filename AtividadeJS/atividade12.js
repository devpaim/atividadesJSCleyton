window.onload = function () {
  const listaUsuarioshtml = []
  const listaUsuarios = [
    {
      id: 1,
      nome: 'Thiago Pereira',
      sexo: 'Masculino',
      idade: 20,
      email: 'fulanodetal@termail.com'
    },
    {
      id: 2,
      nome: 'Thais Lins',
      sexo: 'Feminino',
      idade: 19,
      email: 'thaisdetal@termail.com'
    },
    {
      id: 3,
      nome: 'Mariana Ferreira',
      sexo: 'Feminino',
      idade: 25,
      email: 'marianaferreira@tailme.com'
    },
    {
      id: 4,
      nome: 'Manuela Ivo Silva',
      sexo: 'Feminino',
      idade: 28,
      email: 'manuelatrait@gtepmail.com'
    }
  ]

  const lista = function (item) {
    listaUsuarioshtml.push(`
     <tr>
      <td>${item.id}</td>
      <td>${item.nome}</td>
      <td>${item.sexo}</td>
      <td>${item.idade}</td>
      <td>${item.email}</td>
    </tr>
    `)
  }
  listaUsuarios.forEach(lista)

  document.getElementById('resultado').innerHTML = listaUsuarioshtml.join('')

  console.log(listaUsuarioshtml)
}
