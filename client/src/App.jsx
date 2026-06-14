import { useEffect, useState } from 'react';
import { Routes, Route, useParams, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryBar from './components/CategoryBar';
import ProductGrid from './components/ProductGrid';
import ProductModal from './components/ProductModal';
import CartSidebar from './components/CartSidebar';
import SectionBlocks from './components/SectionBlocks';
import Footer from './components/Footer';
import ProductPage from './components/ProductPage';
import localProducts from './data/products';

const categories = ['all', 'মুরগি', 'কোয়েল', 'হাঁস', 'ডিম', 'দুধ', 'ফল'];

function App() {
  const [products, setProducts] = useState(localProducts);
  const [filter, setFilter] = useState('all');
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    fetch('/api/products')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(setProducts)
      .catch(() => {
        setProducts(localProducts);
        showToast('সার্ভার থেকে পাওয়া যাচ্ছে না, লোকাল পণ্য দেখানো হচ্ছে।', 'error');
      });
  }, []);

  const filteredProducts =
    filter === 'all' ? products : products.filter((product) => product.category === filter);

  const cartQuantity = cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    window.setTimeout(() => setToast(null), 2400);
  };

  const handleFilter = (category) => {
    setFilter(category);
    if (category !== 'all') {
      document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const addToCart = (product) => {
    setCart((currentCart) => {
      const existing = currentCart.find((item) => item.id === product.id);
      if (existing) {
        return currentCart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...currentCart, { ...product, qty: 1 }];
    });
    showToast(`${product.name} কার্টে যোগ করা হয়েছে!`, 'success');
  };

  const updateQty = (id, delta) => {
    setCart((currentCart) =>
      currentCart
        .map((item) => (item.id === id ? { ...item, qty: item.qty + delta } : item))
        .filter((item) => item.qty > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart((currentCart) => currentCart.filter((item) => item.id !== id));
  };

  const submitOrder = () => {
    if (cart.length === 0) {
      showToast('আপনার কার্ট খালি আছে।', 'error');
      return;
    }

    fetch('/api/order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: cart, total: subtotal })
    })
      .then((res) => res.json())
      .then((data) => {
        showToast(data.message || 'অর্ডার সফল হয়েছে!', 'success');
        setCart([]);
        setCartOpen(false);
      })
      .catch(() => showToast('অর্ডার পাঠাতে ব্যর্থ।', 'error'));
  };

  function Home() {
    return (
      <main className="pt-16">
        <Hero />

        <section className="py-16 border-y border-green-900/20 bg-[#060e08]">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6">
            <img
              src="https://z-cdn-media.chatglm.cn/files/de4e94e4-fc0f-4a1c-8ed5-793b56d2cbfa.jpg?auth_key=1881015813-e21d3bc0688e415d8e79d0a4ff7a0e7c-0-95be56ebbe46db09a4672ca85377542d"
              alt="OrganoKrishi"
              className="w-8 h-8 rounded-full object-cover border border-green-700/30"
            />
            <span className="text-green-400 font-semibold text-sm uppercase tracking-[0.2em]">
              Purity from Root to Table
            </span>
            <span className="text-zinc-600 hidden md:inline">|</span>
            <span className="font-dancing text-lg text-green-300/60">by Daniul</span>
          </div>
        </section>

        <section id="products" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="text-xs font-medium uppercase tracking-widest text-green-400 mb-4">
                আমাদের পণ্যসমূহ
              </div>
              <h2 className="text-3xl font-semibold tracking-tight mb-4">তাজা ও খাঁটি পণ্য</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                সরাসরি খামার থেকে সংগ্রহ করা, কোনো কেমিক্যাল বা প্রিজার্ভেটিভ ছাড়া — ১০০% প্রাকৃতিক পণ্য
              </p>
            </div>

            <CategoryBar categories={categories} activeCategory={filter} onFilter={handleFilter} />

            <ProductGrid
              products={filteredProducts}
              onOpenModal={setSelectedProduct}
              onAddToCart={addToCart}
            />
          </div>
        </section>

        <SectionBlocks />
      </main>
    );
  }

  function ProductPageWrapper() {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = products.find((p) => String(p.id) === String(id));
    if (products.length === 0) {
      return (
        <div className="py-24 max-w-7xl mx-auto px-6 text-center text-zinc-400">লোড হচ্ছে…</div>
      );
    }

    if (!product) {
      return (
        <div className="py-24 max-w-7xl mx-auto px-6 text-center text-zinc-400">পণ্য পাওয়া যায়নি।</div>
      );
    }

    return (
      <main className="pt-16">
        <ProductPage product={product} onAddToCart={(p) => addToCart(p)} onBack={() => navigate(-1)} />
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-[#050a06] text-white">
      <Navbar
        categories={categories}
        activeCategory={filter}
        onFilter={handleFilter}
        cartCount={cartQuantity}
        onOpenCart={() => setCartOpen(true)}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductPageWrapper />} />
      </Routes>

      <Footer />

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={(product) => {
          addToCart(product);
          setSelectedProduct(null);
        }}
      />

      <CartSidebar
        open={cartOpen}
        cart={cart}
        subtotal={subtotal}
        onClose={() => setCartOpen(false)}
        onRemove={removeFromCart}
        onUpdateQty={updateQty}
        onSubmitOrder={submitOrder}
      />

      {toast && (
        <div className="fixed right-4 top-20 z-50 rounded-2xl border border-green-600/20 bg-black/80 px-4 py-3 text-sm text-green-200 shadow-glow backdrop-blur-lg">
          {toast.message}
        </div>
      )}
    </div>
  );
}

export default App;
