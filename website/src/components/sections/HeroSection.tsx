"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { brand } from "@config/brand";

const VIGNETTE_BOTTOM =
  "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,0.3) 37.5%, transparent 60%)";
const VIGNETTE_LEFT =
  "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,0.3) 35%, transparent 60%)";

export function HeroSection() {
  const playUrl = "/play";
  const hero = brand.hero;

  const [imgError, setImgError] = useState(false);
  const bgSrc = brand.images?.homepageBackground ?? "/images/home-page-bg.jpg";

  return (
    <section className="relative flex min-h-screen items-end overflow-hidden md:items-center">
      <div className="absolute inset-0">
        {!imgError ? (
          <Image
            src={bgSrc}
            alt=""
            fill
            className="object-cover"
            priority
            quality={90}
            sizes="(max-width: 768px) 750px, 100vw"
            onError={() => setImgError(true)}
          />
        ) : (
          <div
            className="absolute inset-0 bg-gradient-to-br from-stone-800 via-stone-900 to-black"
            aria-hidden
          />
        )}
        <div
          className="pointer-events-none absolute inset-0 z-[1] md:hidden"
          style={{ background: VIGNETTE_BOTTOM }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 z-[1] hidden md:block"
          style={{ background: VIGNETTE_LEFT }}
          aria-hidden
        />
        <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.22),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(234,179,8,0.14),transparent_24%)]" />
      </div>

      <div className="hero-cta-container relative z-[2] mx-auto flex min-h-[52vh] w-full max-w-[min(100%,34rem)] flex-col justify-between px-6 pb-8 pt-28 text-center md:ml-[max(4rem,8vw)] md:mr-auto md:min-h-[44vh] md:px-0 md:pb-12 md:pt-20 md:text-left">
        <div>
          <div className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-black/35 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/70 backdrop-blur md:justify-start">
            <span className="h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_12px_rgba(251,146,60,0.9)]" />
            Daily esports battles
          </div>
          <h1 className="mb-6 w-full font-ultimatum tracking-wide text-white drop-shadow-lg">
            <span
              className="mt-5 block w-full leading-none text-orange-300"
              style={{ fontSize: "clamp(0.875rem, 12cqw, 3rem)" }}
            >
              {hero?.titleAccent ?? "THE BEST"}
            </span>
            <span
              className="mt-1 block w-full whitespace-nowrap leading-none"
              style={{ fontSize: "clamp(1rem, 16.5cqw, 4rem)" }}
            >
              {hero?.titleMain ?? "ESPORTS APP"}
            </span>
          </h1>
          <p className="mx-auto max-w-xl text-sm leading-6 text-white/80 md:mx-0 md:text-base">
            {hero?.subtitle ??
              "Step into fast tournaments, track live matches, and build your reputation with every win."}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <Link
              href={playUrl}
              className="inline-flex min-w-40 items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-3 font-ultimatum text-sm font-bold uppercase tracking-[0.3em] text-stone-950 transition hover:opacity-95 active:scale-[0.98]"
              style={{ boxShadow: "0 10px 30px rgba(255, 160, 0, 0.35)" }}
            >
              Play
            </Link>
            <Link
              href="#games"
              className="inline-flex min-w-40 items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-white/15"
            >
              Explore Games
            </Link>
          </div>
          <div className="mt-8 flex items-center justify-center gap-6 font-ultimatum sm:gap-8 md:justify-start">
            <div className="text-center">
              <div
                className="text-xl font-bold text-accent sm:text-2xl"
                style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}
              >
                10,000+
              </div>
              <div
                className="mt-1 text-sm font-medium text-white/80"
                style={{ textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}
              >
                Players
              </div>
            </div>
            <div className="h-10 w-px shrink-0 bg-white/50" aria-hidden />
            <div className="text-center">
              <div
                className="text-xl font-bold text-accent sm:text-2xl"
                style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}
              >
                1,000+
              </div>
              <div
                className="mt-1 text-sm font-medium text-white/80"
                style={{ textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}
              >
                Matches Hosted
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-black/30 p-4 text-left backdrop-blur">
          <div className="text-xs uppercase tracking-[0.3em] text-white/50">
            Why players stay
          </div>
          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            <div>
              <div className="text-lg font-ultimatum text-white">Fast Join</div>
              <div className="text-sm text-white/65">
                Move from signup to match lobby in minutes.
              </div>
            </div>
            <div>
              <div className="text-lg font-ultimatum text-white">Fair Play</div>
              <div className="text-sm text-white/65">
                Verified results and moderated tournaments.
              </div>
            </div>
            <div>
              <div className="text-lg font-ultimatum text-white">
                Real Rewards
              </div>
              <div className="text-sm text-white/65">
                Win coins, rankings, and bragging rights.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
