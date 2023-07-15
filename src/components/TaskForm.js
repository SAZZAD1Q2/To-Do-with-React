import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleChange = (event) => {
    setTask(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (task.trim() !== '') {
      addTask(task);
      setTask('');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={task} onChange={handleChange} placeholder="Enter a task" />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
