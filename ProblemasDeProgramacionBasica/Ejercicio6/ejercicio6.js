/* 6.- Hacer un programa que imprima todos los números naturales 
que hay desde el uno hasta un número que introducimos por teclado */

function main() {
  const numero = Number(prompt("Ingrese un número:"))

  for(let i = 1; i <= numero; i++) {
    console.log(i)
  }
}

main()