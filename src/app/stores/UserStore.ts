import { ITodoItem } from '../models/TodoModel';
import {  observable, makeAutoObservable } from 'mobx';

class TodoStore {
    todos:ITodoItem[] = [];
    rootStore: any;
    constructor(rootStore){
        makeAutoObservable(this);
        this.rootStore = rootStore;
    }
}


export default TodoStore; 
