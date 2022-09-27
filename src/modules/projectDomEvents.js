import addIcon from "./imgs/add.svg";
import closeIcon from "./imgs/close.svg";
import submitIcon from "./imgs/submit.svg";

import createTask from "./taskDomEvents";
import taskConstructor from "./task";
import saveTask from "./storage";
import {changeProjects} from "./sidebar";

function createProject(){
    let container = document.createElement('div');
    container.classList.add('container');

    let tasks = document.createElement('div');
    tasks.classList.add('task-container');

    tasks.append(add_task_button());
    container.append(sort_container(), tasks);

    return container;
}

function sort_container(){
    let container = document.createElement('div');
    container.textContent = "Sort by Date";
    container.classList.add("sort");

    container.addEventListener('click', () => {
        let tasks = document.querySelectorAll(".bar");
        let tasksArr = Array.from(tasks);
        let container = document.querySelector('.task-container');

        if(container.classList[1] === "descending"){
            container.classList.remove("descending");
            container.classList.add("ascending");
            tasksArr.sort(compareDatesDescending);
        }
        else{
            container.classList.remove("ascending");
            container.classList.add("descending");
            tasksArr.sort(compareDatesAscending);
        }

        removeChildElements();
        for(let i = 0; i < tasksArr.length; i++){
            container.append(tasksArr[i]);
        }

        let home = document.querySelector('.home');
        if(home.classList[1] == "active"){
            container.append(add_task_button());
        }
    }); 

    return container;
}

function compareDatesAscending(a, b){
    let aDate = a.querySelector('.date').value;
    let bDate = b.querySelector('.date').value;

    return aDate < bDate ? -1 : aDate > bDate ? 1 : 0;
}

function compareDatesDescending(a, b){
    let aDate = a.querySelector('.date').value;
    let bDate = b.querySelector('.date').value;

    return aDate < bDate ? 1 : aDate > bDate ? -1 : 0;
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
    name.classList.add('form-task-name');
    name.required = true;

    let project_label = document.createElement('label');
    project_label.setAttribute('for', 'name');
    project_label.textContent = "Project Name";

    let project = document.createElement('input');
    project.setAttribute('type', 'text');
    project.setAttribute('placeholder', 'Enter project name(optional)');
    project.setAttribute('name', 'project');
    project.classList.add('form-task-project');

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

    form.append(name_label, name, project_label, project, priority_label, priority, date_label, date);
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

    let newTask = new taskConstructor(formProps.name, formProps.priority, formProps.date, formProps.project, uniqueId(), false);

    container.insertBefore(createTask(newTask), add_button);
    saveTask(newTask);

    changeProjects();
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

function removeChildElements(){
    let element = document.querySelector(".task-container");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function uniqueId(){
    const dateString = Date.now().toString(36);
    const randomness = Math.random().toString(36).substr(2);
    return dateString + randomness;
};

export {createProject, add_task_button};