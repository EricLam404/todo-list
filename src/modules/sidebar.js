import createTask from "./taskDomEvents";
import taskConstructor from "./task";
import {add_task_button} from "./projectDomEvents";

let demoTasks = [];

demoTasks.push(new taskConstructor("Clean the sink", "medium", "2022-09-28", "demo", "-1", false));
demoTasks.push(new taskConstructor("Wash the laundry", "medium", "2022-09-25", "demo", "-2", false));
demoTasks.push(new taskConstructor("Fix shower head", "high", "2022-10-01", "demo", "-3", false));
demoTasks.push(new taskConstructor("Learn react", "high", "2022-10-05", "demo", "-4", false));

function createSidebar(){
    let sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');
    sidebar.append(home(), projects());


    return sidebar;
}

function home(){
    let home = document.createElement('li');
    home.classList.add("home");
    home.classList.add("active");
    home.textContent = "Home";

    home.addEventListener('click', () => {
        let container = document.querySelector(".task-container");
        home.classList.add("active");
        let projects = [];
        if(localStorage.getItem('project')){    
            projects = JSON.parse(localStorage.getItem('project'));
        }

        projects.unshift(demoTasks);
        removeChildElements();

        for(let i = 0; i < projects.length; i++){
            for(let j = 0; j < projects[i].length; j++){
                container.appendChild(createTask(projects[i][j]));
            }
        }
        container.appendChild(add_task_button());
    });

    return home;
}

function projects(){
    let projects = document.createElement('li');
    projects.classList.add("projects");
    projects.textContent = "Projects";

    let projectsArr = [];
    if(localStorage.getItem('project')){    
        projectsArr = JSON.parse(localStorage.getItem('project'));
    }
    projects.append(project("demo"));
    for(let i = 0; i < projectsArr.length; i++){
        let name = projectsArr[i][0]._project;
        projects.append(project(name));
    }
    return projects;
}

function project(name){
    let project = document.createElement('li');
    project.textContent = name;
    project.classList.add('project');

    project.addEventListener('click', () => {
        let container = document.querySelector(".task-container");
        let tasks = [];
        let home = document.querySelector('.home');
        home.classList.remove('active')

        removeChildElements();

        let projects = [];
        if(localStorage.getItem('project')){    
            projects = JSON.parse(localStorage.getItem('project'));
        }
        for(let i = 0; i < projects.length; i++){
            if(name == projects[i][0]._project){
                tasks = projects[i];
            }
        }

        if(name === "demo"){
            tasks = demoTasks;
        }

        for(let j = 0; j < tasks.length; j++){
            container.append(createTask(tasks[j]));
        }
    });

    return project;
}

function removeChildElements(){
    let element = document.querySelector(".task-container");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function changeProjects(){
    let sidebar = document.querySelector('.sidebar');
    removeProject();
    sidebar.append(projects());
}

function removeProject(){
    let element = document.querySelector(".sidebar");
    element.removeChild(element.lastChild);
}

export {createSidebar, changeProjects};