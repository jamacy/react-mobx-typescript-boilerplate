import * as React from 'react';
import { TodoTextInput } from 'app/components/TodoTextInput';
import { ITodoItem } from 'app/models/TodoModel';

export interface IProps {
  addTodo: (todo: Partial<ITodoItem>) => any;
}


export function Header({ addTodo }: IProps){
    function handleSave(text: string){
      if (text.length) {
          addTodo({ text });
      }
    };
  return (
    <header>
      <h1>Todos</h1>
      <TodoTextInput
        newTodo
        onSave={handleSave}
        placeholder="What needs to be done?"
      />
    </header>
  );

}

