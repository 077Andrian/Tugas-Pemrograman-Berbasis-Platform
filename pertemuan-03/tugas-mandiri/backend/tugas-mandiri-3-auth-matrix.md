# Tugas Mandiri 3 — Analisis Authentication dan Authorization

**Nama:** Moh Andrian Maulana  
**NIM:** 2024520077  
**Kelas:** A  
**Proyek:** E-Library (Perpustakaan Digital Kampus)

## 1. Tujuan

Tugas ini bertujuan untuk menganalisis penerapan authentication (autentikasi) dan authorization (otorisasi) pada aplikasi E-Library. Kedua mekanisme tersebut digunakan untuk memastikan identitas pengguna terverifikasi dan setiap pengguna hanya dapat mengakses fitur sesuai dengan perannya.

## 2. Peran Pengguna

Aplikasi E-Library memiliki tiga peran utama:

1. **Anggota:** mencari buku, melihat ketersediaan koleksi, melakukan peminjaman, memperpanjang masa pinjam, dan mengakses e-book yang diizinkan.
2. **Pustakawan:** mengelola katalog buku, memproses peminjaman dan pengembalian, serta mengelola sirkulasi perpustakaan.
3. **Pimpinan:** melihat statistik perpustakaan dan laporan pengadaan koleksi untuk mendukung pengambilan keputusan.

## 3. Matriks Hak Akses

Keterangan: ✅ diizinkan, ❌ tidak diizinkan berdasarkan rancangan hak akses.

| No. | Fitur | Anggota | Pustakawan | Pimpinan | Endpoint |
|---:|---|:---:|:---:|:---:|---|
| 1 | Mencari buku | ✅ | ✅ | ✅ | `GET /buku` |
| 2 | Melihat detail dan ketersediaan buku | ✅ | ✅ | ✅ | `GET /buku/:id` |
| 3 | Melakukan peminjaman buku | ✅ | ❌ | ❌ | `POST /peminjaman` |
| 4 | Mengajukan perpanjangan masa pinjam | ✅ | ❌ | ❌ | `PATCH /peminjaman/:id/perpanjangan` |
| 5 | Menambahkan buku ke katalog | ❌ | ✅ | ❌ | `POST /buku` |
| 6 | Memperbarui data katalog | ❌ | ✅ | ❌ | `PUT /buku/:id` |
| 7 | Memproses pengembalian buku | ❌ | ✅ | ❌ | `PATCH /peminjaman/:id/pengembalian` |
| 8 | Melihat statistik perpustakaan | ❌ | ❌ | ✅ | `GET /laporan/statistik` |
| 9 | Melihat laporan pengadaan koleksi | ❌ | ❌ | ✅ | `GET /laporan/pengadaan` |

Matriks tersebut merupakan rancangan hak akses. Endpoint dan aturan akses perlu disesuaikan apabila implementasi aplikasi kelompok memiliki struktur yang berbeda.

## 4. Perbedaan Authentication dan Authorization

**Authentication (autentikasi)** adalah proses memeriksa identitas pengguna, misalnya melalui proses login dan token yang valid. Jika pengguna tidak menyertakan token atau token tidak valid, server dapat memberikan kode HTTP `401 Unauthorized`.

**Authorization (otorisasi)** adalah proses memeriksa apakah pengguna yang identitasnya sudah terverifikasi memiliki izin untuk mengakses fitur tertentu. Contohnya, anggota tidak diperbolehkan menambahkan buku ke katalog karena fitur tersebut merupakan hak pustakawan. Jika anggota mencoba mengakses fitur tersebut, server memberikan kode HTTP `403 Forbidden`.

## 5. Contoh Penggunaan Kode HTTP 401 dan 403

| Kondisi | Hasil yang diharapkan |
|---|---|
| Pengguna mengakses endpoint terlindungi tanpa token | `401 Unauthorized` |
| Pengguna mengirim token yang tidak valid | `401 Unauthorized` |
| Anggota dengan token valid mencoba menambahkan buku ke katalog | `403 Forbidden` |
| Pustakawan dengan token valid menambahkan buku sesuai kewenangannya | Permintaan diizinkan, misalnya `201 Created` |

Kode `401` menunjukkan bahwa identitas pengguna belum berhasil diverifikasi. Sementara itu, kode `403` menunjukkan bahwa identitas pengguna telah dikenali, tetapi pengguna tidak memiliki izin untuk menjalankan tindakan tersebut.

## 6. Risiko Jika Otorisasi Tidak Diterapkan

Jika endpoint penambahan buku hanya menggunakan pemeriksaan autentikasi seperti `requireAuth` tanpa pemeriksaan peran melalui `requireRole`, anggota yang sudah login berpotensi dapat menambahkan atau mengubah katalog meskipun tidak memiliki kewenangan. Oleh karena itu, setiap endpoint perlu menerapkan pemeriksaan identitas dan hak akses sesuai kebutuhan fitur.

## 7. Kesimpulan

Authentication dan authorization merupakan bagian penting dalam keamanan aplikasi E-Library. Autentikasi memastikan identitas pengguna terverifikasi, sedangkan otorisasi membatasi akses berdasarkan peran anggota, pustakawan, dan pimpinan. Penerapan keduanya membantu melindungi data buku, transaksi peminjaman, serta laporan perpustakaan dari akses yang tidak sesuai kewenangan.
