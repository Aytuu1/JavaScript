//? ---------- Session Storage Kullanımı ---------

//? --------- Değer ekleme --------
sessionStorage.setItem("310","Enes");
sessionStorage.setItem("311","Mustafa");
sessionStorage.setItem("154","Bilal");

//? --------- Değer Silme --------
//! Key değerlerini verip sessionStorage'den değeri removeItem ile kaldırıyoruz.

// sessionStorage.removeItem("310");
// sessionStorage.removeItem("154");

//? -----------Değeri Getirme ----------
//! sessionStorage içerisine atanmış olan değeri getItem("Key") ile alabiliyoruz. Eğer atanmış bir key değeri bulunmuyorsa "Null" döner.

// let a = sessionStorage.getItem("311");
// console.log(a);

//? ---------- Değer Silme ----------
//! sessionStorage içerisinde bulunan tüm değerleri silmek için sessionStorage.clear(); kullanılır.

//? ---- sessionStorage  & Array yazdırma ------

// let names = ["Ali","Veli","Mehmet","Çınar","Enes","Kemal","Salih","Can","Yusuf","Burak"];

// sessionStorage.setItem("names",JSON.stringify(names));

// let value = JSON.parse(sessionStorage.getItem("names"));
// value.forEach(function(array) {
//     console.log(array);
// });

