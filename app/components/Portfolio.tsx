import { site, waLink } from "../lib/site"
import SectionHead from "./SectionHead"

export default function Portfolio() {
  return (
    <section id="karya" className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
      <SectionHead
        title="Dari landing page sampai sistem internal"
        lede="Setiap kartu mencantumkan peran yang dikerjakan, teknologi yang dipakai, dan tautan untuk melihat hasilnya."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {site.portfolio.map((p) => (
          <article
            key={p.id}
            className="flex flex-col rounded-card border border-line p-6 transition-colors hover:border-line-strong"
          >
            <p className="text-[11.5px] text-ink-soft">{p.category}</p>
            <h3 className="mt-2 font-display text-[18px] font-semibold tracking-[-0.015em]">
              {p.name}
            </h3>
            <p className="mt-2.5 text-[13.5px] leading-relaxed text-ink-soft">
              {p.description}
            </p>

            <ul className="mb-5 mt-4 flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-line px-2.5 py-1 text-[11.5px] text-ink-soft"
                >
                  {s}
                </li>
              ))}
            </ul>

            {p.demo && (
              <a
                href={p.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-auto inline-flex h-10 w-fit items-center gap-2 rounded-full border border-line-strong px-4 text-[13px] font-medium text-ink transition-colors hover:border-accent hover:text-accent"
              >
                Lihat website
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
            )}
          </article>
        ))}
      </div>

    </section>
  )
}
