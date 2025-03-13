const TasksList = ({ tasks, onDelete }) => (
    <ul className="tasks-container">
      {tasks.map((task) => (
        <li key={task.id} className="task-item">
          <span className="task-content">{task.content}</span>
          <button 
            className="delete-button" 
            onClick={() => onDelete(task.id)}
            aria-label="Eliminar tarea"
          >
            ×
          </button>
        </li>
      ))}
    </ul>
  );
  
  export default TasksList;