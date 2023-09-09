// App.js
import React, { useState } from 'react';
import './App.css';
import TaskList from './Components/TaskList';
import TaskForm from './Components/TaskForm';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all'); // 'all', 'completed', or 'pending'

  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: tasks.length + 1, completed: false }]);
  };

  const toggleTaskStatus = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const filteredTasks = filter === 'completed' ? tasks.filter((task) => task.completed) : filter === 'pending' ? tasks.filter((task) => !task.completed) : tasks;

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('pending')}>Pending</button>
      </div>
      <TaskList tasks={filteredTasks} toggleTaskStatus={toggleTaskStatus} />
    </div>
  );
}

export default App;
