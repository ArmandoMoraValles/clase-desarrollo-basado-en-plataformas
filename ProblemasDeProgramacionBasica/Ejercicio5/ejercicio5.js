/* 5.-Hacer un programa que imprima los números impares hasta el 100 y que imprima cuantos
impares hay  */

function main () {
  let count = 0
  for(let i = 1; i <= 100; i++){
    if(i % 2 !== 0) {
      console.log(i)
      count++
    }
  }
  console.log(`Numero de impares: ${count}`)
}

main()