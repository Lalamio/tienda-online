  function aleatorio (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function election (jugada) {
    let resultado = "";
    if (jugada == 1) {
      resultado = "piedra 🥌";
    } else if (jugador == 2) {
      resultado = "papel 🧻";
    } else if (jugador == 3) {
      resultado = "tijera ✂";
    } else {
      resultado = "MAL";
    }
    return resultado;
  }
  
  //1 es piedra, 2 es papel, y tres es tijera

  let jugador = 0;
  let pc = 0;
  let triunfos = 0;
  let perdidas = 0;

  while (triunfos < 3 && perdidas < 3) {
    pc = aleatorio(1,3);
    console.log({pc})
    jugador = prompt("Elige: 1 es para piedra, 2 es para papel y 3 es para tijera");
    
    alert("Tú elegiste: " + election(jugador));
    alert("PC elige: " + election(pc));
     
  
  // COMBATE
  
    if (pc == jugador) {
      alert("EMPATE");
    } else if (jugador == 1 && pc == 3) {
      alert("GANASTE");
      triunfos = triunfos + 1;
    } else if (jugador == 2 && pc == 1) {
      alert("GANASTE");
      triunfos = triunfos + 1;
    } else if (jugador == 3 && pc == 2) {
      alert("GANASTE");
      triunfos = triunfos + 1;
    } else {
      alert("PERDISTE");
      perdidas = perdidas + 1;
    }
  }

  alert("Ganaste " + triunfos + " veces. Perdiste " + perdidas + " veces.");