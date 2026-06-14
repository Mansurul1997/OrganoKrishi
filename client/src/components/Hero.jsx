function Hero() {
  return (
    <section id="home" className="hero-bg relative overflow-hidden bg-gradient-to-br from-[#0a1f0e] via-[#050a06] to-black min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top_right,_rgba(34,197,94,0.08),_transparent_60%)]" />
      <div className="absolute -bottom-24 left-0 h-96 w-96 opacity-30 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(34,197,94,0.04),_transparent_60%)] rounded-full" />
      <div className="relative mx-auto w-full max-w-7xl px-4 py-20 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-green-600/30 bg-green-600/10 px-4 py-2 text-xs font-medium text-green-400">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
              ফ্রেশ ডেলিভারি চালু আছে
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight mb-2">খাঁটি পণ্য,</h1>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight mb-2 text-green-400">সেরা দামে</h1>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight">আপনার ঘরে</h1>
            </div>
            <p className="max-w-xl text-lg text-zinc-400 leading-relaxed">
              তাজা মুরগি, কোয়েল পাখি, হাঁস, ডিম, দুধ, আম ও লিচু — সবকিছু সরাসরি খামার থেকে আপনার দরজায়। কোনো মধ্যস্বত্বভোগী নেই, তাই দাম সবচেয়ে কম!
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#products" className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-green-600/20 transition hover:bg-green-500">
                🛍️ কেনাকাটা শুরু করুন
              </a>
              <a href="#why-us" className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 px-8 py-4 text-sm font-semibold text-zinc-300 transition hover:border-green-600/50 hover:text-green-400">
                ▶️ আমাদের কথা জানুন
              </a>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div>
                <p className="text-2xl font-bold text-green-400">৫০০+</p>
                <p className="text-[10px] uppercase tracking-wider text-zinc-500">সন্তুষ্ট গ্রাহক</p>
              </div>
              <div className="w-px h-10 bg-green-900/30" />
              <div>
                <p className="text-2xl font-bold text-green-400">১০০%</p>
                <p className="text-[10px] uppercase tracking-wider text-zinc-500">খাঁটি পণ্য</p>
              </div>
              <div className="w-px h-10 bg-green-900/30" />
              <div>
                <p className="text-2xl font-bold text-green-400">ফ্রি</p>
                <p className="text-[10px] uppercase tracking-wider text-zinc-500">হোম ডেলিভারি</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center relative">
            <div className="relative animate-float">
              <div className="mx-auto h-80 w-80 overflow-hidden rounded-full border-2 border-green-600/20 shadow-glow">
                <img
                  src="https://z-cdn-media.chatglm.cn/files/de4e94e4-fc0f-4a1c-8ed5-793b56d2cbfa.jpg?auth_key=1881015813-e21d3bc0688e415d8e79d0a4ff7a0e7c-0-95be56ebbe46db09a4672ca85377542d"
                  alt="OrganoKrishi"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -left-4 rounded-2xl bg-[#0f1e12]/80 p-4 shadow-glow">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-green-600/20 text-green-400">✓</div>
                <p className="text-sm font-medium">কোয়ালিটি গ্যারান্টি</p>
                <p className="text-xs text-zinc-500">১০০% ফ্রেশ বা ফেরত</p>
              </div>
              <div className="absolute -top-2 -right-4 rounded-2xl bg-[#0f1e12]/80 p-4 shadow-glow">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-green-600/20 text-green-400">🚚</div>
                <p className="text-sm font-medium">দ্রুত ডেলিভারি</p>
                <p className="text-xs text-zinc-500">২ ঘণ্টায় ঘরে</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
