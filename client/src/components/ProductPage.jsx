import React from 'react';

function ProductPage({ product, onAddToCart, onBack }) {
  if (!product) return null;

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <button onClick={onBack} className="mb-6 text-sm text-green-300 hover:underline">
        ← ফিরে যান
      </button>

      <div className="grid gap-8 md:grid-cols-2 items-start">
        <div>
          <img
            src={`https://picsum.photos/seed/${product.img}/700/500.jpg`}
            alt={product.name}
            className="w-full rounded-2xl object-cover"
          />
        </div>

        <div className="space-y-4">
          <div className="text-sm text-zinc-400">{product.category}</div>
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-zinc-300">{product.description || 'পণ্যের বিস্তারিত এখানে যোগ করুন।'}</p>

          <div className="mt-4 flex items-center gap-4">
            <span className="text-2xl font-bold text-green-400">৳{product.price}</span>
            {product.oldPrice && <span className="text-sm text-zinc-500 line-through">৳{product.oldPrice}</span>}
          </div>

          <div className="mt-6">
            <button
              onClick={() => onAddToCart(product)}
              className="rounded-2xl bg-green-600 px-4 py-3 text-white hover:bg-green-500"
            >
              কার্টে যোগ করুন
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
