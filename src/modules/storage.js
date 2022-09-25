function saveTask(task){
    let tasks = [];
    if(localStorage.getItem('tasks')){    
        tasks = JSON.parse(localStorage.getItem('tasks')) 
    }

    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks))
}


export default saveTask;