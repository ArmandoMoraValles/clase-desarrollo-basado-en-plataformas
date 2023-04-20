/* 27.- Realizar la tabla de multiplicar de un numero entre 0 y 10.  */

function main() {
  const number = Math.floor(Math.random() * 11);
  for (let i = 0; i <= 10; i++) console.log(`${number} x ${i} = ${number * i}`)
}

main()