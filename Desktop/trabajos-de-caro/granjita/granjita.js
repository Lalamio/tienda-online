let vm = document.getElementById("villa");
let cuadro = vm.getContext("2d");

let fondo = new Image;
fondo.src = "tile.webp";
fondo.addEventListener("load", dibujar);

let vaca = new Image;
vaca.src = "vaca.webp";
vaca.addEventListener("load", dibujar);

let pollo = new Image;
pollo.src = "pollo.webp";
pollo.addEventListener("load", dibujar);

let cerdo = new Image;
cerdo.src = "cerdo.webp";
cerdo.addEventListener("load", dibujar);


function dibujar() {
  cuadro.drawImage(fondo, 0, 0);

  let cantidad = 10;
  for(let v = 0; v < cantidad; v++) {
    let xv = aleatorio(0,420);
    let yv = aleatorio(0, 420);
    cuadro.drawImage(vaca, xv, yv);
  }
  
  for(let p = 0; p < cantidad; p++) {
    let xp = aleatorio(0, 420);
    let yp = aleatorio (0, 420);
    cuadro.drawImage(pollo, xp, yp);
  }

  cuadro.drawImage(cerdo, 0, 0);
}

function aleatorio(min , maxi)
{
	let resultado;
	resultado =  Math.floor(Math.random() * (maxi - min + 1)) + min;
	return resultado;
}

function dibujarOtraVez() {
    cuadro.drawImage(fondo, 0, 0);

    let xv = aleatorio(0,420);
    let yv = aleatorio(0, 420);
    cuadro.drawImage(vaca, xv, yv);
  
    let xp = aleatorio(0, 420);
    let yp = aleatorio (0, 420);
    cuadro.drawImage(pollo, xp, yp);
}

let teclas = {
  UP: 38,
  DOWN: 40,
  RIGHT: 39,
  LEFT: 37
};

var x = 0;
var y = 0;

function moverCerdo(x, y) {
  cuadro.drawImage(cerdo, x, y);
}

document.addEventListener("keyup", moverTecla);
function moverTecla(evento) {
  let movimiento = 30;
  switch(evento.keyCode) {
    case teclas.UP:
      dibujarOtraVez();
      cuadro.drawImage(cerdo, x, y - movimiento);
      y = y - movimiento;
      console.log("arriba");
    break;
    
    case teclas.DOWN:
      dibujarOtraVez();
      cuadro.drawImage(cerdo, x, y + movimiento);
      y = y + movimiento;
      console.log("abajo");
    break;

    case teclas.LEFT:
      dibujarOtraVez();
      cuadro.drawImage(cerdo, x - movimiento, y);
      x = x - movimiento;
      console.log("izquierda");
    break;

    case teclas.RIGHT:
      dibujarOtraVez();
      cuadro.drawImage(cerdo, x + movimiento, y);
      x = x + movimiento;
      console.log("derecha");
    }
}