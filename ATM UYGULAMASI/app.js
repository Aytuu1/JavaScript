/*
 ? ATM UYGULAMASI
 1-Bakiye görüntüleme
 2-Para Çekme
 3-Para Yatırma
 4-Çıkış
*/
// const yeniSatir = "\r\n";
// let metin =
//   "Yapmak İstediğiniz İşlemi Seçiniz." +
//   yeniSatir +
//   "1-Bakiye Görüntüleme" +
//   yeniSatir +
//   "2-Para Çekme" +
//   yeniSatir +
//   "3-Para Yatırma" +
//   yeniSatir +
//   "4-Çıkış";
// let islem = prompt(metin);
// let bakiye = 1000;
// switch (islem) {
//   case "1":
//     alert("Bakiyeniz:" + bakiye);
//     break;
//   case "2":
//     let cekilecekTutar = Number(prompt("Çekmek istediğiniz tutarı giriniz"));
//     if (cekilecekTutar > bakiye) {
//       alert("Bakiyeniz Yetersiz. mevcut bakiyeniz:" + bakiye);
//     } else {
//       bakiye = bakiye - cekilecekTutar;
//       alert("Kalan bakiyeniz:" + bakiye);
//     }
//     break;
//     case "3":
//         let yatirilacakTutar = Number(prompt("Yatırmak istediğiniz tutarı Giriniz."));
//         bakiye = yatirilacakTutar + bakiye;
//         alert("Güncel Bakiyeniz:"+bakiye);
//         break;
//     case "4":
//         alert("Sistemden çıkış yapılmıştır.");   
//         break;     
//   default:
//     alert("Lütfen 1 ile 4 arasında bir değer giriniz.");
//     break;
// }
