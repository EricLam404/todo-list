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

    return projects;
}
export default createSidebar;