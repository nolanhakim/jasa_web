export default function SectionHead({
  title,
  lede,
  id,
}: {
  title: string
  lede?: string
  id?: string
}) {
  return (
    <div className="flex flex-col gap-5 border-t border-line pt-8 md:flex-row md:items-start md:justify-between md:gap-16">
      <h2
        id={id}
        className="max-w-[24ch] text-pretty font-display text-[clamp(1.85rem,3.2vw,2.75rem)] font-semibold leading-[1.06] tracking-[-0.03em]"
      >
        {title}
      </h2>
      {lede && (
        <p className="max-w-[46ch] text-[15px] leading-relaxed text-ink-soft md:pt-1.5">{lede}</p>
      )}
    </div>
  )
}
