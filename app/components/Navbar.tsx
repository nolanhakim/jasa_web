"use client"

import { useEffect, useState } from "react"
import { site, navLinks, waLink } from "../lib/site"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    const desktop = window.matchMedia("(min-width: 768px)")
    const onResize = () => {
      if (desktop.matches) setOpen(false)
    }
    document.addEventListener("keydown", onKey)
    desktop.addEventListener("change", onResize)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      desktop.removeEventListener("change", onResize)
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <>
      <header className="sticky top-3 z-50 mx-auto w-[calc(100%-2rem)] max-w-[1000px] overflow-hidden rounded-full border border-line bg-canvas/90 shadow-[0_12px_32px_-14px_rgba(8,26,51,0.28)] backdrop-blur-md">
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
      </header>

      <div
        className={`fixed inset-0 z-[60] md:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
        inert={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-ink/35 backdrop-blur-[2px] transition-opacity duration-300 motion-reduce:transition-none ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        <div
          id="menu-ponsel"
          className={`absolute inset-y-0 right-0 flex w-[86%] max-w-[340px] flex-col border-l border-line bg-canvas shadow-[-24px_0_48px_-24px_rgba(8,26,51,0.35)] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex h-[60px] shrink-0 items-center justify-between border-b border-line px-5">
            <span className="font-display text-[17px] font-semibold tracking-[-0.02em]">
              nextcloud<span className="text-accent">nul</span>
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Tutup menu"
              className="-mr-2 flex h-11 w-11 items-center justify-center rounded-sm text-ink"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <nav aria-label="Navigasi ponsel" className="flex flex-1 flex-col px-5 py-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-4 text-[16px] text-ink-soft transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="shrink-0 border-t border-line px-5 py-6">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex h-11 items-center justify-center rounded-full bg-accent text-[14px] font-medium text-white transition-colors hover:bg-accent-hover"
            >
              Konsultasi gratis
            </a>
            <p className="mt-3 text-[12px] text-ink-soft">{site.hours}</p>
          </div>
        </div>
      </div>
    </>
  )
}
