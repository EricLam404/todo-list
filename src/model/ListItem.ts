export interface Item {
    id: string,
    item: string,
    project: string,
    priority: string,
    dueDate: string,
    checked: boolean,
}

export default class ListItem implements Item {
    constructor(
        private _id: string = '',
        private _item: string = '',
        private _project: string = '',
        private _priority: string = 'low',
        private _dueDate: string = '',
        private _checked: boolean = false
    ) {}
    
    get id(): string {
        return this._id
    }

    set id(id: string) {
        this._id = id
    }
    
    get item(): string {
        return this._item
    }

    set item(_item: string) {
        this._item = _item
    }

    get project(): string {
        return this._project
    }

    set project(_project: string) {
        this._project = _project
    }

    get checked(): boolean {
        return this._checked
    }

    set checked(_checked: boolean) {
        this._checked = _checked
    }


    get priority(): string {
        return this._priority
    }

    set priority(_priority: string) {
        this._priority = _priority
    }

    get dueDate(): string {
        return this._dueDate
    }

    set dueDate(_dueDate: string) {
        this._dueDate = _dueDate
    }
}