import React, { useState } from 'react';

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [newTaskText, setNewTaskText] = useState('');

    const AddTask = (pressedKey) => {
        if (pressedKey === 'Enter' && newTaskText.trim()) {
            const newTask = {
                id: Date.now(),
                content: newTaskText.trim(),
            };
            setTasks(prevTasks => [...prevTasks, newTask]);
            setNewTaskText('');
        }
    };

    const DeleteTask = (taskIdToDelete) => {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== taskIdToDelete));
    };

    return (
        <div className="container">
            <h1>Lista de Quehaceres</h1>
            
            <input
                type="text"
                value={newTaskText}
                onChange={(e) => setNewTaskText(e.target.value)}
                onKeyDown={(e) => AddTask(e.key)}
                placeholder="Escribe una tarea y presiona Enter"
            />
            
            {tasks.length === 0 ? (
                <p className="empty-message">No hay tareas, añadir tareas</p>
            ) : (
                <ul className="tasks-container">
                    {tasks.map((task) => (
                        <li key={task.id} className="task-item">
                            <span className="task-content">{task.content}</span>
                            <button 
                                className="delete-button"
                                onClick={() => DeleteTask(task.id)}
                                aria-label="Eliminar tarea"
                            >
                                ×
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default TodoList;