const header = document.querySelector('#user-name')
const task_button =  document.querySelector('#task-button');
const task_input = document.querySelector('#nova-tarefa')
import {  createTask, getTasks, getUserInfo } from './utils/api.js'
import { createTaskDiv } from './utils/utils.js'

onload = async () => {
  const token =  sessionStorage.getItem('token')
    if(!token) {
      location.href = 'index.html'
    } else {
      loadTasks()
    }
}

const user = await getUserInfo();
console.log(user)
  header.innerText = user.firstName


async function loadTasks() {
  const tasks = await getTasks();
  tasks.forEach(task => createTaskDiv(task))
} 

  task_button.addEventListener('click',async (e) => {
    
    e.preventDefault()

    let task_value = task_input.value

    const new_task = await createTask(task_value)

    createTaskDiv(new_task)
     
  })
