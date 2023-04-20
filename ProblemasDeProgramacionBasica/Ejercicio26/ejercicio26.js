/* 26.- Introducir una frase por teclado e imprimirla en el centro de la pantalla */

function main(){
  const phrase = prompt('Ingrese una frase')
  document.getElementById("frase").innerHTML = phrase;
}

main()