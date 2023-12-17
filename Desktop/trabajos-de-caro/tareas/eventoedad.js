var texto = document.getElementById("caja_año");
var años = document.getElementById("caja_nacimiento");
var boton = document.getElementById("botoncitu");
boton.addEventListener("click", darleClick);

function darleClick() {
  var x = años.value;
  var y = texto.value;
  var resulta = y - x;
  console.log(resulta);
  alert("tendrías " + resulta + " años");
}
