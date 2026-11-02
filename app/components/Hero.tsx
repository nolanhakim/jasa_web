import { site, waLink } from "../lib/site"

const lines = ["Website yang", "membuat bisnis", "Anda dipercaya."]

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="blueprint pointer-events-none absolute -right-24 -top-24 hidden h-[560px] w-[560px] [mask-image:radial-gradient(circle_at_60%_40%,black,transparent_72%)] lg:block"
      />

      <div className="relative mx-auto max-w-[1200px] px-6 pb-16 pt-16 md:pb-24 md:pt-24">
        <div className="mx-auto max-w-[46rem] text-center">
          <h1 className="font-display text-[clamp(2.6rem,6.2vw,4.6rem)] font-semibold leading-[0.98] tracking-[-0.035em]">
            {lines.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-[0.18em] -mb-[0.18em]">
                <span
                  className="rise"
                  style={{ animationDelay: `${i * 90}ms` }}
                >
                  {line}
                </span>
              </span>
            ))}
          </h1>

          <p className="mx-auto mt-7 max-w-[50ch] text-[16.5px] leading-[1.7] text-ink-soft">
            {site.description}
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:items-center sm:gap-6">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-7 text-[14.5px] font-medium text-white transition-colors hover:bg-accent-hover"
            >
              Konsultasi gratis
            </a>
            <a
              href="#harga"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-line-strong px-6 text-[14.5px] font-medium text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Lihat daftar harga
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="text-ink-soft transition-transform duration-200 ease-out group-hover:translate-y-0.5 group-hover:text-accent motion-reduce:transform-none"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
