let segundos = 0;
let minutos = 0;
let horas = 0;
let intervalo = null;
let emExecucao = false;
let tempoTotalSegundos = 0; 

const display = document.getElementById('time-display');
const inputHoras = document.getElementById("horas");
const inputMinutos = document.getElementById("minutos");
const sms = document.getElementById("sms");

function atualizarTempo() {
    // Se o tempo acabar, para o temporizador
    if (tempoTotalSegundos <= 0) {
        clearInterval(intervalo);
        emExecucao = false;
        sms.innerText="Tempo esgotado!"
        return;
    }

    // Diminui 1 segundo a cada execução
    tempoTotalSegundos--;

    // Transforma o total de segundos de volta em horas, minutos e segundos
    horas = Math.floor(tempoTotalSegundos / 3600);
    minutos = Math.floor((tempoTotalSegundos % 3600) / 60);
    segundos = tempoTotalSegundos % 60;

    
    let h = horas < 10 ? "0" + horas : horas;
    let m = minutos < 10 ? "0" + minutos : minutos;        
    let s = segundos < 10 ? "0" + segundos : segundos;

    display.innerText = `${h}:${m}:${s}`;
}

function iniciar() {
    if (!emExecucao) {
       
        let hDigitadas = parseInt(inputHoras.value) || 0;
        let mDigitados = parseInt(inputMinutos.value) || 0;

        
        if (tempoTotalSegundos === 0) {
            tempoTotalSegundos = (hDigitadas * 3600) + (mDigitados * 60);
        }

        
        if (tempoTotalSegundos > 0) {
            intervalo = setInterval(atualizarTempo, 1000); 
            emExecucao = true;
        } else {
            alert("Por favor, insira um tempo maior que zero.");
        }
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
    tempoTotalSegundos = 0;
    emExecucao = false;
    display.innerText = "00:00:00";    
   
    inputHoras.value = "";
    inputMinutos.value = "";
}
