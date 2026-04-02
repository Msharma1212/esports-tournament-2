import { brand } from "@config/brand";
import { Section } from "@/components/ui";

export function StatsSection() {
  const stats = brand.stats;

  return (
    <Section background="elevated" className="overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.16),transparent_60%)]" />
      <div className="text-center font-ultimatum">
        <h2 className="text-2xl font-bold text-text sm:text-3xl">
          {stats.title}
        </h2>
        <p className="mt-2 text-text-muted">{stats.subtitle}</p>
      </div>
      <div className="mt-12 grid gap-8 font-ultimatum sm:grid-cols-2 lg:grid-cols-4">
        {stats.items.map((item, i) => (
          <div
            key={i}
            className="rounded-3xl border border-orange-200/70 bg-white/75 px-6 py-8 text-center shadow-[0_16px_40px_rgba(15,23,42,0.06)] backdrop-blur"
          >
            <div className="text-3xl font-bold text-accent sm:text-4xl">
              {item.value}
            </div>
            <div className="mt-2 text-sm font-medium uppercase tracking-[0.22em] text-text-muted">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
