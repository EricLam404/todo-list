import createTask from "./task";

function createProject(){
    let container = document.createElement('div');
    container.classList.add('container');

    container.append(createTask());

    document.body.appendChild(task_button());

    return container;
}

function task_button(){
    let button = document.createElement('button');

    button.textContent = "Add Task";
    button.classList.add('add');

    button.addEventListener('click', () => {
        let container = document.querySelector('.container');
        container.append(createTask());
    });

    return button;
}

export default createProject;