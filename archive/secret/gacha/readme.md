# 💠 GI Gacha Guidance

Genshin Impact gacha guidance ported to `javascript` for people who know

## 💠 Pity

Pity = How much you gacha on each banner\
Pity **10** = Gacha on **10x** times at current banner

```javascript
var pity = 0; // first or reset
function { banner }.gacha(total) {
    pity += total;
    return getRandomChar();
};
```

## 📜 Rules

**10x** Gacha = **B4**\
Max Pity (**90**) = **B5** &rightarrow; Reset

| Novice | Chara 1 | Chara 2 | Weapon | Standart |
| :--: | :--: | :--: | :--: | :--: |
| 90 | 90 | 90 | 80 | 90 |

`Pity 70+ => B5 Rate+`

Special character have same pity
---

```javascript
var pity = 0; // first or reset
chara1.gacha(20) => {return pity += 20}; // 0 + 20 = 20
chara2.gacha(25) => {return pity += 25}; // 20 + 25 = 45
if (pity == 'b5') {pity = 0} ;// false
return pity; // 45
```

If you win, pity will reset on both

```javascript
var pity = 0; // first or reset
chara1.gacha(20) => {return pity += 22}; // 0 + 22 = 22
chara2.gacha(25) => {return pity += 15}; // 22 + 15 = 37
if (pity == 'b5') {pity = 0}; // true
return pity; // 0
```

Pity is inherited to next banner (except weapon)
---

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

This is often called **Pity Deposit**

## 📈 Rate Off & Rate On

## 📖 Istilah

Soft Pity < 50x = B5 on low pity\
Hard Pity > 50x = B5 on high pity
