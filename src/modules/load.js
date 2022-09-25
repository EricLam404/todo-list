import createTask from "./taskDomEvents";

function load(){
    let tasks = [];
    let container = document.querySelector('.task-container');
    let add_button = document.querySelector('.add-btn-container');

    if(localStorage.getItem('tasks')){    
        tasks = JSON.parse(localStorage.getItem('tasks')) 
    }

    for(let i = 0; i < tasks.length; i++){
        container.insertBefore(createTask(tasks[i]), add_button);
    }
}

export default load;