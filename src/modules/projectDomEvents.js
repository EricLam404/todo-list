import addIcon from "./imgs/add.svg";
import closeIcon from "./imgs/close.svg";
import submitIcon from "./imgs/submit.svg";

import createTask from "./taskDomEvents";
import taskConstructor from "./task";
import saveTask from "./storage";

let IDCount = 1;
let demoTasks = [];

demoTasks.push(new taskConstructor("Clean the sink", "medium", "2022-09-28", "home", "-1"));
demoTasks.push(new taskConstructor("Wash the laundry", "medium", "2022-09-25", "home", "-1"));
demoTasks.push(new taskConstructor("Fix shower head", "high", "2022-10-01", "home", "-1"));
demoTasks.push(new taskConstructor("Learn react", "high", "2022-10-05", "home", "-1"));

function createProject(){
    let container = document.createElement('div');
    container.classList.add('container');

    let tasks = document.createElement('div');
    tasks.classList.add('task-container');

    for(let i = 0; i < demoTasks.length; i++){
        tasks.append(createTask(demoTasks[i]));
    }
    tasks.append(add_task_button());
    container.append(tasks);

    return container;
}

function add_task_button(){
    let container = document.createElement('li');
    container.classList.add('add-btn-container');

    container.append(task_button(), create_task_popup());

    return container;
}

function task_button(){
    let add_button = document.createElement('div');

    let add = document.createElement('img');
    add.src = addIcon;
    let button = document.createElement('div');
    button.textContent = "Add Task";

    add_button.classList.add('add');
    add_button.append(add, button);

    add_button.addEventListener('click', show_create_task_popup, true);

    return add_button;
}

function create_task_popup(){
    let popup = document.createElement('div');
    popup.classList.add('form-popup');

    let form = document.createElement("form");
    form.classList.add('form-container');

    let name_label = document.createElement('label');
    name_label.setAttribute('for', 'name');
    name_label.textContent = "Task Name";

    let name = document.createElement('input');
    name.setAttribute('type', 'text');
    name.setAttribute('placeholder', 'Enter task name');
    name.setAttribute('name', 'name');
    name.classList.add('form-task-name')
    name.required = true;

    let priority_label = document.createElement('label');
    priority_label.setAttribute('for', 'priority')
    priority_label.textContent = "Priority Level";

    let priority = document.createElement('select');
    priority.setAttribute('name', 'priority');
    priority.required = true;

    let low = document.createElement('option');
    low.value = 'low';
    low.textContent = 'low';

    let medium = document.createElement('option');
    medium.value = 'medium';
    medium.textContent = 'medium';

    let high = document.createElement('option');
    high.value = 'high';
    high.textContent = 'high';

    priority.append(low, medium, high);

    let date_label = document.createElement('label');
    date_label.setAttribute('for', 'date');
    date_label.textContent = "Due Date";

    let date = document.createElement('input');
    date.setAttribute('type', 'date');
    date.setAttribute('name', 'date');
    date.required = true;

    form.append(name_label, name, priority_label, priority, date_label, date);
    form.append(close_buttton(), submit_button());

    add_submit(form);


    popup.append(form);

    return popup;
}

function show_create_task_popup(e){
    let form = document.querySelector(".form-popup");

    form.classList.add('show');
}

function submit_button(){
    let button = document.createElement('button');
    button.classList.add('submit');

    let icon = document.createElement('img');
    icon.src = submitIcon;
    button.appendChild(icon);
    button.setAttribute('type', 'submit');

    return button;
}

function close_buttton(){
    let button = document.createElement('button');
    button.classList.add('close');

    let icon = document.createElement('img');
    icon.src = closeIcon;
    button.appendChild(icon);
    button.setAttribute('type', 'button');

    button.addEventListener('click', close_form);

    return button;
}

function close_form(e){
    let form = document.querySelector('.form-popup');
    form.classList.remove('show');
}

function add_task(e){
    e.preventDefault();
    let formData = new FormData(e.target);
    let formProps = Object.fromEntries(formData);

    let container = document.querySelector('.task-container');
    let add_button = document.querySelector('.add-btn-container');

    let newTask = new taskConstructor(formProps.name, formProps.priority, formProps.date, "home", IDCount);
    IDCount++;

    container.insertBefore(createTask(newTask), add_button);
    saveTask(newTask);

    reset_form();
    close_form();
}

function reset_form(){
    let form = document.querySelector('.form-container');

    form.reset();
}

function add_submit(form){
    form.addEventListener('submit', add_task);
}
export default createProject;