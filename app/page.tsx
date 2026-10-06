import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-5 sm:px-6 lg:px-8">
          <Link href="/" className="text-2xl font-black tracking-tight text-slate-900">
            Resto
          </Link>
          <nav aria-label="მთავარი ნავიგაცია" className="flex flex-wrap items-center gap-3">
            <Link
              href="/"
              className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
            >
              მთავარი
            </Link>
            <Link
              href="/menu"
              className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-slate-400 hover:text-slate-900"
            >
              მენიუ
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-slate-400 hover:text-slate-900"
            >
              ჩვენს შესახებ
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-slate-400 hover:text-slate-900"
            >
              კონტაქტი
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex w-full flex-1 items-center px-4 py-12 sm:px-6 lg:px-8">
        <section className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-emerald-700">
              კეთილი იყოს თქვენი მობრძანება
            </p>
            <h1 className="mb-6 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              გემო, რომელიც
              <span className="block text-emerald-700">განსაკუთრებულად დაგამახსოვრდებათ</span>
            </h1>
            <p className="mb-8 max-w-xl text-lg leading-8 text-slate-600">
              Resto მყუდრო გარემოსა და გემრიელი კერძების ადგილია. გვეწვიეთ,
              დააგემოვნეთ ჩვენი კერძები და გაატარეთ სასიამოვნო დრო ჩვენთან.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/menu"
                className="rounded-full bg-emerald-700 px-6 py-3 font-semibold text-white transition hover:bg-emerald-800"
              >
                მენიუს ნახვა
              </Link>
              <Link
                href="/about"
                className="rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
              >
                ჩვენს შესახებ
              </Link>
            </div>
          </div>

          <div className="relative min-h-[320px] overflow-hidden rounded-3xl shadow-xl sm:min-h-[440px]">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=85"
              alt="მყუდრო რესტორნის ინტერიერი"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
            <p className="absolute bottom-6 left-6 right-6 text-xl font-bold text-white sm:text-2xl">
              გემრიელი კერძები და თბილი გარემო
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white px-4 py-5 text-center text-sm text-slate-500">
        © Resto · გემრიელი მომენტები
      </footer>
    </div>
  );
}
