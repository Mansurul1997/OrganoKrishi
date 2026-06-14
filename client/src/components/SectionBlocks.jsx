function SectionBlocks() {
  return (
    <>
      <section id="why-us" className="py-24 border-t border-green-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-xs font-medium uppercase tracking-widest text-green-400 mb-4">কেন আমাদের বেছে নেবেন</div>
            <h2 className="text-3xl font-semibold tracking-tight mb-4">OrganoKrishi-র বিশেষত্ব</h2>
            <p className="text-zinc-500 max-w-lg mx-auto font-dancing text-xl">Purity from Root to Table — by Daniul</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'shield-check', title: '১০০% খাঁটি', text: 'সব পণ্য সরাসরি খামার থেকে, কোনো ভেজাল নেই' },
              { icon: 'banknote', title: 'সেরা দাম', text: 'মধ্যস্বত্বভোগী ছাড়া, তাই সবচেয়ে কম দাম' },
              { icon: 'truck', title: 'ফ্রি ডেলিভারি', text: 'যেকোনো অর্ডারে বিনামূল্যে হোম ডেলিভারি' },
              { icon: 'clock', title: 'দ্রুত পৌঁছানো', text: 'অর্ডারের ২ ঘণ্টায় আপনার দরজায়' }
            ].map((feature) => (
              <div key={feature.title} className="rounded-xl border border-green-900/20 bg-white/5 p-8 text-center transition-all hover:border-green-600/30">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-green-600/10 text-green-400">
                  <span className="text-xl">✓</span>
                </div>
                <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                <p className="text-sm text-zinc-400">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="offers" className="py-24 border-t border-green-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-xs font-medium uppercase tracking-widest text-green-400 mb-4">বিশেষ অফার</div>
            <h2 className="text-3xl font-semibold tracking-tight">সীমিত সময়ের ডিল</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-3xl bg-zinc-900 shadow-glow">
              <img src="https://picsum.photos/seed/organic-chicken77/900/520.jpg" alt="মুরগি অফার" className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="mb-3 inline-block rounded-full bg-red-600 px-3 py-1 text-xs font-bold uppercase tracking-wider">২০% ছাড়</span>
                <h3 className="text-2xl font-bold mb-1">দেশি মুরগি ফ্যামিলি প্যাক</h3>
                <p className="text-zinc-300 text-sm">২ কেজি মুরগি + ১২টি ডিম মাত্র ৳৬৫০</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl bg-zinc-900 shadow-glow">
              <img src="https://picsum.photos/seed/mango-fruit-harvest88/900/520.jpg" alt="ফল অফার" className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="mb-3 inline-block rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold uppercase tracking-wider">নতুন এসেছে</span>
                <h3 className="text-2xl font-bold mb-1">রাজশাহীর আম ও দিনাজপুরের লিচু</h3>
                <p className="text-zinc-300 text-sm">সিজনাল ফল এখনই অর্ডার করুন, স্টক শেষ হয়ে যাচ্ছে!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-green-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-xs font-medium uppercase tracking-widest text-green-400 mb-4">গ্রাহকদের মতামত</div>
            <h2 className="text-3xl font-semibold tracking-tight">তারা কি বলছেন</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                review: 'বাজারের চেয়ে অনেক ভালো মানের মুরগি পেলাম, দামও কম। আর ডেলিভারি তো চমৎকার! ১ ঘণ্টায় পৌঁছে গেল।',
                name: 'রাহেলা বেগম',
                location: 'ঢাকা, মিরপুর'
              },
              {
                review: 'কোয়েলের ডিম খুবই তাজা পাচ্ছি প্রতিদিন। বাচ্চারা খুব পছন্দ করে। দুধও একদম খাঁটি, পানি মেশানো নয়।',
                name: 'কামরুল হাসান',
                location: 'ঢাকা, উত্তরা'
              },
              {
                review: 'আম অর্ডার করেছিলাম — একদম গাছ থেকে পাড়া! লিচুও অসাধারণ। এখন সব ফল এখান থেকেই নিই।',
                name: 'ফারহানা আক্তার',
                location: 'চট্টগ্রাম'
              }
            ].map((testimonial) => (
              <div key={testimonial.name} className="rounded-2xl border border-green-900/20 bg-white/5 p-8 text-sm text-zinc-300">
                <div className="mb-4 flex gap-1 text-green-400">★★★★★</div>
                <p className="leading-relaxed mb-6">“{testimonial.review}”</p>
                <div>
                  <div className="text-sm font-medium">{testimonial.name}</div>
                  <div className="text-xs text-zinc-500">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-green-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-3xl border border-green-900/20 bg-white/5 p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-600/5 blur-3xl" />
            <img
              src="https://z-cdn-media.chatglm.cn/files/de4e94e4-fc0f-4a1c-8ed5-793b56d2cbfa.jpg?auth_key=1881015813-e21d3bc0688e415d8e79d0a4ff7a0e7c-0-95be56ebbe46db09a4672ca85377542d"
              alt="OrganoKrishi"
              className="mx-auto mb-6 h-16 w-16 rounded-full border-2 border-green-600/30 object-cover"
            />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
              আজই অর্ডার করুন, <span className="text-green-400">পান সেরা ডিল!</span>
            </h2>
            <p className="font-dancing text-xl text-green-300/50 mb-4">Purity from Root to Table</p>
            <p className="text-zinc-400 text-lg mb-8 max-w-xl mx-auto">
              প্রথম অর্ডারে ১৫% ছাড় + ফ্রি ডেলিভারি। কুপন কোড:
              <span className="text-green-400 font-semibold"> ORGANO15</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#products" className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-8 py-4 text-sm font-semibold text-white transition hover:bg-green-500">
                এখনই কিনুন
              </a>
              <a href="tel:+8801XXXXXXXXX" className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-700 px-8 py-4 text-sm font-semibold text-zinc-300 transition hover:border-green-600/50 hover:text-green-400">
                কল করুন
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SectionBlocks;
