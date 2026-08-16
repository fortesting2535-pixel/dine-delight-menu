import { Facebook, Instagram, Twitter, UtensilsCrossed, Youtube } from "lucide-react";
import { CAFE_NAME } from "@/data/menu";

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

export function StatsStrip() {
  return (
    <footer className="mx-auto mt-8 w-full max-w-[980px] rounded-[32px] border border-[#d4a96d]/30 bg-[#201426] px-3 py-4 text-cream shadow-[0_18px_32px_rgba(19,10,24,0.12)] sm:px-5 lg:px-6">
      <div className="flex flex-col items-center justify-center gap-4 px-2 py-3 text-center sm:gap-5">
        <div className="grid h-16 w-16 place-items-center rounded-full border border-[#d4a96d]/80 bg-transparent sm:h-[72px] sm:w-[72px]">
          <UtensilsCrossed className="h-8 w-8 text-[#f3b76a] sm:h-9 sm:w-9" />
        </div>

        <div className="text-display text-[2rem] uppercase leading-none tracking-[0.04em] text-cream sm:text-[2.8rem] lg:text-[4rem]">
          {CAFE_NAME}
        </div>

        <div className="relative flex w-full max-w-[420px] items-center justify-center">
          <div className="h-px flex-1 bg-[#d4a96d]/70" />
          <div className="mx-3 flex h-2.5 w-2.5 rotate-45 items-center justify-center border border-[#d4a96d]/80 bg-[#d4a96d]/10">
            <span className="block h-1.5 w-1.5 rotate-45 bg-[#d4a96d]" />
          </div>
          <div className="h-px flex-1 bg-[#d4a96d]/70" />
        </div>

        <div className="flex items-center justify-center gap-2.5 sm:gap-3">
          {socialLinks.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="grid h-11 w-11 place-items-center rounded-full border border-[#d4a96d]/80 bg-transparent text-cream transition hover:border-[#f3b76a] hover:text-[#f3b76a] sm:h-12 sm:w-12"
            >
              <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
          ))}
        </div>

        <div className="pt-1 text-[11px] text-cream/80 sm:text-[13px]">
          © 2024 Kitchen Choice. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
