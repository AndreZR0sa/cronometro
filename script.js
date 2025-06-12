let segundos = 0;
let intervalo = null;

const display = document.getElementById('display');
const inicio = document.getElementById('btnInicio');
const pause = document.getElementById('btnPause');
const reset = document.getElementById('btnReset');

inicio.addEventListener('click', iniciar);

function iniciar() {
    if(intervalo) return;

    intervalo = setInterval(() => {
        segundos++;
        atualizarDisplay();
    }, 1000);
}

pause.addEventListener('click', pausar);

function pausar() {
    clearInterval(intervalo);
    intervalo = null;
}

reset.addEventListener('click', reiniciar);

function reiniciar() {
    pausar();
    segundos = 0;
    atualizarDisplay();
}

function formatarTempo(segundosTotais){
    const minutos = Math.floor(segundosTotais/60);
    const segundos = segundosTotais % 60;
    return `${String(minutos).padStart(2,'0')}:${String(segundos).padStart(2,'0')}`;
}

function atualizarDisplay() {
    display.textContent = formatarTempo(segundos);
}

const botao = document.getElementById("corAleatoria");

function gerarCorAleatoria() {
  const cores = [
    "#000000",
    "#1b1010",
    "#2a1538",
    "#333333",
    "#152013",
    "#191c2c" 
  ];
  const indiceAleatorio = Math.floor(Math.random() * cores.length);
  return cores[indiceAleatorio];
}

botao.addEventListener("click", function() {
  document.body.style.backgroundColor = gerarCorAleatoria();
});