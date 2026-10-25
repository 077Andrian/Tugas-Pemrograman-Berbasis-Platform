# Tugas Mandiri 5 — Membandingkan Hashing dan Enkripsi serta Menjaga Kunci Rahasia

**Nama:** Moh Andrian Maulana  
**NIM:** 2024520077  
**Kelas:** A  
**Mata Kuliah:** Pemrograman Berbasis Platform

## 1. Hasil Pengujian Hashing

Pengujian dilakukan menggunakan bcrypt dengan kata sandi yang sama, yaitu `sama`, dan cost 10.

| Pengujian | Hasil Hash |
|---|---|
| Hash pertama | `$2a$10$13Xz9MAbkxtl14UAsIx2zer5FqoZv3mNBfKM8Df1k3lAxyzpEemYW` |
| Hash kedua | `$2a$10$WsQe2kq.u96H0oh1xGosje9sIcib2OeT71caZc1DHph0LtGlC0rv.` |

Kedua hasil berbeda karena bcrypt menggunakan salt acak pada setiap proses hashing. Cost 10 mengatur tingkat kerja komputasi sehingga proses hashing memerlukan lebih banyak sumber daya dibandingkan proses dengan cost yang lebih rendah.

## 2. Perbedaan Hashing dan Enkripsi

Hashing merupakan proses satu arah sehingga data asli tidak dapat dipulihkan langsung dari hash. Enkripsi mengubah data menggunakan kunci dan data asli dapat dikembalikan melalui proses dekripsi dengan kunci yang sesuai.

## 3. Penyimpanan Hash Kata Sandi

Aplikasi menyimpan hash kata sandi agar kata sandi asli tidak perlu disimpan dalam bentuk teks biasa. Ketika pengguna login, aplikasi membandingkan kata sandi yang dimasukkan dengan hash tersimpan menggunakan fungsi verifikasi seperti `bcrypt.compare`.

## 4. Fungsi Salt dan Rainbow Table

Rainbow table adalah kumpulan hasil hash yang telah dihitung sebelumnya untuk membantu menebak kata sandi. Salt membuat hasil hash untuk kata sandi yang sama menjadi berbeda sehingga penggunaan rainbow table menjadi kurang efektif.

## 5. Menjaga JWT_SECRET

`JWT_SECRET` digunakan untuk menandatangani dan memverifikasi JWT. Nilai ini harus dirahasiakan karena jika bocor, pihak lain berpotensi membuat token palsu yang dapat diterima server. Kunci rahasia tidak boleh dimasukkan ke repositori Git atau disimpan dalam riwayat commit.

## 6. Hasil Pemeriksaan Keamanan

| Pemeriksaan | Hasil |
|---|---|
| Status pelacakan `pertemuan-02/kegiatan-praktikum/backend/.env` | Tidak ditemukan sebagai file yang dilacak Git pada path tersebut |
| Pencarian pola token JWT di folder `pertemuan-02` dan `pertemuan-03` | Tidak ada hasil yang ditampilkan |

Pemeriksaan ini menunjukkan bahwa file `.env` pada path yang diperiksa tidak terlacak Git dan pencarian pola token tidak menemukan kecocokan pada folder yang diperiksa. Hasil tersebut tidak menjamin bahwa seluruh riwayat Git bebas dari rahasia.

Pemeriksaan	Hasil
File .env	Tidak terlacak Git pada dua path yang diperiksa
Pencarian pola JWT	Tidak menemukan kecocokan pada folder pertemuan-02 dan pertemuan-03
Pencarian JWT_SECRET	Ditemukan pada .env.example dan kode backend, termasuk nilai cadangan untuk pengembangan

Pemeriksaan menemukan nilai cadangan JWT_SECRET di kode backend. Nilai tersebut ditujukan untuk pengembangan dan tidak boleh digunakan pada lingkungan produksi. Untuk penggunaan nyata, kunci rahasia harus disimpan melalui konfigurasi lingkungan dan tidak dimasukkan langsung ke kode sumber.

## 7. Kesimpulan

Hashing dan enkripsi memiliki fungsi yang berbeda. Hashing digunakan untuk menyimpan kata sandi dengan lebih aman, sedangkan enkripsi memungkinkan data dipulihkan melalui dekripsi. Salt membantu mengurangi efektivitas rainbow table, sementara kerahasiaan `JWT_SECRET` perlu dijaga agar keamanan autentikasi tetap terlindungi.