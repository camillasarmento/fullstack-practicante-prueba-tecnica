// src/ToDo.js
import React, { useState } from 'react';
import './ToDoList.css';

const ToDo = ({ todo, toggleComplete, deleteTodo, editTodo }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(todo.text);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        editTodo(todo.id, newText);
        setIsEditing(false);
    };

    return (
        <div className="todo-item">
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={newText}
                        onChange={(e) => setNewText(e.target.value)}
                    />
                    <button onClick={handleSave} className="save-button">Save</button>
                </>
            ) : (
                <>
                    <p
                        className={todo.completed ? 'completed' : ''}
                        onClick={() => toggleComplete(todo.id)}
                    >
                        {todo.text}
                    </p>
                    {todo.completed && (
                        <button onClick={() => toggleComplete(todo.id)} className="undo-button">Undo</button>
                    )}
                    <button onClick={handleEdit} className="edit-button">Edit</button>
                    <button onClick={() => deleteTodo(todo.id)} className="delete-button">Delete</button>
                </>
            )}
        </div>
    );
};

export default ToDo;
