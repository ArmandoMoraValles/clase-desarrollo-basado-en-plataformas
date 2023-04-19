/* 9.- Introducir un número por teclado y que nos diga si es positivo o negativo.  */

function main(){
  const number = parseInt(prompt('Ingrese un numero'))
  if(isNaN(number)) throw new Error('No se ingreso un numero')
  number >= 0 ? alert('El numero es positivo') : alert('El numero es negativo')
}

main()