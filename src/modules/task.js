import deleteIcon from './imgs/delete.svg';

function createTask(name, level, date){
    let task_bar = document.createElement("li");
    task_bar.classList.add("bar");

    task_bar.append(checkbox(), task_name(name), priority(level), due_date(date), delete_button());
    return task_bar;
}

function checkbox(){
    let box = document.createElement("input");
    box.setAttribute("type", "checkbox");

    return box;
}

function task_name(name){
    let task_name = document.createElement("input");
    task_name.setAttribute("type", "text");
    task_name.classList.add('name');

    task_name.value = name;

    return task_name;
}

function priority(level = "low"){
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
            let priority = "priority-" + e.target.textContent;

            button.classList.remove(button.classList[1])
            button.classList.add(priority);
            
            button.textContent = e.target.textContent;

            button.appendChild(dropdown());
        });
    }
}

function due_date(date){
    let due_date = document.createElement('input');
    due_date.setAttribute("type", "date");
    due_date.value = date;

    /*
    due_date.addEventListener('change', () => {
        console.log(due_date.value);
    });
    */

    return due_date;
}

function delete_button(){
    let delete_button = document.createElement("img");

    delete_button.classList.add("delete");
    delete_button.src = deleteIcon;

    delete_button.addEventListener('click', (e) => {
        let container = document.querySelector('.task-container');
        
        container.removeChild(e.target.parentNode)
    });

    return delete_button;
}

export default createTask;