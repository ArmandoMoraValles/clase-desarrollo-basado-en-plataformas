/* 29.- Simular cien tiradas de dos dados y contar las veces que entre los dos suman 10 */

function main(){
  let diceOne, diceTwo
  let count = 0

  for (let i = 0; i < 100; i++) {
    diceOne = Math.floor(Math.random() * 6) + 1
    diceTwo = Math.floor(Math.random() * 6) + 1; 
    if(diceOne + diceTwo === 10) count++
  }

  console.log(`la suma dio 10 una cantidad de: ${count}`);
}

main()