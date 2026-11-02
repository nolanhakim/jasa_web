export const site = {
  brand: "nextcloudnul",
  tagline: "Website yang membuat bisnis Anda dipercaya.",
  description:
    "Jasa pembuatan website untuk UMKM, klinik, toko online, dan perusahaan. Desain, kode, dan SEO dikerjakan satu tim, dengan waktu pengerjaan yang disepakati sebelum mulai.",
  whatsapp: "62895422854189",
  waMessage: "Halo nextcloudnul, saya ingin membuat website. Bisa konsultasi dulu?",
  hours: "Senin–Sabtu, 09.00–20.00 WIB",

  specs: [
    { label: "Waktu pengerjaan", value: "3–5 hari untuk landing page" },
    { label: "Sudah termasuk", value: "Domain, hosting, dan SSL 1 tahun" },
    { label: "Setelah rilis", value: "Garansi perbaikan bug 1 bulan" },
    { label: "Harga", value: "Mulai Rp 850.000, disepakati di awal" },
  ],

  services: [
    {
      title: "Landing page",
      desc: "Satu tujuan: membuat pengunjung menghubungi Anda.",
      meta: "3–5 hari",
      icon: "rocket",
    },
    {
      title: "Website profil",
      desc: "Ruang untuk menjelaskan perusahaan: layanan, tim, dan alasan orang memilih Anda.",
      meta: "7–10 hari",
      icon: "building",
    },
    {
      title: "Toko online",
      desc: "Katalog, keranjang, dan pembayaran. Produk bisa ditambah sendiri lewat panel admin.",
      meta: "2–4 minggu",
      icon: "cart",
    },
    {
      title: "Aplikasi web",
      desc: "Dashboard, sistem internal, atau alat khusus yang mengikuti cara kerja tim Anda.",
      meta: "Sesuai lingkup · 4–8 minggu",
      icon: "code",
    },
    {
      title: "Perbaikan website",
      desc: "Website lama dirapikan: tampilan diperbarui, halaman dimuat lebih cepat.",
      meta: "Audit dulu · 3–7 hari",
      icon: "refresh",
    },
    {
      title: "Perawatan bulanan",
      desc: "Pembaruan sistem, perbaikan bug, dan perubahan konten setiap bulan.",
      meta: "Bulanan",
      icon: "shield",
    },
  ],

  pricing: [
    {
      key: "landing",
      label: "Landing Page",
      desc: "Satu halaman untuk satu tujuan: membuat pengunjung menghubungi Anda.",
      tiers: [
        {
          name: "Starter",
          badge: "6 section",
          price: "Rp 850.000",
          term: "3–5 hari kerja",
          forWhom: "Untuk bisnis baru yang butuh hadir online dengan cepat dan profesional",
          features: [
            "Desain custom hingga 6 section",
            "Responsive mobile & desktop",
            "Tombol WhatsApp & CTA (pesan otomatis terisi)",
            "SEO on-page dasar",
            "Garansi Revisi 1x",
            "Support Maintenance 1 Bulan",
          ],
        },
        {
          name: "Growth",
          badge: "10 section",
          price: "Rp 1.500.000",
          term: "4–6 hari kerja",
          forWhom: "Untuk bisnis yang serius mengubah pengunjung jadi leads dan pembeli",
          features: [
            "Desain custom hingga 10 section",
            "Responsive mobile & desktop",
            "Tombol WhatsApp & CTA (pesan otomatis terisi)",
            "SEO on-page lengkap (meta tags, structured data)",
            "Bantuan copywriting penjualan",
            "Section testimoni, FAQ & galeri",
            "Form leads terkirim ke WhatsApp dalam format rapi",
            "Garansi Revisi 3x",
            "Support Maintenance 2 Bulan",
          ],
        },
        {
          name: "Scale",
          badge: "15 section",
          price: "Rp 2.000.000",
          term: "5–7 hari kerja",
          forWhom: "Untuk bisnis established yang ingin maksimalkan konversi dari setiap klik",
          features: [
            "Desain premium hingga 15 section",
            "Responsive mobile & desktop (testing multi-device)",
            "Tombol WhatsApp & CTA (pesan otomatis terisi)",
            "SEO on-page premium (meta, schema, sitemap)",
            "Bantuan copywriting penjualan",
            "Section testimoni, FAQ & galeri",
            "Form leads terkirim ke WhatsApp dalam format rapi",
            "Multi-CTA, pop-up promo & countdown timer",
            "Integrasi Google Analytics",
            "Garansi Revisi 5x",
            "Support Maintenance 3 Bulan",
          ],
        },
      ],
    },
    {
      key: "comprof",
      label: "Company Profile",
      desc: "Beberapa halaman untuk menjelaskan perusahaan, layanan, dan tim.",
      tiers: [
        {
          name: "Starter",
          badge: "3 halaman",
          price: "Rp 2.000.000",
          term: "7–9 hari kerja",
          forWhom: "Untuk perusahaan yang butuh tampilan profesional dengan informasi dasar",
          features: [
            "Sampai 3 halaman",
            "Profil, layanan, kontak",
            "Desain template disesuaikan",
            "Responsif mobile",
            "Domain dan hosting 1 tahun",
            "Satu kali revisi",
          ],
        },
        {
          name: "Growth",
          badge: "5 halaman",
          price: "Rp 2.750.000",
          term: "10–14 hari kerja",
          forWhom: "Untuk perusahaan yang ingin tampil kredibel dengan konten lengkap dan admin panel",
          features: [
            "Sampai 5 halaman",
            "Profil, layanan, tim, kontak",
            "Panel admin untuk ubah konten",
            "Struktur dasar SEO",
            "Domain, hosting, SSL 1 tahun",
            "Tiga kali revisi desain",
          ],
        },
        {
          name: "Scale",
          badge: "Unlimited",
          price: "Rp 4.000.000",
          term: "2–3 minggu kerja",
          forWhom: "Untuk perusahaan besar yang butuh website lengkap dengan blog dan multi-bahasa",
          features: [
            "Halaman tanpa batas",
            "Blog/berita dengan kategori",
            "Panel admin lengkap",
            "SEO on-page penuh",
            "Multilingual (2 bahasa)",
            "Domain, hosting, SSL 1 tahun",
            "Revisi tanpa batas selama pengerjaan",
          ],
        },
      ],
    },
    {
      key: "toko",
      label: "Toko Online",
      desc: "Katalog produk dengan keranjang dan alur pemesanan.",
      tiers: [
        {
          name: "Starter",
          badge: "50 produk",
          price: "Rp 3.000.000",
          term: "2–3 minggu kerja",
          forWhom: "Toko online dengan katalog dan keranjang belanja, pesanan langsung masuk ke WhatsApp",
          features: [
            "Desain custom responsif (beranda, katalog, detail produk, tentang & kontak)",
            "Katalog produk lengkap dengan kategori, foto & harga",
            "Panel admin: kelola produk, kategori & banner promo",
            "Training panel admin (1 sesi online)",
            "Keranjang belanja & form checkout (nama, alamat & catatan)",
            "Data pesanan otomatis terkirim ke WhatsApp dalam format rapi",
            "Live chat widget & tombol WhatsApp",
            "SEO on-page + meta, sitemap & Google Search Console",
            "Setup Google Analytics & Google Maps Business",
            "Maintenance 30 hari setelah serah terima",
          ],
        },
        {
          name: "Growth",
          badge: "Unlimited",
          price: "Rp 4.000.000",
          term: "3–4 minggu kerja",
          forWhom: "Toko online dengan payment gateway otomatis dan notifikasi email untuk customer",
          features: [
            "Desain custom responsif (beranda, katalog, detail produk, tentang & kontak)",
            "Produk unlimited dengan varian (warna, ukuran, dll)",
            "Panel admin: kelola produk, pesanan, kategori & banner",
            "Training panel admin (2 sesi online)",
            "Keranjang belanja & checkout dengan integrasi payment gateway",
            "Notifikasi pesanan ke WhatsApp & email otomatis",
            "Status pesanan (diproses, dikirim, selesai)",
            "Live chat widget & tombol WhatsApp",
            "SEO on-page lengkap + meta, sitemap & Google Search Console",
            "Setup Google Analytics, Google Maps & Facebook Pixel",
            "Maintenance 30 hari setelah serah terima",
          ],
        },
        {
          name: "Scale",
          badge: "Enterprise",
          price: "Rp 6.000.000",
          term: "4–6 minggu kerja",
          forWhom: "E-commerce lengkap dengan member dan dashboard analytics penjualan",
          features: [
            "Desain premium responsif (beranda, katalog, detail produk, tentang & kontak)",
            "Produk unlimited dengan varian & stok management",
            "Panel admin: kelola produk, pesanan, member, diskon & analytics",
            "Training panel admin (3 sesi online)",
            "Keranjang belanja & checkout dengan multi payment gateway",
            "Sistem member: register, login & riwayat pesanan",
            "Notifikasi pesanan ke WhatsApp & email dengan tracking",
            "Dashboard analytics: penjualan, produk terlaris & laporan",
            "Live chat widget & tombol WhatsApp",
            "SEO on-page premium + meta, schema, sitemap & GSC",
            "Setup Google Analytics 4, Google Maps, Facebook Pixel & TikTok Pixel",
            "Maintenance 30 hari setelah serah terima",
          ],
        },
      ],
    },
    {
      key: "booking",
      label: "Sistem Booking",
      desc: "Jadwal, pendaftaran, dan pengingat untuk layanan berbasis waktu.",
      tiers: [
        {
          name: "Starter",
          badge: "Booking via WhatsApp",
          price: "Rp 2.500.000",
          term: "3–4 minggu kerja",
          forWhom: "Website profil bisnis lengkap dengan form booking yang langsung masuk ke WhatsApp",
          features: [
            "Desain custom responsif hingga 8 halaman",
            "Halaman layanan/paket lengkap dengan harga & galeri",
            "Blog / artikel dinamis (panel admin)",
            "Galeri portfolio dinamis",
            "Training panel admin (1 sesi online)",
            "Form booking: layanan, tanggal, jam, jumlah orang & kontak",
            "Data booking otomatis terkirim ke WhatsApp dalam format rapi",
            "Live chat widget & tombol WhatsApp",
            "SEO on-page + meta, sitemap & Google Search Console",
            "Setup Google Analytics & Google Maps Business",
            "Maintenance 30 hari setelah serah terima",
          ],
        },
        {
          name: "Growth",
          badge: "Kalender multi-staf",
          price: "Rp 3.500.000",
          term: "4–5 minggu kerja",
          forWhom: "Sistem booking online dengan kalender real-time, multi-staf, dan reminder otomatis",
          features: [
            "Desain custom responsif hingga 10 halaman",
            "Halaman layanan/paket lengkap dengan harga & galeri",
            "Blog / artikel dinamis (panel admin)",
            "Galeri portfolio dinamis",
            "Training panel admin (2 sesi online)",
            "Kalender booking real-time dengan slot waktu",
            "Multi-staf: pelanggan pilih staf yang diinginkan",
            "Form booking: layanan, staf, tanggal, jam & kontak",
            "Notifikasi booking ke email otomatis",
            "Reminder otomatis H-1 lewat Email",
            "Panel admin: kelola booking, jadwal & staf",
            "Live chat widget & tombol WhatsApp",
            "SEO on-page lengkap + meta, sitemap & Google Search Console",
            "Setup Google Analytics, Google Maps & Facebook Pixel",
            "Maintenance 30 hari setelah serah terima",
          ],
        },
        {
          name: "Scale",
          badge: "Enterprise booking",
          price: "Rp 5.500.000",
          term: "5–7 minggu kerja",
          forWhom: "Sistem booking lengkap dengan multi-lokasi, pembayaran online, dan dashboard analytics",
          features: [
            "Desain premium responsif hingga 15 halaman",
            "Halaman layanan/paket lengkap dengan harga & galeri",
            "Blog / artikel dinamis (panel admin)",
            "Galeri portfolio dinamis",
            "Training panel admin (3 sesi online)",
            "Kalender booking real-time multi-lokasi & multi-staf",
            "Pembayaran online: booking + bayar langsung (payment gateway)",
            "Form booking: layanan, lokasi, staf, tanggal, jam & pembayaran",
            "Notifikasi booking & pembayaran ke email",
            "Reminder otomatis H-1 lewat email",
            "Sistem member: register, login & riwayat booking",
            "Panel admin: kelola booking, staf, lokasi & analytics",
            "Dashboard analytics: total booking, revenue & layanan populer",
            "Integrasi Google Calendar (sinkronisasi otomatis)",
            "Live chat widget & tombol WhatsApp",
            "SEO on-page premium + meta, schema, sitemap & GSC",
            "Setup Google Analytics 4, Google Maps, Facebook Pixel & TikTok Pixel",
            "Maintenance 30 hari setelah serah terima",
          ],
        },
      ],
    },
    {
      key: "custom",
      label: "Website Custom",
      desc: "Alur dan fitur yang mengikuti cara kerja tim Anda.",
      isConsultation: true,
    },
  ],

  portfolio: [
    {
      id: "creanomic-2025",
      name: "Website CREANOMIC 2025",
      category: "Landing Page",
      description:
        "Merancang UI/UX dan membangun website resmi acara CREANOMIC dari awal hingga live. Mengembangkan modul profil acara, informasi kompetisi/seminar, download guidebook, timeline, FAQ, kontak panitia, serta konfigurasi domain, DNS, SSL & deployment.",
      stack: ["Next.js", "JavaScript", "Tailwind CSS", "Figma", "DNS/SSL"],
      source: "https://github.com/nolanhakim/creanomic.git",
      demo: "https://creanomic-delta.vercel.app/",
      image: "/images/creanomic-placeholder.svg",
    },
    {
      id: "sip-vokasi-ub",
      name: "Sistem Informasi Peminjaman Alat Vokasi UB",
      category: "Web App",
      description:
        "Platform terpusat pengajuan peminjaman ruangan, laboratorium, dan inventaris alat perkuliahan di lingkungan Fakultas Vokasi UB. Dilengkapi approval workflow bertingkat, pemantauan status pinjaman real-time, dan riwayat sarana.",
      stack: ["Laravel", "Tailwind CSS", "MySQL", "PHP", "Figma UI/UX"],
      source: "https://github.com/nolanhakim/tugas-akhir.git",
      image: "/images/sip-placeholder.svg",
    },
    {
      id: "web-vokasi-ub",
      name: "Website Fakultas Vokasi Universitas Brawijaya",
      category: "Perawatan dan perbaikan website",
      description:
        "Pemeliharaan dan pengembangan website resmi institusi dengan ratusan pengunjung aktif harian. Bertanggung jawab atas debugging, pengujian berkala, optimalisasi performa, serta pembaruan konten dan layanan interaktif kampus.",
      stack: ["WordPress", "PHP", "CSS", "MySQL", "Web Master"],
      source: "https://github.com",
      demo: "https://vokasi.ub.ac.id",
      image: "/images/vokasi-placeholder.svg",
    },
    {
      id: "restoran-cahaya-gemilang",
      name: "Website Restoran Cahaya Gemilang",
      category: "Landing Page",
      description:
        "Perancangan dan pengembangan website company profile restoran Cahaya Gemilang yang memuat katalog menu, informasi kontak, dan lokasi dengan tata letak responsif untuk perangkat mobile maupun desktop.",
      stack: ["Next.js", "Tailwind CSS", "JavaScript", "Figma"],
      source: "https://github.com/nolanhakim/kedaicahayagemilang.git",
      demo: "https://www.kedai-cahayagemilang.my.id/",
      image: "/images/restoran-placeholder.svg",
    },
    {
      id: "bali-jumeau",
      name: "Website Parfum Bali Jumeau",
      category: "Landing Page",
      description:
        "Website landing page produk brand parfum eksklusif asal Bali untuk kebutuhan digital marketing dan presentasi produk dengan desain antarmuka estetis sesuai identitas visual brand mewah.",
      stack: ["HTML5", "CSS3", "JavaScript", "Figma UI/UX"],
      source: "https://github.com/nolanhakim/jumeau.git",
      demo: "https://jumeau.vercel.app/",
      image: "/images/parfum-placeholder.svg",
    },
    {
      id: "warehouse-stock-counter",
      name: "F&B Warehouse Management & Stock Counter System",
      category: "Web App",
      description:
        "Aplikasi internal pengelola bahan baku gudang F&B: mutasi masuk/keluar, batch + expired FEFO, stock opname digital, waste approval, kartu stok audit trail, asisten gudang AI. Multi-role Staff/Admin/Super Admin.",
      stack: ["Laravel", "PHP 8.3", "MySQL", "Tailwind CSS", "Vite", "Gemini AI"],
      source:
        "https://github.com/nolanhakim/F-B-Warehouse-Stock-Counter-System.git",
      image: "/images/warehouse-placeholder.svg",
    },
    {
      id: "website-photobooth",
      name: "Website Photobooth",
      category: "Web App",
      description:
        "Website interaktif photobooth berbasis browser yang memungkinkan pengguna mengambil foto langsung dengan berbagai efek frame, layout grid, dan unduhan instan dalam format digital.",
      stack: ["Next.js", "Tailwind CSS", "JavaScript"],
      demo: "https://vibebooth-orcin.vercel.app/",
      image: "/images/photobooth-placeholder.svg",
    },
    {
      id: "website-refleksi-retach",
      name: "Website Refleksi - Retach",
      category: "Web App",
      description:
        "Website refleksi pembelajaran untuk guru menilai dan mengevaluasi setiap pembelajaran yang dilakukan, dilengkapi pencatatan refleksi, rekap hasil evaluasi, dan dashboard monitoring.",
      stack: ["Laravel", "MySQL", "Tailwind CSS"],
      source: "https://github.com/nolanhakim/website-refleksi_retech.git",
      image: "/images/refleksi-placeholder.svg",
    },
    {
      id: "smart-compost-village",
      name: "Website Pemantauan Kompos - Smart Compost Village",
      category: "Web App",
      description:
        "Sistem pemantauan proses pengomposan berbasis web yang memantau status kompos secara real-time, dilengkapi notifikasi otomatis via email saat kondisi tertentu tercapai.",
      stack: ["Laravel", "MySQL", "Tailwind CSS", "Email Notification"],
      source: "https://github.com/nolanhakim/Smart-Compost-Village.git",
      image: "/images/compost-placeholder.svg",
    },
    {
      id: "saerah-meubel",
      name: "Website Saerah Meubel",
      category: "Landing Page",
      description:
        "Website catalog mebel Saerah Meubel untuk menampilkan koleksi produk furniture, informasi produk, dan kontak pemesanan dengan tata letak responsif dan tampilan visual yang menarik.",
      stack: ["Next.js", "Tailwind CSS", "JavaScript"],
      source: "https://github.com/nolanhakim/saerahmeubel.git",
      demo: "https://saerahmeubel.vercel.app/",
      image: "/images/saerah-placeholder.svg",
    },
  ] as {
    id: string
    name: string
    category: string
    description: string
    stack: string[]
    source?: string
    demo?: string
    image: string
  }[],

  process: [
    {
      step: "01",
      title: "Konsultasi",
      desc: "Kita bicarakan tujuan website, isi halaman, dan tenggat. Anda dapat perkiraan biaya di hari yang sama.",
    },
    {
      step: "02",
      title: "Rancangan",
      desc: "Saya kirim susunan halaman dan rancangan tampilan untuk disetujui sebelum kode ditulis.",
    },
    {
      step: "03",
      title: "Pembangunan",
      desc: "Website dibangun dan diuji di ponsel, tablet, dan desktop. Anda bisa melihat kemajuannya lewat tautan pratinjau.",
    },
    {
      step: "04",
      title: "Peluncuran",
      desc: "Website dipasang di domain Anda, lalu saya serahkan akses dan panduan penggunaannya.",
    },
  ],

  commitments: [
    {
      title: "Harga disepakati sebelum mulai",
      desc: "Lingkup pekerjaan dan biaya ditulis di awal. Tidak ada tagihan tambahan di tengah jalan.",
    },
    {
      title: "Konten bisa Anda ubah sendiri",
      desc: "Panel admin sederhana untuk mengganti teks, gambar, dan produk tanpa menghubungi saya.",
    },
    {
      title: "Diuji di layar kecil lebih dulu",
      desc: "Sebagian besar pengunjung datang dari ponsel. Tampilan ponsel saya kerjakan sebelum versi desktop.",
    },
    {
      title: "Didampingi setelah rilis",
      desc: "Garansi perbaikan bug satu bulan, plus panduan singkat untuk mengelola website.",
    },
  ],

  faq: [
    {
      q: "Berapa lama pengerjaan website?",
      a: "Landing page 3–5 hari kerja, website profil 7–10 hari, toko online 2–4 minggu. Waktu mulai dihitung setelah materi konten dan uang muka diterima.",
    },
    {
      q: "Apakah domain dan hosting sudah termasuk?",
      a: "Domain dan hosting tahun pertama sudah termasuk di semua jenis website. Perpanjangan tahun berikutnya sekitar Rp 400.000–700.000 tergantung kebutuhan.",
    },
    {
      q: "Bagaimana alur pembayarannya?",
      a: "Setengah di awal sebagai uang muka, setengah lagi setelah website selesai dan disetujui. Pembayaran lewat transfer bank.",
    },
    {
      q: "Berapa kali saya boleh minta revisi?",
      a: "Satu kali untuk landing page, tiga kali untuk company profile dan toko online, dan selama masa pengerjaan untuk sistem booking serta website custom. Revisi di luar itu dihitung per jam.",
    },
    {
      q: "Apakah saya bisa mengubah isi website sendiri?",
      a: "Bisa. Company profile, toko online, dan sistem booking sudah dilengkapi panel admin untuk mengubah konten. Saya juga menyertakan panduan singkat.",
    },
    {
      q: "Bagaimana kalau website bermasalah setelah rilis?",
      a: "Ada garansi perbaikan bug satu bulan setelah peluncuran. Kirim saja pesan WhatsApp beserta tangkapan layarnya, saya perbaiki tanpa biaya.",
    },
  ],

  techStack: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Laravel",
    "WordPress",
    "MySQL",
  ],
}

export function waLink(msg = site.waMessage) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`
}

export const navLinks = [
  { label: "Layanan", href: "#layanan" },
  { label: "Harga", href: "#harga" },
  { label: "Karya", href: "#karya" },
  { label: "Proses", href: "#proses" },
  { label: "FAQ", href: "#faq" },
]
