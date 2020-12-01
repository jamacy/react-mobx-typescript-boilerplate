export interface ITodoItem {
  id: number;
  text: string;
  completed: boolean;
  generateId: ()=>number; 
}


export class TodoModel{
  id: number;
  text: string;
  completed: boolean;
  private static nextId :number = 1;

  constructor(text: string, completed: boolean = false) {
    this.id = this.generateId();
    this.text = text;
    this.completed = completed;
  }
  generateId() {
    return TodoModel.nextId++;
  }
}

export default TodoModel;
