const addTaskButton = document.getElementById('add-task-button')
const addTaskInput = document.getElementById('task-description')
const taskHolder = document.getElementById('tasks')

let tasks;
!localStorage.tasks ? tasks= [] : tasks = JSON.parse(localStorage.getItem('tasks'))

let todoItemElements = [];

class Task {
    constructor(description) {
        this.description = description;
        this.completed = false;
    }
}

const createTaskTemplate = (task, index) => {
    return `<div class='todo-item ${task.completed ? 'checked' : '' }'>
                <div class="done">
                    <input onclick="completeTask(${index})" type="checkbox" ${task.completed? 'checked':''}>
                </div>
                <div class="description">
                    ${task.description}
                </div>
                <div class="deleteButton">
                    <button onclick="deleteTask(${index})">
                        <i class="fa-solid fa-trash-can" style="color: rgb(185, 30, 199)"></i>
                    </button>
                </div>
            </div>
            `
}

const filterTasks = () => {
    const activeTasks = tasks.length && tasks.filter(item => item.completed == false);
    const completedTasks = tasks.length && tasks.filter(item => item.completed == true);
    tasks = [...activeTasks, ...completedTasks]
}

const fillTaskList = () => {
    taskHolder.innerHTML = "";
    if (tasks.length > 0){
        filterTasks();
        tasks.forEach((item, index) => {
            taskHolder.innerHTML += createTaskTemplate(item, index);
        });
        todoItemElements = document.querySelectorAll('.todo-item')
    }
}
fillTaskList();

const updateLocal = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

const completeTask = index => {
    tasks[index].completed = !tasks[index].completed;
    if(tasks[index].completed){
        todoItemElements[index].classList.add('checked')
    }else{
        todoItemElements[index].classList.remove('checked')
    }
    updateLocal();
    fillTaskList();
}


addTaskButton.addEventListener('click', () => {
    tasks.push(new Task(addTaskInput.value));
    updateLocal();
    fillTaskList();
    addTaskInput.value = '';
})


const deleteTask = index => {
    tasks.splice(index, 1);
    updateLocal();
    fillTaskList();
}