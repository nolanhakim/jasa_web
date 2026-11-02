import { site } from "../lib/site"
import SectionHead from "./SectionHead"

export default function Services() {
  return (
    <section id="layanan" className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
      <SectionHead
        title="Enam jenis pekerjaan yang paling sering diminta"
        lede="Setiap pekerjaan dimulai dari lingkup yang jelas: jumlah halaman, tenggat, dan siapa yang menyiapkan konten."
      />

      <ul className="mt-10 border-t border-line">
        {site.services.map((s) => (
          <li key={s.title} className="border-b border-line">
            <a
              href="#harga"
              className="group grid gap-2 py-6 md:grid-cols-[14rem_1fr_auto] md:items-baseline md:gap-8 md:py-7"
            >
              <h3 className="font-display text-[19px] font-semibold tracking-[-0.015em] transition-colors group-hover:text-accent">
                {s.title}
              </h3>
              <p className="max-w-[52ch] text-[14.5px] leading-relaxed text-ink-soft">
                {s.desc}
              </p>
              <span className="mt-0.5 font-mono text-[11px] text-ink-soft md:mt-0 md:whitespace-nowrap md:text-right">
                {s.meta}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
