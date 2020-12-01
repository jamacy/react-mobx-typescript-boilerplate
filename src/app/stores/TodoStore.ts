import { TodoModel,ITodoItem } from '../models/TodoModel';
import { action, makeAutoObservable, observable } from 'mobx';


//import { useLocalStore } from 'mobx-react';
//export type TodoStore = ReturnType<typeof useTodoStore>;
// 1. 使用useLocalStore的方式
// export const useTodoStore = (defaultTodos: ITodoItem[] = []) => {
//   const store = useLocalStore(() => ({
//     todos: defaultTodos,
//     get activeTodos() {
//       return store.todos.filter((todo) => !todo.completed);
//     },
//     get completedTodos() {
//       return store.todos.filter((todo) => todo.completed);
//     },
//     addTodo(item: Partial<ITodoItem>): void {
//       store.todos.push(new TodoModel(item.text, item.completed));
//     },
//     editTodo(id: number, data: Partial<ITodoItem>): void {
//       store.todos = store.todos.map((todo) => {
//         if (todo.id === id) {
//           if (typeof data.completed == 'boolean') {
//             todo.completed = data.completed;
//           }
//           if (typeof data.text == 'string') {
//             todo.text = data.text;
//           }
//         }
//         return todo;
//       });
//     },
//     deleteTodo(id: number): void {
//       store.todos = store.todos.filter((todo) => todo.id !== id);
//     },
//     completeAll(): void {
//       store.todos = store.todos.map((todo) => ({ ...todo, completed: true }));
//     },
//     clearCompleted(): void {
//       store.todos = store.todos.filter((todo) => !todo.completed);
//     },
//   }));
//   return store;
// };




//2 使用类的方式

class TodoStore {
  @observable
  todos = []
  rootStore: any;
  constructor(rootStore){
    console.log("this",this);
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }
  get activeTodos() {
    return this.todos.filter((todo) => !todo.completed);
  }
  get completedTodos() {
    return this.todos.filter((todo) => todo.completed);
  }

  addTodo(item: ITodoItem): void {
    console.log("addTodo",this)
    this.todos.push(new TodoModel(item.text, item.completed));
  }

  editTodo(id: number, data: ITodoItem): void {
    this.todos = this.todos.map((todo) => {
      if (todo.id === id) {
        if (typeof data.completed == 'boolean') {
          todo.completed = data.completed;
        }
        if (typeof data.text == 'string') {
          todo.text = data.text;
        }
      }
      return todo;
    });
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  completeAll(): void {
    this.todos = this.todos.map((todo) => ({ ...todo, completed: true }));
  }

  clearCompleted(): void {
    this.todos = this.todos.filter((todo) => !todo.completed);
  }
}

// decorate(TodoStore, {
//   activeTodos: computed,
//   completedTodos: computed,
//   addTodo:action,
//   editTodo:action,
//   deleteTodo:action,
//   completeAll:action,
//   clearCompleted:action
// });


  
//3 使用普通对象的方式
// export type TodoStore = ReturnType<typeof useTodoStore>;
// export const useTodoStore = (defaultTodos: ITodoItem[] = []) => {
//   return {
//     todos: defaultTodos,
//     get activeTodos() {
//       return this.todos.filter((todo) => !todo.completed);
//     },
//     get completedTodos() {
//       return this.todos.filter((todo) => todo.completed);
//     },
//     addTodo(item: Partial<ITodoItem>): void {
//       this.todos.push(new TodoModel(item.text, item.completed));
//     },
//     editTodo(id: number, data: Partial<ITodoItem>): void {
//       this.todos = this.todos.map((todo) => {
//         if (todo.id === id) {
//           if (typeof data.completed == 'boolean') {
//             todo.completed = data.completed;
//           }
//           if (typeof data.text == 'string') {
//             todo.text = data.text;
//           }
//         }
//         return todo;
//       });
//     },
//     deleteTodo(id: number): void {
//       this.todos = this.todos.filter((todo) => todo.id !== id);
//     },
//     completeAll(): void {
//       this.todos = this.todos.map((todo) => ({ ...todo, completed: true }));
//     },
//     clearCompleted(): void {
//       this.todos = this.todos.filter((todo) => !todo.completed);
//     }
//   }
// };


//4 使用装饰器创建
// import { action, computed, observable } from 'mobx';

// class TodoStore {

//   @observable
//   todos: ITodoItem[] = []
//   constructor(public ts:ITodoItem[]){
//     this.todos = ts
//   }

//   @computed
//   get activeTodos() {
//     return this.todos.filter((todo) => !todo.completed);
//   }

//   @computed
//   get completedTodos() {
//     return this.todos.filter((todo) => todo.completed);
//   }

//   @action
//   addTodo(item: Partial<ITodoItem>): void {
//     console.log("addTodo",this)
//     this.todos.push(new TodoModel(item.text, item.completed));
//   }

//   @action
//   editTodo(id: number, data: Partial<ITodoItem>): void {
//     this.todos = this.todos.map((todo) => {
//       if (todo.id === id) {
//         if (typeof data.completed == 'boolean') {
//           todo.completed = data.completed;
//         }
//         if (typeof data.text == 'string') {
//           todo.text = data.text;
//         }
//       }
//       return todo;
//     });
//   }

//   @action
//   deleteTodo(id: number): void {
//     this.todos = this.todos.filter((todo) => todo.id !== id);
//   }

//   @action
//   completeAll(): void {
//     this.todos = this.todos.map((todo) => ({ ...todo, completed: true }));
//   }


//   @action
//   clearCompleted(): void {
//     this.todos = this.todos.filter((todo) => !todo.completed);
//   }

// }

export default TodoStore; 
