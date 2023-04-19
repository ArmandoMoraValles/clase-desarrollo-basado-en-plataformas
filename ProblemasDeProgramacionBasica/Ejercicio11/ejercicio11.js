/* 11.- Imprimir y contar los múltiplos de 3 desde el uno hasta un número que introducimos por teclado.  */ 

function main(){
  let countMult = 0
  const number = parseInt(prompt('Ingrese un numero'))
  if(isNaN(number)) throw new Error('No se esta ingresando un numero')
  for(let i = 1; i < number; i++) {
    if(i/3 - parseInt(i/3) === 0){
      console.log(`El ${i} es un multiplo`)
      countMult++
    }
  }
  
  alert(`Se tienen ${countMult} multiplos (mira la consola para ver cuales son!)`)
}

main()