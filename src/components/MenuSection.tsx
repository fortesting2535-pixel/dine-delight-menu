import { useMemo, useState } from "react";
import { categories, type Badge, type MenuItem } from "@/data/menu";

const badgeStyles: Record<Badge, string> = {
  Bestseller: "bg-plum-deep text-cream",
  "Chef's Pick": "bg-orange text-cream",
  Trending: "bg-plum-deep text-gold",
};


function VegDot({ veg }: { veg: boolean }) {
  return (
    <span
      title={veg ? "Vegetarian" : "Non-vegetarian"}
      className={`grid h-3.5 w-3.5 shrink-0 place-items-center rounded-[3px] border ${
        veg ? "border-veg" : "border-nonveg"
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${veg ? "bg-veg" : "bg-nonveg"}`} />
    </span>
  );
}

function DishCard({ item }: { item: MenuItem }) {
  return (
    <article className="animate-rise overflow-hidden rounded-2xl border border-border bg-card shadow-card">
      <div className="relative">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          width={768}
          height={768}
          className="aspect-square w-full object-cover"
        />
        {item.badge ? (
          <span
            className={`absolute left-2 top-2 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${badgeStyles[item.badge]}`}
          >
            {item.badge}
          </span>
        ) : null}

      </div>
      <div className="p-3">
        <div className="flex min-w-0 items-center gap-1.5">
          <VegDot veg={item.veg} />
          <h3 className="truncate text-sm font-semibold">{item.name}</h3>
        </div>
        <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{item.description}</p>
        <p className="mt-2 text-sm font-bold text-orange">₹{item.price}</p>
      </div>
    </article>
  );
}

export function MenuSection({ query }: { query: string }) {
  const [activeId, setActiveId] = useState(categories[0]!.id);
  const term = query.trim().toLowerCase();

  const results = useMemo(() => {
    if (term) {
      return categories
        .map((category) => ({
          category,
          items: category.items.filter(
            (item) =>
              item.name.toLowerCase().includes(term) ||
              item.description.toLowerCase().includes(term),
          ),
        }))
        .filter((group) => group.items.length > 0);
    }
    const active = categories.find((c) => c.id === activeId) ?? categories[0]!;
    return [{ category: active, items: active.items }];
  }, [term, activeId]);

  return (
    <section className="px-4 pb-16 pt-10 sm:px-6">
      <div className="mx-auto max-w-6xl">
        {!term ? (
          <nav aria-label="Menu categories" className="no-scrollbar -mx-4 flex gap-3 overflow-x-auto px-4 pb-2">
            {categories.map((category) => {
              const isActive = category.id === activeId;
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveId(category.id)}
                  aria-pressed={isActive}
                  className={`flex w-24 shrink-0 flex-col items-center gap-2 rounded-2xl border p-2 transition-all ${
                    isActive
                      ? "border-orange bg-card shadow-card"
                      : "border-transparent bg-secondary/60"
                  }`}
                >
                  <img
                    src={category.thumb}
                    alt={category.name}
                    loading="lazy"
                    width={768}
                    height={768}
                    className={`h-16 w-16 rounded-full object-cover ${isActive ? "ring-2 ring-orange" : ""}`}
                  />
                  <span className="w-full truncate text-center text-[11px] font-semibold uppercase tracking-wide">
                    {category.name}
                  </span>
                </button>
              );
            })}
          </nav>
        ) : null}

        {results.length === 0 ? (
          <p className="mt-12 text-center text-sm text-muted-foreground">
            Nothing matched “{query}”. Try another craving.
          </p>
        ) : (
          results.map(({ category, items }) => (
            <div key={category.id} className="mt-8">
              <div className="flex items-end justify-between gap-4">
                <div className="min-w-0">
                  <p className="font-script text-lg text-orange">{category.tagline}</p>
                  <h2 className="text-display text-3xl uppercase sm:text-4xl">{category.name}</h2>
                </div>
                <p className="shrink-0 text-xs uppercase tracking-widest text-muted-foreground">
                  {items.length} items
                </p>
              </div>
              <div key={`${category.id}-${term}`} className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
                {items.map((item) => (
                  <DishCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
