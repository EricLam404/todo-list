import createTask from "./task";

function createProject(){
    let container = document.createElement('div');
    container.classList.add('container');

    container.append(task_button(), createTask());

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