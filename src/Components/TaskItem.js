// TaskItem.js
import React from 'react';

const TaskItem = ({ task, toggleTaskStatus }) => {
  const { title, description, dueDate, completed } = task;

  const toggleStatus = () => {
    toggleTaskStatus(task.id);
  };

  return (
    <div className={`task-item ${completed ? 'completed' : ''}`} onClick={toggleStatus}>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Due Date: {dueDate}</p>
    </div>
  );
};

export default TaskItem;
