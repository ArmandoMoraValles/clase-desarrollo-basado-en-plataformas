/* 8.- Hacer un programa que solo nos permita introducir S o N.  */

function main(){
  const input = prompt('Ingrese S o N')
  if(input === 'N' || input === 'S'){
   alert('se ingreso S o N')
  } else {
    throw new Error('La entrada no es valida');
  }
}

main()