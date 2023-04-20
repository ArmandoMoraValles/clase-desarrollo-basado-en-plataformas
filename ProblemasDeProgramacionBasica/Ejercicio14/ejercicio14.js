/* 14.- Hacer un programa que imprima el mayor y el menor de una serie de cinco números que
vamos introduciendo por teclado. */

function main () {
  let min, max, number

  for(let i = 0; i<5; i++){
    number = prompt('Ingrese un numero')
    if(!max) max = number
    if(!min) min = number
    if(min > number) min = number
    if(max < number) max = number
  }
  
  console.log(`El numero mayor es ${max}`)
  console.log(`El numero menor es ${min}`)
}

main()