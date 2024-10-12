/*
 ? ÇOKLU İF YAPISI  
 */
// let ad =prompt("İsminizi giriniz.");
// let tckn = prompt("Tckn giriniz.");
//  function kontrolEt(ad,tckn){
//     if (ad !="") {
//         if (tckn.length==11) {
//             alert("Adiniz :" +ad+ "Tckn: "+tckn);
//         } else {
//             alert("Lütfen 11 haneli tckn Giriniz");
//         }
//     } else {
//         alert("Lütfen isminizi giriniz.");
//     }
//  }
// kontrolEt(ad,tckn);


/* 
    -- Beden Kitle Endeksi --


*/
let kilo = Number(prompt("Kilonuzu giriniz."));
let boy = Number(prompt("Boyunuzu Giriniz."));
let sonuc = kilo / (boy * boy);
if (sonuc < 18.5) {
    console.log("İdeal Kilonun altında"+ sonuc);
} 
else if(sonuc >= 18.5 && sonuc <= 24.9) {
    console.log("İdeal Kiloda" + sonuc);
}
else if(sonuc>=25 && sonuc <= 29.9)
    {
    console.log("İdeal Kilonun üstünde" + sonuc);
}
else if(sonuc>=30 && sonuc <=39.9){
    console.log("İdeal Kilonun çok üstünde"+ sonuc);
}
else{
    console.log("Obezsiniz " + sonuc);
}






