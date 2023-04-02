import React from "react";
import ToDo from "./ToDo";
function TodoList({ todos, toggleTodo }) {
  return todos.map((todo) => {
    return <ToDo key={todo.id} toggleTodo={toggleTodo} todo={todo} />;
  });
}

export default TodoList;
