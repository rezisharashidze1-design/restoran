import Link from "next/link";
import type { GetStaticPaths, GetStaticProps } from "next";
import { useState } from "react";
import { menuItems, type MenuItem } from "@/data/menu";

type MenuItemPageProps = {
  item: MenuItem;
};

export default function MenuItemPage({ item }: MenuItemPageProps) {
  const [quantity, setQuantity] = useState(1);
  const unitPrice = Number(item.price.replace(/[^\d.]/g, ""));
  const totalPrice = unitPrice * quantity;

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 text-slate-800 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <nav className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <Link href="/" className="text-2xl font-black tracking-tight text-slate-900">
            Resto
          </Link>
          <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-600">
            <Link href="/" className="hover:text-slate-900">მთავარი</Link>
            <Link href="/menu" className="text-slate-900">მენიუ</Link>
            <Link href="/about" className="hover:text-slate-900">ჩვენს შესახებ</Link>
            <Link href="/contact" className="hover:text-slate-900">კონტაქტი</Link>
          </div>
        </nav>

        <Link
          href="/menu"
          className="mb-6 inline-flex font-semibold text-emerald-700 hover:text-emerald-900"
        >
          ← მენიუში დაბრუნება
        </Link>

        <article className="grid overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-slate-200 md:grid-cols-2">
          <img
            src={item.image}
            alt={item.title}
            className="h-72 w-full object-cover md:h-full md:min-h-[520px]"
          />

          <div className="p-6 sm:p-8">
            <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-800">
              {item.category}
            </span>
            <h1 className="mt-4 text-3xl font-black tracking-tight text-slate-900">
              {item.title}
            </h1>
            <p className="mt-3 leading-7 text-slate-600">{item.description}</p>

            <section className="mt-8 border-t border-slate-200 pt-6">
              <h2 className="text-lg font-bold text-slate-900">
                ინგრედიენტები
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {item.ingredients.map((ingredient, index) => (
                  <li
                    key={`${ingredient}-${index}`}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-700"
                  >
                    {ingredient}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-8 border-t border-slate-200 pt-6">
              <h2 className="text-lg font-bold text-slate-900">
                რაოდენობის არჩევა
              </h2>
              <div className="mt-4 flex items-center justify-between gap-4">
                <div className="inline-flex items-center rounded-xl border border-slate-300">
                  <button
                    type="button"
                    aria-label="რაოდენობის შემცირება"
                    disabled={quantity <= 1}
                    onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                    className="h-11 w-11 rounded-l-xl text-xl font-semibold text-slate-700 hover:bg-slate-100 disabled:cursor-not-allowed disabled:text-slate-300"
                  >
                    −
                  </button>
                  <output
                    aria-live="polite"
                    className="min-w-12 text-center font-bold text-slate-900"
                  >
                    {quantity}
                  </output>
                  <button
                    type="button"
                    aria-label="რაოდენობის გაზრდა"
                    onClick={() => setQuantity((current) => current + 1)}
                    className="h-11 w-11 rounded-r-xl text-xl font-semibold text-slate-700 hover:bg-slate-100"
                  >
                    +
                  </button>
                </div>
                <span className="text-sm text-slate-600">
                  ერთეულის ფასი: {item.price}
                </span>
              </div>
              <p className="mt-5 flex items-center justify-between text-lg font-bold text-slate-900">
                <span>ჯამი</span>
                <span className="text-emerald-700">₾{totalPrice}</span>
              </p>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: menuItems.map((item) => ({ params: { id: String(item.id) } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<MenuItemPageProps> = async ({ params }) => {
  const item = menuItems.find((menuItem) => menuItem.id === Number(params?.id));

  if (!item) {
    return { notFound: true };
  }

  return { props: { item } };
};
