
import TodoStore  from './TodoStore'
import UserStore  from './UserStore'

class RootStore {
  todoStore: TodoStore;
  userStore: UserStore;
  constructor() {
    this.todoStore = new TodoStore(this);
    this.userStore = new UserStore(this);
  }
}

export default new RootStore();



