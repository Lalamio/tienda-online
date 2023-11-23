const h1 = document.querySelector('h1');
const form = document.querySelector('form');
const cajita = document.querySelector('#cajita');
const cajita2 = document.querySelector('#cajita2');
const boton = document.querySelector('#botonCalcular');
const pResult = document.querySelector('#resultado');

form.addEventListener('submit', submitCalcular);

function submitCalcular(event) {
  console.log({event});
  event.preventDefault();
  const sumaInputs = parseInt(cajita.value) + parseInt(cajita2.value);
  pResult.innerHTML = "Resultado: " + sumaInputs;
}