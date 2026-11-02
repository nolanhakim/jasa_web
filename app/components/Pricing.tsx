"use client"

import { useRef, useState } from "react"
import { site, waLink } from "../lib/site"
import SectionHead from "./SectionHead"

const plans = site.pricing

export default function Pricing() {
  const [active, setActive] = useState(0)
  const tabs = useRef<Array<HTMLButtonElement | null>>([])
  const plan = plans[active]

  function select(next: number) {
    setActive(next)
    tabs.current[next]?.focus()
  }

  return (
    <section id="harga" className="border-t border-line bg-surface/60">
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
        <SectionHead
          title="Pilih jenis website, lihat harganya"
          lede="Setiap jenis punya tiga paket dengan lingkup berbeda. Klik jenisnya untuk melihat pilihan harga."
        />

        <div
          role="tablist"
          aria-label="Jenis website"
          className="mt-12 flex flex-wrap gap-2.5"
        >
          {plans.map((p, i) => {
            const isActive = i === active
            return (
              <button
                key={p.key}
                ref={(el) => {
                  tabs.current[i] = el
                }}
                id={`harga-tab-${p.key}`}
                role="tab"
                type="button"
                aria-selected={isActive}
                aria-controls="harga-panel"
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActive(i)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowRight") {
                    e.preventDefault()
                    select((active + 1) % plans.length)
                  } else if (e.key === "ArrowLeft") {
                    e.preventDefault()
                    select((active - 1 + plans.length) % plans.length)
                  } else if (e.key === "Home") {
                    e.preventDefault()
                    select(0)
                  } else if (e.key === "End") {
                    e.preventDefault()
                    select(plans.length - 1)
                  }
                }}
                className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-[13px] font-medium transition-colors ${
                  isActive
                    ? "border-accent bg-accent text-white"
                    : "border-line-strong bg-canvas text-ink-soft hover:border-accent hover:text-accent"
                }`}
              >
                {p.label}
              </button>
            )
          })}
        </div>

        <div
          key={plan.key}
          id="harga-panel"
          role="tabpanel"
          aria-labelledby={`harga-tab-${plan.key}`}
          className="panel-in mt-8 md:mt-10"
        >
          {plan.isConsultation ? (
            <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
              <div className="rounded-card border border-line bg-canvas p-8">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-accent-tint">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-accent"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <h3 className="font-display text-[20px] font-semibold leading-tight">
                  Proyek custom dimulai dari diskusi kebutuhan
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft">
                  Tidak ada paket standar. Setiap proyek punya alur, fitur, dan tantangan sendiri.
                </p>
                <p className="mt-4 text-[14.5px] leading-relaxed text-ink-soft">
                  Kita mulai dari memahami cara kerja tim Anda sekarang, lalu merancang sistem yang
                  pas—bukan memaksa bisnis Anda masuk ke template orang lain.
                </p>

                <div className="mt-8 space-y-4 border-t border-line pt-6">
                  <div className="flex gap-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.5 shrink-0 text-accent"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <div>
                      <p className="text-[14px] font-medium">Konsultasi gratis</p>
                      <p className="mt-0.5 text-[13px] text-ink-soft">
                        Ceritakan tantangan Anda, kami dengar dan tawarkan arah solusi
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.5 shrink-0 text-accent"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <div>
                      <p className="text-[14px] font-medium">Proposal & estimasi tertulis</p>
                      <p className="mt-0.5 text-[13px] text-ink-soft">
                        Rincian fitur, timeline, dan biaya—tidak ada biaya tersembunyi
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.5 shrink-0 text-accent"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <div>
                      <p className="text-[14px] font-medium">Mulai setelah Anda setuju</p>
                      <p className="mt-0.5 text-[13px] text-ink-soft">
                        Tidak ada komitmen sebelum proposal disetujui
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href={waLink(
                    `Halo nextcloudnul, saya ingin konsultasi untuk website custom. Bisa kita diskusi?`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex h-12 w-full items-center justify-center rounded-full bg-accent px-7 text-[14px] font-medium text-white transition-colors hover:bg-accent-hover"
                >
                  Mulai Konsultasi Gratis
                </a>
              </div>

              <div className="rounded-card border border-line bg-surface/40 p-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink-soft">
                  Contoh proyek custom
                </p>
                <div className="mt-6 space-y-6">
                  <div>
                    <h4 className="text-[15px] font-semibold">Sistem manajemen inventori + POS</h4>
                    <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-soft">
                      Dashboard stok real-time, laporan penjualan per cabang, integrasi printer
                      kasir, dan notifikasi stok menipis
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[15px] font-semibold">Portal membership gym</h4>
                    <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-soft">
                      Member booking kelas, tracking absensi, perpanjangan otomatis, dan dashboard
                      trainer untuk jadwal harian
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[15px] font-semibold">Platform lelang online</h4>
                    <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-soft">
                      Sistem bidding real-time, notifikasi outbid, escrow payment, dan verifikasi
                      seller
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[15px] font-semibold">CRM untuk agen properti</h4>
                    <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-soft">
                      Lead tracking, follow-up reminder, pipeline visual, WhatsApp broadcast, dan
                      laporan komisi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid gap-6 lg:grid-cols-3">
              {plan.tiers?.map((tier) => (
                <div
                  key={tier.name}
                  className="flex flex-col rounded-card border border-line bg-canvas p-7"
                >
                  <div className="flex items-baseline gap-2 text-ink-soft">
                    <span className="font-display text-[15px] font-semibold text-ink">
                      {tier.name}
                    </span>
                  </div>
                  <p className="mt-1 text-[12px] text-ink-soft">{tier.term}</p>

                  <p className="mt-6 font-display text-[32px] font-semibold leading-none tracking-[-0.03em]">
                    {tier.price}
                  </p>
                  <p className="mt-2 text-[12.5px] text-ink-soft">
                    Domain .com + hosting tahun pertama
                  </p>

                  <p className="mt-6 border-t border-line pt-5 text-[13.5px] leading-relaxed text-ink-soft">
                    {tier.forWhom}
                  </p>

                  <ul className="mt-6 flex flex-1 flex-col gap-2.5">
                    {tier.features.map((f) => (
                      <li key={f} className="flex gap-2.5 text-[13.5px] leading-snug">
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                          className="mt-[2px] shrink-0 text-accent"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={waLink(
                      `Halo nextcloudnul, saya tertarik dengan ${plan.label} paket ${tier.name}. Bisa minta rincian biayanya?`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex h-11 items-center justify-center rounded-full bg-accent px-6 text-[13.5px] font-medium text-white transition-colors hover:bg-accent-hover"
                  >
                    Mulai dengan {tier.name}
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-8 flex items-start gap-3 rounded-card border border-line bg-canvas p-5">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mt-0.5 shrink-0 text-accent"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>
          <div>
            <p className="text-[13.5px] font-medium">Pembayaran 3 termin</p>
            <p className="mt-1 text-[12.5px] leading-relaxed text-ink-soft">
              Tidak perlu lunas di depan — biaya dibagi 3 tahap: saat mulai, saat progres, dan
              pelunasan setelah website siap online.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
