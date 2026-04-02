import {
  AboutSection,
  FAQSection,
  GamesSection,
  GetAppSection,
  HeroSection,
  StatsSection,
} from "@/components/sections";
import { getStore } from "@/lib/store";

/** Re-fetch games on every request - not cached at build time */
export const dynamic = "force-dynamic";

export default async function Home() {
  const store = getStore();
  const apiGames = await store.games();
  const serverGames = apiGames.length > 0 ? apiGames : undefined;

  return (
    <main className="relative min-h-screen">
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <GamesSection serverGames={serverGames} />
      <GetAppSection />
      <FAQSection />
    </main>
  );
}
