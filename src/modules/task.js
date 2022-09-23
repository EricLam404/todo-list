function createTask(){
    let task_bar = document.createElement("div");
    task_bar.classList.add("bar");

    task_bar.append(task_name("Eat"), priority(), due_date("2022-07-22"), delete_button(), checkbox());
    return task_bar;
}
function checkbox(){
    let box = document.createElement("input");
    box.setAttribute("type", "checkbox");

    return box;
}

function task_name(name){
    let task_name = document.createElement("div");
    task_name.classList.add('name');
    task_name.textContent = name;

    return task_name;
}

function priority(level = "low"){
    let button = document.createElement("button");

    button.classList.add("dropbtn");
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

    return dropdown_box;
}

function add_dropdown_click(button){
    button.addEventListener('click', () => {
        console.log("clicked")
        let dropdown_box = document.querySelector('.dropdown-content');

        dropdown_box.classList.toggle("show");
    });
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
    let delete_button = document.createElement("button");

    delete_button.classList.add("delete");
    delete_button.textContent = "delete";

    return delete_button;
}
export default createTask;