import Link from "next/link";
import Image from "next/image";
import { brand } from "@config/brand";

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
        
        {/* LOGO + BRAND */}
        <Link href="/" className="flex items-center gap-3 text-white">
          <Image
            src="/images/logo.jpg"
            alt="logo"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />

          <span>
            <span className="block text-lg font-bold tracking-tight sm:text-xl">
              {brand.appName}
            </span>
            <span className="hidden text-xs uppercase tracking-[0.3em] text-white/45 sm:block">
              Competitive Arena
            </span>
          </span>
        </Link>

        {/* NAVBAR */}
        <nav className="flex items-center gap-2 sm:gap-4 lg:gap-6">
          <Link
            href="#about"
            className="hidden text-sm text-gray-300 transition hover:text-white sm:inline sm:text-base"
          >
            About
          </Link>

          <Link
            href="#games"
            className="hidden text-sm text-gray-300 transition hover:text-white sm:inline sm:text-base"
          >
            Games
          </Link>

          <Link
            href="#faq"
            className="hidden text-sm text-gray-300 transition hover:text-white sm:inline sm:text-base"
          >
            FAQ
          </Link>

          <Link
            href="/play"
            className="rounded-full border border-orange-400/40 bg-orange-500 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-stone-950 transition hover:bg-orange-400 sm:text-sm"
          >
            Play Now
          </Link>
        </nav>

      </div>
    </header>
  );
}