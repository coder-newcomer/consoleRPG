# 🍀 GI *Gacha* Guidance

Intinya ini adalah panduan *gacha* untuk pemula yang tau cara kerja `javascript`. Jadikan panduan ini sebagai referensi karena hasil *gacha* kalian mungkin **tidak 100% akurat** dan lebih bergantung kepada **keberuntungan kalian**.

## 💠 Apa itu Pity?

Pity adalah Indikator ke berapa kalinya kalian *gacha* pada suatu banner.\
Pity **10** &rightarrow; *Gacha* yang **ke-10** kalinya, kalian pada banner tersebut.

```javascript
var pity = 0; // first or reset
function { banner }.gacha(total) {
    var got = getRandomChar();
    pity += total; // Increased every wish or gacha
    if (got.star == 5) {pity = 0};
    return [got, pity];
};
```

## 📜 Aturan

Pity **10** = **B4**\
Pity **Max** = **B5** &rightarrow; Reset

| Banner | Pemula | Chara 1 | Chara 2 | Senjata | Standar |
| :--: | :--: | :--: | :--: | :--: | :--: |
| Max Pity | 90 | 90 | 90 | 80 | 90 |

Banner Karaker dan Senjata menggunakan ***Interwind Fate***.\
Banner Pemula dan Standar menggunakan ***Acquaint Fate***.

Keduanya dapat dibeli seharga **160 Primogem**.\
Dengan kata lain, dibutuhkan **1600 Primogem** untuk mendapatkan **B4**, dan untuk mendapatkan **100% B5** dibutuhkan setidaknya **12800-14400 Primogem.**

> Banyak bet njir!?

Meskipun begitu, kita sebenarnya **tidak perlu** *gacha* sebanyak 90 kali untuk mendapatkan B5. Bisa saja mendapatkan B5 tersebut di **pity rendah** (misal: 20) atau **pity tinggi** (misal: 80).

Kondisi ini sering disebut *soft pity* untuk **pity rendah** dan *hard pity* untuk **pity tinggi**.

> Sekedar mengingatkan, `Pity 70+ => B5 Rate+`.

### Setiap banner Karakter memliki nilai pity yang sama

Nilai pity kedua-duanya akan bertambah bersamaan.

```javascript
var pity = 0;
var result = chara1.gacha(20);
result; // [charX, 20]

var result = chara2.gacha(20);
result; // [charY, 40]
```

Kalau menang B5, pity kedua-duanya akan direset.

```javascript
var pity = 0;
var result = chara1.gacha(20);
result[0].star == 5; // false
result; // [charX, 20]

var result = chara2.gacha(25);
result[0].star == 5; true
result; // [charY, 0]
```

### Jumlah pity dapat diwariskan atau diteruskan ke banner selanjutnya

```javascript
var pity = 0;
chara1.status; // [Wanderer, Faruzan, [...], Yanfei]
var result = chara1.gacha(18);
result[0].star == 5; // false
result; // [charX, 20]
await next;

pity; // 40
chara1.status; // [Raiden, [...], [...]]
var result = chara1.gacha(30);
result[0].star == 5; // false
result; // [charY, 20]
pity; // 58
```

Kondisi ini sering disebut dengan istilah **Nabung Pity**, yaitu **memperbanyak jumlah pity** pada banner karakter sebelumnya (dengan *gacha* tentunya) dan **membiarkannya** tanpa direset agar dapat **dipakai kembali** di banner karakter selanjutnya.

## 📈 Rate On & Rate Off

Kondisi  **sebelum** dan **sesudah** mendapatkan **karakter B5** sebagai patokan **karakter B5 yang akan didapat**.

> Kondisi ini hanya berlaku pada **banner karakter**.

### 📳 Rate On

Kondisi dimana kalian akan mendapatkan **Karakter Spesial B5**, kondisi ini didapat ketika berhasil mendapatkan **Karakter B5 Standar** atau selain **Karakter Spesial**, yang mana karakter B5 selanjutnya sudah dipastikan adalah **Karakter Spesial**.

```javascript
var pity = 0;
var result = chara1.gacha(75);
result[0].name; // Qiqi
result[0].star == 5; // true

var result = chara1.gacha(30);
result[0].name; // Wanderer
result[0].star == 5; // true
```

Dengan kata lain, ketika berhasil mendapatkan **salah satu** karakter B5 standar (bukan semuanya) seperti `[Diluc, Mona, Keqing, [...], Qiqi]`, karakter B5 selanjutnya sudah bisa dipastikan adalah **Karakter Spesial** seperti `[Ayaka, Yoimiya, Nahida, Wanderer, [...], Raiden]`.

### 📴 Rate Off

Kondisi normal atau biasa saat *gacha*. Ketika kalian berhasil mendapatkan karakter B5, itu bisa saja **Karakter Spesial** atau **Karakter Standar**, tergantung keberuntungan kalian. Ketika mendapatkan **Karakter Spesial** dikondisi ini sering disebut **menang rate off**, dn kalo kalah disebut **kalah rate off**.

> Kalau kalah rate on itu gak tau, soalnya gak pernah dengar dan tau itu.

Walaupun begitu, itu tidak akan berpengaruh terhadap pity. Pity tetap akan direset ketika berhasil mendapatkan **B5 jenis apapun**.

```javascript
var pity = 0;
var result = chara1.gacha(50);
result[0].star == 5; true
result; // [charX, 0]
```

## 🔮 Tips & Triks

### Tabung primo sebanyak mungkin untuk karakter yang memang dinginkan

Setidaknya **tahanlah** nafsumu untuk *gacha* jika kalian memang adalah **player f2p** (free-to-player atau gratisan), kalau ada duitnya mah ya terserah kalian.\
\
Kalau kalian memang ingin benar-benar mendapatkan karakter yang diinginkan, kalian bisa tabung primogem hingga perkiraan max pity tadi, cukup banyak memang.

Namun ada banyak cara untuk mendapatkan primogem. Secara *Interwind Fate* memang lebih sulit didapat daripada primogem ataupun *Acquaint Fate*. Tapi, tidak ada salahnya kan bekerja keras untuk suatu hal. Bisa saja hasil kerja keras kalian malah berbuah hasil ganda? Andaikan, kalian malah mendapat 2 Karakter B5 dari hasil menabung primo kalian secara tidak terduga!?

> Game 
