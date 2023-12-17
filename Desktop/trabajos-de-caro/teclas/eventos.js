var cuadrito = document.getElementById("cuadro");
var papel = cuadrito.getContext("2d");
document.addEventListener("keyup", dibujarTeclado);

var teclas = {
	UP: 38,
	DOWN: 40,
	RIGHT: 39,
	LEFT: 37
};


dibujarLinea("red", 150, 150, 151, 151, papel);
var x = 150;
var y = 150;

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(xinicial, yinicial);
	lienzo.lineTo(xfinal, yfinal);
	lienzo.stroke();
	lienzo.closePath();
}

function dibujarTeclado(evento) {
	var colores = "green";
	var movimiento = 10;
	console.log(evento.keyCode);
	switch(evento.keyCode) {
		case teclas.UP:
			dibujarLinea(colores, x, y, x, y - movimiento, papel);
			y = y - movimiento;
			console.log("arriba");
		break;

		case teclas.DOWN:
			dibujarLinea(colores, x, y, x, y + movimiento, papel);
			y = y + movimiento;
			console.log("abajo");
		break;

		case teclas.RIGHT:
			dibujarLinea(colores, x, y, x + movimiento, y, papel);
			x = x + movimiento;
			console.log("derecha");
		break;

		case teclas.LEFT:
			dibujarLinea(colores, x, y, x - movimiento, y, papel);
			x = x - movimiento;
			console.log("izquierda");
		break;

		default:
			console.log("otra tecla");
	}
}