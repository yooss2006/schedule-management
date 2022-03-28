import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';
const TodoList = ({ todos }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => {
        return <TodoListItem todo={todo} key={todo.id} />;
      })}
    </div>
  );
};

export default TodoList;
