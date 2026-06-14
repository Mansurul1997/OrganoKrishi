function CartSidebar({ open, cart, subtotal, onClose, onRemove, onUpdateQty, onSubmitOrder }) {
  return (
    <div className={`${open ? 'pointer-events-auto' : 'pointer-events-none'} fixed inset-0 z-50 flex`}> 
      <div className={`${open ? 'opacity-100' : 'opacity-0'} absolute inset-0 bg-black/60 transition-opacity`} onClick={onClose} />
      <div className={`${open ? 'translate-x-0' : 'translate-x-full'} relative ml-auto h-full w-full max-w-md transform bg-[#081208] border-l border-green-900/30 transition-transform duration-300`}> 
        <div className="flex items-center justify-between border-b border-green-900/20 p-6">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <span>🛒</span>
            আপনার কার্ট
          </h3>
          <button onClick={onClose} className="text-zinc-400 hover:text-white">
            ✕
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cart.length === 0 ? (
            <div className="flex h-full min-h-[260px] flex-col items-center justify-center rounded-3xl border border-green-900/20 bg-white/5 text-zinc-500">
              <p className="mb-2 text-lg">কার্ট খালি!</p>
              <p className="text-sm">পণ্য যোগ করুন</p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-4 rounded-3xl border border-green-900/20 bg-white/5 p-3">
                <img
                  src={`https://picsum.photos/seed/${item.img}/80/80.jpg`}
                  alt={item.name}
                  className="h-14 w-14 rounded-2xl object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="truncate text-sm font-medium">{item.name}</h4>
                  <p className="text-green-400 font-semibold text-sm">৳{item.price}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onUpdateQty(item.id, -1)}
                    className="h-7 w-7 rounded-lg bg-zinc-700/70 text-sm transition hover:bg-zinc-600"
                  >
                    −
                  </button>
                  <span className="w-6 text-center text-sm font-medium">{item.qty}</span>
                  <button
                    onClick={() => onUpdateQty(item.id, 1)}
                    className="h-7 w-7 rounded-lg bg-zinc-700/70 text-sm transition hover:bg-zinc-600"
                  >
                    +
                  </button>
                </div>
                <button onClick={() => onRemove(item.id)} className="text-zinc-500 hover:text-red-400">
                  🗑️
                </button>
              </div>
            ))
          )}
        </div>
        <div className={`border-t border-green-900/20 p-6 ${cart.length === 0 ? 'opacity-40' : ''}`}>
          <div className="mb-2 flex justify-between text-sm text-zinc-400">
            <span>সাবটোটাল</span>
            <span>৳{subtotal}</span>
          </div>
          <div className="mb-2 flex justify-between text-sm text-zinc-400">
            <span>ডেলিভারি চার্জ</span>
            <span className="text-green-400">ফ্রি</span>
          </div>
          <div className="mb-6 flex justify-between text-lg font-semibold">
            <span>মোট</span>
            <span className="text-green-400">৳{subtotal}</span>
          </div>
          <button
            onClick={onSubmitOrder}
            className="w-full rounded-3xl bg-green-600 px-6 py-4 text-sm font-semibold text-white transition hover:bg-green-500"
          >
            অর্ডার কনফার্ম করুন
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartSidebar;
