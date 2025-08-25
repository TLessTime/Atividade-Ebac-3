class Parquimetro {
  constructor(valor) {
    this.valor = parseFloat(valor);
    this.tempo = 0;
    this.troco = 0;
  }

  calcular() {
    if (this.valor < 1.0) {
      return { mensagem: "Valor insuficiente", tempo: 0, troco: 0 };
    }

    if (this.valor >= 3.0) {
      this.tempo = 120;
      this.troco = this.valor - 3.0;
    } else if (this.valor >= 1.75) {
      this.tempo = 60;
      this.troco = this.valor - 1.75;
    } else if (this.valor >= 1.0) {
      this.tempo = 30;
      this.troco = this.valor - 1.0;
    }

    return {
      mensagem: "Tempo calculado com sucesso!",
      tempo: this.tempo,
      troco: this.troco.toFixed(2)
    };
  }
}

function calcularEstacionamento() {
  const valor = document.getElementById("valor").value;
  const parquimetro = new Parquimetro(valor);
  const resultado = parquimetro.calcular();

  const divResultado = document.getElementById("resultado");
  if (resultado.tempo === 0) {
    divResultado.innerHTML = `<p style="color:red">${resultado.mensagem}</p>`;
  } else {
    divResultado.innerHTML = `
      <p>${resultado.mensagem}</p>
      <p><strong>Tempo:</strong> ${resultado.tempo} minutos</p>
      <p><strong>Troco:</strong> R$ ${resultado.troco}</p>
    `;
  }
}

