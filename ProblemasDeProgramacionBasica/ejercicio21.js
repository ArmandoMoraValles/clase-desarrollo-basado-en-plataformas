/* 21.- Hacer un programa que calcule independientemente la suma de los pares y los impares de
los números entre 1 y 1000 */

function main() {
  let sumEven = 0, sumOdd = 0;

  for(let i = 1; i <= 1000; i++) {
    if(i % 2 === 0) {
      sumEven += i;
    } else {
      sumOdd += i;
    }
  }

  console.log(`La suma de los números pares es: ${sumEven}`);
  console.log(`La suma de los números impares es: ${sumOdd}`);
}

main();
