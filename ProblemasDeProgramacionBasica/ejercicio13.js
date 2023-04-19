/* 13.- Imprimir y contar los números que son múltiplos de 2 o de 3 que hay entre 1 y 100. */

function main(){
  const multOf3 = [], multOf2 = []

  for(let i = 1; i<=100; i++){
    if(i/2 - parseInt(i/2) === 0) multOf2.push(i)
    if(i/3 - parseInt(i/3) === 0) multOf3.push(i)
  }

  console.log('MULTIPLOS DE 2');
  multOf2.forEach(element => console.log(element))
  console.log(`Se tienen ${multOf2.length} multiplos de 2 \n`);

  console.log('MULTIPLOS DE 3');
  multOf3.forEach(element => console.log(element))
  console.log(`Se tienen ${multOf3.length} multiplos de 3 \n`);
}

main()