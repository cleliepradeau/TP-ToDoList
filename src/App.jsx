import { motion } from "motion/react";
import AirbnbLogo from "./components/AirbnbLogo";
import FilterTask from "./components/FilterTask";
import AddTask from "./components/AddTask";
import Task from "./components/Task";
import { useState } from "react";

const initialTasks = [
  { key: crypto.randomUUID(), name: "Faire les courses", completed: false },
  { key: crypto.randomUUID(), name: "Appeler le dentiste", completed: false },
  {
    key: crypto.randomUUID(),
    name: "Aller à la salle de sport",
    completed: true,
  },
  { key: crypto.randomUUID(), name: "Lire un livre", completed: false },
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState("all");

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "todo") return !task.completed;
    if (filter === "done") return task.completed;
  });

  return (
    <main>
      <header className="flex flex-row items-center gap-5 border-b border-gray-400 p-8">
        <AirbnbLogo className="h-10 w-10" />
        <p>Mes tâches</p>
      </header>

      <h1 className="px-40 pt-20 pb-10 text-3xl">Mes tâches</h1>

      <FilterTask filter={filter} setFilter={setFilter} />
      <AddTask setTasks={setTasks} />
      <Task tasks={filteredTasks} setTasks={setTasks} />
    </main>
  );
}

export default App;
