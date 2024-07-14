// src/ToDoList.js
import React, { useState, useEffect } from 'react';
import ToDo from './ToDo';
import './ToDoList.css';

const ToDoList = () => {
    const [todos, setTodos] = useState([]);
    const [todoText, setTodoText] = useState('');

    useEffect(() => {
        const storedTodos = localStorage.getItem('todos');
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (text) => {
        const newTodo = {
            id: Date.now(),
            text: text,
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };

    const toggleComplete = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const clearTodos = () => {
        setTodos([]);
    };

    const editTodo = (id, newText) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, text: newText } : todo
            )
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todoText.trim() === '') return;
        addTodo(todoText);
        setTodoText('');
    };

    return (
        <div className="todo-container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={todoText}
                    onChange={(e) => setTodoText(e.target.value)}
                />
                <button type="submit" disabled={!todoText.trim()}>Add To-do</button>
            </form>
            <button onClick={clearTodos}>Clear All</button>
            {todos.map((todo) => (
                <ToDo
                    key={todo.id}
                    todo={todo}
                    toggleComplete={toggleComplete}
                    deleteTodo={deleteTodo}
                    editTodo={editTodo}
                />
            ))}
        </div>
    );
};

export default ToDoList;
