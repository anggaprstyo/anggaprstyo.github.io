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
  // peran   : lingkup pekerjaan di proyek itu, tampil sebagai "Lingkup pekerjaan:" (kosongkan "" kalau tidak perlu).
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
      peran: "Analisis, pengembangan & online-kan · 2025",
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
      peran: "Pengembangan berbagai modul sistem (tim)",
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
      id: "langitan-unu",
      judul: "Sistem Langitan UNU Lampung",
      subjudul: "Sistem Informasi Akademik Kampus",
      kategori: "Sistem Informasi",
      ringkas: "Sistem akademik Universitas Nahdlatul Ulama Lampung, dari PMB sampai nilai.",
      peran: "Pengembangan & penyesuaian sistem (tim)",
      gambar: [
        { src: "img/langitan-unu-1-login.jpg", ket: "Halaman login Sistem Langitan UNU Lampung" }
      ],
      link: "https://langitan.unulampung.ac.id/",
      isi: "Sistem informasi akademik untuk Universitas Nahdlatul Ulama Lampung, dikembangkan dan disesuaikan dengan alur akademik dan keuangan kampus.",
      fitur: [
        "Form isian pendaftaran mahasiswa baru (PMB)",
        "Approval KRS oleh dosen wali dengan aturan pembayaran",
        "Input nilai & pengelolaan KRS",
        "Penyesuaian modul dosen & mahasiswa"
      ],
      teknologi: ["PHP", "Smarty", "Oracle"]
    },
    {
      id: "pmb-umaha",
      judul: "Pendaftaran Online UMAHA",
      subjudul: "Sistem Pendaftaran Mahasiswa Baru (PMB)",
      kategori: "Sistem Informasi",
      ringkas: "Calon mahasiswa daftar online, isi formulir, sampai bayar lewat Virtual Account.",
      peran: "Pengembangan form PMB & pembayaran VA (tim)",
      gambar: [
        { src: "img/pmb-1-login.jpg",      ket: "Halaman login pendaftaran" },
        { src: "img/pmb-2-registrasi.jpg", ket: "Registrasi akun calon mahasiswa" }
      ],
      link: "https://pendaftaran.umaha.ac.id/",
      isi: "Website pendaftaran mahasiswa baru: calon mahasiswa membuat akun, verifikasi email, mengisi formulir pendaftaran, lalu membayar biaya formulir secara online.",
      fitur: [
        "Form isian pendaftaran mahasiswa baru",
        "Pembayaran formulir lewat BNI Virtual Account",
        "Kwitansi pembayaran dalam bentuk PDF",
        "Penyesuaian form & aturan pendaftaran sesuai kebutuhan kampus"
      ],
      teknologi: ["PHP", "CodeIgniter", "Smarty", "BNI VA API"]
    },
    {
      id: "bfast",
      judul: "BFAST BP Batam",
      subjudul: "Aplikasi pemesanan & penyewaan fasilitas",
      kategori: "Aplikasi Web & API",
      ringkas: "Gedung, rusun, asrama & wisata, lengkap dengan dashboard admin pengelola.",
      peran: "Pengembangan backend API & dashboard admin (tim)",
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
    },
    {
      id: "iboss",
      judul: "IBOSS Batam",
      subjudul: "Indonesia Batam Online Single Submission — BP Batam",
      kategori: "Sistem Informasi",
      ringkas: "Perizinan berusaha elektronik di Batam yang terintegrasi dengan OSS Nasional.",
      peran: "Pengembangan backend",
      gambar: [
        { src: "img/iboss-1-beranda.jpg", ket: "Beranda IBOSS Batam" }
      ],
      link: "https://iboss.go.id/",
      isi: "Sistem aplikasi perizinan secara elektronik milik BP Batam yang terintegrasi dengan sistem Online Single Submission (OSS) Nasional, untuk wilayah Kawasan Perdagangan Bebas dan Pelabuhan Bebas (KPBPB) Batam. Melayani perizinan pendukung, izin usaha kawasan, hingga izin operasional/komersial.",
      fitur: [
        "Pengembangan backend sistem perizinan",
        "Integrasi dengan OSS Nasional (OSS RBA)",
        "Layanan perizinan pendukung & izin usaha kawasan",
        "Pemenuhan komitmen untuk izin operasional/komersial"
      ],
      teknologi: []
    },
    {
      id: "pilmapres",
      judul: "PILMAPRES",
      subjudul: "Pemilihan Mahasiswa Berprestasi — SIMBELMAWA Kemdiktisaintek",
      kategori: "Sistem Informasi",
      ringkas: "Platform Pemilihan Mahasiswa Berprestasi tingkat nasional, dari pendaftaran sampai penilaian.",
      peran: "Pengembangan sistem (tim) · 2021–2025",
      gambar: [
        { src: "img/pilmapres-1-login.jpg", ket: "Halaman login PILMAPRES" }
      ],
      link: "https://simbelmawa.kemdiktisaintek.go.id/pilmapres/auth/login",
      isi: "Platform Pemilihan Mahasiswa Berprestasi (PILMAPRES) tingkat nasional di bawah SIMBELMAWA. Mencakup pendaftaran perguruan tinggi dan mahasiswa, unggah berkas prestasi dan gagasan kreatif, penilaian oleh reviewer, sinkronisasi data perguruan tinggi, hingga notifikasi email, semuanya secara online.",
      fitur: [
        "Pendaftaran & verifikasi perguruan tinggi dan mahasiswa",
        "Unggah berkas prestasi & gagasan kreatif per tahapan",
        "Plotting reviewer, komponen penilaian & rekap skor",
        "Sinkronisasi data perguruan tinggi, prodi & IPK mahasiswa",
        "Notifikasi email otomatis ke peserta & verifikator"
      ],
      teknologi: ["PHP", "Laravel", "PostgreSQL"]
    },
    {
      id: "wirausaha-merdeka",
      judul: "Wirausaha Merdeka (WMK)",
      subjudul: "Platform Program Wirausaha Merdeka Kemendikbudristek",
      kategori: "Sistem Informasi",
      ringkas: "Pendaftaran mahasiswa & perguruan tinggi untuk program kewirausahaan nasional.",
      peran: "Pengembangan sejak tahun pertama program",
      gambar: [
        { src: "img/wmk-1-beranda.jpg", ket: "Beranda Wirausaha Merdeka (arsip Wayback Machine, 2023)" }
      ],
      link: "https://wirausahamerdeka.kampusmerdeka.kemdikbud.go.id/",
      isi: "Platform program Wirausaha Merdeka dari Kemendikbudristek (Kampus Merdeka) untuk mendukung lahirnya wirausaha mahasiswa. Mahasiswa dan perguruan tinggi pelaksana mendaftar dan mengikuti program lewat platform ini. Program sekarang sudah berakhir dan situsnya tidak aktif lagi.",
      fitur: [
        "Pendaftaran mahasiswa peserta program",
        "Pendaftaran perguruan tinggi pelaksana",
        "Informasi program, syarat & ketentuan, dan panduan",
        "Login & dashboard peserta"
      ],
      teknologi: ["PHP", "Laravel", "PostgreSQL"]
    },
    {
      id: "lingkaran",
      judul: "Lingkaran.net",
      subjudul: "Portal Berita Media Cetak & Online",
      kategori: "Website Berita",
      ringkas: "Portal berita nasional & daerah dengan banyak kategori, dibangun di WordPress.",
      peran: "Tema & custom plugin WordPress · 2018",
      gambar: [
        { src: "img/lingkaran-1-beranda.jpg", ket: "Beranda Lingkaran.net (arsip Wayback Machine, 2020)" }
      ],
      link: "https://lingkaran.net/",
      isi: "Website media berita seperti portal berita online pada umumnya, dengan rubrik Nasional, Bisnis, Politik, Hukrim, Pendidikan, Sports, Techno, Peristiwa Daerah, dan Life Style. Dikerjakan tahun 2018 memakai WordPress dengan plugin buatan sendiri. Tampilan situs yang sekarang sudah berbeda dan bukan buatan kami.",
      fitur: [
        "Halaman utama portal berita dengan headline & berita terkini",
        "Rubrik & sub-rubrik berita (misalnya Bisnis › Finance › Crypto)",
        "Custom plugin WordPress sesuai kebutuhan redaksi",
        "Pencarian berita"
      ],
      teknologi: ["WordPress", "PHP", "MySQL"]
    },
    {
      id: "sls",
      judul: "SLS Dashboard",
      subjudul: "Sistem Manajemen Service Laptop — Solution Laptop Service",
      kategori: "Sistem Informasi",
      ringkas: "Satu dashboard untuk servis, nota, garansi, pembayaran & keuangan toko servis laptop.",
      peran: "Pengembangan fitur backend · 2024",
      gambar: [],
      link: "https://slsofficial.co.id/",
      isi: "Sistem internal Solution Laptop Service (pusat servis laptop di Sidoarjo) untuk mengelola order service, nota service & nota selesai, tindakan teknisi, biaya jasa/barang, pembayaran (cash, QRIS, Virtual Account), garansi, dan keuangan. Kami mengerjakan penambahan fitur di sisi backend pada tahun 2024. Tampilan sistem yang sekarang sudah diperbarui dan berbeda dengan versi saat kami mengerjakannya.",
      fitur: [
        "Penambahan fitur backend di SLS Dashboard",
        "Order service, nota service & nota selesai",
        "Pembayaran cash, QRIS & Virtual Account",
        "Garansi service & tracking status online",
        "Master data customer, karyawan, mitra, supplier & sparepart"
      ],
      teknologi: []
    },
    {
      id: "slsgroup",
      judul: "SLS Group",
      subjudul: "Website PT Sentosa Laju Sejahtera — Kontraktor Tambang",
      kategori: "Website Profil",
      ringkas: "Website perusahaan kontraktor tambang batu bara & nikel.",
      peran: "Pengembangan fitur backend",
      gambar: [
        { src: "img/slsgroup-1-beranda.jpg", ket: "Beranda SLS Group (arsip Wayback Machine, 2023)" }
      ],
      link: "https://slsgroup.id/",
      isi: "Website perusahaan PT Sentosa Laju Sejahtera (SLS Group), kontraktor tambang batu bara dan nikel di Kalimantan Timur dan Sulawesi Tenggara. Berisi profil, visi misi, layanan, proyek, CSR, dan halaman kontak & karier. Kami mengerjakan pengembangan beberapa fitur tambahan di sisi backend.",
      fitur: [
        "Pengembangan fitur tambahan di sisi backend",
        "Halaman profil, layanan & proyek perusahaan",
        "Halaman CSR & lingkungan",
        "Kontak & karier"
      ],
      teknologi: []
    },
    {
      id: "mbd",
      judul: "Sistem Informasi Mie Burung Dara",
      subjudul: "Website, Backend Web, API & Aplikasi Mobile",
      kategori: "Aplikasi Web & Mobile",
      ringkas: "Website miburungdara.com, dashboard web, API, dan dua aplikasi mobile.",
      peran: "Tema website, backend & aplikasi mobile · 2019",
      gambar: [
        { src: "img/mbd-2-resep.jpg",   ket: "Bagian Resep Terbaru & Blog (arsip Wayback Machine, 2020)" },
        { src: "img/mbd-1-website.jpg", ket: "Website miburungdara.com setelah ganti tema (arsip Wayback Machine, 2019)" }
      ],
      link: "https://www.miburungdara.com/",
      isi: "Pekerjaan untuk Mie Burung Dara: mengganti tema dan menyesuaikan tampilan website miburungdara.com, serta sistem informasi yang terdiri dari backend website untuk pengelola, backend API untuk aplikasi mobile, dan dua aplikasi mobile React Native: aplikasi PE dan aplikasi vendor.",
      fitur: [
        "Ganti tema & penyesuaian tampilan website miburungdara.com",
        "Backend website (dashboard pengelola) dengan Yii2",
        "Backend API untuk aplikasi mobile",
        "Aplikasi mobile React Native untuk PE",
        "Aplikasi mobile React Native untuk vendor"
      ],
      teknologi: ["PHP", "Yii2", "React Native", "REST API"]
    },
    {
      id: "bolehbaca",
      judul: "BolehBaca",
      subjudul: "Situs Jual Beli & Sewa Buku Online",
      kategori: "Toko Online",
      ringkas: "Marketplace jual beli & sewa buku online dengan pencarian, filter & event.",
      peran: "Frontend & backend/admin · 2018",
      gambar: [
        { src: "img/bolehbaca-1-beranda.jpg", ket: "Beranda BolehBaca (arsip Wayback Machine, 2020)" }
      ],
      link: "https://bolehbaca.com/",
      isi: "Situs jual beli dan sewa buku online (bolehbaca.com). Terdiri dari frontend website untuk pembeli yang dibangun dengan ReactJS dan jQuery, serta backend/admin dengan Yii2 untuk mengelola data dan menyediakan API.",
      fitur: [
        "Frontend website toko buku dengan ReactJS & jQuery",
        "Backend/admin panel untuk pengelola dengan Yii2",
        "API untuk menghubungkan frontend dan backend",
        "Jual beli & sewa buku online"
      ],
      teknologi: ["ReactJS", "jQuery", "PHP", "Yii2", "REST API"]
    },
    {
      id: "skripsi-tol",
      judul: "Deteksi Kecepatan & Kepadatan Kendaraan di Jalan Tol",
      subjudul: "Aplikasi Skripsi — Computer Vision & Fuzzy Logic",
      kategori: "Skripsi & Tugas Akhir",
      ringkas: "Mendeteksi kecepatan mobil dan tingkat kepadatan tol dari video CCTV.",
      peran: "Pembuatan aplikasi skripsi mahasiswa",
      gambar: [
        { src: "img/skripsi-tol-1-ilustrasi.png", ket: "Ilustrasi tampilan deteksi (gambar dibuat ulang, bukan screenshot asli)" }
      ],
      link: "",
      isi: "Aplikasi skripsi untuk mendeteksi kendaraan dari video jalan tol, menghitung kecepatan tiap mobil, lalu menentukan tingkat kepadatan lalu lintas menggunakan fuzzy logic. Dibuat dengan Python dan OpenCV.",
      fitur: [
        "Deteksi & pelacakan mobil dari video dengan OpenCV",
        "Hitung kecepatan kendaraan dengan garis virtual",
        "Hitung jumlah kendaraan di area pantau (ROI)",
        "Penentuan tingkat kepadatan (lancar / ramai / padat) dengan fuzzy logic"
      ],
      teknologi: ["Python", "OpenCV", "Fuzzy Logic"]
    }
  ],

  // Teknologi yang dikuasai (tampil sebagai label kecil)
  teknologi: ["Laravel", "Lumen", "CodeIgniter", "Yii2", "WordPress", "PHP", "MySQL", "PostgreSQL", "Oracle", "JavaScript", "Vue / Nuxt.js", "ReactJS", "React Native", "jQuery", "Python", "OpenCV", "Tailwind CSS", "Bootstrap", "Docker", "GitHub Actions"],

  // Pertanyaan umum
  faq: [
    { tanya: "Berapa lama pengerjaannya?", jawab: "Tergantung jumlah halaman dan fitur. Perkiraan waktunya kami sampaikan saat konsultasi." },
    { tanya: "Apakah sudah termasuk domain & hosting?", jawab: "Bisa. Kami bantu pilih dan urus sampai website online." },
    { tanya: "Kalau nanti mau ubah isi website?", jawab: "Bisa minta revisi ke kami, atau kami ajari cara mengubahnya sendiri." }
  ]
};
