import React from 'react';
import { useTaskList } from '../hooks/useTaskList';

export const TaskList = () => {
  const { tasks, newTask, setNewTask, addTask } = useTaskList();

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Lista de Tareas</h2>
      <div className="flex mb-4 space-x-2">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 w-full"
          placeholder="Nueva tarea"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Añadir
        </button>
      </div>

      <ul className="space-y-2">
        {tasks.map((task) => (
          <li key={task.id} className="flex justify-between items-center border-b py-2">
            <span>{task.task}</span>
            <span className={task.status ? 'text-green-500' : 'text-red-500'}>
              {task.status ? 'Completada' : 'Pendiente'}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
