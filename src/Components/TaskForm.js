// TaskForm.js
import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState({ title: '', description: '', dueDate: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.title && task.description && task.dueDate) {
      addTask(task);
      setTask({ title: '', description: '', dueDate: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Title" value={task.title} onChange={handleChange} />
      <input type="text" name="description" placeholder="Description" value={task.description} onChange={handleChange} />
      <input type="date" name="dueDate" value={task.dueDate} onChange={handleChange} />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
