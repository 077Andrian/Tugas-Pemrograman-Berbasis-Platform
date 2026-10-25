# Tugas Mandiri 4 — Menganalisis Struktur dan Validitas JWT

**Nama:** Moh Andrian Maulana  
**NIM:** 2024520077  
**Kelas:** A  
**Mata Kuliah:** Pemrograman Berbasis Platform

## 1. Tujuan

Tugas ini bertujuan untuk memahami struktur JSON Web Token (JWT), mengenali klaim di dalam payload, dan menguji validitas token ketika payload diubah tanpa memperbarui signature.

## 2. Analisis Payload JWT

Token diperoleh melalui proses login API praktikum menggunakan akun mahasiswa. Payload token memuat beberapa klaim berikut:

| Klaim | Fungsi |
|---|---|
| `sub` | Menunjukkan identitas atau ID pengguna. |
| `nim` | Menyimpan Nomor Induk Mahasiswa pengguna. |
| `role` | Menunjukkan peran pengguna, yaitu `MAHASISWA`. |
| `iat` | Menunjukkan waktu token diterbitkan dalam format Unix timestamp. |
| `exp` | Menunjukkan waktu kedaluwarsa token dalam format Unix timestamp. |

Klaim `iat` digunakan untuk mengetahui kapan token diterbitkan, sedangkan `exp` menunjukkan batas waktu berlakunya token. Pada implementasi praktikum, masa berlaku token ditetapkan selama satu jam.

## 3. Hasil Pengujian Token

Pengujian dilakukan pada endpoint `GET /api/v1/auth/me`.

| Pengujian | Endpoint | Hasil |
|---|---|---|
| Menggunakan token asli | `GET /api/v1/auth/me` | `200 OK` — Profil berhasil diambil |
| Mengubah nilai `iat` pada payload tanpa memperbarui signature | `GET /api/v1/auth/me` | `401 Unauthorized` — Token tidak valid atau kedaluwarsa |

Pada pengujian pertama, server menerima token asli dan mengembalikan profil pengguna dengan NIM `2026002` dan peran `MAHASISWA`. Pada pengujian kedua, nilai `iat` diubah satu detik, tetapi signature tetap menggunakan tanda tangan sebelumnya. Server menolak token tersebut dan mengembalikan kode `401`.

## 4. Analisis Signature

Signature berfungsi untuk memverifikasi keaslian dan integritas token. Ketika isi payload diubah, signature yang sebelumnya dibuat untuk payload asli tidak lagi cocok dengan isi token yang baru. Karena proses verifikasi gagal, middleware `requireAuth` menolak permintaan dan mengembalikan `401 Unauthorized`.

## 5. Kesimpulan

JWT menyimpan klaim yang dapat digunakan server untuk mengenali identitas dan peran pengguna serta memeriksa masa berlaku token. Hasil pengujian menunjukkan bahwa token asli diterima dengan status `200 OK`, sedangkan token yang payload-nya diubah tanpa memperbarui signature ditolak dengan status `401 Unauthorized`.

## 6. Dokumentasi Pengujian

Lampirkan tangkapan layar berikut:

1. Payload JWT yang menampilkan klaim `sub`, `nim`, `role`, `iat`, dan `exp`.
2. Respons `200 OK` saat menggunakan token asli.
3. Respons `401 Unauthorized` saat menggunakan token yang payload-nya telah diubah.

**Catatan keamanan:** Jangan tampilkan token lengkap pada screenshot atau laporan.
