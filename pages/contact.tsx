import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 text-slate-800 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <nav className="mb-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur-sm">
          <div className="text-2xl font-black tracking-tight text-slate-900">Resto</div>
          <div className="flex items-center gap-4 text-sm font-medium text-slate-600">
            <Link href="/" className="hover:text-slate-900">მთავარი</Link>
            <Link href="/menu" className="hover:text-slate-900">მენიუ</Link>
            <Link href="/about" className="hover:text-slate-900">ჩვენს შესახებ</Link>
            <Link href="/contact" className="text-slate-900">კონტაქტი</Link>
          </div>
        </nav>

        <section className="grid gap-8 rounded-3xl bg-white p-6 shadow-lg ring-1 ring-slate-200 md:grid-cols-2 md:p-10">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
              Contact
            </p>
            <h1 className="mb-5 text-4xl font-black tracking-tight text-slate-900">
              დაგვიკავშირდეთ
            </h1>
            <p className="mb-8 text-base leading-7 text-slate-600">
              ჩვენი გუნდი მზად არის დაგეხმაროთ შეკვეთის, რეზერვაციის და ნებისმიერი
              შეკითხვების შესახებ.
            </p>

            <div className="space-y-4">
              <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                <div className="text-sm font-semibold uppercase tracking-wide text-slate-500">მისამართი</div>
                <div className="mt-1 text-lg font-bold text-slate-800">თბილისი, რუსთაველის 17</div>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                <div className="text-sm font-semibold uppercase tracking-wide text-slate-500">ტელეფონი</div>
                <div className="mt-1 text-lg font-bold text-slate-800">+995 555 12 34 56</div>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                <div className="text-sm font-semibold uppercase tracking-wide text-slate-500">ელ.ფოსტა</div>
                <div className="mt-1 text-lg font-bold text-slate-800">hello@resto.ge</div>
              </div>
            </div>
          </div>

          <form className="rounded-3xl bg-slate-900 p-6 text-white shadow-xl">
            <div className="mb-4">
              <label className="mb-2 block text-sm font-medium text-slate-200">თქვენი სახელი</label>
              <input
                type="text"
                placeholder="შეიყვანეთ სახელი"
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder:text-slate-400 focus:border-emerald-400 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="mb-2 block text-sm font-medium text-slate-200">ელ.ფოსტა</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder:text-slate-400 focus:border-emerald-400 focus:outline-none"
              />
            </div>
            <div className="mb-5">
              <label className="mb-2 block text-sm font-medium text-slate-200">შეტყობინება</label>
              <textarea
                rows={5}
                placeholder="მოგვწერეთ..."
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder:text-slate-400 focus:border-emerald-400 focus:outline-none"
              />
            </div>
            <button className="w-full rounded-xl bg-emerald-500 px-4 py-3 font-bold text-white transition hover:bg-emerald-400">
              გაგზავნა
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
