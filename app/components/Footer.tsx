import { site, navLinks, waLink } from "../lib/site"

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-accent text-white">
      <div
        aria-hidden="true"
        className="blueprint-inverse pointer-events-none absolute inset-0 [mask-image:radial-gradient(circle_at_85%_0%,black,transparent_65%)]"
      />

      <div className="relative mx-auto max-w-[1200px] px-6 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.6fr_0.7fr_0.9fr]">
          <div>
            <p className="font-display text-[26px] font-semibold tracking-[-0.03em]">
              nextcloud<span className="text-white/55">nul</span>
            </p>
            <p className="mt-3 max-w-[36ch] text-[13.5px] leading-relaxed text-white/70">
              Jasa pembuatan website dan aplikasi profesional untuk bisnis, UMKM, brand, dan
              perusahaan di seluruh Indonesia.
            </p>

            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-7 inline-flex h-11 items-center gap-2 rounded-full bg-white px-5 text-[13.5px] font-medium text-accent transition-colors hover:bg-white/90"
            >
              Chat WhatsApp
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none"
              >
                <path d="M7 17 17 7M8 7h9v9" />
              </svg>
            </a>
          </div>

          <nav aria-label="Navigasi footer" className="flex flex-col gap-3">
            <p className="text-[11px] uppercase tracking-[0.14em] text-white/50">Halaman</p>
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="w-fit text-[13.5px] text-white/75 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <p className="text-[11px] uppercase tracking-[0.14em] text-white/50">Kontak</p>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit text-[13.5px] text-white/75 transition-colors hover:text-white"
            >
              WhatsApp
            </a>
            <span className="text-[13.5px] text-white/75">{site.hours}</span>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-6 text-[12px] text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 {site.brand}</p>
        </div>
      </div>
    </footer>
  )
}
