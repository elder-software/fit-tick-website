"use client";

import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const getLinkClass = (path: string) => {
    return `font-medium ${pathname === path ? "text-[#286A48]" : "hover:text-[#286A48]"}`;
  };

  return (
    <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b border-black/10 dark:border-white/10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <h1 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-[#286A48]">
            FitTick
          </h1>
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link 
            href="/" 
            className={getLinkClass("/")}
          >
            About
          </Link>
          <Link 
            href="/terms" 
            className={getLinkClass("/terms")}
          >
            Terms
          </Link>
          <Link 
            href="/privacy" 
            className={getLinkClass("/privacy")}
          >
            Privacy
          </Link>
        </nav>
        <div className="md:hidden">
          <button aria-label="Menu" className="p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
