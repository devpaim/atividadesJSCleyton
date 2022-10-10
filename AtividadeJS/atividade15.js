let shoppingCart = [
  {
    product: 'Leite- Barnabé',
    measure: 'Litro',
    qty: 5,
    price: 7.8
  },
  {
    product: 'Alcatra- Fibrov',
    measure: 'kg',
    qty: 1.896,
    price: 40
  },
  {
    product: 'Refrigerante - Toca Polar',
    measure: 'Pet - 2 Litros',
    qty: 3,
    price: 8.99
  },
  {
    product: 'Arros - Tio Chicão',
    measure: 'Pacote - 1kg',
    qty: 4,
    price: 5.99
  },
  {
    product: 'Peito de Frango - Hot Chicken',
    measure: 'kg',
    qty: 5,
    price: 16.99
  }
]
function insertable(array) {
  let valorTotal = array.reduce(
    (totalValor, valorAtual) => totalValor + valorAtual.price,
    0
  )
  shoppingCart.forEach(function (shoppingCart) {
    document.getElementById('resultado').innerHTML += `
  <tr>
   <td>${shoppingCart.product}</td>
   <td>${shoppingCart.measure}</td>
   <td>${shoppingCart.qty}</td>
   <td>${shoppingCart.price}</td>
 </tr>`
  })

  document.querySelector(
    '#resultado'
  ).innerHTML += `<tr><td colspan = "4" class ="valorTotal">Valor total é R$${valorTotal}</td></tr>`
}
insertable(shoppingCart)
