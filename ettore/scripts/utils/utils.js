import { updateTask } from "./api.js";

const _DATE_OPTIONS = {
  year: '2-digit',
  month: '2-digit',
  day: '2-digit'
}

function transformDate(date) {
 const transformedDate =   new Intl.DateTimeFormat('pt-BR',_DATE_OPTIONS ).format(new Date(date));
 return transformedDate
}

export function createTaskDiv(input, task ) {
  
    const task_li = document.createElement('li');
    const not_done_div = document.createElement('div');
    const description_div =  document.createElement('p');
    const name_p = document.createElement('p');
    const timestamp_p = document.createElement('p');
    const input_id = document.createElement('input');

    task_li.classList.add('tarefa');
    not_done_div.classList.add('not-done');
    description_div.classList.add('descricao');
    timestamp_p.classList.add('timestamp');
    name_p.classList.add('nome');
    input_id.classList.add('id-number');

    task_li.appendChild(not_done_div);
    task_li.appendChild(description_div);
    description_div.appendChild(name_p)
    description_div.appendChild(timestamp_p);
    task_li.appendChild(input_id);
    
    not_done_div.addEventListener('click', async (e) => {
      e.preventDefault()
      await updateTask(task)
    })
    
    input_id.value = task.id
    name_p.innerText = task.description

    timestamp_p.innerText = `Criada em : ${transformDate(task.createdAt)}`
    input.appendChild(task_li)
 
}

export function errorMsg(message) {
  const errorMsg = document.createElement('div')
  const body = document.querySelector('body')
  body.appendChild(errorMsg)
  errorMsg.innerText = message
  errorMsg.classList.add('messages')
}