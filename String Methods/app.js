// ? String Sınıfı Methodları

// charAt()      -> index numarasında ki karakteri verir.
// concat()      -> İki String değeri birleştirir.
// indexof()     -> istenilen string karakterin index numarasını verir.
// lastindexof() -> istenilen string karakterin veya değerin index numarasını verir fakat aramaya sağdan başlar.
// toUpperCase() -> String Değerlerin tamamını büyük harfe çevirir.
// toLowerCase() -> String Değerlerin Tamamını kücük harfe çevirir.
// trim()        -> Girilen veya verilen string değerlerde ki boşlukları alır.
// substring()   -> Baslangıc ve Bitiş değerleri verilerek dilimleme yapar.
// replace()     -> String değeri değiştirmek için kullanılır.
// split()       -> String değeri dilimleyip dizi haline getirir.
// startsWith()  ->
// endsWith()    ->

//!  -> Charat(istenilen index)
// let kurs ="Modern Web Geliştirme Kursu";
// let karakter = kurs.charAt(5);
// console.log(karakter);

//! Concat Kullanımı -> iki string değeri birleştirir.
// let kurs = "Modern Web Geliştirme Kursu";
// let tarih = "2002";
// let sonuc = kurs.concat(tarih);
// console.log(sonuc);

//! indexof() Kullanımı  -> istenilen değerin kaçıncı indexte olduğunu verir. Soldan sağa arama yapar.
// let kurs ="Modern Web Geliştirme Kursu";
// let sonuc = kurs.indexOf("e");
// console.log(sonuc);

//! lastindexof() -> istenilen değerin kaçıncı indexte olduğunu verir. Sağdan sola arama yapar.
// let kurs ="Modern Web Geliştirme Kursu";
// let sonuc = kurs.lastIndexOf("u")
// console.log(sonuc)

// ! ToUpperCase() -> String değerin tamamını büyük harfe çevirir.
// let kurs ="Modern Web Geliştirme Kursu";
// let sonuc = kurs.toUpperCase();
// console.log(sonuc)

//! toLowerCase() -> string değerin tamamını küçük harfe çevirir.
// let kurs ="Modern Web Geliştirme Kursu";
// let sonuc = kurs.toLowerCase();
// console.log(sonuc);

//! trim() -> Verilen veya kullanıcıdan alınan string değerde ki boşlukları alır.
// let kurs ="           Modern Web Geliştirme Kursu";
// let sonuc = kurs.trim();
// console.log(sonuc);

//! Substring() -> String değerin Başlangıc değeri ve bitiş değerine kadar olan değeri verir.
// let kurs ="Modern Web Geliştirme Kursu";
// let sonuc = kurs.substring(3,5);
// console.log(sonuc);

//! Slice() -> String değeri dilimlemek için kullanılır.
// let kurs ="Modern Web Geliştirme Kursu";
// let sonuc = kurs.slice(0,10);
// console.log(sonuc);

//! Replace() -> String değeri değiştirmek için kullanılır.
// let kurs ="Modern Web Geliştirme Kursu";
// let sonuc = kurs.replace("Modern","Güncel");
// console.log(sonuc);

//! Split() -> String değeri dilimleyip dizi haline getirir.
// let kurs ="Modern Web Geliştirme Kursu";
// let sonuc = kurs.split(" ");
// console.log(sonuc);

//! startsWith() -> String değer'de başlangıçta istenilen değer ile başlıyor mu diye kontrol eder. Eğer başlıyor ise "True" başlamıyor ise "False" döner.
// let kurs ="Modern Web Geliştirme Kursu";
// let sonuc = kurs.startsWith("M");
// console.log(sonuc);

//! endsWith() -> String değerin bitişi istenilen değer ile bitiyor mu diye kontrol eder. Eğer ediyorsa "True" etmiyorsa "False" döner.
// let kurs ="Modern Web Geliştirme Kursu";
// let sonuc = kurs.endsWith("u"); //! "True döner Kursu kelimesi en sonda ve u ile bittiği için."
// console.log(sonuc);
