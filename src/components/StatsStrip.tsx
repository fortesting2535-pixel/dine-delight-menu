import { Coffee, Leaf, Clock, Sparkles } from "lucide-react";
import { CAFE_NAME, categories, totalItems } from "@/data/menu";

const stats = [
  { icon: Coffee, value: `${totalItems}+`, label: "Menu Items" },
  { icon: Leaf, value: "Veg & Non-Veg", label: "Clearly Marked" },
  { icon: Clock, value: "Freshly Brewed", label: "All Day, Daily" },
  { icon: Sparkles, value: `${categories.length}`, label: "Curated Sections" },
];

export function StatsStrip() {
  return (
    <footer className="bg-gradient-plum px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex min-w-0 items-center gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold/40">
                <Icon className="h-5 w-5 text-gold" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-bold text-cream">{value}</p>
                <p className="truncate text-[11px] uppercase tracking-widest text-cream/55">
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 border-t border-cream/10 pt-6 text-center">
          <p className="text-display text-2xl uppercase text-cream">{CAFE_NAME}</p>
          <p className="mt-1 font-script text-base text-gold">see you at the counter</p>
          <p className="mt-3 text-[11px] uppercase tracking-widest text-cream/40">
            Prices in ₹ · inclusive of taxes · menu subject to availability
          </p>
        </div>
      </div>
    </footer>
  );
}
