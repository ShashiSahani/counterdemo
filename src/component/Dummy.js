import React, { useState } from 'react';
import "./dummy.css"
const Dummy = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Task 1' },
    { id: 2, text: 'Task 2' },
    { id: 3, text: 'Task 3' },
  ]);

  const handleDelete = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="task-list-container">
    <h2 className="center">Tasks List</h2>
    <ul className="task-list">
      {tasks.map(task => (
        <li key={task.id} className="task-item">
          {task.text}
          <button className="delete-button" onClick={() => handleDelete(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  </div>
  );
};

export default Dummy;
