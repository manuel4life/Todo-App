import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({
  todos,
  toggleCompletion,
  deleteTodo,
  startEditing,
  saveEdit,
}) => {
  return (
    <div className="todo-list-container">
      <h2>Your Todos!</h2>
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleCompletion={toggleCompletion}
            deleteTodo={deleteTodo}
            startEditing={startEditing}
            saveEdit={saveEdit}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
