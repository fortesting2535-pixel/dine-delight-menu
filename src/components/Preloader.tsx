import { useEffect, useState } from "react";
import { Leaf, ChefHat, Heart } from "lucide-react";
import preloaderHero from "@/assets/preloader-hero.jpg";
import cappuccino from "@/assets/dishes/cappuccino.jpg";
import croissant from "@/assets/dishes/butter-croissant.jpg";
import waffle from "@/assets/dishes/belgian-waffle.jpg";
import mojito from "@/assets/dishes/virgin-mojito.jpg";
import { CAFE_NAME } from "@/data/menu";

const corners = [
  { src: cappuccino, className: "left-0 top-0 -translate-x-1/4 -translate-y-1/4" },
  { src: croissant, className: "right-0 top-0 translate-x-1/4 -translate-y-1/4" },
  { src: mojito, className: "bottom-0 left-0 -translate-x-1/4 translate-y-1/4" },
  { src: waffle, className: "bottom-0 right-0 translate-x-1/4 translate-y-1/4" },
];

const marks = [
  { icon: Leaf, label: "Fresh Ingredients" },
  { icon: ChefHat, label: "Expertly Brewed" },
  { icon: Heart, label: "Made With Love" },
];

export function Preloader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const duration = 1800;
    let frame = 0;

    const tick = (now: number) => {
      const pct = Math.min(100, Math.round(((now - start) / duration) * 100));
      setProgress(pct);
      if (pct < 100) {
        frame = requestAnimationFrame(tick);
      } else {
        setLeaving(true);
        window.setTimeout(onDone, 500);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [onDone]);

  return (
    <div
      className={`fixed inset-0 z-50 overflow-hidden bg-gradient-plum transition-opacity duration-500 ${
        leaving ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="absolute inset-0 opacity-25">
        {corners.map((corner) => (
          <img
            key={corner.className}
            src={corner.src}
            alt=""
            aria-hidden="true"
            width={768}
            height={768}
            className={`absolute h-40 w-40 rounded-full object-cover blur-[1px] sm:h-56 sm:w-56 ${corner.className}`}
          />
        ))}
      </div>

      <div className="relative flex min-h-full flex-col items-center justify-center gap-8 px-6 text-center">
        <div className="relative">
          <div className="absolute -inset-6 rounded-full border border-gold/30 animate-spin-slow" />
          <img
            src={preloaderHero}
            alt="Freshly poured latte with rosetta art"
            width={1024}
            height={1024}
            className="h-44 w-44 rounded-full object-cover shadow-float sm:h-56 sm:w-56"
          />
        </div>

        <div className="space-y-2">
          <p className="font-script text-2xl text-gold">welcome to</p>
          <h1 className="text-display text-5xl uppercase text-cream sm:text-6xl">{CAFE_NAME}</h1>
          <p className="text-xs uppercase tracking-[0.42em] text-cream/60">Digital Café Menu</p>
        </div>

        <div className="w-full max-w-xs">
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-cream/15">
            <div
              className="h-full rounded-full bg-gradient-gold transition-[width] duration-150 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-3 text-sm font-semibold text-gold">{progress}%</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {marks.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-cream/70">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-gold/40">
                <Icon className="h-4 w-4 text-gold" aria-hidden="true" />
              </span>
              <span className="text-[11px] uppercase tracking-widest">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
