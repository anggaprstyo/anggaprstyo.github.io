/*
 * ===========================================================
 *  ISI WEBSITE ADA DI SINI SEMUA
 *  Ubah teks di bawah, simpan, lalu push. Website ikut berubah.
 *  Aturan: teks diapit tanda kutip "...", tiap item dipisah koma.
 * ===========================================================
 */
window.SITE = {
  brand: "RAMPUNGCODE",
  tagline: "jasa website, aplikasi & skripsi",

  // Kontak
  whatsapp: "6289652895242",            // format internasional, tanpa + dan tanpa 0 di depan
  whatsappTampil: "0896-5289-5242",
  pesanWA: "Halo RampungCode, saya mau konsultasi bikin website.",
  instagram: "oytesm",                  // tanpa @
  email: "",                            // isi kalau mau ditampilkan, kosongkan kalau tidak

  // Bagian atas (hero)
  hero: {
    judul: "Bikin website?",
    judulSorot: "Sekalian kami online-kan.",
    deskripsi: "Dari desain, coding, sampai domain, hosting & tayang di internet. Anda tinggal pakai."
  },

  // Layanan. ikon yang tersedia: profil, sistem, toko, domain, skripsi, mobile
  layanan: [
    { ikon: "profil",  judul: "Website Profil",          isi: "Untuk usaha, sekolah, organisasi, dan komunitas. Tampil rapi di HP maupun laptop." },
    { ikon: "sistem",  judul: "Sistem Informasi",        isi: "Aplikasi admin, absensi, pendataan, dan laporan sesuai alur kerja Anda." },
    { ikon: "toko",    judul: "Toko Online",             isi: "Katalog produk dengan tombol pesan langsung ke WhatsApp." },
    { ikon: "domain",  judul: "Domain, Hosting & Perawatan", isi: "Diurus sampai online, lalu dirawat dan di-update rutin." },
    { ikon: "skripsi", judul: "Skripsi & Tugas Akhir",   isi: "Aplikasi web/sistem untuk skripsi, dibimbing sampai paham & siap sidang." }
  ],

  // Alur kerja
  alur: [
    { judul: "Konsultasi",      isi: "Ceritakan kebutuhan Anda lewat WA. Gratis." },
    { judul: "Desain & Coding", isi: "Kami buatkan, Anda bisa cek progresnya." },
    { judul: "Online-kan",      isi: "Domain & hosting disiapkan, website tayang." },
    { judul: "Rampung",         isi: "Serah terima, plus panduan pakai." }
  ],

  // Portofolio. Untuk menambah proyek, salin satu blok { ... } lalu ganti isinya.
  // id      : nama pendek tanpa spasi, dipakai untuk link langsung (contoh: anggaprstyo.github.io/#proyek-pkd)
  // ringkas : 1 kalimat pendek yang tampil di kartu. Detail lengkap tampil saat "Lihat detail" diklik.
  // judul   : nama aplikasinya. subjudul: jenis aplikasinya dalam beberapa kata.
  // gambar  : daftar screenshot di folder img/. Gambar pertama jadi sampul kartu. Kosongkan [] kalau belum ada.
  //           { src: "img/namafile.jpg", ket: "keterangan gambar" }
  // link    : alamat website proyek, kosongkan "" kalau tidak bisa dibuka publik.
  // peran   : apa yang Anda kerjakan di proyek itu (kosongkan "" kalau tidak perlu).
  // fitur   : daftar fitur utama (boleh dikosongkan: fitur: []).
  // Urutan proyek di sini = urutan tampil. Taruh yang paling bagus di atas.
  // Kalau proyek lebih dari angka ini, muncul filter kategori dan tombol "Lihat semua".
  portofolioAwal: 6,
  portofolio: [
    {
      id: "pkd",
      judul: "E-PKD",
      subjudul: "Sistem E-Absensi Kaderisasi PC GP Ansor Kab. Mojokerto",
      kategori: "Sistem Informasi",
      ringkas: "Absensi kegiatan kaderisasi pakai scan QR code, rekap kehadiran otomatis.",
      peran: "Dikerjakan penuh: analisis, coding, sampai online",
      gambar: [
        { src: "img/pkd-1-login.jpg",        ket: "Halaman login" },
        { src: "img/pkd-2-data-peserta.jpg", ket: "Data peserta: kode otomatis, import & export Excel" },
        { src: "img/pkd-3-absensi.jpg",      ket: "Absensi per materi, manual atau scan QR" },
        { src: "img/pkd-4-qr-peserta.jpg",   ket: "QR code tiap peserta, bisa diunduh" },
        { src: "img/pkd-5-rekap.jpg",        ket: "Rekap kehadiran semua materi (PDF, Excel, CSV)" }
      ],
      link: "https://kaderisasiansormojokerto.org",
      isi: "Aplikasi untuk mengelola peserta dan absensi kegiatan kaderisasi. Tiap peserta punya QR code, panitia cukup scan pakai kamera HP, dan rekap kehadiran per materi langsung jadi tanpa hitung manual.",
      fitur: [
        "Absensi scan QR code lewat kamera HP",
        "Import & export data peserta dari Excel",
        "Rekap kehadiran per materi (PDF, Excel, CSV)",
        "Bisa menjalankan beberapa kegiatan sekaligus",
        "Akses terpisah untuk admin, panitia PAC, dan peserta",
        "Update otomatis ke hosting tiap ada perbaikan"
      ],
      teknologi: ["Laravel", "MySQL", "GitHub Actions"]
    },
    {
      id: "langitan",
      judul: "Sistem Langitan UMAHA",
      subjudul: "Sistem Informasi Akademik Kampus",
      kategori: "Sistem Informasi",
      ringkas: "Mulai dari pendaftaran mahasiswa baru, perkuliahan, keuangan, sampai alumni.",
      peran: "Anggota tim pengembang",
      gambar: [
        { src: "img/langitan-1-login.png", ket: "Halaman login Sistem Langitan" }
      ],
      link: "https://langitan.umaha.ac.id/",
      isi: "Sistem akademik terpadu untuk perguruan tinggi, mulai dari pendaftaran mahasiswa baru, perkuliahan, sampai keuangan dan alumni.",
      fitur: [
        "Pengembangan modul mahasiswa, dosen, prodi & pendidikan",
        "KRS & KHS dalam bentuk PDF, termasuk unduh massal",
        "Pembayaran formulir pendaftaran & kwitansi PDF",
        "Approval KRS oleh dosen wali",
        "Penyesuaian fitur sesuai kebutuhan kampus"
      ],
      teknologi: ["PHP 8", "Smarty", "Oracle", "Docker"]
    },
    {
      id: "bfast",
      judul: "BFAST BP Batam",
      subjudul: "Aplikasi pemesanan & penyewaan fasilitas",
      kategori: "Aplikasi Web & API",
      ringkas: "Gedung, rusun, asrama & wisata, lengkap dengan dashboard admin pengelola.",
      peran: "Anggota tim pengembang: backend (API) & frontend (dashboard admin)",
      gambar: [
        { src: "img/bfast-1-beranda.jpg", ket: "Beranda B-FAST" },
        { src: "img/bfast-2-layanan.jpg", ket: "Daftar layanan fasilitas" },
        { src: "img/bfast-3-login.jpg",   ket: "Halaman login B-FAST" }
      ],
      link: "https://b-fast.bpbatam.go.id/",
      isi: "Platform pemesanan dan penyewaan fasilitas seperti gedung, rusun, asrama, wisata, dan lapangan olahraga, lengkap dengan dashboard admin untuk pengelola.",
      fitur: [
        "Backend: API tagihan tambahan (extra bills) & pembayarannya",
        "Backend: generate Virtual Account (VA) & konfigurasi penagihan",
        "Frontend: tampilan tagihan tambahan & perpanjangan sewa di dashboard admin",
        "Frontend: upload & preview dokumen, hak akses petugas penagihan",
        "Pengelolaan pemesanan & riwayat transaksi"
      ],
      teknologi: ["Lumen", "Nuxt.js", "Vue", "Tailwind CSS", "Docker"]
    }
  ],

  // Teknologi yang dikuasai (tampil sebagai label kecil)
  teknologi: ["Laravel", "Lumen", "PHP", "MySQL", "Oracle", "JavaScript", "Vue / Nuxt.js", "Tailwind CSS", "Bootstrap", "Docker", "GitHub Actions"],

  // Pertanyaan umum
  faq: [
    { tanya: "Berapa lama pengerjaannya?", jawab: "Tergantung jumlah halaman dan fitur. Perkiraan waktunya kami sampaikan saat konsultasi." },
    { tanya: "Apakah sudah termasuk domain & hosting?", jawab: "Bisa. Kami bantu pilih dan urus sampai website online." },
    { tanya: "Kalau nanti mau ubah isi website?", jawab: "Bisa minta revisi ke kami, atau kami ajari cara mengubahnya sendiri." }
  ]
};
