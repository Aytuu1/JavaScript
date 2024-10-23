// ARRAY

// let numbers = [0,1,2,3,4,5,6,7,8,9];
// numbers[6]="Ali";
// console.log(numbers[6]);

// let names = ["Enes","Kübra","Bilal","Yusuf"];
// names[2]="Yakup";
// console.log(names[2]);

// let surnames=["Atasever","Şimşek","Yılmaz","Belen"];
// console.log(surnames);

// let karisikDizi =[1,"Enes",5,7,true,false];
// console.log(karisikDizi[3]);

// let array1 = [];
// let array2 = new array2();

// array1[0]="Enes";
// array1[1]="Ali";

// array2[0]="Mehmet";
// array2[1]="Samet";

// console.log(typeof(array2)); // Dizinin tipi Object türündedir.

// ?---- Foreach Döngüsü ---

// Dizilerde kullanılır.

// let names =["Enes","Yakup","Bilal","Kübra","Ayşenur"];

// names.forEach(name => {
//     console.log(name);
// });

//? --------- Array Methods -----------

/*
push: dizinin sonuna eleman ekler , ayrıca dizinin uzunluğunu döner.

unshift: dizinin başına eleman ekler , eleman sayısını geriye döner.

pop: dizinin sonundan eleman siler , eleman sayısını döner.

shift: dizinin başından eleman siler , eleman sayısını döner.

splice(index,index): eleman eklemek ve silmek için kullanılır.

toString: Diziyi stringe çevirebiliriz.
Join: diziyi stringe çevirir , farkı ise araya eleman ekleyebiliriz.

concat: dizileri birleştirmek için kullanılır.

slice(dilimlemek): diziyi istenilen yerden bölüp yeni bir dizi oluşturur.

length: dizinin uzunluğunu verir.
reverse: dizinin elemanlarını ters çevirir.
split(bölmek): belirli bir ifadeye göre bölüp diziye çevirmek.

indexOf: elemanın index numarasını verir.
includes: verilen elemanı içeriyor mu ona bakar.


*/

let cars = ["BMW", "Toyota", "Renault", "Mercedes", "Porsche"];
// -- PUSH --
// cars.push("Opel"); //? Dizinin sonuna eleman ekler.
// console.log(cars);

// --- UNSHIFT --
// cars.unshift("Hundai"); //? Dizinin Başına eleman ekler.
// console.log(cars);

// -- POP--
// cars.pop(); //? Dizinin son elemanını kaldırır.
// console.log(cars); 

// -- SHIFT--
// let silinenEleman=cars.shift(); //? Dizinin basındaki elemanı siler.
// console.log(cars);
// console.log(silinenEleman);

// -- Splice --
// console.log(cars);
// cars.splice(2,0,"Hundai"); //? Diziye eleman eklemek ve silmek için kullanılır.
// console.log(cars);
// cars.splice(1,2); //? birinci elemandan baslayıp 2 tane eleman siler.

// cars.splice(2,2,"Hundai"); //? 2. elemandan baslayıp 2 eleman siler ve Hundai ekler.

// -- TOSTRİNG--
// let stringCars=cars.toString(); //? Stringe dönüştürür.
// console.log(typeof stringCars);

// --- JOIN --
// let stringCars=cars.join("-"); //? Elemanların arasına "-" işareti koyar.
// console.log(stringCars);

// -- Concat --

// let cars1=["Bmw","Toyota","Clio","Renault"];
// let cars2=["Şahin","Mini Couper"];

// let birlesmisDizi=cars1.concat(cars2); //? İki diziyi birleştirmek için kullanılır.
// console.log(birlesmisDizi);

// -- Slice --
// console.log(cars);
// let ayriDizi=cars.slice(2); //? Diziyi istenilen yerden bölüp yeni bir Dizi oluşturur.
// console.log(ayriDizi);

// -- Length --
// console.log(cars.length); //? Dizinin uzunluğunu verir.

//-- Reverse --
// cars.reverse(); //? Dizinin elemanlarını ters çevirir.
// console.log(cars);

//  -- SPLIT --
// let names = "Enes,Ali,Veli";
// let namesArray= names.split(","); //? Dizilerin arasında ki ayırıcıya göre çevirir.
// console.log(namesArray);

// // -- IndexOf --
// let index =cars.indexOf(""); // ? String olarak yazılan elemanın index numarasını döner eğer dizide bulunamazsa -1 döner.
// console.log(index);

// -- Includes --
// let result = cars.includes("Porsche"); // ? Dizinin içinde eleman arar varsa "True" eğer yoksa "False" Döner.
// console.log(result);