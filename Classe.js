// Classe para representar o estacionamento
class Estacionamento {
    constructor() {
        this.tarifas = {
            1.00: 30,
            1.75: 60,
            3.00: 120
        };
    }

    calcularTempo(valor) {
        if (valor < 1.00) {
            return { tempo: 0, troco: 0, mensagem: "Valor insuficiente" };
        }

        let tempo = 0;
        let tarifaEncontrada = false;

        for (const valorTarifa in this.tarifas) {
            if (valor >= parseFloat(valorTarifa)) {
                tempo = this.tarifas[valorTarifa];
                tarifaEncontrada = true;
            }
        }

        if (!tarifaEncontrada) {
          return { tempo: 0, troco: 0, mensagem: "Valor não corresponde a nenhuma tarifa."}
        }

        const troco = valor - Object.keys(this.tarifas).sort((a, b) => b - a).find(tarifa => valor >= parseFloat(tarifa));

        return { tempo: tempo, troco: troco, mensagem: "" };
    }
}

// Função para lidar com o evento de clique do botão
function calcularEstacionamento() {
    const valorInserido = parseFloat(document.getElementById("valor").value);
    const estacionamento = new Estacionamento();
    const resultado = estacionamento.calcularTempo(valorInserido);

    const tempoElement = document.getElementById("tempo");
    const trocoElement = document.getElementById("troco");
    const mensagemElement = document.getElementById("mensagem");

    if (resultado.mensagem) {
        tempoElement.textContent = "";
        trocoElement.textContent = "";
        mensagemElement.textContent = resultado.mensagem;
    } else {
        tempoElement.textContent = `Tempo: ${resultado.tempo} minutos`;
        trocoElement.textContent = `Troco: R$ ${resultado.troco.toFixed(2)}`;
        mensagemElement.textContent = "";
    }
}

// Adiciona um event listener ao botão (assumindo que o botão tem o id "calcular")
document.getElementById("calcular").addEventListener("click", calcularEstacionamento);
