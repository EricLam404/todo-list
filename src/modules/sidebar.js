function createSidebar(){
    let sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');
    sidebar.textContent = "Sidebar";

    return sidebar;
}

export default createSidebar;