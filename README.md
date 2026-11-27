# RampungCode — website profil & portofolio

Website statis (HTML + CSS + JS), tanpa database, tanpa build. Ringan dan bisa dihosting gratis.

## Struktur

| File | Isi |
|---|---|
| `content.js` | **Semua teks website**: brand, kontak, layanan, alur, portofolio, FAQ. Edit di sini saja. |
| `index.html` | Kerangka halaman |
| `style.css` | Warna & tampilan (warna utama ada di `:root` paling atas) |
| `main.js` | Mengisi halaman dari `content.js` (biasanya tidak perlu disentuh) |
| `img/` | Taruh screenshot proyek portofolio di sini |

## Cara mengubah isi

1. Buka `content.js`, ubah teksnya, simpan. Teks diapit tanda kutip `"..."`, tiap item dipisah koma.
2. Buka `index.html` langsung di browser (klik dua kali) untuk melihat hasilnya.
3. Menambah proyek portofolio: salin satu blok `{ ... }` di bagian `portofolio`, ganti isinya.
   Urutan proyek di file = urutan tampil, jadi taruh yang paling bagus di atas.

### Isian tiap proyek portofolio

| Kolom | Isi |
|---|---|
| `id` | Nama pendek tanpa spasi, untuk link langsung, misalnya `anggaprstyo.github.io/#proyek-pkd` |
| `judul` | Nama aplikasinya |
| `subjudul` | Jenis aplikasinya dalam beberapa kata |
| `kategori` | Dipakai untuk tombol filter (misalnya Sistem Informasi, Toko Online) |
| `ringkas` | 1 kalimat pendek yang tampil di kartu |
| `peran` | Lingkup pekerjaan, tampil sebagai "Lingkup pekerjaan:" di popup. Kosongkan `""` kalau tidak perlu |
| `gambar` | Daftar screenshot: `{ src: "img/namafile.jpg", ket: "keterangan" }`. Gambar pertama jadi sampul. Kosongkan `[]` kalau belum ada. Ukuran ideal 1200×750 |
| `link` | Alamat website proyek. Kosongkan `""` kalau tidak ada |
| `isi` | Deskripsi lengkap di popup |
| `fitur` | Daftar fitur utama |
| `teknologi` | Daftar teknologi (label kecil) |

`portofolioAwal: 6` = jumlah proyek yang tampil sebelum tombol "Lihat semua". Ikon layanan yang tersedia: `profil`, `sistem`, `toko`, `domain`, `skripsi`, `mobile`.

## Online-kan gratis dengan GitHub Pages

Sekali saja di awal:

```powershell
git init
git add .
git commit -m "Website RampungCode"
git branch -M main
git remote add origin https://github.com/USERNAME/rampungcode.git
git push -u origin main
```

(Buat dulu repo kosong bernama `rampungcode` di github.com, jenis **Public**.)

Lalu di GitHub: **Settings → Pages → Source: Deploy from a branch → Branch: main / (root) → Save**.
Sekitar 1 menit kemudian website tayang di `https://USERNAME.github.io/rampungcode/`.

Tips: kalau nama repo-nya `USERNAME.github.io`, alamatnya jadi lebih pendek: `https://USERNAME.github.io/`.

### Update berikutnya

```powershell
git add .
git commit -m "Tambah portofolio"
git push
```

Website otomatis ter-update dalam 1–2 menit.

### Pakai domain sendiri (opsional)

Setelah beli domain (misal `rampungcode.id`): di **Settings → Pages → Custom domain** isi nama domainnya,
lalu di panel domain buat record DNS sesuai petunjuk GitHub (CNAME ke `USERNAME.github.io`, atau A record ke IP GitHub Pages).
Centang **Enforce HTTPS**. Hosting tetap gratis, yang dibayar hanya domainnya per tahun.
