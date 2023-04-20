/* 24.- Comprobar si un número mayor o igual que la unidad es primo.  */
function main() {
  let num = parseInt(prompt("Introduce un número mayor o igual que 1: "));
  if(num < 1) throw new Error('no es mayor o igual que la unidad')

  if (num % 2 !== 0) {
    console.log(`${num} es primo`);
  } else {
    console.log(`${num} no es primo`);
  }
}

main();