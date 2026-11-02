"use client"

import { useState } from "react"
import { site, navLinks, waLink } from "../lib/site"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header
      className={`sticky top-3 z-50 mx-auto w-[calc(100%-2rem)] max-w-[1000px] overflow-hidden border border-line bg-canvas/90 shadow-[0_12px_32px_-14px_rgba(8,26,51,0.28)] backdrop-blur-md ${
        open ? "rounded-3xl" : "rounded-full"
      }`}
    >
      <div className="flex h-[60px] items-center justify-between px-5">
        <a
          href="#"
          className="font-display text-[19px] font-semibold tracking-[-0.02em]"
          onClick={() => setOpen(false)}
        >
          nextcloud<span className="text-accent">nul</span>
        </a>

        <nav aria-label="Navigasi utama" className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-[14px] text-ink-soft transition-colors hover:bg-accent-tint hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center rounded-full bg-accent px-5 text-[13.5px] font-medium text-white transition-colors hover:bg-accent-hover"
          >
            Konsultasi gratis
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="menu-ponsel"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          className="-mr-2 flex h-11 w-11 items-center justify-center rounded-sm text-ink md:hidden"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="16" x2="21" y2="16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div id="menu-ponsel" className="border-t border-line bg-canvas px-6 py-4 md:hidden">
          <nav aria-label="Navigasi ponsel" className="flex flex-col">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-3 text-[15px] text-ink-soft"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex h-11 items-center justify-center rounded-full bg-accent text-[14px] font-medium text-white"
          >
            Konsultasi gratis
          </a>
          <p className="mt-3 text-[12px] text-ink-soft">{site.hours}</p>
        </div>
      )}
    </header>
  )
}
