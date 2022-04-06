/* 
1 chiedere km da percorrere
2 chiedere età
3 calcolare il prezzo con eventuale sconto
4 esporlo approssimato a due decimali
*/

const trip = prompt('inserire distanza da percorrere')
const age = prompt('inserire la propria età')
const priceEveryKm = 0.21
const childDiscount = 20
const elderlyDiscount = 40

let totalPrice = trip * priceEveryKm

if (age < 18) {
  totalPrice = totalPrice - totalPrice * childDiscount / 100
}
else if (age > 65) {
  totalPrice = totalPrice - totalPrice * elderlyDiscount / 100
}
else {
  totalPrice = totalPrice
}

totalPrice = totalPrice.toFixed(2)

document.getElementById('prezzo').innerHTML = totalPrice + '€'
