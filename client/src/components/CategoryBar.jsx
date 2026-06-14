function CategoryBar({ categories, activeCategory, onFilter }) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onFilter(category)}
          className={`rounded-lg border px-4 py-2 text-sm font-medium transition ${
            activeCategory === category
              ? 'border-green-500 bg-green-600 text-white'
              : 'border-zinc-700 text-zinc-400 hover:border-green-600/50 hover:text-green-300'
          }`}
        >
          {category === 'all' ? 'সব পণ্য' : category}
        </button>
      ))}
    </div>
  );
}

export default CategoryBar;
