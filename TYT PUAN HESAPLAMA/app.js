/*
 ? TYT PUAN HESAPLAMA UYGULAMASI
 1-Türkçe 40  (4 puan)
 2-Matematik 40 (4 puan)
 3-Sosyal Bilimler 20 ( 4 puan)
 4-Fen Bilimleri 20 (4 puan)
 ------>100 puanı ÖSYM veriyor
 ------>Okul Puanı Max 60 Veriyor.
 */

// let turkceDogru,
//   turkceYanlis = 0;
// let matDogru,
//   matYanlıs = 0;
// let fenDogru,
//   fenYanlis = 0;
// let sosyalDogru,
//   sosyalYanlis = 0;
// let puan = 0;
// let okulPuan = 0;
// const yeniSatir = "\r\n";
// let mesaj =
//   "TYT PUAN HESAPLAMA SİSTEMİNE HOŞGELDİNİZ" +
//   yeniSatir +
//   "1-Puan Hesapla" +
//   yeniSatir +
//   "2-Çıkış Yap";

// let secim = prompt(mesaj);
// switch (secim) {
//   case "1":
//     okulPuan = Number(prompt("Okul Puanınızı Giriniz."));

//     turkceDogru = Number(prompt("Türkçe doğru sayısını giriniz."));
//     turkceYanlis = Number(prompt("Türkçe yanlış sayısını giriniz."));

//     matDogru = Number(prompt("Matematik doğru sayısını giriniz."));
//     matYanlıs = Number(prompt("Matematik yanlış sayısını giriniz."));

//     fenDogru = Number(prompt("Fen Bilimleri doğru sayısını giriniz."));
//     fenYanlıs = Number(prompt("Fen Bilimleri yanlış sayısını giriniz."));

//     sosyalDogru = Number(
//       prompt("Sosyal Bilgiler doğru sayısını giriniz.")
//     );
//     sosyalYanlisYanlıs = Number(
//       prompt("Sosyal Bilgiler yanlış sayısını giriniz.")
//     );
//     let dogruNet = turkceDogru + matDogru + sosyalDogru + fenDogru;
//     let yanlısSayısı = turkceYanlis + matYanlıs + sosyalYanlis + fenYanlis;
//     let kalanDogruSayisi = dogruNet - (yanlısSayısı / 4);
//     puan = (kalanDogruSayisi * 4) + 100 + okulPuan;
//     alert("TYT Puanınız:" + puan);
//     break;
//   case "2":
//     alert("Sistemden çıkış yapıldı");
//     break;
//   default:
//     alert("Lütfen geçerli aralıkta değer giriniz.");
//     break;
// }
