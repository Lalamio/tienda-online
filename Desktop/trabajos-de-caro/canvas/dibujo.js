	var texto = document.getElementById("texto_lineas");
	var boton = document.getElementById("botoncito");
	var ccolor = document.getElementById("pcolor");
	boton.addEventListener("click", dibujoPorClick);

	var d = document.getElementById("dibujito");
	var ancho = d.width;
	var lienzo = d.getContext("2d");
	
	function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
		lienzo.beginPath();
		lienzo.strokeStyle = color;
		lienzo.moveTo(xinicial, yinicial);
		lienzo.lineTo(xfinal, yfinal);
		lienzo.stroke();
		lienzo.closePath();
	}

	function dibujoPorClick() {
		var colorcito = ccolor.value;

		var lineas = parseInt(texto.value);
		var l = 0;
		var xi, yi, xf, yf;
		var xf1, yf1;
		var espacio = ancho / lineas;

		for(l = 0; l < lineas; l++) {
			xf = espacio * l;
			xi = espacio * (l + 1);
			yi = espacio * l;
			yf = espacio * (l + 1);
			xf1 = ancho - xf;
			yf1 = ancho - yf;
			dibujarLinea(colorcito, 1, yi, xf, 299);
			dibujarLinea(colorcito, 299, yi, xf, 1);
			dibujarLinea(colorcito, 299, yi, xf1, 299);
			//dibujarLinea(colorcito, 299, yi, 1, yf1);
			dibujarLinea(colorcito, xf1, 1, 1, yf);
			console.log("linea " + l);
	}

	//linea de los bordes

	dibujarLinea(colorcito, 299, 1, 1, 1);
	dibujarLinea(colorcito, 1, 1, 1, 299);
	dibujarLinea(colorcito, 1, 299, 299, 299);
	dibujarLinea(colorcito, 299, 299, 299, 1);
	
	}