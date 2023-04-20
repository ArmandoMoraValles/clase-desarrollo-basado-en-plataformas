/* 18.- Hacer un programa que cuente las veces que aparece una determinada letra en una frase
que introduciremos por teclado. */

function main() {
  const phrase = prompt('Ingresa una frase: ')
  const word = prompt('Ingresa la letra que deseas contar: ')
  let count = 0;

  for (let i = 0; i < phrase.length; i++) {
    if (phrase[i] === word) {
      count++
    }
  }

  console.log(`La letra ${word} aparece ${count} veces en la frase.`)
}

main();