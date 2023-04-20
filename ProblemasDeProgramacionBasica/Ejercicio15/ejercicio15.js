/* 15.- Introducir dos números por teclado. Imprimir los números naturales que hay entre ambos
números empezando por el más pequeño, contar cuántos hay y cuántos de ellos son pares.
Calcular la suma de los impares */

function main() {
  let num1 = parseInt(prompt("Ingresa el primer numero: "))
  let num2 = parseInt(prompt("Ingresa el segundo numero: "))
  let count = 0, evens = 0, sumOfOdds = 0

  if (num1 <= num2) {
    for (let i = num1; i <= num2; i++) {
      if (i % 2 === 0) {
        evens++
      } else {
        sumOfOdds += i
      }
      count++;
      console.log(i)
    }
  } else {
    for (let i = num2; i <= num1; i++) {
      if (i % 2 === 0) {
        evens++
      } else {
        sumOfOdds += i
      }
      count++
      console.log(i)
    }
  }

  console.log(`Hay ${ count } números naturales entre ${ num1 } y ${ num2 }`)
  console.log(`Pares: ${ evens }`)
  console.log(`La suma de los impares es ${ sumOfOdds }`)
}

main();