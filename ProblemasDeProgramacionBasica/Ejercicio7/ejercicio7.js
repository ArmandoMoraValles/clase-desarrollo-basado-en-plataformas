/* 6.- Hacer un programa que imprima todos los números naturales 
que hay desde el uno hasta un número que introducimos por teclado */

function main() {
  let contador = 0
  let frase = ""
  while(frase !== "salir") {
    frase = prompt("Ingrese una frase (o escriba 'salir' para finalizar):")
    contador++
  }
  console.log(`Ingresaste ${contador-1} frases.`)
}

main()