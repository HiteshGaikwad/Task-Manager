// TaskList.js
import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, toggleTaskStatus }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} toggleTaskStatus={toggleTaskStatus} />
      ))}
    </div>
  );
};

export default TaskList;
