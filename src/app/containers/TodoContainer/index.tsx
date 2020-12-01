import * as React from 'react';
import * as style from './style.css';
import { observer } from 'mobx-react';
import { useLocation, useHistory } from 'react-router';


import { Header } from 'app/components/Header';
import { Footer } from 'app/components/Footer';
import { TodoList } from 'app/components/TodoList';

//
//import { TodoModel } from '../../models/TodoModel';
// import { TodoModel } from '../../models/TodoModel';
// import { useTodoStore } from 'app/stores/TodoStore';
// //

import { useStores } from '../../stores/Context';



import { TODO_FILTER_LOCATION_HASH, TodoFilter } from 'app/constants';

export const TodoContainer = observer(() => {
  //use store
  const { todoStore  } = useStores();
  console.log("todoStore",todoStore.addTodo)
  const history = useHistory();
  const location = useLocation();
  const [filter, setFilter] = React.useState(TodoFilter.ALL);

  // location change callback
  React.useEffect(() => {
    
    const nextFilter = Object.keys(TODO_FILTER_LOCATION_HASH)
      .map((key) => Number(key) as TodoFilter)
      .find((item) => TODO_FILTER_LOCATION_HASH[item] === location.hash);
    setFilter(nextFilter ?? TodoFilter.ALL);
   
    //console.log(Object.keys(TODO_FILTER_LOCATION_HASH))
  }, [location.hash, setFilter]);

 

  // filter change callback
  const handleFilterChange = React.useCallback(
    (nextFilter: TodoFilter) => {
      setFilter(nextFilter);
      const nextHash = TODO_FILTER_LOCATION_HASH[nextFilter];
      history.replace(nextHash);
    },
    [history, setFilter]
  );

  const itemsToDisplay =
    filter === TodoFilter.ALL
      ? todoStore.todos
      : filter === TodoFilter.ACTIVE
      ? todoStore.activeTodos
      : todoStore.completedTodos;

  return (
    <div className={style.normal}>
      <Header addTodo={todoStore.addTodo} />
      <TodoList
        todos={itemsToDisplay}
        completeAll={todoStore.completeAll}
        deleteTodo={todoStore.deleteTodo}
        editTodo={todoStore.editTodo}
      />
      <Footer
        filter={filter}
        activeCount={todoStore.activeTodos.length}
        completedCount={todoStore.completedTodos.length}
        onClearCompleted={todoStore.clearCompleted}
        onChangeFilter={handleFilterChange}
      />
    </div>
  );

});
