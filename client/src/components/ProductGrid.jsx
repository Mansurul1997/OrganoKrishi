function ProductGrid({ products, onOpenModal, onAddToCart }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {products.length === 0 ? (
        <div className="col-span-full rounded-3xl border border-green-900/20 bg-white/5 p-12 text-center text-zinc-400">
          কোনো পণ্য পাওয়া যাইনি। ভিন্ন ক্যাটেগরি নির্বাচন করে দেখুন।
        </div>
      ) : (
        products.map((product) => (
          <div
            key={product.id}
            className="product-card group rounded-3xl border border-green-900/20 bg-white/5 overflow-hidden transition hover:border-green-600/30 hover:shadow-glow"
          >
            <div className="relative overflow-hidden">
              <img
                src={`https://picsum.photos/seed/${product.img}/400/280.jpg`}
                alt={product.name}
                className="product-img h-52 w-full object-cover transition duration-500 hover:scale-105"
              />
              {product.badge && (
                <span className={`absolute top-3 left-3 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${product.badgeType === 'sale' ? 'bg-red-600' : 'bg-emerald-600'}`}>
                  {product.badge}
                </span>
              )}
              <button
                onClick={() => onOpenModal(product)}
                className="absolute top-3 right-3 rounded-full bg-black/50 px-3 py-2 text-white opacity-0 transition hover:bg-black/70 group-hover:opacity-100"
              >
                দেখুন
              </button>
            </div>
            <div className="p-6">
              <div className="mb-2 flex items-center gap-2 text-sm text-zinc-400">
                <span>{product.emoji}</span>
                <span className="uppercase tracking-widest">{product.category}</span>
              </div>
              <h3 className="mb-3 text-base font-medium text-white">{product.name}</h3>
              <div className="flex items-center justify-between gap-3">
                <div>
                  <span className="text-xl font-bold text-green-400">৳{product.price}</span>
                  <span className="ml-2 text-sm text-zinc-500 line-through">৳{product.oldPrice}</span>
                </div>
                <button
                  onClick={() => onAddToCart(product)}
                  className="rounded-2xl bg-green-600 px-3 py-3 text-green-100 transition hover:bg-green-500"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default ProductGrid;
