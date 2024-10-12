// Benzin İstasyonu Uygulaması

/*
    1- Dizel : 24.53
    2- Benzin: 22.25
    3- Lpg   : 11.1

    Gelen Müşteriden alınacak bilgiler
    1- Yakıt Tipi
    2- Yüklenecek Yakıt Litresi

*/
// let dizel = 24.53 , benzin = 22.25 , lpg = 11.1;
// const yeniSatir = "\r\n";
// const yakitMetni="1-Dizel"+yeniSatir
// +"2-Benzin"+yeniSatir
// +"3-Lpg"+yeniSatir+
// "Yakıt Tipini Seçiniz";
// let yakitTipi =Number(prompt(yakitMetni));
// let yüklenecekLitre=Number(prompt("Yüklenecek yakıt litresini giriniz."));
// let bakiye = Number(prompt("Bakiyenizi giriniz."))

// if (yakitTipi==1) {
//     let odenecekTutar = dizel * yüklenecekLitre;
//     if (odenecekTutar<bakiye) {
//         bakiye =bakiye - odenecekTutar 
//         alert("Bakiyeniz yeterli :"+yeniSatir+
//              "Kalan Bakiyeniz:"+bakiye);
//     }
//     else{
//         alert("Yetersiz Bakiye"+yeniSatir+
//             "Ödenecek Tutar:" +odenecekTutar+yeniSatir+
//             "Bakiyeniz:"+bakiye+yeniSatir+
//             "Eksik Tutar:"+(odenecekTutar-bakiye)
//         );
//     }    
// }
// else if (yakitTipi == 3){
//     let odenecekTutar = lpg * yüklenecekLitre;
//     if (odenecekTutar<bakiye) {
//         bakiye =bakiye - odenecekTutar 
//         alert("Bakiyeniz yeterli :"+yeniSatir+
//              "Kalan Bakiyeniz:"+bakiye);
//     }
//     else{
//         alert("Yetersiz Bakiye"+yeniSatir+
//             "Ödenecek Tutar:" +odenecekTutar+yeniSatir+
//             "Bakiyeniz:"+bakiye+yeniSatir+
//             "Eksik Tutar:"+(odenecekTutar-bakiye)
//         );
//     }    
// }
// else if (yakitTipi == 2){
//     let odenecekTutar = benzin * yüklenecekLitre;
//     if (odenecekTutar<bakiye) {
//         bakiye =bakiye - odenecekTutar 
//         alert("Bakiyeniz yeterli :"+yeniSatir+
//              "Kalan Bakiyeniz:"+bakiye);
//     }
//     else{
//         alert("Yetersiz Bakiye"+yeniSatir+
//             "Ödenecek Tutar:" +odenecekTutar+yeniSatir+
//             "Bakiyeniz:"+bakiye+yeniSatir+
//             "Eksik Tutar:"+(odenecekTutar-bakiye)
//         );
//     }    
// }
// else{
//     console.log("Geçerli bir değer giriniz.");
// }