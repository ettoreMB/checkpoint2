campoNovaTarefa.addEventListener("input", () => {
  if (validarCampo(campoNovaTarefa)) {
    campoNovaTarefa.style.border = "3px solid #5369f8";
  } else if (campoNovaTarefa.value == "") {
    campoNovaTarefa.style.border = "3px solid #ced4da";
  } else {
    campoNovaTarefa.style.border = "3px solid red";
  }
});
