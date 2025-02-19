import React from 'react';
import { Todo } from '../types/Todo';
import { TodoItem } from './TodoItem';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <section className="todoapp__main" data-cy="TodoList">
      {/* This todo is an active todo */}
      {todos && todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
    </section>
  );
};
