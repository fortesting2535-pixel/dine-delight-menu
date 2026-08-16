import { useEffect, useState } from "react";
import { Search, Instagram, Facebook, Twitter, Youtube, Star } from "lucide-react";
import heroBanner from "@/assets/hero-restaurant-banner.jpg";
import heroBiryani from "@/assets/hero-biryani.png";
import heroPaneerTikka from "@/assets/hero-paneer-tikka.png";
import { CAFE_NAME, chefsSpecials, type Badge } from "@/data/menu";

type Slide = {
  image: string;
  eyebrow: string;
  title: string;
  copy: string;
  variant: "banner" | "dish";
};

const slides: Slide[] = [
  {
    image: heroBanner,
    eyebrow: "Family dining, since day one",
    title: "A Table For Everyone",
    copy: "Warm lights, big plates and a menu built for the whole family to share.",
    variant: "banner",
  },
  {
    image: heroBiryani,
    eyebrow: "Sealed & dum-cooked",
    title: "Hyderabadi Biryani",
    copy: "Long-grain basmati layered with chicken, saffron and slow-fried onion.",
    variant: "dish",
  },
  {
    image: heroPaneerTikka,
    eyebrow: "Straight off the skewer",
    title: "Paneer Tikka",
    copy: "Tandoor-charred cottage cheese with peppers and mint chutney.",
    variant: "dish",
  },
];

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
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setActive((i) => (i + 1) % slides.length), 4500);
    return () => window.clearInterval(id);
  }, []);

  const slide = slides[active] ?? slides[0]!;

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

        <div className="mt-5 flex items-center gap-2 rounded-full border border-border bg-card px-4 py-3 shadow-card">
          <Search className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
          <input
            type="search"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Search biryani, tandoor, curries…"
            aria-label="Search the menu"
            className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
        </div>

        <div className="relative mt-5 overflow-hidden rounded-3xl bg-gradient-plum p-6 shadow-float sm:p-10">
          <div className="pointer-events-none absolute -right-10 -top-16 h-48 w-48 rounded-full bg-orange/20 blur-2xl" />
          {slide.variant === "banner" ? (
            <>
              <img
                key={slide.title}
                src={slide.image}
                alt="Kitchen Choice family restaurant dining room"
                width={1280}
                height={960}
                className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-45"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-plum-deep/90 via-plum-deep/70 to-transparent" />
            </>
          ) : null}
          <div className="relative grid gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
            <div key={slide.title} className="animate-rise min-w-0">
              <p className="text-[11px] uppercase tracking-[0.32em] text-gold">{slide.eyebrow}</p>
              <h1 className="mt-3 text-display text-4xl uppercase text-cream sm:text-6xl">
                {slide.title}
              </h1>
              <p className="mt-3 max-w-sm text-sm text-cream/70">{slide.copy}</p>
              <div className="mt-5 flex items-center gap-2">
                <span className="flex items-center gap-1 rounded-full bg-cream/10 px-3 py-1 text-xs text-gold">
                  <Star className="h-3.5 w-3.5 fill-current" aria-hidden="true" /> 4.8 · 2.4k reviews
                </span>
              </div>
            </div>
            {slide.variant === "dish" ? (
              <img
                src={slide.image}
                alt={slide.title}
                width={1024}
                height={1024}
                className="animate-float mx-auto h-52 w-52 object-contain drop-shadow-2xl sm:h-72 sm:w-72"
              />
            ) : (
              <div className="hidden sm:block sm:h-72 sm:w-72" aria-hidden="true" />
            )}
          </div>
          <div className="relative mt-6 flex gap-2">
            {slides.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Show ${item.title}`}
                className={`h-1.5 rounded-full transition-all ${
                  index === active ? "w-8 bg-gradient-gold" : "w-3 bg-cream/25"
                }`}
              />
            ))}
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
