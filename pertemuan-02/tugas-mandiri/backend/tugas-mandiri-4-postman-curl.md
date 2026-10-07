# Tugas Mandiri 4 — Pengujian API dengan Postman dan curl

## Tujuan

Melakukan pengujian API menggunakan Postman dan curl serta memahami perbedaan hasil response yang ditampilkan oleh keduanya.

## 1. Pengujian GET menggunakan Postman

- **Method:** GET
- **URL:** `https://httpbin.org/get`
- **Status Code:** 200 OK

Pengujian menggunakan Postman berhasil. Response menampilkan informasi seperti `args`, `headers`, `origin`, dan `url`.

## 2. Pengujian POST menggunakan Postman

- **Method:** POST
- **URL:** `https://httpbin.org/post`
- **Status Code:** 200 OK

Data JSON yang dikirim:

```json
{
  "nama": "Andrian",
  "kelas": "Informatika"
}

Server berhasil menerima data JSON dan menampilkannya kembali pada response.
3. Pengujian GET menggunakan curl -i
Perintah yang digunakan:
curl -i https://httpbin.org/get

Hasil pengujian menunjukkan status:
HTTP/1.1 200 OK

Dengan menggunakan -i, curl menampilkan HTTP status code, response header, dan response body.
4. Pengujian GET menggunakan curl -s
Perintah yang digunakan:
curl -s https://httpbin.org/get

Hasil pengujian menampilkan response body dalam bentuk JSON tanpa menampilkan informasi HTTP header secara terpisah.
5. Perbandingan curl -i dan curl -s
curl -i menampilkan status code dan header HTTP bersama dengan response body sehingga informasi response yang diterima lebih lengkap. Sedangkan curl -s menampilkan response dengan lebih sederhana tanpa menampilkan informasi tambahan seperti status dan header. Oleh karena itu, curl -i lebih berguna ketika ingin melihat informasi lengkap dari response HTTP, sedangkan curl -s lebih cocok jika hanya membutuhkan isi response.
Kesimpulan
Postman dan curl dapat digunakan untuk melakukan pengujian API. Postman menyediakan tampilan yang lebih mudah digunakan untuk melihat request dan response, sedangkan curl dapat digunakan langsung melalui terminal. Perintah curl -i menampilkan informasi header dan status HTTP, sedangkan curl -s menampilkan response secara lebih sederhana.