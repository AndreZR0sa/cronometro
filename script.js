let milisegundos = 0;
let intervalo = null;

const display = document.getElementById('display');
const inicio = document.getElementById('btnInicio');
const pause = document.getElementById('btnPause');
const reset = document.getElementById('btnReset');

inicio.addEventListener('click', iniciar);
pause.addEventListener('click', pausar);
reset.addEventListener('click', reiniciar);

function iniciar() {
    if (intervalo) return;

    intervalo = setInterval(() => {
        milisegundos += 10;
        atualizarDisplay();
    }, 10);
}

function pausar() {
    clearInterval(intervalo);
    intervalo = null;
}

function reiniciar() {
    pausar();
    milisegundos = 0;
    atualizarDisplay();
}

function formatarTempo(ms) {
    const minutos = Math.floor(ms / 60000);
    const segundos = Math.floor((ms % 60000) / 1000);
    const centesimos = Math.floor((ms % 1000) / 10);
    return `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}:${String(centesimos).padStart(2, '0')}`;
}

function atualizarDisplay() {
    display.textContent = formatarTempo(milisegundos);
    verificarMinutoParaAnimacao();
}


const botao = document.getElementById("corAleatoria");

function gerarCorAleatoria() {
  const cores = [
    "#000000",
    "#1b1010",
    "#2a1538",
    "#333333",
    "#152013",
    "#191c2c",
    "#8B0000"
  ];
  const indiceAleatorio = Math.floor(Math.random() * cores.length);
  return cores[indiceAleatorio];
}

botao.addEventListener("click", function() {
  document.body.style.backgroundColor = gerarCorAleatoria();
});

const nome = prompt("Digite seu nome:");

nomes.innerHTML = nome;

let ultimoMinutoAnimado = 0;

function verificarMinutoParaAnimacao() {
    const minutoAtual = Math.floor(milisegundos / 60000);
    if (minutoAtual > 0 && minutoAtual !== ultimoMinutoAnimado) {
        animarElementos();
        ultimoMinutoAnimado = minutoAtual;
    }
}

function animarElementos() {
    const elementos = document.querySelectorAll('button'); // ou qualquer seletor que quiser
    elementos.forEach(el => {
        el.classList.add('animar');
        setTimeout(() => el.classList.remove('animar'), 1000); // remove após a animação
    });
}
