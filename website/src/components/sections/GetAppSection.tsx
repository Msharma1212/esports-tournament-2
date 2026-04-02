import Link from "next/link";
import { brand } from "@config/brand";
import { Section } from "@/components/ui";

export function GetAppSection() {
  const getApp = brand.getApp;
  const playUrl = "/play";
  const description = brand.whyDownload?.description?.replace(
    "{appName}",
    brand.appName,
  );

  return (
    <Section id="download" background="card">
      <div className="overflow-hidden rounded-[2rem] bg-[#111214] text-white shadow-[0_28px_80px_rgba(15,23,42,0.18)]">
        <div className="grid gap-10 px-6 py-10 sm:px-10 lg:grid-cols-[1fr_0.9fr] lg:px-14 lg:py-14">
          <div>
            <p className="font-ultimatum text-sm uppercase tracking-[0.35em] text-orange-400">
              Ready to play
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Enter tournaments without leaving your browser.
            </h2>
            <p className="mt-4 max-w-2xl text-white/72">
              Play in your browser - sign up, join tournaments, manage coins,
              and stay match-ready from any device.
            </p>
            {description && (
              <p className="mt-3 max-w-2xl text-sm text-white/50">
                {description}
              </p>
            )}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={playUrl}
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 px-8 py-4 text-sm font-bold uppercase tracking-[0.28em] text-stone-950 transition hover:opacity-95 active:scale-[0.98]"
              >
                Play Now
              </Link>
              <Link
                href="#faq"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-4 text-sm font-semibold uppercase tracking-[0.28em] text-white transition hover:bg-white/5"
              >
                Read FAQ
              </Link>
            </div>
            <p className="mt-4 text-sm text-white/45">
              Play in your browser - no download required.
            </p>
          </div>
          <ul className="space-y-3 text-left text-white/72">
            {getApp?.features?.map((feature, i) => (
              <li
                key={i}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 backdrop-blur"
              >
                <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-orange-400" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
