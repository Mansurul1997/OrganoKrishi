function Footer() {
  return (
    <footer className="border-t border-green-900/20 bg-[#040805] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-4 mb-12">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <img
                src="https://z-cdn-media.chatglm.cn/files/de4e94e4-fc0f-4a1c-8ed5-793b56d2cbfa.jpg?auth_key=1881015813-e21d3bc0688e415d8e79d0a4ff7a0e7c-0-95be56ebbe46db09a4672ca85377542d"
                alt="OrganoKrishi"
                className="h-10 w-10 rounded-full object-cover border border-green-700/30"
              />
              <div>
                <p className="text-lg font-semibold">Organo<span className="text-green-400">Krishi</span></p>
              </div>
            </div>
            <p className="text-xs uppercase tracking-wider text-green-500/70 mb-2">Purity from Root to Table</p>
            <p className="font-dancing text-sm text-green-300/40 mb-3">by Daniul</p>
            <p className="text-sm text-zinc-500 leading-relaxed">
              খাঁটি ও তাজা কৃষিপণ্য সরাসরি আপনার ঘরে পৌঁছে দিই।
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">পণ্য</h4>
            <ul className="space-y-2 text-sm text-zinc-500">
              {['দেশি মুরগি', 'কোয়েল পাখি', 'হাঁস', 'ডিম'].map((item) => (
                <li key={item}>
                  <a href="#products" className="hover:text-green-400 transition">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">আরও</h4>
            <ul className="space-y-2 text-sm text-zinc-500">
              {['দুধ', 'আম', 'লিচু', 'ফ্যামিলি প্যাক'].map((item) => (
                <li key={item}>
                  <a href="#products" className="hover:text-green-400 transition">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">যোগাযোগ</h4>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li className="flex items-center gap-2">📞 +880 1XXX-XXXXXX</li>
              <li className="flex items-center gap-2">✉️ info@organokrishi.com</li>
              <li className="flex items-center gap-2">📍 বাংলাদেশ</li>
            </ul>
            <div className="mt-4 flex gap-3">
              {['facebook', 'instagram', 'youtube'].map((network) => (
                <a key={network} href="#" className="flex h-9 w-9 items-center justify-center rounded-xl border border-green-900/10 bg-zinc-800/50 text-zinc-400 transition hover:bg-green-600/20 hover:text-green-400">
                  {network[0].toUpperCase()}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-green-900/20 pt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-zinc-600">© ২০২৫ OrganoKrishi — Purity from Root to Table. সর্বস্বত্ব সংরক্ষিত.</p>
          <div className="flex gap-6 text-xs text-zinc-600">
            {['গোপনীয়তা নীতি', 'শর্তাবলী', 'রিফান্ড নীতি'].map((item) => (
              <a key={item} href="#" className="hover:text-zinc-400 transition">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
