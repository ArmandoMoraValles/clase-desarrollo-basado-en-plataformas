/* 7.- Introducir tantas frases como queramos y contarlas. */

function main() {
  let contador = 0
  let frase = ""
  do{
    frase = prompt('Ingrese una frase')
    contador++
  }while(frase !== "")
  console.log(`Ingresaste ${contador-1} frases.`)
}

main()