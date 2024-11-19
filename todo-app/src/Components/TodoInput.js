import React, { useState } from "react";

const TodoInput = ({ addTodo }) => {
  const [item, setItem] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(item, date);
    setItem("");
    setDate("");
  };

  return (
    <div className="todo-input-container">
      <input
        type="text"
        placeholder="Enter task"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={handleSubmit}>Add Task</button>
    </div>
  );
};

export default TodoInput;
