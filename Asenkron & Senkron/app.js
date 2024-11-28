/*
 1 -> Javascript senkron çalışan bir programlama dilidir.

 --- Asenkron Çalıştığı Zamanlar ------
 1 -> Timing
 2 -> Event(Olay)
 3 -> Http İsteklerinde

*/


//? -- Timing Example --

// console.log("Burak");

// setTimeout(() => {
//     console.log("1000 ms süre doldu ve çalıştı");
// }, 1000);

// setTimeout(() => {
//    console.log("500 ms Süre doldu ve çalışti"); 
// }, 500);

// setTimeout(() => {
//    console.log("750 ms süre doldu ve çalıştı"); 
// }, 750);

// console.log("Belen");


//? ----CALLBACK EXAMPLE --------

// function getName(callback){
//    setTimeout(() => {
//       let name ="Enes";
//       callback(name);
//    }, 1000);
// };

// function getSurname(name,callback){
//    setTimeout(() => {
//       let surName="Çakal";
//       callback(surName);
//    }, 500);
// }

// function getAge(name,surName,callback){
//    setTimeout(() => {
//       let age = 23;
//       callback(age);
//    }, 300);
// }

// getName((name)=>{
//    getSurname(name,(surName)=>{
//       getAge(name,surName,(age)=>{
//          console.log(name,surName,age);
//       })
//    })
// })