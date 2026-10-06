import Link from "next/link";
import { menuItems } from "@/data/menu";

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 text-slate-800 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <nav className="mb-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur-sm">
          <div className="text-2xl font-black tracking-tight text-slate-900">
            Resto
          </div>
          <div className="flex items-center gap-4 text-sm font-medium text-slate-600">
            <Link href="/" className="hover:text-slate-900">მთავარი</Link>
            <Link href="/menu" className="text-slate-900">მენიუ</Link>
            <Link href="/about" className="hover:text-slate-900">ჩვენს შესახებ</Link>
            <Link href="/contact" className="hover:text-slate-900">კონტაქტი</Link>
          </div>
        </nav>

        <header className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">
            Restaurant Menu
          </p>
          <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            ჩვენი მენიუ
          </h1>
          <p className="mt-3 text-slate-600">
            აირჩიეთ კერძი ინგრედიენტებისა და შეკვეთის დეტალების სანახავად.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {menuItems.map((item) => (
            <article
              key={item.id}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <Link
                href={`/menu/${item.id}`}
                className="block h-full focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-emerald-500"
              >
                <img src={item.image} alt={item.title} className="h-48 w-full object-cover" />
                <div className="p-5">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-emerald-700">
                      {item.category}
                    </span>
                    <span className="text-lg font-extrabold text-emerald-600">{item.price}</span>
                  </div>

                  <h2 className="mb-2 text-xl font-bold text-slate-900">{item.title}</h2>
                  <p className="mb-4 text-sm leading-6 text-slate-600">{item.description}</p>
                  <span className="text-sm font-semibold text-emerald-700">
                    დეტალები და შეკვეთა →
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
