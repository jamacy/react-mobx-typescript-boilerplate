import { ITodoItem } from '../models/TodoModel';
import {  observable, makeAutoObservable } from 'mobx';

class UserStore {
    todos:ITodoItem[] = [];
    constructor(){
        makeAutoObservable(this);
    }
}


export default new UserStore(); 
