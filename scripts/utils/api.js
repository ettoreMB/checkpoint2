import { mostrarSpinner } from './loader.js';
import { errorMsg } from './utils.js';

const baseURL = 'https://ctd-todo-api.herokuapp.com/v1';
const authToken = sessionStorage.getItem('token');

const _HEADERS_CONFIG = {
    'content-type': 'application/json',
    authorization: authToken,
};

const api = {
    post(endpoint, body) {
        return fetch(`${baseURL}${endpoint}`, {
            method: 'POST',
            headers: _HEADERS_CONFIG,
            body: JSON.stringify(body),
        });
    },
    get(endpoint) {
        return fetch(`${baseURL}${endpoint}`, {
            headers: _HEADERS_CONFIG,
        });
    },
    put(endpoint, body) {
        return fetch(`${baseURL}${endpoint}`, {
            method: 'PUT',
            headers: _HEADERS_CONFIG,
            body: JSON.stringify(body),
        });
    },
    delete(endpoint, id) {
        return fetch(`${baseURL}${endpoint}/${id}`, {
            method: 'delete',
            headers: _HEADERS_CONFIG,
        });
    },
};

export async function login(email, password) {
    const user = {
        email: email,
        password: password,
    };
    try {
        let login = await api.post(`/users/login`, user);
        const response = login;
        return response;
    } catch (error) {
        throw error;
    }
}

export async function createUser(firstName, lastName, email, password) {
    const newUser = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
    };
    try {
       let create =  await api.post('/users', newUser);
        return create;
    } catch (error) {
        return error;
    }
}

export async function getUserInfo() {
    try {
        let user = await api.get('/users/getMe', 'get');
        const response = await user.json();

        return response;
    } catch (error) {
        throw error;
    }
}

export async function getTasks() {
    try {
        let tasks = await api.get('/tasks', 'get');
        const response = await tasks.json();
        return response;
    } catch (error) {
        throw error;
    }
}

export async function createTask(description) {
    try {
        const task = {
            description: description,
            completed: false,
        };

        const new_task = await api.post(`/tasks`, task);
        const response = await new_task.json();
        return response;
    } catch (error) {
        throw error;
    }
}

export async function updateTask(task) {
    try {
        const updatedTask = {
            description: task.description,
            completed: task.completed === false ? true : false,
        };
        await api.put(`/tasks/${task.id}`, updatedTask);
    } catch (error) {
        throw error;
    }
}

export async function deleteTask(id) {
    const task_id = String(id);
    try {
        await api.delete('/tasks', task_id);
    } catch (error) {
        return error;
    }
}

export function logout() {
    Swal.fire({
        text: 'Realmente deseja sair ?',
        iconColor: 'white',
        icon: 'question',
        background: `linear-gradient(90deg,#7898FF, #8E64C5)`,
        color: 'white',
        showCancelButton: true,
        confirmButtonColor: '#28a745',
        cancelButtonColor: '#dc3545',
        confirmButtonText: 'Sair',
        cancelButtonText: 'Cancelar',
    }).then(result => {
        if (result.isConfirmed) {
            sessionStorage.removeItem('token');
            location.href = 'index.html';
        }
    });
    
}