import FullList from "../model/FullList";

interface DOMList {
    ul: HTMLUListElement,
    clear(): void,
    render(fullList: FullList, project: string): void
}

export default class ListTemplate implements DOMList {
    
    ul: HTMLUListElement

    static instance: ListTemplate = new ListTemplate();

    private constructor(){
        this.ul = document.getElementById("listItems") as HTMLUListElement;
    }

    clear(): void {
        this.ul.innerHTML = '';
    }

    render(fullList: FullList, project: string){
        this.clear();
        let list = fullList.list;
        if(project) list = fullList.list.filter(task => task.project === project);

        list.forEach(item => {
            const li = document.createElement("li") as HTMLLIElement;
            li.className = "w-full p-4 border-2 border-blue-200 flex gap-2 items-center justify-center rounded-md flex-col md:flex-row md:g-6";
            
            const check = document.createElement('input') as HTMLInputElement;
            check.type = "checkbox";
            check.id = item.id;
            check.checked = item.checked;
            li.append(check)

            check.addEventListener('change', () => {
                item.checked = !item.checked;
                if(item.checked)  name.classList.add("line-through");
                else name.classList.remove("line-through");
                fullList.save();
            })

            const name = document.createElement("label") as HTMLLabelElement;
            name.htmlFor = item.id;
            name.textContent = item.item;
            name.classList.add('flex-auto');
            if(item.checked)  name.classList.add("line-through");
            li.append(name);

            const projectName = document.createElement("label") as HTMLLabelElement;
            projectName.htmlFor = item.id;
            projectName.textContent = item.project;
            projectName.classList.add('flex-auto')
            li.append(projectName);

            const priority = document.createElement("label") as HTMLLabelElement;
            priority.htmlFor = item.id;
            priority.textContent = item.priority;
            li.append(priority);

            const button = document.createElement("button") as HTMLButtonElement;
            button.className = 'button';
            button.textContent = 'X';
            button.classList.add("border-2", "rounded-full", "px-2", "py-1", "hover:bg-blue-100");
            li.append(button);

            button.addEventListener('click', () => {
                fullList.removeItem(item.id);
                this.render(fullList, '');
            })

            this.ul.append(li);
        })
    }
}