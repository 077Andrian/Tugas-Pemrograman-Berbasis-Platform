# Tugas Mandiri 2 — Memahami HTTP Status Code

## Tujuan

Memahami berbagai HTTP status code melalui pengujian endpoint HTTPBin menggunakan Postman.

## Hasil Pengujian

| Status Code | Arti | Hasil Pengujian | Kapan Digunakan |
|---|---|---|---|
| 200 | OK | Request berhasil diproses | Saat permintaan berhasil |
| 201 | Created | Request berhasil dan resource berhasil dibuat | Saat data atau resource baru berhasil dibuat |
| 400 | Bad Request | Request ditolak karena terdapat kesalahan pada permintaan | Saat data atau format request tidak sesuai |
| 401 | Unauthorized | Request membutuhkan autentikasi | Saat pengguna belum melakukan autentikasi yang diperlukan |
| 403 | Forbidden | Server memahami request tetapi menolak akses | Saat pengguna tidak memiliki izin untuk mengakses resource |
| 404 | Not Found | Resource atau endpoint tidak ditemukan | Saat URL atau resource yang diminta tidak tersedia |
| 500 | Internal Server Error | Terjadi kesalahan pada sisi server | Saat server mengalami masalah ketika memproses request |

## Pengujian HTTPBin

Endpoint yang digunakan:

`https://httpbin.org/status/:code`

Status code yang diuji:

- 200
- 201
- 400
- 401
- 403
- 404
- 500

Seluruh endpoint berhasil memberikan status code sesuai dengan angka yang diminta.

## Pertanyaan

### 1. Apa perbedaan status code 400 dan 404?

Status code 400 menunjukkan bahwa terdapat kesalahan pada request yang dikirim oleh client. Status code 404 menunjukkan bahwa resource atau endpoint yang diminta tidak ditemukan.

### 2. Apa perbedaan 401 dan 403?

Status code 401 menunjukkan bahwa request membutuhkan autentikasi. Sedangkan 403 menunjukkan bahwa client sudah dikenali atau request dipahami oleh server, tetapi akses ke resource tersebut tidak diizinkan.

### 3. Apa yang dimaksud dengan status code 500?

Status code 500 menunjukkan bahwa terjadi kesalahan pada sisi server ketika memproses request. Kesalahan ini berasal dari masalah internal server.

### 4. Apakah setiap error response berarti server mengalami kerusakan?

Tidak. Tidak semua error response berarti server rusak. Beberapa error terjadi karena request dari client tidak sesuai, seperti 400, atau karena resource tidak ditemukan seperti 404.

## Kesimpulan

HTTP status code digunakan untuk menunjukkan hasil dari suatu request. Dengan memahami status code, client dapat mengetahui apakah request berhasil, membutuhkan perubahan, tidak memiliki izin, resource tidak ditemukan, atau terjadi masalah pada server.