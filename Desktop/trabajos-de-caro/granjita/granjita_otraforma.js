let vm = document.getElementById("villa");
let papel = vm.getContext("2d");

let fondo = {
  url: "tile.webp",
  cargaOK: false
};

let vaca = {
  url: "vaca.webp",
  cargaOK: false
};

let pollo = {
  url:"pollo.webp",
  cargarOK: false
};

fondo.imagen = new Image;
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

pollo.imagen = new Image; 
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

vaca.imagen = new Image;
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

function cargarFondo() {
  fondo.cargaOK = true;
  dibujar();
}

function cargarPollos() {
  pollo.cargaOK = true;
  dibujar();
}

function cargarVacas() {
  vaca.cargaOK = true;
  dibujar();
}

function dibujar() {
  if(fondo.cargaOK) {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if(vaca.cargaOK) {
      for(let v = 0; v < 10; v++) {
      let xv = aleatorio(0, 420);
      let yv = aleatorio(0, 420);
      papel.drawImage(vaca.imagen, xv, yv);
    }
  }
  
  if(pollo.cargaOK) {
    for(let p = 0; p < 8; p++) {
      let xp = aleatorio(0, 420);
      let yp = aleatorio(0, 420);
      papel.drawImage(pollo.imagen, xp, yp);
    }
  }
  
}

function aleatorio(min , maxi)
{
	var resultado;
	resultado =  Math.floor(Math.random() * (maxi - min + 1)) + min;
	return resultado;
}