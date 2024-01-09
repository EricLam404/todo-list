import FullList from "./FullList";
import ListItem from "./ListItem";

interface Project {
    projects: FullList[],
    load(): void,
    save(): void,
    clearProjects(): void,
    addProject(listObj: FullList): void,
    removeProject(id: string): void,
}

export default class ProjectList implements Project {

    static instance: ProjectList = new ProjectList()

    private constructor( private _projects: FullList[] = [] ) {}
    
    get projects(): FullList[] {
        return this._projects;
    }

    load(): void {
        const storedProjects: string | null = localStorage.getItem("projects");
        if(typeof storedProjects != "string") return

        const parsedProjects: {
            _id: string,
            _list: ListItem[]
        }[] = JSON.parse(storedProjects);

        parsedProjects.forEach(listObj => {
            const newFullList = new FullList(listObj._id, listObj._list);
            ProjectList.instance.addProject(newFullList);
        });
    }

    save(): void {
        localStorage.setItem("list", JSON.stringify(this._projects));
    }

    clearProjects(): void {
        this._projects = [];
        this.save();
    }

    addProject(listObj: FullList): void {
        this._projects.push(listObj);
        this.save();
    }

    removeProject(id: string): void {
        this._projects = this._projects.filter(item => item.id !== id);
        this.save();
    }
    
}