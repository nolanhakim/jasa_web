import { site } from "../lib/site"
import SectionHead from "./SectionHead"

export default function Commitments() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
      <SectionHead
        title="Yang berlaku di semua jenis website"
        lede="Empat hal ini tidak berubah, berapa pun lingkup yang Anda pilih."
      />

      <dl className="mt-12 grid gap-x-14 gap-y-9 sm:grid-cols-2">
        {site.commitments.map((c) => (
          <div key={c.title} className="border-t border-line pt-5">
            <dt className="font-display text-[17px] font-semibold tracking-[-0.015em]">
              {c.title}
            </dt>
            <dd className="mt-2 text-[14px] leading-relaxed text-ink-soft">{c.desc}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
