import React, { useState } from 'react';
import TasksList from './TaskList';


function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addTask = (pressedKey) => {
        if (pressedKey === 'Enter' && newTask.trim()) {
            const newTaskItem = {
                id: Date.now(),
                content: newTask.trim(),
            };
            setTasks(prevTasks => [...prevTasks, newTaskItem]);
            setNewTask('');
        }
    };

    const deleteTask = (taskIdToDelete) => {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== taskIdToDelete));
    };

    return (
        <div className="container">
            <h1>Lista de Quehaceres</h1>
            
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                onKeyDown={(e) => addTask(e.key)}
                placeholder="Escribe una tarea y presiona Enter"
            />
            
            {tasks.length === 0 ? (
                <p className="empty-message">No hay tareas, añadir tareas</p>
            ) : (
                <TasksList tasks={tasks} onDelete={deleteTask} />
            )}
        </div>
    );
}

export default TodoList;