let eleccionJugador;
let eleccionPc;
let contadorVictorias = 0 ;
let contadorDerotas = 0 ;
let contadorEmpate = 0 ;

const iniciar = document.getElementById("iniciar-juego");
const piedra = document.getElementById("piedra");
const papel = document.getElementById("papel");
const tijera = document.getElementById("tijera");
const botonReinicio = document.getElementById("reinicio");

const eleccion = document.getElementById("eleccion");

const eleccion2 = document.getElementById("eleccionPc");

const seccionMensaje = document.getElementById("mensaje");

const visualizar = document.getElementById("juego");
const visualizarInicio = document.getElementById("inicio");
const visualizarJuego = document.getElementById("juego");

function iniciarJuego(){
    ocultar();

    iniciar.addEventListener("click", mostar);
    piedra.addEventListener("click", eleccionPiedra);
    papel.addEventListener("click", eleccionPapel);
    tijera.addEventListener("click", eleccionTijera);
    botonReinicio.addEventListener("click", reinicio);
}

function eleccionPiedra(){
    eleccionJugador = "Piedra"
    eleccion.innerHTML = "Piedra ✊";
    
    eleccionAlaza()
}

function eleccionPapel(){
    eleccionJugador = "Papel"
    eleccion.innerHTML = "Papel 🖐️"; 
    
    eleccionAlaza()
}

function eleccionTijera(){
    eleccionJugador = "Tijera"
    eleccion.innerHTML = "Tijera ✌️";    

    eleccionAlaza()
}

function eleccionAlaza(){
    let alazar = aleatorio(1, 3);

    if(alazar == 1){
        eleccionPc = "Piedra";
        eleccion2.innerHTML = "Piedra ✊"; 

    }else if(alazar == 2){
        eleccionPc = "Papel";
        eleccion2.innerHTML = "Papel 🖐️";

    }else{
        eleccionPc = "Tijera";
        eleccion2.innerHTML = "Tijera ✌️"; 
    }

    combate();
}

function combate(){
    if(eleccionJugador == eleccionPc){
        contadorEmpate = contadorEmpate + 1;
        mensaje("EMPATE");
    }else if(eleccionJugador == "Piedra" && eleccionPc == "Tijera"){
        contadorVictorias = contadorVictorias + 1;
        mensaje("GANASTE");
    }else if(eleccionJugador == "Papel" && eleccionPc == "Piedra"){
        contadorVictorias = contadorVictorias + 1;
        mensaje("GANASTE");
    }else if(eleccionJugador == "Tijera" && eleccionPc == "Papel"){
        contadorVictorias = contadorVictorias + 1;
        mensaje("GANASTE");
    }else{
        contadorDerotas = contadorDerotas + 1;
        mensaje("PERDISTE");
    }
    
    ganador();
}

function mensaje(resultado){

    let parrafo = document.createElement('p');
    parrafo.innerHTML = resultado + "!!!!..." + " Victorias: " +contadorVictorias+ ". Derrotas: " +contadorDerotas+ ". Empate: " +contadorEmpate;
    
    seccionMensaje.appendChild(parrafo);
}

function ganador(){
    if(contadorVictorias == 3){
        mensajeFinal("🎆🎉Felicidades Ganaste el encuento 🎉🎆");
    }else if(contadorDerotas == 3){
        mensajeFinal("Lo siento perdiste");
    }
}

function mensajeFinal(resultadoFinal){

    let parrafo = document.createElement('p');
    parrafo.innerHTML = resultadoFinal;
    
    seccionMensaje.appendChild(parrafo);

    iniciar.addEventListener("click", mostar);

    piedra.disabled = true
    papel.disabled = true
    tijera.disabled = true
}

function aleatorio(min, max){
    return Math.floor(Math.random()*(max - min +1) + min);
}

function ocultar(){
    visualizar.style.display = "none"
}

function mostar(){
    visualizarJuego.style.display = "block"
    visualizarInicio.style.display = "none"
}

function reinicio(){
    location.reload();
}

window.addEventListener("load", iniciarJuego);
