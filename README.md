# nextcloudnul — Landing page jasa pembuatan website

Landing page satu halaman untuk jasa pembuatan website: layanan, harga, portofolio,
proses kerja, komitmen, dan FAQ. Semua konten berbahasa Indonesia.

## Stack

- Next.js 16.4.3 (App Router, Turbopack)
- React 19
- TypeScript 5 (strict)
- Tailwind CSS 4 (lewat `@tailwindcss/turbopack`, konfigurasi di `app/globals.css`)
- Font: Bricolage Grotesque (display), Instrument Sans (body), Geist Mono (kode) via `next/font`

Tidak ada database, API route, atau CMS. Seluruh teks disimpan sebagai data statis.

## Menjalankan

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build produksi
npm run start   # jalankan hasil build
npm run lint    # eslint
npx tsc --noEmit  # cek tipe
```

## Struktur

```
app/
  layout.tsx            Metadata, font, JSON-LD (ProfessionalService)
  page.tsx              Urutan section halaman
  globals.css           Design token + kelas utilitas (blueprint, rise, dsb.)
  favicon.ico           Ikon situs
  lib/site.ts           SEMUA konten: brand, layanan, harga, portofolio, FAQ, nav
  components/
    Navbar.tsx          Navbar melayang di tengah + menu ponsel
    Hero.tsx            Judul, deskripsi, dua tombol aksi
    Services.tsx        Jenis layanan
    Pricing.tsx         Paket harga
    Portfolio.tsx       Grid proyek + tautan demo
    Process.tsx         Tahapan pengerjaan
    Commitments.tsx     Janji/garansi
    Faq.tsx             Accordion pertanyaan (pakai <details>)
    Footer.tsx          Penutup biru + kontak WhatsApp
    SectionHead.tsx     Judul + lede section (dipakai beberapa section)
public/                 Aset statis (saat ini hanya SVG bawaan Next.js)
```

Urutan section di `app/page.tsx`: Hero → Services → Pricing → Portfolio → Process →
Commitments → Faq → Footer.

## Mengubah konten

Hampir semua teks ada di `app/lib/site.ts`:

| Key | Isi |
| --- | --- |
| `brand`, `tagline`, `description` | Identitas dan meta description |
| `whatsapp`, `waMessage`, `hours` | Kontak dan jam balasan |
| `services` | Jenis layanan beserta estimasi waktu |
| `pricing` | Paket harga dan rincian fitur |
| `portfolio` | Daftar proyek: `name`, `category`, `description`, `stack`, `demo`, `source`, `image` |
| `process`, `commitments`, `faq` | Tahapan, janji, dan pertanyaan |
| `navLinks` | Menu navbar dan footer |
| `waLink(pesan?)` | Helper pembuat tautan WhatsApp |

Catatan:

- `portfolio[].image` dan `portfolio[].source` belum dirender. Ikon panah pada kartu
  portofolio hanya tombol "Lihat website" yang memakai `demo`.
- `site.specs` dan `site.techStack` tidak lagi dipakai di halaman; aman dihapus kalau
  tidak dibutuhkan.
- Nomor WhatsApp memakai format internasional tanpa `+` (contoh `62895422854189`).

## Design token

Didefinisikan di `app/globals.css` dan tersedia sebagai kelas Tailwind
(`bg-canvas`, `text-ink`, `border-line`, `bg-accent`, `rounded-card`, dst).

| Token | Nilai | Dipakai untuk |
| --- | --- | --- |
| `--canvas` | `#ffffff` | Latar halaman |
| `--surface` | `#f5f7fb` | Latar kartu dan section bergaris |
| `--ink` | `#081a33` | Teks utama |
| `--ink-soft` | `#4a5b74` | Teks sekunder |
| `--line` / `--line-strong` | `#e3e9f3` / `#c9d5e8` | Garis dan border |
| `--accent` | `#1b4bdb` | Biru utama (tombol, footer, tautan) |
| `--accent-hover` | `#143aae` | Hover tombol utama |
| `--accent-tint` | `#eef3ff` | Latar hover halus |

## Ikon situs

Next.js otomatis memakai `app/favicon.ico`. Untuk menggantinya dengan gambar sendiri,
simpan sebagai `app/icon.png` (persegi, minimal 512×512) — file itu langsung menjadi ikon
tab dan tidak perlu diubah di `layout.tsx`. Menghapus `favicon.ico` juga disarankan supaya
tidak ada dua ikon yang bersaing.

## SEO

- Metadata dan Open Graph di `app/layout.tsx`.
- JSON-LD `ProfessionalService` (nama, telepon, jam buka) di `<head>`.
- Belum ada `sitemap`/`robots`: tambahkan `app/sitemap.ts` dan `app/robots.ts` kalau
  sudah memakai domain produksi, lalu isi `metadataBase` dengan URL tersebut.

## Deploy

Cocok untuk Vercel (tanpa konfigurasi tambahan) atau hosting Node.js mana pun:

```bash
npm run build
npm run start
```

Domain custom dan SSL diatur di platform hosting, bukan di repo ini.
