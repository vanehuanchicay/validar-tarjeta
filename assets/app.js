function isValidCard(card) {
  do { 
    var card = prompt('Ingrese el número de la tarjeta');
    card.split('').reverse();
  } while (!card);
 
  var pares = [];
  var sum = 0;
  for (i = 0; i < card.length;i++) {
    if (i % 2 === 0) {
      sum += card[i];
    } else {
      pares.push(card[i] * 2);
    }
  }
  for (var j = 0; j < pares.length;j++) {
    if (pares[j] < 10) {
      sum += pares[j];
    } else {
      var temp = pares[j] + ('');
      var separ = temp.split('');
      for (var x = 0; x < separ.length;x++) {
        sum += parseInt(separ[x]);
      }
    }
  } return (sum % 10 === 0 ? alert('Tarjeta Valida') : alert('Tarjeta Invalida'));
}

console.log(isValidCard());