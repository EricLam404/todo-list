function saveTask(task){
    let project = task._project;
    let projects = [];
    let tasks = [];
    let found = false

    if(localStorage.getItem('project')){    
        projects = JSON.parse(localStorage.getItem('project'));
    }

    for(let i = 0; i < projects.length; i++){
        if(projects[i][0]._project === project){
            projects[i].push(task);
            found = true;
        }
    }
    if(!found){
        tasks.push(task);
        projects.push(tasks);
    }
    localStorage.setItem('project', JSON.stringify(projects));
}


export default saveTask;