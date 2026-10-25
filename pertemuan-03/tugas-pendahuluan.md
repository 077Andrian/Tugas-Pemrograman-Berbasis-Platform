## 1. Perbandingan Bootstrap dan Tailwind CSS

Bootstrap menyediakan komponen yang sudah memiliki gaya bawaan, misalnya `card`, `card-body`, `card-title`, dan `btn btn-primary`. Sementara itu, Tailwind CSS menggunakan utility class seperti `bg-white`, `p-6`, `rounded-xl`, dan `shadow-lg` untuk mengatur tampilan secara langsung di HTML.

Menurut saya, Bootstrap lebih mudah digunakan oleh pemula karena komponen dan tampilannya sudah tersedia. Tailwind CSS lebih fleksibel untuk membuat desain sesuai keinginan, tetapi kita perlu memahami fungsi setiap utility class.

## 2. Membuat Kartu Biodata

Kartu biodata memiliki foto, nama, NIM, dan satu tombol. Berikut contoh struktur HTML menggunakan pendekatan component-based dan utility-first.

### a. Component-based CSS

```html
<div class="biodata-card">
  <img class="biodata-photo" src="foto.jpg" alt="Foto mahasiswa">
  <h2 class="biodata-name">Andrian</h2>
  <p class="biodata-nim">NIM: 2026001</p>
  <button class="biodata-button">Lihat Profil</button>
</div>
```

Contoh CSS yang digunakan:

```css
.biodata-card {
  padding: 20px;
  border-radius: 12px;
  text-align: center;
}

.biodata-photo {
  width: 100px;
  border-radius: 50%;
}

.biodata-name {
  font-size: 20px;
}

.biodata-nim {
  color: gray;
}

.biodata-button {
  padding: 10px 16px;
  background-color: blue;
  color: white;
}
```

Pada contoh tersebut, terdapat **5 aturan CSS** yang ditulis sendiri.

### b. Utility-first CSS menggunakan Tailwind

```html
<div class="mx-auto max-w-sm rounded-xl bg-white p-6 text-center shadow-lg">
  <img
    class="mx-auto h-24 w-24 rounded-full object-cover"
    src="foto.jpg"
    alt="Foto mahasiswa"
  >
  <h2 class="mt-4 text-xl font-bold">Andrian</h2>
  <p class="mt-2 text-gray-500">NIM: 2026001</p>
  <button class="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
    Lihat Profil
  </button>
</div>
```

Pada contoh tersebut, terdapat **20 utility class** jika setiap nama class yang dipisahkan spasi dihitung satu per satu.

Menurut saya, component-based lebih mudah untuk mengubah warna secara terpusat melalui CSS, sedangkan Tailwind memudahkan pengaturan tampilan langsung di HTML.

## 3. Pengamatan JWT di jwt.io

Setelah token yang diberikan dimasukkan ke jwt.io, token tersebut terdiri dari **3 bagian**, yaitu header, payload, dan signature. Bagian payload menampilkan field `sub`, `name`, dan `iat`.

Password tidak boleh disimpan di payload JWT karena payload hanya dikodekan, bukan dienkripsi secara otomatis. Artinya, orang yang memperoleh token dapat membaca isi payload sehingga data rahasia seperti password tidak aman jika disimpan di dalamnya.

## 4. Perbedaan Authentication dan Authorization

Menurut saya, authentication adalah proses untuk memastikan identitas seseorang, sedangkan authorization adalah proses untuk memeriksa apakah orang tersebut memiliki izin untuk mengakses suatu fitur.

Contohnya di gerbang kampus UNIRA, pemeriksaan kartu identitas merupakan authentication. Setelah masuk kampus, pemeriksaan izin untuk memasuki ruang server merupakan authorization. Mahasiswa yang identitasnya sudah benar tetap tidak boleh masuk ruang server jika tidak memiliki izin.

## 5. Authentication dan Authorization pada Aplikasi SIAKAD

Pada aplikasi SIAKAD, terdapat beberapa peran pengguna, yaitu:

- **Mahasiswa:** melihat jadwal kuliah dan nilai sendiri.
- **Dosen:** mengelola nilai mahasiswa yang diajarnya.
- **Admin:** mengelola data akun dan pengguna.

Contohnya, fitur mengelola akun pengguna hanya boleh dilakukan oleh admin. Mahasiswa yang sudah login tetap tidak boleh menggunakan fitur tersebut karena tidak memiliki izin yang sesuai.

Jika pengguna belum login, server sebaiknya mengembalikan status **401 Unauthorized** karena identitas pengguna belum terautentikasi. Jika pengguna sudah login tetapi tidak memiliki izin untuk menggunakan fitur tertentu, server sebaiknya mengembalikan status **403 Forbidden**.

Jadi, perbedaan utamanya adalah 401 berkaitan dengan autentikasi, sedangkan 403 berkaitan dengan hak akses.