export function mostrarSpinner() {
  const body = document.querySelector("body");
  const form = document.querySelector("form");
  const spinnerContainer = document.createElement("div");
  const spinner = document.createElement("div");
  const ingressar_div = document.querySelector('.ingressar')

  spinnerContainer.setAttribute("id", "container-load");
  spinner.setAttribute("id", "load");
  form.classList.add("hidden");
  ingressar_div.classList.add('hidden');
  spinnerContainer.appendChild(spinner);
  body.appendChild(spinnerContainer);
  
  return;
 };

 export function ocultarSpinner() {
  const body = document.querySelector("body");
  const form = document.querySelector("form");
  const spinnerContainer = document.querySelector("#container-load");
  body.removeChild(spinnerContainer);
  const ingressar_div = document.querySelector('.ingressar')
  ingressar_div.classList.remove('hidden');
  form.classList.remove("hidden");
  return;
 };

 
export function renderSkeletons(quantindade, container) {
  let containerTarefas = document.querySelector(container);
  const skeletons = Array.from({ length: quantindade});
  skeletons.forEach(() => {
    const template = `
    <li class="skeleton-conteiner ${container.replace(" .",'" "')}-child">
      <div class="skeleton-card">
        <p class="skeleton-text"></p>
        <p class="skeleton-text"></p>
      </div>
    </li>
  `;

  containerTarefas.innerHTML += template;
  });
};

export function removeSkeletons(conteiner) {
  const conteinerTarefas = document.querySelector(conteiner);
  const skeletons = document.querySelectorAll(`.skeleton-conteiner`);
  skeletons.forEach((skeleton) => conteinerTarefas.removeChild(skeleton));
};
 