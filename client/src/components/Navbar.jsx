import { useState } from 'react';

function Navbar({ categories, activeCategory, onFilter, cartCount, onOpenCart }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-green-900/20 bg-[#050a06]/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <a href="#home" className="flex items-center gap-3">
          <img
            src="https://z-cdn-media.chatglm.cn/files/de4e94e4-fc0f-4a1c-8ed5-793b56d2cbfa.jpg?auth_key=1881015813-e21d3bc0688e415d8e79d0a4ff7a0e7c-0-95be56ebbe46db09a4672ca85377542d"
            alt="OrganoKrishi Logo"
            className="h-10 w-10 rounded-full object-cover border border-green-700/30"
          />
          <div className="leading-tight">
            <p className="text-base font-bold tracking-tight">Organo<span className="text-green-400">Krishi</span></p>
            <p className="text-[9px] text-green-500/80 uppercase tracking-wider">Purity from Root to Table</p>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-xs uppercase tracking-widest text-zinc-400 hover:text-green-400 transition">হোম</a>
          <a href="#products" className="text-xs uppercase tracking-widest text-zinc-400 hover:text-green-400 transition">পণ্য</a>
          <a href="#why-us" className="text-xs uppercase tracking-widest text-zinc-400 hover:text-green-400 transition">কেন আমরা</a>
          <a href="#offers" className="text-xs uppercase tracking-widest text-zinc-400 hover:text-green-400 transition">অফার</a>
        </div>

        <div className="flex items-center gap-4">
          <button onClick={onOpenCart} className="relative p-2 text-zinc-400 hover:text-green-400 transition">
            <span className="text-xl">🛒</span>
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-600 text-[10px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </button>
          <button
            className="md:hidden p-2 text-zinc-400 hover:text-green-400 transition"
            onClick={() => setMobileOpen((current) => !current)}
          >
            <span className="text-xl">☰</span>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-green-900/20 bg-[#081208]/95 px-6 py-4">
          <div className="space-y-3">
            {['#home', '#products', '#why-us', '#offers'].map((href, index) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="block text-sm text-zinc-300 hover:text-green-400 transition"
              >
                {['🏠 হোম', '🛒 পণ্য', '✨ কেন আমরা', '🔥 অফার'][index]}
              </a>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {categories.slice(1).map((category) => (
              <button
                key={category}
                onClick={() => {
                  onFilter(category);
                  setMobileOpen(false);
                }}
                className={`rounded-full border px-3 py-2 text-xs transition ${activeCategory === category ? 'border-green-500 bg-green-600/15 text-green-300' : 'border-zinc-700 text-zinc-300 hover:border-green-500 hover:text-green-300'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
