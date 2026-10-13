import { useState } from "react";

export default function AddTask({ setTasks }) {
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    const task = {
      key: crypto.randomUUID(),
      name: newTask,
      completed: false,
    };

    setTasks((currentTasks) => [...currentTasks, task]);

    setNewTask("");
  };
  return (
    <div className="mx-40 mb-3 rounded-xl border border-gray-300 p-7">
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Ajouter une tâche"
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
          className="focus:border-pink flex-1 rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-0"
        />

        <button
          onClick={addTask}
          className="bg-pink rounded-lg px-10 py-3 font-semibold text-white"
        >
          Ajouter
        </button>
      </div>
    </div>
  );
}
