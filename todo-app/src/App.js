import React, { useState } from "react";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);

  // Add new todo item
  const addTodo = (item, date) => {
    if (item === "" || date === "") {
      alert("Please enter both task and date");
      return;
    }
    const newTodo = {
      id: Date.now(),
      item,
      date,
      completed: false,
      isEditing: false,
    };
    setTodos([...todos, newTodo]);
  };

  // Toggle completion status of a todo item
  const toggleCompletion = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete a todo item
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Start editing a todo item
  const startEditing = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: true } : todo
      )
    );
  };

  // Save the edited todo item
  const saveEdit = (id, newItem) => {
    if (newItem.trim() === "") {
      alert("Edited task cannot be empty!");
      return;
    }
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, item: newItem, isEditing: false } : todo
      )
    );
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleCompletion={toggleCompletion}
        deleteTodo={deleteTodo}
        startEditing={startEditing}
        saveEdit={saveEdit}
      />
    </div>
  );
};

export default App;
