import { createTask, getTasks, getUserInfo, logout } from './utils/api.js';
import {
    removeSkeletons,
    renderSkeletons,
    darkMode,
    whiteMode,
} from './utils/loader.js';
import {
    createCompleteTaskDiv,
    createIncompleteTaskDiv,
    errorMsg,
} from './utils/utils.js';
import { validations } from './utils/validations.js';

const header = document.querySelector('#user-name');
const task_button = document.querySelector('#task-button');
const task_input = document.querySelector('#nova-tarefa');
const tarefas_pendentes = document.querySelector('.tarefas-pendentes');
const tarefas_terminadas = document.querySelector('.tarefas-terminadas');
const logout_button = document.querySelector('#closeApp');

let condition = false;

onload = async () => {
    const token = sessionStorage.getItem('token');
    if (!token) {
        location.href = 'index.html';
    } else {
        renderSkeletons(5, '.tarefas-pendentes');
        const user = await getUserInfo();
        header.innerText = user.firstName;
        setTimeout(await loadTasks(), 200);
        removeSkeletons('.tarefas-pendentes');
    }
};

async function loadTasks() {
    const tasks = await getTasks();
    tasks.map(task => {
        if (task.completed === true) {
            createCompleteTaskDiv(tarefas_terminadas, task);
        } else {
            createIncompleteTaskDiv(tarefas_pendentes, task);
        }
    });
}

task_button.addEventListener('click', async e => {
    e.preventDefault();
    let task_value = validations.removeSpacesFromtext(task_input.value);
    if (task_value === '') {
        return errorMsg('O campo tarefa não pode ser vazio');
    }
    const new_task = await createTask(task_value);
    await createIncompleteTaskDiv(tarefas_pendentes, new_task);
});

logout_button.addEventListener('click', function () {
    logout();
});

let modifield = document.getElementById('darkMode');
modifield.addEventListener('click', function () {
    if (condition === false) {
        darkMode();
        condition = true;
        document.getElementById('label').innerText = 'WhiteMode';
    } else {
        whiteMode();
        condition = false;
        document.getElementById('label').innerText = 'DarkMode';
    }
});
