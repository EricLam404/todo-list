import deleteIcon from './imgs/delete.svg';
import changeProjects from './sidebar';

function createTask(task){
    let task_bar = document.createElement("li");
    task_bar.classList.add("bar");
    task_bar.setAttribute('id', task._id);
    if(task._done){
        task_bar.classList.add('done');
    }

    task_bar.append(checkbox(task._done), task_name(task._name), project(task._project), priority(task._priority), due_date(task._date), delete_button());
    return task_bar;
}

function checkbox(done){
    let box = document.createElement("input");
    box.setAttribute("type", "checkbox");
    box.checked = done;

    
    box.addEventListener('change', () => {
        let bar = box.parentNode;
        if(box.checked){
            bar.classList.add('done');
        }
        else {
            bar.classList.remove('done');
        }
        editDone(bar.id, box.checked);
    });
    return box;
}

function task_name(name){
    let task_name = document.createElement("input");
    task_name.setAttribute("type", "text");
    task_name.classList.add('name');

    task_name.value = name;

    task_name.addEventListener('change', (e) => {
        let id = task_name.parentNode.id;
        editName(id, task_name.value)
    });

    return task_name;
}

function project(name){
    let project = document.createElement("input");
    project.setAttribute("type", "text");
    project.classList.add('project-name');

    project.value = name;

    project.addEventListener('change', (e) => {
        let id = project.parentNode.id;
        editProject(id, project.value)
    });

    return project;
}

function priority(level){
    let button = document.createElement("button");
    let priority = "priority-" + level;

    button.classList.add("dropbtn");
    button.classList.add(priority);
    button.textContent = level;

    button.append(dropdown());

    add_dropdown_click(button);

    return button;
}

function dropdown(){
    let dropdown_box = document.createElement('div');
    dropdown_box.classList.add("dropdown-content");

    let low = document.createElement('div');
    low.textContent = "low";
    low.classList.add('low');

    let medium = document.createElement('div');
    medium.textContent = "medium";
    medium.classList.add('medium');

    let high = document.createElement('div');
    high.textContent = "high";
    high.classList.add('high');

    dropdown_box.append(low, medium, high);

    add_change_priority(dropdown_box);


    return dropdown_box;
}

function add_dropdown_click(button){
    button.addEventListener('click', () => {
        let dropdown_box = button.lastChild;

        dropdown_box.classList.toggle("show");
    });
}

function add_change_priority(dropdown_box){
    for(let i = 0; i < 3; i++){
        dropdown_box.children[i].addEventListener("click", (e) => {
            let button = dropdown_box.parentNode;
            let change =  e.target.textContent;
            let priority = "priority-" + change;
            button.classList.remove(button.classList[1])
            button.classList.add(priority);
            
            
            button.textContent = change;

            button.appendChild(dropdown());

            let id = button.parentNode.id;

            editPriority(id, change);
        });
    }
}

function due_date(date){
    let due_date = document.createElement('input');
    due_date.setAttribute("type", "date");
    due_date.classList.add('date');
    due_date.value = date;

    
    due_date.addEventListener('change', (e) => {
        let id = due_date.parentNode.id;
        editDate(id, due_date.value)
    });

    return due_date;
}

function delete_button(){
    let delete_button = document.createElement("img");

    delete_button.classList.add("delete");
    delete_button.src = deleteIcon;

    delete_button.addEventListener('click', (e) => {
        let container = document.querySelector('.task-container');
        
        let bar = e.target.parentNode;
        let id = bar.id;
        container.removeChild(bar);
        remove(id);
        changeProjects();
    });


    return delete_button;
}

function editName(id, change){
    let projects = []
    if(localStorage.getItem('project')){    
        projects = JSON.parse(localStorage.getItem('project')); 
    }

    for(let i = 0; i < projects.length; i++){
        for(let j = 0; j < projects[i].length; j++){
            if(projects[i][j]._id == id){
                projects[i][j]._name = change;
            }
        }
    }
    localStorage.setItem('project', JSON.stringify(projects));
}

function editProject(id, change){
    let projects = []
    if(localStorage.getItem('project')){    
        projects = JSON.parse(localStorage.getItem('project')); 
    }

    for(let i = 0; i < projects.length; i++){
        for(let j = 0; j < projects[i].length; j++){
            if(projects[i][j]._id == id){
                projects[i][j]._project = change;
            }
        }
    }
    localStorage.setItem('project', JSON.stringify(projects));
}

function editPriority(id, change){
    let projects = []
    if(localStorage.getItem('project')){    
        projects = JSON.parse(localStorage.getItem('project')); 
    }

    for(let i = 0; i < projects.length; i++){
        for(let j = 0; j < projects[i].length; j++){
            if(projects[i][j]._id == id){
                projects[i][j]._priority = change;
            }
        }
    }
    localStorage.setItem('project', JSON.stringify(projects));
}

function editDate(id, change){
    let projects = []
    if(localStorage.getItem('project')){    
        projects = JSON.parse(localStorage.getItem('project')); 
    }

    for(let i = 0; i < projects.length; i++){
        for(let j = 0; j < projects[i].length; j++){
            if(projects[i][j]._id == id){
                projects[i][j]._date = change;
            }
        }
    }
    localStorage.setItem('project', JSON.stringify(projects));
}

function editDone(id, change){
    let projects = []
    if(localStorage.getItem('project')){    
        projects = JSON.parse(localStorage.getItem('project')); 
    }

    for(let i = 0; i < projects.length; i++){
        for(let j = 0; j < projects[i].length; j++){
            if(projects[i][j]._id == id){
                projects[i][j]._done = change;
            }
        }
    }
    localStorage.setItem('project', JSON.stringify(projects));
}

function remove(id){
    let projects = []
    if(localStorage.getItem('project')){    
        projects = JSON.parse(localStorage.getItem('project')); 
    }

    for(let i = 0; i < projects.length; i++){
        for(let j = 0; j < projects[i].length; j++){
            if(projects[i][j]._id == id){
                projects[i].splice(j, 1);
            }
        }
    }

    for(let j = 0; j < projects.length; j++){
        if(projects[j].length == 0){
            projects.splice(j, 1);
        }
    }

    localStorage.setItem('project', JSON.stringify(projects));
}

export default createTask;