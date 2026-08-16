import { useEffect, useState, useCallback } from "react";
import {
  ChefHat,
  UtensilsCrossed,
  Heart,
  Sparkles,
  ShieldCheck,
  Leaf,
} from "lucide-react";
import preloaderHero from "@/assets/menu/tandoori-chicken-full.jpg";
import butterChicken from "@/assets/menu/butter-chicken.jpg";
import paneerTikka from "@/assets/menu/paneer-tikka.jpg";
import butterNaan from "@/assets/menu/butter-naan.jpg";
import gulabJamun from "@/assets/menu/gulab-jamun.jpg";
import { CAFE_NAME } from "@/data/menu";

/* ── corner food images ─────────────────────────── */
const corners = [
  {
    src: butterChicken,
    pos: "left-[-30px] top-[8%]",
    size: "h-32 w-32 sm:h-44 sm:w-44",
    delay: "0s",
  },
  {
    src: paneerTikka,
    pos: "right-[-30px] top-[6%]",
    size: "h-28 w-28 sm:h-40 sm:w-40",
    delay: "1s",
  },
  {
    src: butterNaan,
    pos: "left-[-20px] bottom-[10%]",
    size: "h-28 w-28 sm:h-38 sm:w-38",
    delay: "2s",
  },
  {
    src: gulabJamun,
    pos: "right-[-20px] bottom-[8%]",
    size: "h-30 w-30 sm:h-42 sm:w-42",
    delay: "1.5s",
  },
];

/* ── quality badges ─────────────────────────────── */
const badges = [
  { icon: Leaf, label: "Fresh\nIngredients" },
  { icon: UtensilsCrossed, label: "Expertly\nPrepared" },
  { icon: ShieldCheck, label: "Hygienic\nKitchen" },
  { icon: Heart, label: "Made With\nLove" },
];

/* ── sparkle positions ──────────────────────────── */
const sparkles = [
  { top: "18%", left: "15%", delay: "0s", size: 14 },
  { top: "25%", left: "78%", delay: "0.8s", size: 10 },
  { top: "55%", left: "10%", delay: "1.2s", size: 12 },
  { top: "60%", left: "88%", delay: "0.4s", size: 16 },
  { top: "42%", left: "22%", delay: "1.8s", size: 8 },
  { top: "38%", left: "82%", delay: "2.2s", size: 11 },
];

export function Preloader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);

  const stableOnDone = useCallback(onDone, [onDone]);

  useEffect(() => {
    const start = performance.now();
    const duration = 2800;
    let frame = 0;

    const tick = (now: number) => {
      const elapsed = now - start;
      /* ease-out curve for a more natural feel */
      const linear = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - linear, 3);
      const pct = Math.min(100, Math.round(eased * 100));

      setProgress(pct);

      if (pct < 100) {
        frame = requestAnimationFrame(tick);
      } else {
        setLeaving(true);
        window.setTimeout(stableOnDone, 600);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [stableOnDone]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center overflow-hidden transition-all duration-600 ${
        leaving
          ? "opacity-0 scale-105"
          : "opacity-100 scale-100"
      }`}
      style={{ background: "linear-gradient(170deg, #FFF8F0 0%, #FDF1E5 40%, #FFF5EB 100%)" }}
    >
      {/* ── Decorative ring outlines ── */}
      <div
        className="pointer-events-none absolute left-[-60px] top-[15%] h-48 w-48 rounded-full border border-orange/15 sm:h-64 sm:w-64"
        style={{ animation: "kc-spin-slow 30s linear infinite reverse" }}
      />
      <div
        className="pointer-events-none absolute right-[-40px] bottom-[20%] h-56 w-56 rounded-full border border-orange/10 sm:h-72 sm:w-72"
        style={{ animation: "kc-spin-slow 25s linear infinite" }}
      />

      {/* ── Corner food images (faded, drifting) ── */}
      {corners.map((c) => (
        <img
          key={c.pos}
          src={c.src}
          alt=""
          aria-hidden="true"
          width={384}
          height={384}
          className={`pointer-events-none absolute rounded-full object-cover opacity-[0.18] blur-[2px] ${c.pos} ${c.size}`}
          style={{ animation: `kc-drift 10s ease-in-out ${c.delay} infinite` }}
        />
      ))}

      {/* ── Sparkle decorations ── */}
      {sparkles.map((s, i) => (
        <Sparkles
          key={i}
          className="pointer-events-none absolute text-orange/50"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            animation: `kc-sparkle 2.5s ease-in-out ${s.delay} infinite`,
          }}
          aria-hidden="true"
        />
      ))}

      {/* ── Leaf / herb doodle outlines ── */}
      <svg
        className="pointer-events-none absolute right-[12%] top-[22%] opacity-[0.12]"
        width="40" height="40" viewBox="0 0 40 40" fill="none"
        style={{ animation: "kc-drift 7s ease-in-out 0.5s infinite" }}
        aria-hidden="true"
      >
        <path d="M20 4C20 4 8 14 8 24C8 30.6 13.4 36 20 36C26.6 36 32 30.6 32 24C32 14 20 4 20 4Z" stroke="currentColor" strokeWidth="1.5" className="text-orange" />
        <line x1="20" y1="14" x2="20" y2="36" stroke="currentColor" strokeWidth="1" className="text-orange" />
      </svg>
      <svg
        className="pointer-events-none absolute left-[14%] bottom-[30%] opacity-[0.10]"
        width="32" height="32" viewBox="0 0 40 40" fill="none"
        style={{ animation: "kc-drift 9s ease-in-out 2s infinite", transform: "scaleX(-1)" }}
        aria-hidden="true"
      >
        <path d="M20 4C20 4 8 14 8 24C8 30.6 13.4 36 20 36C26.6 36 32 30.6 32 24C32 14 20 4 20 4Z" stroke="currentColor" strokeWidth="1.5" className="text-orange" />
        <line x1="20" y1="14" x2="20" y2="36" stroke="currentColor" strokeWidth="1" className="text-orange" />
      </svg>

      {/* ── Main content ── */}
      <div className="relative z-10 flex min-h-full w-full max-w-sm flex-col items-center justify-center gap-5 px-6 py-10">

        {/* ── Chef hat + cutlery logo ── */}
        <div
          className="relative flex flex-col items-center"
          style={{ animation: "kc-fade-in-up 0.8s cubic-bezier(0.22,1,0.36,1) both" }}
        >
          <div className="relative">
            <ChefHat
              className="h-14 w-14 text-orange drop-shadow-sm sm:h-16 sm:w-16"
              strokeWidth={1.6}
            />
            <UtensilsCrossed
              className="absolute -bottom-2 left-1/2 h-5 w-5 -translate-x-1/2 text-plum-deep/70"
              strokeWidth={2}
            />
          </div>
        </div>

        {/* ── Restaurant name ── */}
        <div
          className="text-center"
          style={{ animation: "kc-fade-in-up 0.8s cubic-bezier(0.22,1,0.36,1) 0.2s both" }}
        >
          <h1
            className="text-display text-[2.6rem] uppercase leading-[0.95] sm:text-5xl"
            style={{ color: "var(--plum-deep)" }}
          >
            {CAFE_NAME}
          </h1>
          <p className="mt-1.5 flex items-center justify-center gap-2 text-xs tracking-[0.18em]" style={{ color: "var(--plum)" }}>
            <span className="h-px w-6" style={{ background: "var(--orange)" }} />
            Good Food, Made With Love
            <Heart className="inline h-3 w-3 fill-current text-orange" />
            <span className="h-px w-6" style={{ background: "var(--orange)" }} />
          </p>
        </div>

        {/* ── Hero dish with cloche / steam ── */}
        <div
          className="relative mt-2 flex items-center justify-center"
          style={{ animation: "kc-scale-in 0.7s cubic-bezier(0.22,1,0.36,1) 0.4s both" }}
        >
          {/* Outer dashed ring */}
          <div
            className="absolute h-52 w-52 rounded-full border border-dashed border-orange/25 sm:h-60 sm:w-60"
            style={{ animation: "kc-spin-slow 20s linear infinite" }}
          />
          {/* Inner glow */}
          <div
            className="absolute h-44 w-44 rounded-full sm:h-52 sm:w-52"
            style={{
              background: "radial-gradient(circle, rgba(255,200,120,0.25) 0%, transparent 70%)",
              animation: "kc-pulse-glow 3s ease-in-out infinite",
            }}
          />
          {/* Dish image */}
          <div className="relative">
            <img
              src={preloaderHero}
              alt="Tandoori chicken platter fresh from the clay oven"
              width={384}
              height={384}
              className="h-40 w-40 rounded-full object-cover shadow-float sm:h-48 sm:w-48"
              style={{ border: "3px solid rgba(255,170,70,0.3)" }}
            />
            {/* Steam particles */}
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="absolute left-1/2 top-0 -translate-x-1/2 rounded-full"
                style={{
                  width: 6 + i * 3,
                  height: 6 + i * 3,
                  background: "rgba(255,170,70,0.35)",
                  animation: `kc-steam 2s ease-out ${i * 0.6}s infinite`,
                }}
              />
            ))}
          </div>

          {/* Small dot accents orbiting */}
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange/40"
              style={{
                animation: `kc-orbit 15s linear ${i * 3.75}s infinite`,
              }}
            />
          ))}
        </div>

        {/* ── "Preparing something delicious…" ── */}
        <div
          className="mt-1 text-center"
          style={{ animation: "kc-fade-in-up 0.7s cubic-bezier(0.22,1,0.36,1) 0.7s both" }}
        >
          <p className="font-script text-xl text-orange">
            Preparing{" "}
            <Sparkles className="inline h-4 w-4 animate-sparkle text-orange" />
          </p>
          <p
            className="text-display text-lg uppercase tracking-wide sm:text-xl"
            style={{ color: "var(--plum-deep)" }}
          >
            Something Delicious…
          </p>
        </div>

        {/* ── Progress bar ── */}
        <div
          className="w-full max-w-[280px]"
          style={{ animation: "kc-fade-in-up 0.6s cubic-bezier(0.22,1,0.36,1) 0.9s both" }}
        >
          <div className="h-2.5 w-full overflow-hidden rounded-full bg-orange/15">
            <div
              className="relative h-full rounded-full transition-[width] duration-100 ease-out"
              style={{
                width: `${progress}%`,
                background: "linear-gradient(100deg, var(--gold), var(--orange))",
              }}
            >
              {/* Shimmer overlay */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "linear-gradient(100deg, transparent 30%, rgba(255,255,255,0.45) 50%, transparent 70%)",
                  backgroundSize: "200% 100%",
                  animation: "kc-shimmer 1.5s linear infinite",
                }}
              />
            </div>
          </div>
          <p
            className="mt-2 text-right text-sm font-semibold"
            style={{ color: "var(--orange)" }}
          >
            {progress}%
          </p>
        </div>

        {/* ── Quality badges ── */}
        <div
          className="flex w-full items-stretch justify-center gap-2 sm:gap-3"
          style={{ animation: "kc-fade-in-up 0.6s cubic-bezier(0.22,1,0.36,1) 1.1s both" }}
        >
          {badges.map(({ icon: Icon, label }, i) => (
            <div
              key={label}
              className="flex flex-1 flex-col items-center gap-1.5 rounded-xl border border-orange/15 bg-white/60 px-2 py-3 backdrop-blur-sm"
              style={{
                animation: `kc-bounce-subtle 2.5s ease-in-out ${i * 0.3}s infinite`,
              }}
            >
              <span
                className="grid h-9 w-9 place-items-center rounded-full"
                style={{ background: "linear-gradient(135deg, var(--plum), var(--plum-deep))" }}
              >
                <Icon className="h-4 w-4 text-cream" aria-hidden="true" />
              </span>
              <span
                className="text-center text-[9px] font-semibold uppercase leading-tight tracking-wider sm:text-[10px]"
                style={{ color: "var(--plum-deep)" }}
              >
                {label.split("\n").map((line, li) => (
                  <span key={li}>
                    {line}
                    {li === 0 && <br />}
                  </span>
                ))}
              </span>
            </div>
          ))}
        </div>

        {/* ── Bottom tagline ── */}
        <p
          className="font-script text-sm text-orange/80"
          style={{ animation: "kc-fade-in-up 0.5s cubic-bezier(0.22,1,0.36,1) 1.3s both" }}
        >
          ✦ Please wait a moment ✦
        </p>
      </div>
    </div>
  );
}
