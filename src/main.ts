import "./style.css";
import FullList from "./model/FullList";
import ListItem from "./model/ListItem";
import ListTemplate from "./templates/ListTemplate";

const initApp = (): void => {
  const fullList = FullList.instance;
  const template = ListTemplate.instance;

  const addDemo = () => {
    fullList.addItem(new ListItem("1", "Clean the sink", "demo", "medium", "2022-09-28"));
    fullList.addItem(new ListItem("2", "Wash the laundry", "demo", "medium", "2022-09-25"));
    fullList.addItem(new ListItem("3", "Fix shower head", "demo", "high", "2022-10-01"));
    fullList.addItem(new ListItem("4", "Learn react", "demo", "high", "2022-10-05"));
  }

  const renderProjectList = () => {
    const projects = document.getElementById("projectList") as HTMLUListElement;
    projects.innerHTML = '';
    const uniqueProjects = fullList.list
    .filter((item, index, array) => 
      array.findIndex(obj => obj.project === item.project) === index
    )
    .map(item => item.project);

    uniqueProjects.forEach(project => {
      const li = document.createElement("li") as HTMLLIElement;
      li.textContent = project;
      li.addEventListener('click', (): void => {
        template.render(fullList, project);
      })
      li.classList.add("cursor-pointer", "mb-4", "hover:bg-blue-200");
      projects.append(li);
    });
  }

  const home = document.getElementById("home") as HTMLDivElement;
  home.addEventListener('click', (): void => {
    template.render(fullList, '');
  })

  const itemEntryForm = document.getElementById("itemEntryForm") as HTMLFormElement;
  itemEntryForm.addEventListener("submit", (event: SubmitEvent) : void => {
    event.preventDefault();

    let formData: FormData = new FormData(event.target as HTMLFormElement);
    let formProps: { [key: string]: string } = Object.fromEntries(formData) as { [key: string]: string };

    const newEntryText: string = formProps.newItem.trimEnd();
    if(!newEntryText.length) return

    const newEntryProject: string = formProps.projectName.trimEnd();
    if(!newEntryProject.length) return

    const newEntryPriority: string = formProps.priorityLevel;
    const newEntryDueDate: string = formProps.dueDate;

    const itemId: number = fullList.list.length ? parseInt(fullList.list[fullList.list.length - 1].id + 1) : 1;

    const newItem = new ListItem(itemId.toString(), newEntryText, newEntryProject, newEntryPriority, newEntryDueDate)

    fullList.addItem(newItem);
    template.render(fullList, '');
    renderProjectList();

    let form: HTMLFormElement = document.getElementById('itemEntryForm') as HTMLFormElement;
    form.reset();
  })

  const clearItems = document.getElementById("clearItemsButton") as HTMLButtonElement;

  clearItems.addEventListener('click', (): void => {
    fullList.clearList();
    template.clear();
    renderProjectList();
  })

  fullList.load();
  if(!localStorage.getItem("visited")){
    localStorage.setItem("visited", "true");
    addDemo();
  }
  template.render(fullList, '');
  renderProjectList();

}

document.addEventListener('DOMContentLoaded', initApp);