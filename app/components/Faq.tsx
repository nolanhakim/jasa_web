import { site, waLink } from "../lib/site"

export default function Faq() {
  return (
    <section id="faq" className="border-t border-line bg-surface/60">
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <h2 className="max-w-[16ch] font-display text-[clamp(1.85rem,3.2vw,2.75rem)] font-semibold leading-[1.06] tracking-[-0.03em]">
              Pertanyaan yang paling sering muncul
            </h2>
            <p className="mt-5 max-w-[34ch] text-[14px] leading-relaxed text-ink-soft">
              Kalau yang Anda cari belum ada di sini, tanyakan langsung lewat WhatsApp.
            </p>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex h-11 items-center gap-2 rounded-full border border-line-strong bg-canvas px-5 text-[13.5px] font-medium text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Tanya lewat WhatsApp
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

          <div className="border-t border-line">
            {site.faq.map((item) => (
              <details key={item.q} className="group border-b border-line">
                <summary className="flex cursor-pointer items-start justify-between gap-6 py-5 text-[15.5px] font-medium">
                  <span>{item.q}</span>
                  <span
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-ink-soft transition-transform duration-200 group-open:rotate-45"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </summary>
                <p className="max-w-[62ch] pb-6 pr-8 text-[14.5px] leading-relaxed text-ink-soft">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
