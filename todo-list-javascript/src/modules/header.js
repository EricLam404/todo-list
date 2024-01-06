function createHeader(){
    let header = document.createElement('div');
    let title = document.createElement('div');

    header.classList.add('header');
    title.textContent = "To-Do List";
    title.classList.add('title');

    header.append(title);

    return header;
}

export default createHeader;