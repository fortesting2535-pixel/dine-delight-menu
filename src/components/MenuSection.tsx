import { useMemo, useState } from "react";
import { categories, type Badge, type MenuItem } from "@/data/menu";
import { Heart, ArrowRight } from "lucide-react";

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
    <article
      id={`dish-${item.id}`}
      className="animate-rise scroll-mt-24 overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-300 hover:shadow-float"
    >
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

function SectionEndCard({
  categoryId,
  onNextCategory,
}: {
  categoryId: string;
  onNextCategory: (nextId: string) => void;
}) {
  const currentIndex = categories.findIndex((c) => c.id === categoryId);
  const isLast = currentIndex === categories.length - 1;
  const nextCategory = categories[isLast ? 0 : currentIndex + 1]!;

  return (
    <div className="relative mt-10 overflow-hidden rounded-3xl border border-orange/15 bg-[#FAF3EA] p-6 shadow-card sm:p-8">
      {/* Decorative leaf branch line art on bottom right */}
      <svg
        className="pointer-events-none absolute -bottom-3 -right-2 h-28 w-28 text-orange/25 sm:h-36 sm:w-36"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <path d="M75 90C75 90 70 65 88 45C96 35 92 20 92 20C92 20 78 25 68 35C48 55 75 90 75 90Z" />
        <path d="M75 90C75 90 55 75 42 50C36 38 42 25 42 25C42 25 54 30 60 42C70 67 75 90 75 90Z" />
        <path d="M75 90L42 25" />
        <path d="M75 90L88 45" />
        <circle cx="88" cy="22" r="1.5" fill="currentColor" />
        <circle cx="95" cy="30" r="1" fill="currentColor" />
      </svg>

      <div className="relative z-10 flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
        {/* Left icon & message */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-5">
          {/* Dark plum circular badge with cloche icon */}
          <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-plum-deep shadow-md">
            <svg
              className="h-8 w-8 text-orange"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M12 4v1.5" />
              <path d="M12 4a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4z" fill="currentColor" />
              <path d="M4 17h16a1 1 0 0 0 1-1 9 9 0 0 0-18 0 1 1 0 0 0 1 1z" />
              <path d="M3 19h18" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>

          <div>
            <h3 className="flex items-center justify-center gap-1.5 text-xl font-bold tracking-tight text-plum-deep sm:justify-start sm:text-2xl">
              Thank you for reaching the end!
              <Heart className="h-4 w-4 fill-orange text-orange inline-block" />
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {isLast
                ? "You've explored all our categories! Return to the top to browse again."
                : `Move to the next section for more amazing dishes.`}
            </p>
          </div>
        </div>

        {/* Center Vertical Divider line with Diamond ornament (hidden on mobile) */}
        <div className="hidden h-14 items-center gap-2 sm:flex">
          <div className="h-full w-px bg-orange/20" />
          <span className="text-[10px] text-orange/60 font-serif">◇</span>
          <div className="h-full w-px bg-orange/20" />
        </div>

        {/* Right side: Next Section Pill Button */}
        <button
          type="button"
          onClick={() => onNextCategory(nextCategory.id)}
          className="group inline-flex shrink-0 items-center justify-center gap-2.5 rounded-full border border-orange bg-white/90 px-6 py-2.5 text-sm font-semibold text-plum-deep shadow-sm transition-all hover:bg-orange hover:text-white hover:shadow-md active:scale-95"
        >
          <span>{isLast ? "Back to Top" : "Next Section"}</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 text-orange group-hover:text-white" />
        </button>
      </div>
    </div>
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

  const handleNextCategory = (nextId: string) => {
    setActiveId(nextId);
    const sectionEl = document.getElementById("menu-section");
    if (sectionEl) {
      sectionEl.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 400, behavior: "smooth" });
    }
  };

  return (
    <section id="menu-section" className="px-4 pb-16 pt-10 sm:px-6">
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

              {/* Thank you card at the end of section */}
              <SectionEndCard
                categoryId={category.id}
                onNextCategory={handleNextCategory}
              />
            </div>
          ))
        )}
      </div>
    </section>
  );
}
