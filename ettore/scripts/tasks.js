const header = document.querySelector('#user-name')
const task_button =  document.querySelector('#task-button');
const task_input = document.querySelector('#nova-tarefa');
const tarefas_pendentes = document.querySelector('.tarefas-pendentes');
const tarefas_terminadas = document.querySelector('.tarefas-terminadas');
const logout_button = document.querySelector('#closeApp')

import {  createTask, getTasks, getUserInfo, logout } from './utils/api.js'
import { createTaskDiv, errorMsg } from './utils/utils.js'

onload = async () => {
  const token =  sessionStorage.getItem('token')
    if(!token) {
      location.href = 'index.html'
    } else {
      const user = await getUserInfo();
      header.innerText = user.firstName
      loadTasks();
    }
}

async function loadTasks() {
  const tasks = await getTasks();
  tasks.map(task => {
    
    if(task.completed === true) {
      createTaskDiv(tarefas_terminadas,task)
      
    } else {
      createTaskDiv(tarefas_pendentes,task)
    }
  })
  
} 

task_button.addEventListener('click',async (e) => {
    
    e.preventDefault()

    let task_value = task_input.value

    if(task_value === "") {
     return  errorMsg('O campo tarefa não pode ser vazio')
    }

    const new_task = await createTask(task_value)

    createTaskDiv(new_task)
     
})

logout_button.addEventListener('click', ()=> {
  logout()
})