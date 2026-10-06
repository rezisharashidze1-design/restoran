export type MenuItem = {
  id: number;
  title: string;
  description: string;
  price: string;
  category: string;
  image: string;
  ingredients: string[];
};

export const menuItems: MenuItem[] = [
  {
    id: 1,
    title: "გრილირებული ქათმის ფილე",
    description: "მსუბუქად მარინირებული ქათმის ფილე, ახალი ბოსტნეულით და სასიამოვნო სოუსით.",
    price: "₾24",
    category: "ძირითადი კერძი",
    image:
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=80",
    ingredients: ["ქათამი", "პომიდორი", "ნიორი", "ბოლოკი", "ზეთი", "იერო"],
  },
  {
    id: 2,
    title: "მოცარელას პასტა",
    description: "კრემისებრი სოუსი, ახალი ბაზილიკი და ხორბლის პასტა.",
    price: "₾19",
    category: "პ pasta",
    image:
      "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=900&q=80",
    ingredients: ["პასტა", "მოცარელა", "ცხიმიანი კრემი", "ბაზილიკა", " parmesan"],
  },
  {
    id: 3,
    title: "ლათე კაფე",
    description: "ნაზი ესპრესო და რძე, კლასიკური არომატით.",
    price: "₾7",
    category: "სასმელი",
    image:
      "https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=900&q=80",
    ingredients: ["ესპრესო", "რძე", "ქაფი"],
  },
  {
    id: 4,
    title: "სალათი ცეზართან",
    description: "ახალი სალათის ფოთლები, ქათამი, პარმეზანი და ცეზარის სოუსი.",
    price: "₾17",
    category: "სალათი",
    image:
      "https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=900&q=80",
    ingredients: ["სალათის ფოთლები", "ქათამი", "პარმეზანი", "პომიდორი", "ცეზარის სოუსი"],
  },
  {
    id: 5,
    title: "მარწყვის ლიმონათი",
    description: "სწრაფი, გამაგრილებელი და სასიამოვნო ხილის არომატით.",
    price: "₾9",
    category: "სასმელი",
    image:
      "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=900&q=80",
    ingredients: ["მარწყვი", "ლიმონი", "წყალი", "ნაკლები", "ყინული"],
  },
  {
    id: 6,
    title: "შოკოლადის ნამცხვარი",
    description: "ნაოჭებიანი, რბილი და მდიდარი შოკოლადის არომატით.",
    price: "₾11",
    category: "დესერტი",
    image:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80",
    ingredients: ["შოკოლადი", "ფქვილი", "კვერცხი", "რძე", "საყვირაო"],
  },
];
