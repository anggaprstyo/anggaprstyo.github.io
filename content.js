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

  // Portofolio. GANTI contoh di bawah dengan proyek asli Anda.
  // gambar: taruh file di folder img/ lalu tulis "img/namafile.jpg". Kosongkan "" kalau belum ada.
  // link: alamat website proyek, kosongkan "" kalau tidak bisa dibuka publik.
  portofolio: [
    { judul: "Contoh: Website Profil Sekolah", kategori: "Website Profil",   gambar: "", link: "", isi: "Ganti dengan deskripsi singkat proyek Anda." },
    { judul: "Contoh: Sistem Absensi QR Code", kategori: "Sistem Informasi", gambar: "", link: "", isi: "Ganti dengan deskripsi singkat proyek Anda." },
    { judul: "Contoh: Katalog Toko Online",    kategori: "Toko Online",      gambar: "", link: "", isi: "Ganti dengan deskripsi singkat proyek Anda." }
  ],

  // Teknologi yang dikuasai (tampil sebagai label kecil)
  teknologi: ["Laravel", "PHP", "MySQL", "JavaScript", "HTML & CSS", "Bootstrap", "GitHub Actions"],

  // Pertanyaan umum
  faq: [
    { tanya: "Berapa lama pengerjaannya?", jawab: "Tergantung jumlah halaman dan fitur. Perkiraan waktunya kami sampaikan saat konsultasi." },
    { tanya: "Apakah sudah termasuk domain & hosting?", jawab: "Bisa. Kami bantu pilih dan urus sampai website online." },
    { tanya: "Kalau nanti mau ubah isi website?", jawab: "Bisa minta revisi ke kami, atau kami ajari cara mengubahnya sendiri." }
  ]
};
