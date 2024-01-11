import ListItem from "./ListItem";

export interface List {
    id: String,
    list: ListItem[],
    load(): void,
    save(): void,
    clearList(): void,
    addItem(itemObj: ListItem): void,
    removeItem(id: string): void,
}

export default class FullList implements List {

    static instance: FullList = new FullList()

    constructor( 
        private _id = "",
        private _list: ListItem[] = []
    ) {}
    
    get id(): string {
        return this._id
    }

    set id(id: string) {
        this._id = id
    }

    get list(): ListItem[] {
        return this._list;
    }

    set list(list: ListItem[]){
        this._list = list;
    }

    load(): void {
        const storedList: string | null = localStorage.getItem("list");
        if(typeof storedList != "string") return

        const parsedList: { _id: string, _item: string, _project: string, _priority: string, _dueDate: string, _checked: boolean}[] = JSON.parse(storedList);

        parsedList.forEach(itemObj => {
            const newListItem = new ListItem(itemObj._id, itemObj._item, itemObj._project, itemObj._priority, itemObj._dueDate, itemObj._checked);
            FullList.instance.addItem(newListItem);
        })
    }

    save(): void {
        localStorage.setItem("list", JSON.stringify(this._list));
    }

    clearList(): void {
        this._list = [];
        this.save();
    }

    addItem(itemObj: ListItem): void {
        this._list.push(itemObj);
        this.save();
    }

    removeItem(id: string): void {
        this._list = this._list.filter(item => item.id !== id);
        this.save();
    }
    
}