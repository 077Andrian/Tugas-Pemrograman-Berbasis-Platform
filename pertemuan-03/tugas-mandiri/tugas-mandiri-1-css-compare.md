# Perbandingan Component-Based dan Utility-First

## 1. Jumlah CSS dan Class Utility

Pada versi component-based, saya menggunakan CSS di dalam tag `<style>` dengan class seperti `.card`, `.photo`, `.name`, `.nim`, dan `.btn`. Terdapat 8 blok aturan CSS, termasuk pengaturan hover pada tombol.

Pada versi utility-first, saya menggunakan Tailwind CSS melalui CDN. Pengaturan tampilan dilakukan langsung menggunakan class utility pada elemen HTML, sehingga tidak perlu menulis aturan CSS sendiri.

## 2. Perbandingan Kedua Pendekatan

| Aspek | Component-Based | Utility-First |
|---|---|---|
| Penulisan tampilan | Menggunakan aturan CSS sendiri | Menggunakan class utility |
| Kemudahan membaca | CSS terpisah dari struktur elemen | Banyak class dalam HTML |
| Perubahan tema | Mengubah aturan CSS yang digunakan bersama | Mengganti class warna, ukuran, dan tampilan |
| Penggunaan ulang | Cocok untuk komponen dengan desain yang sama | Praktis untuk menyusun tampilan dengan cepat |
| Responsivitas | Diatur menggunakan CSS | Menggunakan class responsif Tailwind |

## 3. Waktu Pengerjaan

Waktu pengerjaan perlu disesuaikan dengan waktu yang saya gunakan saat membuat kedua file. Saya akan mencatat waktu sebenarnya setelah membandingkan proses pengerjaan versi component-based dan utility-first.

## 4. Pendekatan yang Saya Pilih

Menurut saya, component-based cocok digunakan pada halaman yang memiliki banyak komponen dengan tampilan seragam, seperti halaman admin dan dashboard. Aturan CSS dapat digunakan kembali sehingga perubahan desain lebih terpusat.

Sementara itu, utility-first cocok digunakan untuk membuat prototipe dan halaman yang membutuhkan penyesuaian tampilan dengan cepat. Class Tailwind dapat langsung ditambahkan pada elemen HTML tanpa harus membuat aturan CSS baru.

## 5. Kesimpulan

Dari kedua pendekatan tersebut, saya memahami bahwa component-based lebih terstruktur ketika desain yang sama digunakan berulang kali, sedangkan utility-first lebih praktis untuk mengatur tampilan secara langsung. Pemilihan pendekatan sebaiknya disesuaikan dengan kebutuhan dan struktur proyek yang dibuat.