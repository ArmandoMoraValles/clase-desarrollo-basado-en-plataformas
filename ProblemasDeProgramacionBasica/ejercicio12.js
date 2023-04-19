/* 
  12.- Hacer un programa que imprima los números del 1 al 100 y que calcule la suma de todos los
  números pares por un lado, y por otro, la de todos los impares. 
*/

function main(){
  let oddSum = 0, evenSum = 0
  for(let i = 1; i <= 100; i++){
    console.log(i)
    if(i % 2 === 0){
      evenSum+=i 
    } else {
      oddSum+=i
    }
  }

  console.log(`La suma de los numeros pares es de ${oddSum}`)
  console.log(`La suma de los numeros impares es de ${evenSum}`)
}

main()