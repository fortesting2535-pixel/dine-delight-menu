import { useEffect, useState, useRef, useMemo, useCallback } from "react";
import { Search, Instagram, Facebook, Twitter, Youtube, Star, X, Utensils, ChevronRight } from "lucide-react";
import heroBanner from "@/assets/hero-restaurant-banner.jpg";
import { CAFE_NAME, chefsSpecials, categories, allItems, type Badge } from "@/data/menu";

const slide = {
  image: heroBanner,
  eyebrow: "Family dining, since day one",
  title: "A Table For Everyone",
  copy: "Warm lights, big plates and a menu built for the whole family to share.",
};

const socials = [
  { icon: Instagram, label: "Instagram" },
  { icon: Facebook, label: "Facebook" },
  { icon: Twitter, label: "X" },
  { icon: Youtube, label: "YouTube" },
];

const badgeStyles: Record<Badge, string> = {
  Bestseller: "bg-plum-deep text-cream",
  "Chef's Pick": "bg-orange text-cream",
  Trending: "bg-plum-deep text-gold",
};

export function Hero({
  query,
  onQueryChange,
}: {
  query: string;
  onQueryChange: (value: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  const term = query.trim().toLowerCase();

  // Find matching items from all categories
  const matchedDishes = useMemo(() => {
    if (!term) return [];
    return allItems
      .map((item) => {
        const cat = categories.find((c) => c.items.some((i) => i.id === item.id));
        return {
          ...item,
          categoryName: cat?.name ?? "",
        };
      })
      .filter(
        (item) =>
          item.name.toLowerCase().includes(term) ||
          item.description.toLowerCase().includes(term) ||
          item.categoryName.toLowerCase().includes(term)
      );
  }, [term]);

  // Handle clicking outside to close search popup
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Scroll to dish and add temporary highlight ring
  const handleSelectDish = useCallback(
    (dishId: string) => {
      setIsOpen(false);
      const el = document.getElementById(`dish-${dishId}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.classList.add("ring-2", "ring-orange", "scale-[1.02]");
        setTimeout(() => {
          el.classList.remove("ring-2", "ring-orange", "scale-[1.02]");
        }, 2200);
      }
    },
    []
  );

  return (
    <header className="px-4 pt-5 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 sm:flex sm:justify-between">
          <div className="flex min-w-0 items-center gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-plum text-display text-lg text-cream">
              KC
            </span>
            <div className="min-w-0">
              <p className="truncate text-display text-lg uppercase leading-none">{CAFE_NAME}</p>
              <p className="font-script text-sm text-orange">family restaurant</p>
            </div>
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            {socials.map(({ icon: Icon, label }) => (
              <span
                key={label}
                title={label}
                className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card text-primary"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
            ))}
          </div>
        </div>

        {/* ── Active Live Search Bar with Instant Popup ── */}
        <div ref={searchContainerRef} className="relative mt-5 z-30">
          <div
            className={`flex items-center gap-2.5 rounded-full border bg-card px-4 py-3 shadow-card transition-all duration-200 ${
              isOpen && term
                ? "border-orange ring-2 ring-orange/20 shadow-float"
                : "border-border hover:border-orange/50"
            }`}
          >
            <Search className="h-4 w-4 shrink-0 text-orange" aria-hidden="true" />
            <input
              type="search"
              value={query}
              onChange={(event) => {
                onQueryChange(event.target.value);
                setIsOpen(true);
              }}
              onFocus={() => setIsOpen(true)}
              onKeyDown={(e) => {
                if (e.key === "Escape") setIsOpen(false);
              }}
              placeholder="Search biryani, tandoor, curries, starter, naan…"
              aria-label="Search the menu"
              className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
            {query ? (
              <button
                type="button"
                onClick={() => {
                  onQueryChange("");
                  setIsOpen(false);
                }}
                aria-label="Clear search"
                className="grid h-5 w-5 place-items-center rounded-full bg-secondary text-muted-foreground hover:bg-orange hover:text-white transition-colors"
              >
                <X className="h-3 w-3" />
              </button>
            ) : (
              <span className="hidden sm:inline-block rounded-full bg-secondary px-2.5 py-0.5 text-[10px] uppercase font-semibold text-muted-foreground">
                Live Search
              </span>
            )}
          </div>

          {/* ── Live Suggestions Popup Modal Dropdown ── */}
          {isOpen && term && (
            <div className="absolute left-0 right-0 top-full mt-2 overflow-hidden rounded-2xl border border-border bg-card shadow-2xl backdrop-blur-xl animate-rise z-50">
              <div className="flex items-center justify-between border-b border-border bg-secondary/50 px-4 py-2.5">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                  <Utensils className="h-3.5 w-3.5 text-orange" />
                  {matchedDishes.length > 0
                    ? `Found ${matchedDishes.length} dish${matchedDishes.length === 1 ? "" : "es"} matching "${query}"`
                    : `No dishes found for "${query}"`}
                </span>
                <span className="text-[10px] text-muted-foreground">Click to jump to dish</span>
              </div>

              {matchedDishes.length > 0 ? (
                <div className="max-h-80 overflow-y-auto p-2 space-y-1 divide-y divide-border/40">
                  {matchedDishes.map((dish) => (
                    <button
                      key={dish.id}
                      type="button"
                      onClick={() => handleSelectDish(dish.id)}
                      className="group flex w-full items-center gap-3 rounded-xl p-2 text-left transition-all hover:bg-orange/10 hover:border-orange/20"
                    >
                      <img
                        src={dish.image}
                        alt={dish.name}
                        className="h-12 w-12 shrink-0 rounded-lg object-cover border border-border group-hover:scale-105 transition-transform"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span
                            className={`h-2 w-2 rounded-full shrink-0 ${
                              dish.veg ? "bg-veg" : "bg-nonveg"
                            }`}
                            title={dish.veg ? "Veg" : "Non-Veg"}
                          />
                          <h4 className="truncate text-sm font-semibold text-foreground group-hover:text-orange transition-colors">
                            {dish.name}
                          </h4>
                          {dish.badge && (
                            <span className="rounded-full bg-orange/15 px-1.5 py-0.5 text-[9px] font-bold uppercase text-orange">
                              {dish.badge}
                            </span>
                          )}
                        </div>
                        <p className="truncate text-xs text-muted-foreground mt-0.5">
                          {dish.categoryName} · {dish.description}
                        </p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-sm font-bold text-orange">₹{dish.price}</span>
                        <ChevronRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="p-6 text-center">
                  <p className="text-sm text-muted-foreground">
                    No culinary match for <span className="font-semibold text-foreground">"{query}"</span>.
                  </p>
                  <p className="text-xs text-muted-foreground/70 mt-1">
                    Try searching for "biryani", "paneer", "tikka", "naan", "curry", or "lassi".
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="relative mt-5 overflow-hidden rounded-3xl bg-gradient-plum p-6 shadow-float sm:p-10">
          <div className="pointer-events-none absolute -right-10 -top-16 h-48 w-48 rounded-full bg-orange/20 blur-2xl" />

          <img
            src={slide.image}
            alt="Kitchen Choice family restaurant dining room"
            width={1280}
            height={960}
            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-plum-deep/90 via-plum-deep/70 to-transparent" />

          <div className="relative max-w-[760px] py-1">
            <div key={slide.title} className="animate-rise min-w-0">
              <p className="text-[11px] uppercase tracking-[0.32em] text-gold">{slide.eyebrow}</p>

              <h1 className="mt-3 text-display text-4xl uppercase text-cream sm:text-[4.4rem] lg:text-[5.2rem]">
                {slide.title}
              </h1>

              <p className="mt-3 max-w-md text-sm text-cream/75 sm:text-base">{slide.copy}</p>

              <div className="mt-5 flex items-center gap-2">
                <span className="flex items-center gap-1 rounded-full bg-cream/10 px-3 py-1 text-xs text-gold">
                  <Star className="h-3.5 w-3.5 fill-current" aria-hidden="true" /> 4.8 · 2.4k reviews
                </span>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-8">
          <div className="flex items-end justify-between gap-4">
            <div className="min-w-0">
              <p className="font-script text-lg text-orange">handpicked</p>
              <h2 className="text-display text-2xl uppercase">Chef's Specials</h2>
            </div>
            <p className="shrink-0 text-xs uppercase tracking-widest text-muted-foreground">
              {chefsSpecials.length} picks
            </p>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {chefsSpecials.map((item) => (
              <article
                key={item.id}
                className="overflow-hidden rounded-2xl border border-border bg-card shadow-card"
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    width={768}
                    height={768}
                    className="h-24 w-full object-cover sm:h-36"
                  />
                  {item.badge ? (
                    <span
                      className={`absolute left-2 top-2 rounded-full px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider ${badgeStyles[item.badge]}`}
                    >
                      {item.badge}
                    </span>
                  ) : null}
                </div>
                <div className="p-3">
                  <h3 className="truncate text-sm font-semibold">{item.name}</h3>
                  <p className="mt-1 text-sm font-bold text-orange">₹{item.price}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </header>
  );
}
