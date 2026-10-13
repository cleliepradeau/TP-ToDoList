import { useState } from "react";

export default function EditTask({ task, setTasks, onCancel }) {
  const [editedName, setEditedName] = useState(task.name);

  const saveTask = () => {
    if (editedName.trim() === "") return;

    setTasks((prev) =>
      prev.map((item) =>
        item.key === task.key ? { ...item, name: editedName.trim() } : item,
      ),
    );

    onCancel();
  };

  return (
    <div className="flex flex-1 items-center gap-2">
      <input
        type="text"
        value={editedName}
        onChange={(event) => setEditedName(event.target.value)}
        className="focus:border-pink flex-1 rounded-lg border border-gray-300 px-4 py-2 outline-none"
        autoFocus
      />

      <button
        onClick={saveTask}
        className="rounded-lg bg-[#ff385c] px-4 py-2 font-light text-white"
      >
        Enregistrer
      </button>

      <button
        onClick={onCancel}
        className="rounded-lg border border-gray-300 px-4 py-2 font-light"
      >
        Annuler
      </button>
    </div>
  );
}
