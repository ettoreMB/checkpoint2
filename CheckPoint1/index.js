let pipoca = 10
let macarrao = 8
let carne = 5
let feijao = 12
let brigadeiro = 8

function esquentarComida(prato, tempo = 0) {
  const defaultMessage = "Prato pronto, bom apetite "
  let tempoTotal = prato + tempo

  if (tempoTotal >= prato * 2) {
    return console.log("comida queimou. " + defaultMessage);
  }

  if (tempoTotal > prato * 3) {
    return [console.log("Kabum" + defaultMessage)]
  }

  if (tempoTotal <= 9) {
    console.log("tempo insuficiente");
  }

  if (!prato && !tempo) {
    return console.log("Prato inexistente");
  }

  return console.log(defaultMessage)
}

esquentarComida(pipoca);
