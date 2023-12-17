function aleatorio (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

let jugadorId = null
let enemigoId = null
let ataqueJugador = []
let ataqueEnemigo = []
let indexAtaqueJugador = 0
let indexAtaqueEnemigo = 0
let victoriasJugador = 0
let victoriasEnemigo = 0
let guerreroJugador
let objetoGuerreroJugador
let opcionMokepones
let ataquesMokepon
let ataquesMokeponEnemigo
let input1
let input2
let input3
let btnFuego
let btnAgua
let btnTierra
let botones = []
let intervalo
let fondoMapa = new Image()
fondoMapa.src = './Assets/fondo.webp'
let anchoDelMapa = window.innerWidth - 20
let alturaBuscada = anchoDelMapa * 600 / 800
anchoMaxMapa = 800;

if (anchoDelMapa > anchoMaxMapa) {
  anchoDelMapa = anchoMaxMapa - 20
  alturaBuscada = anchoDelMapa * 600 / 800
}

const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const sectionSeleccionarGuerrero = document.getElementById("seleccionar-guerrero")
const sectionReiniciar = document.getElementById("boton.partida")
sectionReiniciar.addEventListener('click', reiniciarPartida)
const contenedorTarjetas = document.getElementById('contenedor-tarjetas')
const contenedorAtaques = document.getElementById('contenedor-ataques')
const sectionMessages = document.getElementById("resultado")
const sectionVerMapa = document.getElementById('ver-mapa')
const mapa = document.getElementById('mapa')
let lienzo = mapa.getContext('2d')
mapa.width = anchoDelMapa
mapa.height = alturaBuscada

sectionSeleccionarAtaque.style.display = 'none'
sectionReiniciar.style.display = 'none'
sectionVerMapa.style.display = 'none'

const botonSeleccionJugador = document.getElementById('boton.seleccion')
botonSeleccionJugador.addEventListener('click', seleccionarGuerreroJugador)

const spanEnemigo = document.getElementById("guerrero-enemigo")
const spanVictoriasEnemigas = document.getElementById("victorias-enemigas")

const spanJugador = document.getElementById("guerrero")
const spanVictorias = document.getElementById("victorias")

const ataquesDElJugador = document.getElementById("ataque-jugador")
const ataquesDelEnemigo = document.getElementById("ataque-enemigo")


class Mokepon {
  constructor(nombre, foto, vidas, fotoMapa, id = null) {
    this.id = id
    this.nombre = nombre
    this.foto = foto
    this.vidas = vidas
    this.ataques = []
    this.ancho = 70
    this.alto = 70
    this.x = aleatorio(0, mapa.width - this.ancho)
    this.y = aleatorio(0, mapa.height - this.alto)
    this.mapaFoto = new Image()
    this.mapaFoto.src = fotoMapa
    this.velocidadX = 0
    this.velocidadY = 0
  }

  pintarMokepon() {
    lienzo.drawImage(
      this.mapaFoto,
      this.x,
      this.y,
      this.ancho,
      this.alto
    )
  }
}

let mokepones = []
let mokeponesEnemigos = []

let hipodoge = new Mokepon('Hipodoge', './Assets/mokepons_mokepon_hipodoge_attack.png', 5, './Assets/cara-hipodoge.png')
let capipepo = new Mokepon('Capipepo', './Assets/mokepons_mokepon_capipepo_attack.png', 5, './Assets/cara-capipepo.png')
let langostina = new Mokepon('Langostina', './Assets/mokepons_mokepon_langostina_attack.png', 5, './Assets/cara-langostina.png')

mokepones.push(hipodoge, capipepo, langostina)

const hipodoge_ataques = [
  { nombre: '💧', id: 'boton.agua' },
  { nombre: '💧', id: 'boton.agua' },
  { nombre: '💧', id: 'boton.agua' },
  { nombre: '🔥', id: 'boton.fuego' },
  { nombre: '🌱', id: 'boton.tierra' },
]

hipodoge.ataques.push(...hipodoge_ataques)

const capipepo_ataques = [
  { nombre: '🌱', id: 'boton.tierra' },
  { nombre: '🌱', id: 'boton.tierra' },
  { nombre: '🌱', id: 'boton.tierra' },
  { nombre: '🔥', id: 'boton.fuego' },
  { nombre: '💧', id: 'boton.agua' },
]

capipepo.ataques.push(...capipepo_ataques)

const langostina_ataques = [
  { nombre: '🔥', id: 'boton.fuego' },
  { nombre: '🔥', id: 'boton.fuego' },
  { nombre: '🔥', id: 'boton.fuego' },
  { nombre: '🌱', id: 'boton.tierra' },
  { nombre: '💧', id: 'boton.agua' },

]

langostina.ataques.push(...langostina_ataques)

mokepones.forEach((mokepon) => {
  opcionMokepones = `
    <input type="radio" name="guerreros" id=${mokepon.nombre} />
    <label class="tarteja-mokepon" for=${mokepon.nombre}>
    <p id="nombres">${mokepon.nombre}</p>
    <img src=${mokepon.foto} alt=${mokepon.nombre}>
    </label>
  `
  contenedorTarjetas.innerHTML += opcionMokepones

  input1 = document.getElementById("Hipodoge")
  input2 = document.getElementById("Capipepo")
  input3 = document.getElementById("Langostina")
})

unirseAlJuego() 

function unirseAlJuego() {
  fetch('http://localhost:8080/union')
    .then(function (res) {
      if(res.ok) {
        res.text()
          .then(function(respuesta) {
            console.log(respuesta)
            jugadorId = respuesta
          })
      }
    })
}

function seleccionarGuerreroJugador () {
  sectionVerMapa.style.display = "flex"
  sectionSeleccionarGuerrero.style.display = 'none'

  if (input1.checked) {
    spanJugador.innerHTML = input1.id
    guerreroJugador = input1.id
  } else if (input2.checked) {
    spanJugador.innerHTML = input2.id
    guerreroJugador = input2.id
  } else if (input3.checked) {
    spanJugador.innerHTML = input3.id
    guerreroJugador = input3.id
  } else {
    alert("no has seleccionado a ningún guerrerro")
    sectionSeleccionarAtaque.style.display = 'none'
    sectionVerMapa.style.display = 'none'
    sectionSeleccionarGuerrero.style.display = 'flex'
  }

  seleccionarMokeponBack(guerreroJugador)

  extraerAtaques(guerreroJugador)
  iniciarMapa()
}

function seleccionarMokeponBack(guerreroJugador) {
    fetch(`http://localhost:8080/mokepon/${jugadorId}`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    }, 
    body: JSON.stringify({
      mokepon: guerreroJugador
    })
  })
}

function extraerAtaques(guerreroJugador) {
  let ataques
  for (let i = 0; i < mokepones.length; i++) {
    if(guerreroJugador == mokepones[i].nombre) {
    ataques = mokepones[i].ataques
    }
  }
  mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
  ataques.forEach((ataque) => {
  ataquesMokepon = `
  <button class="boton-ataques BAtaque" id=${ataque.id}>${ataque.nombre}</button>
  `
  contenedorAtaques.innerHTML += ataquesMokepon
  })

  btnFuego = document.getElementById("boton.fuego")
  btnAgua = document.getElementById("boton.agua")
  btnTierra = document.getElementById("boton.tierra")
  botones = document.querySelectorAll('.BAtaque')
}

function secuenciaDeAtaques() {
  botones.forEach((boton) => {
    boton.addEventListener('click', (e) => {
      if(e.target.textContent == '🔥') {
        ataqueJugador.push('FUEGO')
        boton.style.background = '#f5f5dccc'
        boton.disabled = true
      } else if (e.target.textContent == '💧') {
        ataqueJugador.push('AGUA')
        boton.style.background = '#f5f5dccc'
        boton.disabled = true
      } else {
        ataqueJugador.push('TIERRA')
        boton.style.background = '#f5f5dccc'
        boton.disabled = true
      }

      if (ataqueJugador.length == 5) {
        enviarAtaques()
      }
    })
  })
}

function enviarAtaques() {
  fetch(`http://localhost:8080/mokepon/${jugadorId}/ataques`, {
    method: "post",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ataques: ataqueJugador
    })
  })

  intervalo = setInterval(obtenerAtaques, 50)
}

function obtenerAtaques() {
  fetch(`http://localhost:8080/mokepon/${enemigoId}/ataques`)
    .then(function (res) {
      if(res.ok) {
        res.json()
          .then(function ({ ataques }) {
            if(ataques.length == 5) {
              ataqueEnemigo = ataques
              combate()
            }
          })
      }
    })
}

function seleccionarEnemigo() {
  let guerreroAleatorio = aleatorio(0, mokepones.length -1)

  spanEnemigo.innerHTML = mokepones[guerreroAleatorio].nombre
  ataquesMokeponEnemigo = mokepones[guerreroAleatorio].ataques
  secuenciaDeAtaques()

}


function ataqueDelEnemigo() {
  console.log('ataques del enemigo ' + ataquesMokeponEnemigo)
  let ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length -1)

  if (ataqueAleatorio == 0 || ataqueAleatorio == 1) {
    ataqueEnemigo.push("FUEGO")
  } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
    ataqueEnemigo.push("AGUA")
  } else {
    ataqueEnemigo.push("TIERRA")
  }
  iniciarCombate()
}

function iniciarCombate() {
  if (ataqueJugador.length == 5) {
    combate()
  }
}

function actualizarIndexAmbosOponentes(indexActual) {
  indexAtaqueJugador = indexActual
  indexAtaqueEnemigo = indexActual
}

function combate() {
  clearInterval(intervalo)

  for(let index = 0; index < ataqueJugador.length; index++) {
    actualizarIndexAmbosOponentes(index)
    if (ataqueJugador[index] == ataqueEnemigo[index]) {
      crearMensaje("EMPATE")
    } else if (ataqueJugador[index] == 'FUEGO' && ataqueEnemigo[index] == 'AGUA') {
        crearMensaje("GANASTE")
        victoriasJugador++
        spanVictorias.innerHTML = victoriasJugador
    } else if (ataqueJugador[index] == 'AGUA' && ataqueEnemigo[index] == 'TIERRA') {
        crearMensaje("GANASTE")
        victoriasJugador++
        spanVictorias.innerHTML = victoriasJugador
    } else if (ataqueJugador[index] == 'TIERRA' && ataqueEnemigo[index] == 'FUEGO') {
        crearMensaje("GANASTE")
        victoriasJugador++
        spanVictorias.innerHTML = victoriasJugador
    } else {
        crearMensaje("PERDISTE")
        victoriasEnemigo++
        spanVictoriasEnemigas.innerHTML = victoriasEnemigo
    }
  }

  revisarVidas()
}

function revisarVidas() {
  if(victoriasJugador == victoriasEnemigo) {
    gameOver("Esto fue un empate 😬")
  } else if (victoriasJugador > victoriasEnemigo) {
    gameOver("GANASTE 🎉")
  } else if (victoriasEnemigo > victoriasJugador) {
    gameOver("PERDISTE 😪")
  }

  if (victoriasJugador > victoriasEnemigo ||victoriasEnemigo > victoriasJugador) {
    sectionReiniciar.style.display = 'block'
  }
}

function crearMensaje(resultado) {
  let nuevoAtaqueJugador = document.createElement('p')
  let nuevoAtaqueEnemigo = document.createElement('p')

  sectionMessages.innerHTML = resultado
  nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo[indexAtaqueJugador]
  nuevoAtaqueJugador.innerHTML = ataqueJugador[indexAtaqueJugador]

  ataquesDElJugador.appendChild(nuevoAtaqueJugador)
  ataquesDelEnemigo.appendChild(nuevoAtaqueEnemigo)
}

function gameOver (resultadoFinal) {
  let sectionMessages = document.getElementById("resultado")

  sectionMessages.innerHTML = resultadoFinal
}

function reiniciarPartida () {
  location.reload()
}

function pintarCanvas() {
  objetoGuerreroJugador.x = objetoGuerreroJugador.x + objetoGuerreroJugador.velocidadX
  objetoGuerreroJugador.y = objetoGuerreroJugador.y + objetoGuerreroJugador.velocidadY
  lienzo.clearRect(0, 0, mapa.width, mapa.height)
  lienzo.drawImage(
    fondoMapa,
    0,
    0,
    mapa.width,
    mapa.height
  )

  enviarPosicion(objetoGuerreroJugador.x, objetoGuerreroJugador.y)

  objetoGuerreroJugador.pintarMokepon()

  mokeponesEnemigos = mokeponesEnemigos.filter((mokepon) => mokepon != undefined)
  if(mokeponesEnemigos.length > 1) {
    mokeponesEnemigos = mokeponesEnemigos.slice(mokeponesEnemigos.length - 2, mokeponesEnemigos.length - 1)
  }

  mokeponesEnemigos.forEach(function (mokepon) {
    if(!(mokepon === undefined)) {
      mokepon.pintarMokepon()
      revisarColisión(mokepon)
    }
  })
}

function enviarPosicion(x, y) {
  fetch(`http://localhost:8080/mokepon/${jugadorId}/posicion`, {
    method: 'post', 
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      x,
      y
    })
  }) 
  .then(function (res) {
    if(res.ok) {
      res.json()
        .then(function ({ enemigos }) {
          mokeponesEnemigos = enemigos.map(function (enemigo) {
            if (enemigo.mokepon != undefined) {
              let mokeponEnemigo = null
              const mokeponNombre = enemigo.mokepon.nombre || ""
              if (mokeponNombre == 'Hipodoge') {
                mokeponEnemigo = new Mokepon('Hipodoge', './Assets/mokepons_mokepon_hipodoge_attack.png', 5, './Assets/cara-hipodoge.png', enemigo.id)
              } else if (mokeponNombre == 'Capipepo') {
                mokeponEnemigo = new Mokepon('Capipepo', './Assets/mokepons_mokepon_capipepo_attack.png', 5, './Assets/cara-capipepo.png', enemigo.id)
              } else {
                mokeponEnemigo = new Mokepon('Langostina', './Assets/mokepons_mokepon_langostina_attack.png', 5, './Assets/cara-langostina.png', enemigo.id)
              }

              mokeponEnemigo.x = enemigo.x
              mokeponEnemigo.y = enemigo.y
              return mokeponEnemigo
            }
          })
        })
    }
  })
  .catch(err => new Error(err))
}

function moverArriba() {
  objetoGuerreroJugador.velocidadY = -5
}

function moverAbajo() {
  objetoGuerreroJugador.velocidadY = 5
}

function moverIzquierda() {
  objetoGuerreroJugador.velocidadX = -5
}

function moverDerecha() {
  objetoGuerreroJugador.velocidadX = 5
}

function presiónTeclas(event) {
  console.log({event})
  switch (event.key) {
    case 'ArrowUp':
      moverArriba()
      break
    case 'ArrowDown':
      moverAbajo()
      break
    case 'ArrowLeft':
      moverIzquierda()
      break
    case 'ArrowRight':
      moverDerecha()
      break
  }
}

function detener() {
  objetoGuerreroJugador.velocidadX = 0
  objetoGuerreroJugador.velocidadY = 0
}

function iniciarMapa() {
  objetoGuerreroJugador = obtenerGuerrero()
  console.log(objetoGuerreroJugador)
  intervalo = setInterval(pintarCanvas, 50)
  pintarCanvas();

  window.addEventListener('keydown', presiónTeclas)
  window.addEventListener('keyup', detener)
}

function obtenerGuerrero() {
  for (let i = 0; i < mokepones.length; i++) {
    if(guerreroJugador == mokepones[i].nombre) {
      return mokepones[i]
    }
  }
}

function revisarColisión(enemigo) {
  const arribaEnemigo = enemigo.y
  const abajoEnemigo = enemigo.y + enemigo.alto
  const derechaEnemigo = enemigo.x + enemigo.ancho
  const izquierdaEnemigo = enemigo.x

  const arribaGuerrero = objetoGuerreroJugador.y
  const abajoGuerrero = objetoGuerreroJugador.y + objetoGuerreroJugador.alto
  const derechaGuerrero = objetoGuerreroJugador.x + objetoGuerreroJugador.ancho
  const izquierdaGuerrero = objetoGuerreroJugador.x

  if (abajoGuerrero < arribaEnemigo ||
      arribaGuerrero > abajoEnemigo ||
      derechaGuerrero < izquierdaEnemigo ||
      izquierdaGuerrero > derechaEnemigo
  ) {
    return
  }

  detener()
  clearInterval(intervalo)
  enemigoId = enemigo.id
  alert('¡Hubo choque con ' + enemigo.nombre + ' enemigo!')
  sectionSeleccionarAtaque.style.display = 'flex'
  sectionVerMapa.style.display = 'none'
  seleccionarEnemigo(enemigo)
}