/* Calcula el factorial de un numero mediante funciones */

function main(){
  function factorial(num) {
    if(num === 0 || num === 1) {
      return 1
    } else {
      return num * factorial(num - 1)
    }
  }
  
  let num = parseInt(prompt('Ingresa un numero: '))
  let result = factorial(num)
  
  console.log(`El factorial de ${num} es ${result}.`);
}

main()