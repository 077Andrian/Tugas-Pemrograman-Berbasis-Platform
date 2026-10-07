# Tugas Mandiri 1 — Mengenal HTTP Method dan Endpoint

## Tujuan

Memahami penggunaan beberapa HTTP method melalui pengujian endpoint pada HTTPBin menggunakan Postman.

## Hasil Pengujian

### 1. GET

- **HTTP Method:** GET
- **URL:** `https://httpbin.org/get?nama=Andrian&kelas=Informatika`
- **Endpoint:** `/get`
- **Data yang dikirim:** Parameter query `nama=Andrian` dan `kelas=Informatika`
- **Status Code:** 200 OK

**Hasil:** Server mengembalikan data query parameter, header, origin, dan URL yang digunakan.

**Penjelasan:** Method GET digunakan untuk mengambil data. Parameter yang dikirim melalui URL akan ditampilkan kembali oleh HTTPBin pada bagian `args`.

### 2. POST

- **HTTP Method:** POST
- **URL:** `https://httpbin.org/post`
- **Endpoint:** `/post`
- **Data yang dikirim:**

```json
{
  "nama": "Andrian",
  "kelas": "Informatika"
}

- Status Code: 200 OK
Hasil: Server mengembalikan kembali data JSON yang dikirim pada bagian data.
Penjelasan: Method POST digunakan untuk mengirim data ke server. Pada pengujian ini data dikirim menggunakan JSON pada request body.
3. PUT
- HTTP Method: PUT
- URL: https://httpbin.org/put
- Endpoint: /put
- Data yang dikirim:
{
  "nama": "Andrian",
  "kelas": "Informatika",
  "semester": 5
}

- Status Code: 200 OK
Hasil: Server mengembalikan data JSON yang dikirim pada request body.
Penjelasan: Method PUT digunakan untuk mengirim data yang biasanya berkaitan dengan pembaruan suatu resource. HTTPBin menampilkan kembali data yang diterima.
4. PATCH
- HTTP Method: PATCH
- URL: https://httpbin.org/patch
- Endpoint: /patch
- Data yang dikirim:
{
  "nama": "Andrian",
  "kelas": "Informatika",
  "semester": 5
}

- Status Code: 200 OK
Hasil: Server mengembalikan data JSON yang dikirim pada request body.
Penjelasan: Method PATCH digunakan untuk melakukan perubahan sebagian pada suatu resource. Pada pengujian ini HTTPBin mengembalikan data yang diterima.
5. DELETE
- HTTP Method: DELETE
- URL: https://httpbin.org/delete
- Endpoint: /delete
- Data yang dikirim: Tidak ada
- Status Code: 200 OK
Hasil: Server memberikan response yang menunjukkan bahwa request DELETE berhasil diterima.
Penjelasan: Method DELETE digunakan untuk menghapus suatu resource. Pada pengujian HTTPBin, server menerima request tersebut dan mengembalikan informasi request.
Ringkasan Pengujian
No	Method	Endpoint	Data yang Dikirim	Status	Hasil
1	GET	/get	Query nama, kelas	200 OK	Data query berhasil dikembalikan
2	POST	/post	JSON nama dan kelas	200 OK	Data JSON berhasil diterima
3	PUT	/put	JSON nama, kelas, semester	200 OK	Data berhasil diterima
4	PATCH	/patch	JSON nama, kelas, semester	200 OK	Data berhasil diterima
5	DELETE	/delete	Tidak ada	200 OK	Request DELETE berhasil diterima


Kesimpulan
Dari pengujian menggunakan Postman, setiap HTTP method memiliki fungsi yang berbeda. GET digunakan untuk mengambil data, POST untuk mengirim data, PUT dan PATCH untuk perubahan data, sedangkan DELETE digunakan untuk menghapus data. HTTPBin membantu melihat kembali informasi yang dikirim melalui request dan response.