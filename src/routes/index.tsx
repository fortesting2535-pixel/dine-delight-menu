import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Preloader } from "@/components/Preloader";
import { Hero } from "@/components/Hero";
import { MenuSection } from "@/components/MenuSection";
import { StatsStrip } from "@/components/StatsStrip";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kitchen Choice — Family Restaurant Digital Menu" },
      {
        name: "description",
        content:
          "Browse the Kitchen Choice family restaurant menu: starters, tandoor, biryani, paneer and veg mains, chicken and mutton curries, seafood, breads, beverages and desserts with prices.",
      },
      { property: "og:title", content: "Kitchen Choice — Family Restaurant Digital Menu" },
      {
        property: "og:description",
        content:
          "51 dishes across 10 sections — starters, tandoor, biryani, curries, seafood, breads and desserts with prices.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
