/* 25.- Introducir un número menor de 5000 y pasarlo a número romano. */

function main() {
  let number = parseInt(prompt('Introduce un número menor de 5000:'));
  if (number >= 5000) throw new Error('El numero debe de ser menor de 5000')

  let romano = '';
  let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

  for (let i = 0; i < values.length; i++) {
    while (number >= values[i]) {
      romano += symbols[i];
      number -= values[i];
    }
  }

  console.log(`En números romanos es ${romano}.`);
}

main();