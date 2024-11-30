import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, removeTask, toggleTask } from '../redux/reducers/todoSlice';


const TodoList = () => {
  const [taskText, setTaskText] = useState('');
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todo.tasks);

  const handleAddTask = () => {
    if (taskText.trim()) {
      dispatch(addTask(taskText));
      setTaskText('');
    }
  };

  const handleRemoveTask = (id) => {
    dispatch(removeTask(id));
  };

  const handleToggleTask = (id) => {
    dispatch(toggleTask(id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            <span onClick={() => handleToggleTask(task.id)}>{task.text}</span>
            <button onClick={() => handleRemoveTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;