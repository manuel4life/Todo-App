import React, { useState } from "react";

const TodoItem = ({
  todo,
  toggleCompletion,
  deleteTodo,
  startEditing,
  saveEdit,
}) => {
  const [newItem, setNewItem] = useState(todo.item);

  const handleEditChange = (e) => setNewItem(e.target.value);
  const handleSaveEdit = () => saveEdit(todo.id, newItem);

  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      {todo.isEditing ? (
        <div className="edit-mode">
          <input
            type="text"
            value={newItem}
            onChange={handleEditChange}
            className="edit-input"
          />
          <button className="save-btn" onClick={handleSaveEdit}>
            Save
          </button>
        </div>
      ) : (
        <>
          <span className="todo-text" onClick={() => toggleCompletion(todo.id)}>
            {todo.item}
          </span>
          <span className="todo-date">
            {new Date(todo.date).toDateString()}
          </span>
          <button className="edit-btn" onClick={() => startEditing(todo.id)}>
            Edit
          </button>
          <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
            Delete
          </button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
