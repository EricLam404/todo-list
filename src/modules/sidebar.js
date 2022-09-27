import { remove } from "lodash";

function createSidebar(){
    let sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');
    sidebar.append(home(), projects());


    return sidebar;
}

function home(){
    let home = document.createElement('li');
    home.classList.add("home");
    home.textContent = "Home";

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
    projects.append(project("Demo"));
    for(let i = 0; i < projectsArr.length; i++){
        let name = projectsArr[i][0]._project;
        name = name[0].toUpperCase() + name.substring(1);
        projects.append(project(name));
    }
    return projects;
}

function project(name){
    let project = document.createElement('li');
    project.textContent = name;
    project.classList.add('project')
    return project;
}

function changeProjects(){
    removeProject();
    projects();
}

function removeProject(){
    let element = document.querySelector(".sidebar");
    element.removeChild(element.lastChild);
}

export default createSidebar;