import { site } from "../lib/site"
import SectionHead from "./SectionHead"

export default function Process() {
  return (
    <section id="proses" className="border-t border-line bg-surface/60">
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
        <SectionHead
          title="Empat langkah, dari obrolan awal sampai rilis"
          lede="Anda selalu tahu pekerjaan sedang di tahap mana. Setiap tahap selesai sebelum tahap berikutnya dimulai."
        />

        <ol className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {site.process.map((step) => (
            <li key={step.step} className="border-t border-line-strong pt-5">
              <span className="font-mono text-[11.5px] text-accent">{step.step}</span>
              <h3 className="mt-3 font-display text-[18px] font-semibold tracking-[-0.015em]">
                {step.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
