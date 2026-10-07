# Tugas Mandiri 5 — Membandingkan SQL Mentah dan ORM

## Tujuan

Membandingkan penggunaan SQL mentah dengan ORM dalam melakukan operasi pada database.

## Operasi yang Digunakan

Operasi yang digunakan adalah mengambil data jadwal dari tabel `jadwal`.

### 1. SQL Mentah

Contoh query SQL:

```sql
SELECT * FROM jadwal;

Query tersebut digunakan untuk mengambil seluruh data yang terdapat pada tabel jadwal.
2. ORM Prisma
Contoh penggunaan Prisma:
const jadwal = await prisma.jadwal.findMany();

Kode tersebut memiliki tujuan yang sama, yaitu mengambil seluruh data dari tabel jadwal.
Perbedaan SQL Mentah dan ORM
SQL mentah menggunakan perintah SQL secara langsung untuk berkomunikasi dengan database. Sedangkan ORM menggunakan kode program atau object untuk melakukan operasi database tanpa harus menulis query SQL secara langsung.
Kelebihan SQL Mentah
SQL mentah memberikan kontrol yang lebih langsung terhadap database. Query juga dapat dibuat secara spesifik sesuai kebutuhan dan cocok digunakan untuk operasi yang kompleks.
Kelebihan ORM
ORM membuat kode database lebih mudah dibaca dan dikembangkan karena menggunakan struktur object. ORM juga membantu mengurangi kebutuhan menulis query SQL secara manual.
Apa Itu SQL Injection?
SQL injection adalah serangan yang terjadi ketika input pengguna dimasukkan ke dalam query SQL tanpa pengamanan yang tepat. Penyerang dapat memanfaatkan kondisi tersebut untuk mengubah atau menjalankan query yang tidak seharusnya.
Apa Itu Parameter Query?
Parameter query adalah nilai yang diberikan secara terpisah dari struktur query sehingga input pengguna tidak langsung menjadi bagian dari perintah SQL.
Contoh konsep parameter query:
SELECT * FROM jadwal WHERE id = ?;

Nilai id diberikan sebagai parameter secara terpisah.
Bagaimana ORM Membantu Mencegah SQL Injection?
ORM membantu mengurangi risiko SQL injection karena nilai yang diberikan pengguna diproses sebagai parameter, bukan langsung digabungkan menjadi query SQL. Namun, keamanan tetap bergantung pada cara ORM digunakan dan validasi input yang diterapkan.
Kesimpulan
SQL mentah memberikan kontrol langsung terhadap database, sedangkan ORM memberikan cara yang lebih praktis dan terstruktur untuk mengakses database melalui kode program. Keduanya memiliki kelebihan masing-masing dan dapat digunakan sesuai kebutuhan aplikasi.