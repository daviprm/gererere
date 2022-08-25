import Countdown from "./countdown.js";

const timeToGererere = new Countdown("09 October 2022 17:00:00 GMT-0300");
const tempos = document.querySelectorAll("[data-time]");

function mostrarTempo() {
  tempos.forEach((tempo, index) => {
    tempo.innerHTML = timeToGererere.total[index];
  });
}
mostrarTempo();
setInterval(mostrarTempo, 1000);
