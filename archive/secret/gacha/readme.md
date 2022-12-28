# 🍀 GI Gacha Guidance

Intinya panduan gacha untuk pemula yang tau cara kerja `javascript`\
Jadikan panduan ini sebagai referensi karena hasil gacha mungkin tidak 100% akurat dan lebih bergantung kepada keberuntungan

## 💠 Apa itu Pity?

Pity = Indikator ke berapa kalinya gacha\
Pity **10** = Gacha yang **ke-10** kalinya pada banner tersebut

```javascript
var pity = 0; // first or reset
function { banner }.gacha(total) {
    pity += total;
    return getRandomChar();
};
```

## 📜 Aturan

Pity **10** = **B4**\
Max Pity = **B5** &rightarrow; Reset

| Banner | Pemula | Chara 1 | Chara 2 | Senjata | Standar |
| :--: | :--: | :--: | :--: | :--: | :--: |
| Max Pity | 90 | 90 | 90 | 80 | 90 |

Karaker dan Senjata menggunakan **Interwind Fate**\
Sedangkan, Pemula dan Standar menggunakan **Acquaint Fate**

Untuk pengingat `Pity 70+ => B5 Rate+`

### Setiap banner Karakter memliki nilai pity yang sama

Nilai pity kedua-duanya akan bertambah bersamaan

```javascript
var pity = 0; // first or reset
chara1.gacha(20) => {return pity += 20}; // 0 + 20 = 20
chara2.gacha(25) => {return pity += 25}; // 20 + 25 = 45
if (pity == 'b5') {pity = 0} ; // false
return pity; // 45
```

Kalau menang B5, pity kedua-duanya akan direset

```javascript
var pity = 0; // first or reset
chara1.gacha(20) => {return pity += 22}; // 0 + 22 = 22
chara2.gacha(25) => {return pity += 15}; // 22 + 15 = 37
if (pity == 'b5') {pity = 0}; // true
return pity; // 0
```

### Jumlah pity dapat diwariskan atau diteruskan ke banner selanjutnya

```javascript
var pity = 0; // first or reset
chara1.status; // [Wanderer, Faruzan, [...], Yanfei]
chara1.gacha(40) => {return pity += 40};
await next;

return pity; // 40
chara1.status; // [Raiden, [...], [...]]
chara1.gacha(18) => {return pity += 18};
if (pity == 'b5') {pity = 0}; // false
return pity; // 58
```

Kondisi ini sering disebut dengan istilah **Nabung Pity**, yaitu **memperbanyak jumlah pity** pada banner karakter **sebelumnya** dan **membiarkannya** tanpa direset agar dapat **dipakai kembali** di banner karakter **selanjutnya**

## 📈 Rate On & Rate Off

Kondisi  **sebelum** dan **sesudah** mendapatkan **karakter B5** sebagai patokan karakter B5 **yang akan didapat** dan karakter B5 **selanjutnya**

### 📳 Rate On 📴

Kondisi dimana akan mendapatkan **Karakter Spesial B5** banner

## 📖 Istilah

Soft Pity < 50x = B5 di pity rendah\
Hard Pity > 50x = B5 di pity tinggi
