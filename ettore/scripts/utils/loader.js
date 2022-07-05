export function mostrarSpinner() {

  const body = document.querySelector("body");
  const form = document.querySelector("form");
  const spinnerContainer = document.createElement("div");
  const spinner = document.createElement("div");
  const ingressar_div = document.querySelector('.ingressar')

  spinnerContainer.setAttribute("id", "container-load");
  spinner.setAttribute("id", "load");
  form.classList.add("hidden");
  ingressar_div.classList.add('hidden')
  spinnerContainer.appendChild(spinner);
  body.appendChild(spinnerContainer);
  
  return;
 }

 function ocultarSpinner() {
  const body = document.querySelector("body");
  const form = document.querySelector("form");
  const spinnerContainer = document.querySelector("#conteiner-load");
  body.removeChild(spinnerContainer);
  form.classList.remove("hidden");
  return;
 }