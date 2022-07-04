const _DATE_OPTIONS = {
  year: '2-digit',
  month: '2-digit',
  day: '2-digit'
}

function transformDate(date) {
 const transformedDate =   new Intl.DateTimeFormat('pt-BR',_DATE_OPTIONS ).format(new Date(date));
 return transformedDate
}

export function createTaskDiv(task ) {
  const tarefas_pendentes = document.querySelector('.tarefas-pendentes > div')
  
    const task_li = document.createElement('li');
    const not_done_div = document.createElement('div');
    const description_div =  document.createElement('p');
    const name_p = document.createElement('p')
    const timestamp_p = document.createElement('p')
    task_li.classList.add('tarefa');
    not_done_div.classList.add('not-done');
    task_li.appendChild(not_done_div);
    task_li.appendChild(description_div);
    description_div.classList.add('descricao');
    description_div.appendChild(name_p)
    name_p.classList.add('nome');
    description_div.appendChild(timestamp_p);
    timestamp_p.classList.add('timestamp');
    name_p.innerText = task.description
    const formatedDate = transformDate(task.createdAt)
    timestamp_p.innerText = `Criada em : ${formatedDate}`
    tarefas_pendentes.appendChild(task_li)
 
  
}