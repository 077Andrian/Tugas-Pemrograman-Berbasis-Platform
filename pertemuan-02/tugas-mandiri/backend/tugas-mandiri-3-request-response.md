# Tugas Mandiri 3 — Memahami Request dan Response

## Tujuan

Memahami konsep request dan response serta penggunaan query parameter dan HTTP header melalui pengujian API HTTPBin menggunakan Postman.

## 1. Pengujian GET dengan Query Parameter

- **Method:** GET
- **URL:** `https://httpbin.org/get?nama=Andrian&kelas=Informatika`
- **Status Code:** 200 OK

Pada pengujian ini digunakan query parameter `nama` dengan nilai `Andrian` dan `kelas` dengan nilai `Informatika`. Data tersebut dikirim melalui URL dan ditampilkan kembali oleh server pada bagian `args`.

### Request

Request adalah permintaan yang dikirim oleh client kepada server. Pada pengujian ini request berupa method GET dengan query parameter nama dan kelas.

### Response

Response adalah balasan yang diberikan oleh server setelah menerima request. HTTPBin mengembalikan informasi seperti query parameter, header, origin, dan URL.

## 2. Pengujian HTTP Header

- **Method:** GET
- **URL:** `https://httpbin.org/headers`
- **Status Code:** 200 OK

Pada pengujian ini server mengembalikan informasi HTTP header yang dikirim oleh client. Beberapa informasi yang ditampilkan antara lain `Host`, `User-Agent`, `Accept`, dan `Accept-Encoding`.

### Apa itu HTTP Header?

HTTP header merupakan informasi tambahan yang dikirim bersama request atau response. Header dapat berisi informasi seperti jenis data, aplikasi yang digunakan, dan informasi lain yang diperlukan dalam komunikasi HTTP.

## 3. Perbedaan Query Parameter dan Request Body

Query parameter merupakan data yang dikirim melalui URL setelah tanda `?`, contohnya:

`https://httpbin.org/get?nama=Andrian&kelas=Informatika`

Sedangkan request body merupakan data yang dikirim di dalam isi request, biasanya digunakan pada method seperti POST, PUT, atau PATCH.

Pada pengujian sebelumnya, data JSON pada POST dikirim melalui request body, sedangkan pada pengujian GET data dikirim menggunakan query parameter.

## Kesimpulan

Request merupakan permintaan dari client kepada server, sedangkan response merupakan balasan dari server. Query parameter digunakan untuk mengirim data melalui URL, sedangkan request body digunakan untuk mengirim data melalui isi request. HTTP header berisi informasi tambahan yang digunakan dalam proses komunikasi antara client dan server.