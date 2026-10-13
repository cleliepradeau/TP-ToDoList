export default function FilterTask({ filter, setFilter }) {
  const filters = [
    { label: "Toutes", value: "all" },
    { label: "À faire", value: "todo" },
    { label: "Terminées", value: "done" },
  ];

  return (
    <nav className="flex flex-wrap gap-2 px-40 pb-6">
      {filters.map((item) => (
        <button
          key={item.value}
          onClick={() => setFilter(item.value)}
          className={`rounded-lg border px-4 py-2 font-light transition ${
            filter === item.value
              ? "border-[#ff385c] bg-[#ff385c] text-white"
              : "border-gray-300 hover:border-[#ff385c]"
          }`}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}
