/* 17.- Imprimir, contar y sumar los múltiplos de 2 que hay entre una serie de números, tal que el
segundo sea mayor o igual que el primero */ 

function main() {
  let num1 = parseInt(prompt("Ingresa el primer número: "))
  let num2 = parseInt(prompt("Ingresa el segundo número: "))
  let count = 0, sum = 0

  if(num2 < num1) throw new Error('El segundo número debe ser mayor o igual que el primero')

  for(let i = num1; i <= num2; i++) {
    if(i % 2 === 0) {
      count++
      sum += i
      console.log(i)
    }
  }

  alert(`Existen ${count} múltiplos de 2 entre ${num1} y ${num2}.`)
  alert(`La suma de los múltiplos de 2 es ${sum}.`)
}

main();
