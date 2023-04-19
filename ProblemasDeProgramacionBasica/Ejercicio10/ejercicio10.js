/* 10.- Introducir un número por teclado y que nos diga si es par o impar */

function main(){
  const number = parseInt(prompt('Ingrese un numero'))
  if(isNaN(number)) throw new Error('No se a ingresado un numero')
  number % 2 === 0 ? alert('Es un numero par') : alert('Es un numeor impar') 
}

main()