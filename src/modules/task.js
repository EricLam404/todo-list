class Task{
    constructor(name, priority, date, project, id, done) {
        this._name = name;
        this._priority = priority;
        this._date = date;
        this._project = project;
        this._id = id;
        this._done = done;
    }

    set name(newName){
        this._name = newName;
    }

    set priority(newPriority){
        this._priority = newPriority;
    }

    set date(newDate){
        this._date = newDate;
    }

    set project(newProject){
        this._project = newProject;
    }

    set id(id){
        this._id = id;
    }

    set done(done){
        this._done = done;
    }

    get name(){
        return this._name;
    }

    get priority(){
        return this._priority;
    }

    get date(){
        return this._date;
    }

    get project(){
        return this._project;
    }

    get id(){
        return this._id;
    }

    get done(){
        return this._done;
    }
}

export default Task;