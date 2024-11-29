//? ---------- Promise ------------
//! Asenkron yapıları senkron'a çevirmek için kullanılır.
//! Callback'lerin alternatifidir.

// let check = true;
// const promise = new Promise((resolve,reject)=>{
//     if (check) {
//         resolve("Promise Başarılı");
//     }
//     else{
//         reject("Promise başarısız");
//     }
// });

//! -------------------------------------------------------------------------------

// let check = true;
// function  createPromise(){
//     return new Promise((resolve,reject)=>{
//         if (check) {
//             resolve("Promis başarıyla çalıştırıldı");
//         }
//         else{
//             reject("Promis Çalıştırılamadı");
//         }
//     });
// }

// createPromise().then((response)=>{
//     console.log(response);
// })
// .catch((err)=>{
//     console.log("Error");
// })
// .finally(()=>{
//     console.log("Herzaman çalışır.");
// });

//! -------------------------------------------------------------------------------

//? PROMİSE + XMLHTTPREQUEST

// function readStudents(url) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     try {
//       xhr.addEventListener("readystatechange", () => {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             resolve(JSON.parse(xhr.responseText));
//         }
//       });
//     } catch (error) {
//         reject(error);
//     }
//     xhr.open("GET",url);
//     xhr.send();
//   });
// }

// readStudents("student.json")
// .then((result)=>{
//     console.log(result);
// })
// .catch((err)=>{
//     console.log(err);
// })

// function getUsers(url) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.addEventListener("readystatechange", () => {
//       try {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//           resolve(JSON.parse(xhr.responseText));
//         }
//       } catch (error) {
//         reject(error);
//       }
//     });
//     xhr.open("GET",url);
//     xhr.send();
//   });
// }

// getUsers("https://jsonplaceholder.typicode.com/users").then((result)=>{
//     console.log(result);
// }).catch((err)=>{
//     console.log(err);
// })