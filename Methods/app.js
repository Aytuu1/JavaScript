// Parametresiz ve geriye değer döndürmeyen method tanımlamak.

/*
function yazdir(){
    ! kodlar yazılacak
}
*/
// function yazdir() {
//     console.log("Fonksiyon çalıştırıldı");
// }
// yazdir();

// function topla() {
//     console.log(5+7);
// }
// topla();
// ---------------------------------

// Parametreli Method
// function yazdir(name,surname){
//  console.log(name +" "+ surname);   
// }
// yazdir("Yusuf","Yılmaz");


// function cube(sayi){
//     console.log(sayi*sayi*sayi);
// }
// cube(3);

// let yas = Number(prompt("Yaşınızı Giriniz:"));

// function check(yas){
//     if (yas=>18 ) {
//         console.log("Ehliyeti Alabilirsiniz");
//     }
//     else{
//         console.log("Ehliyeti Alamazsınız");
//     }
// }
// check(18);


// Geriye Değer Döndüren Method

// function cube(sayi){
//     let sonuc= sayi*sayi*sayi;
//     return sonuc;
// }
// let valueReturn =  cube(3); // Dönen değeri değişkene alabiliriz.
// console.log(cube(5)); // Dönen değeri direk yazdırabiliriz.

// function square(sayi){
//     let sonuc = sayi * sayi;
//     return sonuc;
// }

// let cubeNumber = cube(2);
// console.log(square(cubeNumber));


//---- Harf sayısı uygulaması --

// let metin ="Şuanda Yalova'da Javascript eğitimi çekmekteyim.";

// let harf =prompt("Harfi giriniz.");
// let sonuc = bul(harf);
// alert("Harf Sayısı" + sonuc);

// function bul(harf){
//     let toplam = 0;
//     for(let i=0; i<metin.length; i++){
//         if (metin.charAt(i)==harf) {
//             toplam+=1;
//         }
//     }
//     return toplam;
// }

// ------- Mükemmel Sayı Uygulaması ------

/*
  6 - 28 - 496
 
  6  = 1 , 2 , 3 ,6 = 12 = 6*2
  28 = 1 , 2, 4, 7 , 14 , 28 = 56 = 28*2
*/

// function isPerfectNumber(number){
//     let toplam = 0;
//     for(let i = 2; i<=number/2; i++){
//         if (number % 2 == 0) {
//             toplam+=i;
//         }
//     }
//     toplam += 1 + number;
//     if (toplam==number*2) {
//         console.log("Mükemmel Sayıdır");
//     }
//     else{
//         console.log("Mükemmel Sayı Değildir.");
//     }
// }

// 10'luk Sayıyı 2'lik Sayıya Çevirme

// let number =prompt("Bir sayi giriniz.");
// convertDecimalToBinary(number);
// function convertDecimalToBinary(number) {
//     let binary = "";
//     while (true) {
//         binary += (number % 2).toString();
//         number = Math.floor(number / 2);
//         if (number==1) {
//             binary += 1;
//             break;
//         }
//     }
//     let result = reverse(binary);
//     console.log("Sonuç:"+result);   
// }

// function reverse(binary){
//     let reverseBinary = "";
//     for(let i = binary.length-1; i>= 0; i--){
//         reverseBinary += binary.charAt(i);
//     }
//     return reverseBinary;
// }

//------ İkilik sayıdan 10'luk sayıya çevirmek -------
//  let binary="1011";
// function convertBinaryToDecimal(binary){
//     let toplam =0;
//     let ust =0;
//     for(let i = binary.length-1; i>=0; i--){
//     toplam +=Number(binary.charAt(i)) * Math.pow(2,ust);
//     ust++;
//     }
//     console.log("Sonuç:" + toplam);
// }
// convertBinaryToDecimal(binary);