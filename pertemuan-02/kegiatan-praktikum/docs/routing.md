\# Dokumentasi Routing API P2



\## 1. Base URL



API dijalankan secara lokal menggunakan Express.js.



http://localhost:3000/api/v1



\## 2. Daftar Endpoint



| No | Method | URL | Input | Status |

|---|---|---|---|---|

| 1 | GET | /api/v1 | Tidak ada | 200 |

| 2 | GET | /api/v1/jadwal | Tidak ada | 200 |

| 3 | GET | /api/v1/jadwal?status=aktif | Query status | 200 |

| 4 | GET | /api/v1/jadwal/jumlah-jadwal | Tidak ada | 200 |

| 5 | GET | /api/v1/jadwal/:id | Parameter id | 200 / 400 / 404 |

| 6 | POST | /api/v1/jadwal | JSON body | 201 |

| 7 | PUT | /api/v1/jadwal/:id | Parameter id + JSON body | 200 |

| 8 | DELETE | /api/v1/jadwal/:id | Parameter id | 200 / 404 |

| 9 | GET | /api/v1/jadwal/:jadwalId/peserta | Parameter jadwalId | 200 / 404 |

| 10 | POST | /api/v1/jadwal/:jadwalId/peserta | Parameter + JSON body | 201 |

| 11 | GET | /api/v1/jadwal/:jadwalId/peserta/:pesertaId | Parameter | 200 / 404 |



\## 3. Pengujian Endpoint



\### GET /api/v1



Menampilkan informasi bahwa API v1 aktif.



Response:



{

&#x20; "status": true,

&#x20; "message": "Welcome to API v1",

&#x20; "data": null

}



\### GET /api/v1/jadwal



Menampilkan seluruh data jadwal yang tersedia.



\### GET /api/v1/jadwal?status=aktif



Menampilkan jadwal berdasarkan status yang diberikan melalui query parameter.



Contoh:



/api/v1/jadwal?status=aktif



\### GET /api/v1/jadwal/:id



Menampilkan data jadwal berdasarkan ID.



Contoh:



/api/v1/jadwal/1



Jika ID bukan angka atau data tidak ditemukan, API memberikan response error.



\### POST /api/v1/jadwal



Digunakan untuk menambahkan data jadwal baru.



Contoh body:



{

&#x20; "mataKuliah": "Keamanan Aplikasi",

&#x20; "status": "aktif"

}



\### PUT /api/v1/jadwal/:id



Digunakan untuk mengubah data jadwal berdasarkan ID.



Contoh:



/api/v1/jadwal/1



\### DELETE /api/v1/jadwal/:id



Digunakan untuk menghapus data jadwal berdasarkan ID.



\### GET /api/v1/jadwal/:jadwalId/peserta



Menampilkan peserta yang terdaftar pada jadwal tertentu.



Contoh:



/api/v1/jadwal/1/peserta



\### POST /api/v1/jadwal/:jadwalId/peserta



Digunakan untuk menambahkan peserta ke jadwal tertentu.



Contoh body:



{

&#x20; "nim": "2026004",

&#x20; "nama": "Damar"

}



\### GET /api/v1/jadwal/:jadwalId/peserta/:pesertaId



Menampilkan satu peserta berdasarkan ID peserta dan memastikan peserta tersebut memang berada pada jadwal yang dipilih.



Contoh:



/api/v1/jadwal/1/peserta/101



\## 4. Kesimpulan



Pada praktikum ini dibuat REST API menggunakan Express.js dengan beberapa jenis routing, yaitu route biasa, dynamic route, query parameter, serta nested route. Data yang digunakan masih berupa data sementara dalam array sehingga perubahan data akan kembali seperti semula ketika server dijalankan ulang.

