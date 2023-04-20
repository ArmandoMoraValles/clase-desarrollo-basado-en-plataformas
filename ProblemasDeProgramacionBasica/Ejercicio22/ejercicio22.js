function main() {
  let phrase = prompt("Ingresa una frase:")
  let spaces = "    "

  for(let i = 0; i < 5; i++) {
    console.log(spaces.repeat(i) + phrase)
  }
}

main();