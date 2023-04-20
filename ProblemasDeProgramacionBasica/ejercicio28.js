/* 28.- Simular el lanzamiento de una moneda al aire e imprimir cara o cruz.  */

function main(){
   Math.floor(Math.random() * 2) === 0 ? console.log('CARA') : console.log('CRUZ')
}

main()