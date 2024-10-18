// Multiplication Table (Çarpım Tablosu) Application

/*
1 x 1 = 1
1 x 2 = 2
1 x 3 = 3
*/
// for (let i = 1; i<=10; i ++){
//     for(let j=1; j<=10; j++){
//         console.log(i +"x"+j+"="+(i*j));
//     }
//     console.log("---------------------");
//     }


/*
    Prime Number App (Asal Sayı)

*/

// let sayi = Number(prompt("Lütfen bir sayı giriniz."));
// let sonuc = true;
// for(let i = 2; i<=Math.floor(sayi/2); i++){
//     if (sayi % i ==0) {
//         // asal değildir
//         sonuc=false;
//         break;
//     }
// }
// if (sonuc) {
//     alert(sayi +"Asaldır");
// }
// else{
//     alert(sayi+"Asal Değildir");
// }

// Faktöriyel Hesaplama
// debugger;
// let sayi = Number(prompt("Faktöriyeli Hesaplanılacak Sayıyı giriniz."));
// let carpım =1;
// if (sayi== 0 && sayi == 1 ) {
//     console.log("Sonuc:" + carpım);
// }
// for( let i =1; i<=sayi;i++){
//    carpım = carpım * i ;
// }
// console.log(carpım);


// Armstrong Number (153 - 370 - 407)
// 153 = 1*1*1 + 5*5*5 + 3*3*3 = 1 + 125 + 27 = 153

// let sayi = prompt("Sayi giriniz.");
// let toplam = 0;
// for(let i = 0; i<sayi.length; i++){
//    let rakam= sayi.charAt(i);
//    toplam += rakam*rakam*rakam;
// }
// if (Number(sayi)==toplam) {
//     alert("Armstrong Sayısıdır");
// }
// else{
//     alert("Armstrong sayısı değildir..")
// }