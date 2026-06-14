function ProductModal({ product, onClose, onAddToCart }) {
  if (!product) {
    return null;
  }

  const discount = Math.round((1 - product.price / product.oldPrice) * 100);

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 p-4" onClick={onClose}>
      <div className="glass-panel relative max-h-[90vh] w-full max-w-2xl overflow-hidden rounded-3xl bg-[#0b190c]" onClick={(event) => event.stopPropagation()}>
        <div className="relative">
          <img
            src={`https://picsum.photos/seed/${product.img}/700/400.jpg`}
            alt={product.name}
            className="h-56 w-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 rounded-full bg-black/50 px-3 py-2 text-white transition hover:bg-black/70"
          >
            ✕
          </button>
          {product.badge && (
            <span className={`absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-bold ${product.badgeType === 'sale' ? 'bg-red-600' : 'bg-emerald-600'}`}>
              {product.badge}
            </span>
          )}
        </div>
        <div className="p-8">
          <div className="mb-4 flex items-center gap-2 text-sm text-zinc-400">
            <span className="text-xl">{product.emoji}</span>
            <span className="uppercase tracking-widest">{product.category}</span>
          </div>
          <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
          <p className="text-zinc-400 leading-relaxed mb-6">{product.desc}</p>
          <div className="grid gap-4 sm:grid-cols-3 mb-6">
            <div className="rounded-2xl border border-green-900/20 bg-white/5 p-4 text-center">
              <p className="text-xs text-zinc-500">দাম</p>
              <p className="text-lg font-bold text-green-400">৳{product.price}</p>
            </div>
            <div className="rounded-2xl border border-green-900/20 bg-white/5 p-4 text-center">
              <p className="text-xs text-zinc-500">পুরনো দাম</p>
              <p className="text-lg font-bold text-zinc-500 line-through">৳{product.oldPrice}</p>
            </div>
            <div className="rounded-2xl border border-green-900/20 bg-white/5 p-4 text-center">
              <p className="text-xs text-zinc-500">সাশ্রয়</p>
              <p className="text-lg font-bold text-green-400">{discount}%</p>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <button
              onClick={() => onAddToCart(product)}
              className="rounded-2xl bg-green-600 px-6 py-4 text-white transition hover:bg-green-500"
            >
              🛒 কার্টে যোগ করুন
            </button>
            <button
              onClick={() => {
                onAddToCart(product);
                onClose();
              }}
              className="rounded-2xl border border-green-600/50 px-6 py-4 text-green-300 transition hover:bg-green-600/10"
            >
              ⚡ এখনই কিনুন
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
