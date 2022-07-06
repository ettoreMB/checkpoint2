import { deleteTask, updateTask } from "./api.js";

const _DATE_OPTIONS = {
  year: "2-digit",
  month: "2-digit",
  day: "2-digit",
};

function transformDate(date) {
  const transformedDate = new Intl.DateTimeFormat(
    "pt-BR",
    _DATE_OPTIONS
  ).format(new Date(date));
  return transformedDate;
}

export function createCompleteTaskDiv(input, task) {
  const task_li = document.createElement("li");
  const not_done_div = document.createElement("div");
  const description_div = document.createElement("p");
  const name_p = document.createElement("p");
  const timestamp_p = document.createElement("p");
  const input_id = document.createElement("input");
  const buttons_div = document.createElement("div");
  const delete_button = document.createElement("button");
  const return_button = document.createElement("button");
  const return_icon = document.createElement("i");
  const delete_icon = document.createElement("i");

  task_li.classList.add("tarefa");
  not_done_div.classList.add("done");
  description_div.classList.add("descricao");
  timestamp_p.classList.add("timestamp");
  name_p.classList.add("nome");
  input_id.classList.add("id-number");
  return_icon.classList.add("fas", "fa-undo-alt", "change");
  delete_icon.classList.add("far", "fa-trash-alt");

  task_li.appendChild(not_done_div);
  task_li.appendChild(description_div);

  description_div.appendChild(name_p);
  description_div.appendChild(timestamp_p);
  description_div.appendChild(buttons_div);

  buttons_div.appendChild(delete_button);
  buttons_div.appendChild(return_button);
  delete_button.appendChild(delete_icon);
  return_button.appendChild(return_icon);

  input_id.value = task.id;
  name_p.innerText = task.description;

  delete_icon.addEventListener("click", function () {
    Swal.fire({
      title: "Excluir tarefa?",
      icon: "question",
      background: "#8E64C5",
      color: "white",
      showCancelButton: true,
      confirmButtonColor: "green",
      cancelButtonColor: "red",
      confirmButtonText: "Sair",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteTask(task.id);
        location.reload();
      }
    });
  });

  return_icon.addEventListener("click", async () => {
    await updateTask(task);
    location.reload();
  });

  input.appendChild(task_li);
}

export async function createIncompleteTaskDiv(input, task) {
  console.log(task);
  const task_li = document.createElement("li");
  const not_done_div = document.createElement("div");
  const description_div = document.createElement("p");
  const name_p = document.createElement("p");
  const timestamp_p = document.createElement("p");

  task_li.classList.add("tarefa");
  not_done_div.classList.add("not-done");
  description_div.classList.add("descricao");
  timestamp_p.classList.add("timestamp");
  name_p.classList.add("nome");

  task_li.appendChild(not_done_div);
  task_li.appendChild(description_div);
  description_div.appendChild(name_p);
  description_div.appendChild(timestamp_p);

  name_p.innerText = task.description;

  not_done_div.addEventListener("click", async (e) => {
    e.preventDefault();
    await updateTask(task);
    location.reload();
  });
  console.log(task);

  timestamp_p.innerText = `Criada em : ${transformDate(task.createdAt)}`;
  input.appendChild(task_li);
}

export function errorMsg(message) {
  const errorMsg = document.createElement("div");
  const body = document.querySelector("body");
  body.appendChild(errorMsg);
  errorMsg.innerText = message;
  errorMsg.classList.add("messages");
}
