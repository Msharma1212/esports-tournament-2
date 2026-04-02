import { brand } from "@config/brand";
import { Section } from "@/components/ui";

export function AboutSection() {
  const about = brand.about;

  return (
    <Section id="about" background="base">
      <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div>
          <p className="font-ultimatum text-sm uppercase tracking-[0.35em] text-orange-500">
            Built for the climb
          </p>
          <h2 className="mt-4 text-3xl font-bold text-text sm:text-4xl">
            {about.title}
          </h2>
          <div className="mt-6 max-w-2xl space-y-4 text-lg leading-8 text-text-muted">
            <p>{about.paragraph1}</p>
            <p>{about.paragraph2}</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <div className="rounded-full border border-border bg-card px-4 py-2 text-sm text-text">
              Browser-based entry
            </div>
            <div className="rounded-full border border-border bg-card px-4 py-2 text-sm text-text">
              Admin-managed tournaments
            </div>
            <div className="rounded-full border border-border bg-card px-4 py-2 text-sm text-text">
              Competitive coin economy
            </div>
          </div>
        </div>
        <ul className="grid gap-3 text-left">
          {about.features.map((feature, i) => (
            <li
              key={i}
              className="flex items-start gap-3 rounded-2xl border border-border bg-card px-5 py-4 shadow-sm"
            >
              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-500/10 text-sm font-bold text-accent">
                ✓
              </span>
              <span className="text-text">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
