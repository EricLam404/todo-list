import createTask from "./task";

function createProject(){
    let container = document.createElement('div');
    container.classList.add('container');

    container.append(createTask("Eat", "high", "2022-08-19"), add_task_button());

    return container;
}

function add_task_button(){
    let container = document.createElement('li');
    container.classList.add('add-btn-container');

    container.append(task_button(), create_task_popup());

    return container;
}

function task_button(){
    let button = document.createElement('button');

    button.textContent = "Add Task";
    button.classList.add('add');

    button.addEventListener('click', show_create_task_popup);

    return button;
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
    let form = e.target.parentNode.lastChild;

    form.classList.add('show');
}

function submit_button(){
    let button = document.createElement('button');
    button.classList.add('submit');
    button.textContent = "Submit";
    button.setAttribute('type', 'submit');

    return button;
}

function close_buttton(){
    let button = document.createElement('button');
    button.classList.add('close');
    button.textContent = "Close";
    button.setAttribute('type', 'button');

    button.addEventListener('click', close_form);

    return button;
}

function close_form(e){
    let form = e.target.parentNode.parentNode;
    form.classList.remove('show');
}

function add_task(e){
    e.preventDefault();
    let formData = new FormData(e.target);
    let formProps = Object.fromEntries(formData);

    let container = document.querySelector('.container');
    let add_button = document.querySelector('.add-btn-container');
    container.insertBefore(createTask(formProps.name, formProps.priority, formProps.date), add_button);
    console.log(formProps);

    reset_form();
}

function reset_form(){
    let form = document.querySelector('.form-container');

    form.reset();
}

function add_submit(form){
    form.addEventListener('submit', add_task);
}
export default createProject;