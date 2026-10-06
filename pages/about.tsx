import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 text-slate-800 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <nav className="mb-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur-sm">
          <div className="text-2xl font-black tracking-tight text-slate-900">Resto</div>
          <div className="flex items-center gap-4 text-sm font-medium text-slate-600">
            <Link href="/" className="hover:text-slate-900">მთავარი</Link>
            <Link href="/menu" className="hover:text-slate-900">მენიუ</Link>
            <Link href="/about" className="text-slate-900">ჩვენს შესახებ</Link>
            <Link href="/contact" className="hover:text-slate-900">კონტაქტი</Link>
          </div>
        </nav>

        <section className="overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-slate-200">
          <div className="grid gap-0 md:grid-cols-2">
            <div className="p-8 md:p-12">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
                Restaurant Story
              </p>
              <h1 className="mb-5 text-4xl font-black tracking-tight text-slate-900">
                სურნელი, ოჯახური ატმოსფერო და მაღალი ხარისხი
              </h1>
              <p className="mb-6 text-base leading-7 text-slate-600">
                ჩვენი რესტორანი შექმნილია იმისთვის, რომ თითოეული სტუმარი გრძნობს სიმშვიდეს,
                ოჯახურ მეგობრულობას და უნიკალურ გემოს. ჩვენ ვიყენებთ მხოლოდ ახალ, მაღალი
                ხარისხის ინგრედიენტებს და ვქმნით კერძებს, რომლებიც harmony of flavor—ს.
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  ["12+", "წელი გამოცდილება"],
                  ["5000+", "მომხმარებელი"],
                  ["4.9/5", "სტუმრების შეფასება"],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-2xl bg-slate-50 p-4 text-center ring-1 ring-slate-200">
                    <div className="text-2xl font-black text-slate-900">{value}</div>
                    <div className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[300px] bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.18),_transparent_50%),linear-gradient(135deg,#0f172a,#1e293b)] p-8 text-white">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-35" />
              <div className="relative z-10 flex h-full flex-col justify-end">
                <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-md">
                  <p className="text-sm uppercase tracking-[0.2em] text-emerald-200">Our promise</p>
                  <p className="mt-2 text-lg font-semibold leading-7">
                    Fresh ingredients, crafted with care, served with a smile.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
