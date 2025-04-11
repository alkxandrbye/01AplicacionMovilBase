import { useState } from 'react';
import { TaskInterface } from '../interfaces/TaskInterface';

export const useTaskList = () => {
  const [tasks, setTasks] = useState<TaskInterface[]>([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() === '') return;

    const task: TaskInterface = {
      id: Date.now(),
      task: newTask,
      status: false,
    };

    setTasks([...tasks, task]);
    setNewTask('');
  };

  return {
    tasks,
    newTask,
    setNewTask,
    addTask,
  };
};
