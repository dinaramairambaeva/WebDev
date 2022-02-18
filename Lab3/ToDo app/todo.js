const addTaskButton = document.getElementById('add-task-button')
const addTaskInput = document.getElementById('task-description')
const taskHolder = document.getElementById('tasks')

// const task = {
//     description: '',
//     completed: false
// }
let tasks;
!localStorage.tasks ? tasks= [] : tasks = JSON.parse(localStorage.getItem('tasks'))

let todoItemElements = [];

function Task(description){
    this.description = description;
    this.completed = false;
}

const createTaskTemplate = (task, index) => {
    return `<div class='todo-item ${task.completed ? 'checked' : '' }'>
                <div class="done">
                    <input onclick="completeTask(${index})" type="checkbox" ${task.completed? 'checked':''}>
                </div>
                <div class="descriptio">
                    ${task.description}
                </div>
                <div class="deleteButton">
                    <button onclick="deleteTask(${index})">Delete</button>
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
    task[index].completed = !task[index].completed;
    if(task[index].completed){
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