import createTask from "./taskDomEvents";
import taskConstructor from "./task";
let demoTasks = [];

demoTasks.push(new taskConstructor("Clean the sink", "medium", "2022-09-28", "demo", "-1", false));
demoTasks.push(new taskConstructor("Wash the laundry", "medium", "2022-09-25", "demo", "-2", false));
demoTasks.push(new taskConstructor("Fix shower head", "high", "2022-10-01", "demo", "-3", false));
demoTasks.push(new taskConstructor("Learn react", "high", "2022-10-05", "demo", "-4", false));

function load(){
    //localStorage.clear();
    let projects = [];

    if(localStorage.getItem('project')){    
        projects = JSON.parse(localStorage.getItem('project'));
    }
    projects.unshift(demoTasks);

    let container = document.querySelector('.task-container');
    let add_button = document.querySelector('.add-btn-container');

    if(localStorage.getItem('tasks')){    
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    for(let j = 0; j < projects.length; j++){
        for(let i = 0; i < projects[j].length; i++){
            container.insertBefore(createTask(projects[j][i]), add_button);
        }
    }
}

export default load;