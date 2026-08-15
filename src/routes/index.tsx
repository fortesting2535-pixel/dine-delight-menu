import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Preloader } from "@/components/Preloader";
import { Hero } from "@/components/Hero";
import { MenuSection } from "@/components/MenuSection";
import { StatsStrip } from "@/components/StatsStrip";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kitchen Choice — Digital Café Menu" },
      {
        name: "description",
        content:
          "Browse the Kitchen Choice café menu: coffee, iced coffee, signature coolers, fresh bakes, savoury bites and desserts with prices.",
      },
      { property: "og:title", content: "Kitchen Choice — Digital Café Menu" },
      {
        property: "og:description",
        content:
          "Coffee, iced coffee, signature coolers, bakery, bites and desserts — browse the full café menu with prices.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  return (
    <>
      {loading ? <Preloader onDone={() => setLoading(false)} /> : null}
      <main className={loading ? "opacity-0" : "animate-rise"}>
        <Hero query={query} onQueryChange={setQuery} />
        <MenuSection query={query} />
        <StatsStrip />
      </main>
    </>
  );
}
