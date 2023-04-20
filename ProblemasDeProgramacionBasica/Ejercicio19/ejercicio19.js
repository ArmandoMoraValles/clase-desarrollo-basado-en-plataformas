/* 19.- Hacer un programa que simule el funcionamiento de un reloj digital y que permita ponerlo en
hora.  */

function main() {
  let horas = parseInt(prompt("Introduce las horas (formato de 24 horas): "));
  let minutos = parseInt(prompt("Introduce los minutos: "))
  let segundos = parseInt(prompt("Introduce los segundos: "))

  while (horas >= 24 || minutos >= 60 || segundos >= 60) {
    alert("Hora incorrecta. Introduce los valores de nuevo.");
    horas = parseInt(prompt("Introduce las horas (formato de 24 horas): "))
    minutos = parseInt(prompt("Introduce los minutos: "))
    segundos = parseInt(prompt("Introduce los segundos: "))
  }

  setInterval(function () {
    console.log(`${horas}:${minutos}:${segundos}`)
    segundos++

    if (segundos === 60) {
      segundos = 0
      minutos++

      if (minutos === 60) {
        minutos = 0
        horas++

        if (horas === 24)horas = 0
      }
    }
  }, 1000) //1 segundo = 1000 milisegundos
}

main();