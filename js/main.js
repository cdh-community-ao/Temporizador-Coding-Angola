let segundos = 0;
let minutos = 0;
let horas = 0;
let intervalo = null;
let emExecucao = false;

const display = document.getElementById('time-display');

function atualizarTempo() {
    segundos++;
    if (segundos === 60) {
        segundos = 0;
        minutos++;
        if (minutos === 60) {
            minutos = 0;
            horas++;
        }
    }

            
    let h = horas < 10 ? "0" + horas : horas;
    let m = minutos < 10 ? "0" + minutos : minutos;        
    let s = segundos < 10 ? "0" + segundos : segundos;

    display.innerText = `${h}:${m}:${s}`;
}

function iniciar() {
    if (!emExecucao) {
        intervalo = setInterval(atualizarTempo, 1000); 
        emExecucao = true;
    }
}

function pausar() {
    clearInterval(intervalo);
        emExecucao = false;
}

function reiniciar() {
    clearInterval(intervalo);
    segundos = 0;
    minutos = 0;
    horas = 0;
    emExecucao = false;
    display.innerText = "00:00:00";
}
    