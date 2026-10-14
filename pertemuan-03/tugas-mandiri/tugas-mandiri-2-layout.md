# Tugas Mandiri 2 — Menyusun Tata Letak dengan Class Utility

## 1. Struktur Halaman

Saya membuat halaman Profil Mahasiswa menggunakan Tailwind CSS melalui CDN. Halaman ini terdiri dari navbar, bagian pembuka (hero), tiga kartu informasi, dan footer.

## 2. Class Utility yang Digunakan

| Bagian | Class utama | Fungsi |
|---|---|---|
| Navbar | `flex`, `gap-3`, `md:flex-row` | Mengatur susunan navigasi dan menyesuaikannya pada layar lebih lebar |
| Hero | `flex-col`, `md:flex-row`, `p-8` | Menyusun bagian pembuka dalam satu kolom pada layar kecil dan berjajar pada layar lebih lebar |
| Kumpulan kartu | `grid`, `grid-cols-1`, `gap-5`, `md:grid-cols-3` | Menyusun kartu dalam satu kolom pada layar kecil dan tiga kolom pada layar lebih lebar |
| Kartu | `rounded-xl`, `bg-white`, `p-6`, `shadow-sm` | Memberikan sudut membulat, latar putih, jarak isi, dan bayangan |
| Efek hover | `hover:-translate-y-1`, `hover:shadow-lg` | Mengangkat kartu sedikit dan memperbesar bayangannya ketika kursor berada di atas kartu |
| Footer | `bg-slate-800`, `text-center`, `text-white` | Memberikan latar gelap dan membuat teks berada di tengah |

## 3. Perubahan Tampilan Responsif

Saya menggunakan `grid-cols-1` agar tiga kartu tersusun ke bawah pada layar kecil. Class `md:grid-cols-3` mengubah susunannya menjadi tiga kolom pada layar yang lebih lebar. Pada navbar dan hero, saya menggunakan `md:flex-row` supaya elemen dapat berjajar ketika ukuran layar mencukupi.

## 4. Kemudahan dan Kesulitan Penggunaan Utility

Menurut saya, class utility memudahkan penyusunan tata letak karena jarak, warna, ukuran, dan responsivitas dapat diatur langsung pada elemen HTML. Namun, susunan class yang terlalu panjang pada satu elemen terkadang membuat kode lebih sulit dibaca.

## 5. Kesimpulan

Dari tugas ini, saya memahami bahwa Tailwind CSS dapat membantu membuat halaman responsif tanpa menulis aturan CSS sendiri. Class utility seperti `grid-cols-1`, `md:grid-cols-3`, dan `hover:shadow-lg` memudahkan pengaturan tampilan sesuai ukuran layar dan interaksi pengguna.