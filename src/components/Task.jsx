import { useState } from "react";
import EditTask from "./EditTask";

export default function Task({ tasks, setTasks }) {
  const [editingKey, setEditingKey] = useState(null);

  const deleteTask = (key) => {
    // TODO : garde tous les users SAUF celui qui a cet id (.filter)
    setTasks((prev) => prev.filter((task) => task.key !== key));
  };

  const toggleTask = (key) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.key === key ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  return (
    <div className="px-40">
      {tasks.length === 0 ? (
        <p className="rounded-xl border border-gray-300 px-6 py-40 text-center font-semibold">
          Aucune tâche pour le moment.
        </p>
      ) : (
        <ul className="space-y-3">
          {tasks.map((task) => (
            <li
              key={task.key}
              className="flex items-center justify-between rounded-xl border border-gray-300 px-6 py-7 font-semibold"
            >
              {editingKey === task.key ? (
                <EditTask
                  task={task}
                  setTasks={setTasks}
                  onCancel={() => setEditingKey(null)}
                />
              ) : (
                <>
                  <div className="flex flex-1 items-center gap-3">
                    <input
                      type="checkbox"
                      checked={!!task.completed}
                      onChange={() => toggleTask(task.key)}
                      className="h-4 w-4 accent-[#ff385c]"
                    />

                    <p
                      className={
                        task.completed
                          ? "flex-1 text-gray-400 line-through"
                          : "flex-1"
                      }
                    >
                      {task.name}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => setEditingKey(task.key)}
                      className="rounded-lg border border-gray-300 px-4 py-2 font-light"
                    >
                      Modifier
                    </button>

                    <button
                      className="bg-light-pink rounded-lg px-4 py-2 font-light"
                      onClick={() => deleteTask(task.key)}
                    >
                      Supprimer
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
