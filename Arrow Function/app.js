//? ---------- Arrow Function Kullanımı ---------

// const yazdir = () =>{
//     console.log("merhaba");
// }
// yazdir();

// const yazdir = (firstName,lastName) =>{
//     console.log(firstName,lastName);
// }
// yazdir("Burak","Yılmaz");

// //! Tek bir parametre alıyorsa parantez koyulmayabilir.
// const yazdir =firstName => {
//     console.log("Merhaba",firstName);
// }
// yazdir("burak");

// //! Tek bir işlem yapılıyorsa küme parantezi koyulmayabilir.
// const yazdir = firstName =>console.log("Merhaba",firstName);
// yazdir("burak");

// const kupAl = x => x*x*x;
// console.log(kupAl(3));

//? --------------- Destructing Kullanımı --------

// let langs = ["C#","C++","JavaScript","Python"];
// let lang1,lang2,lang3,lang4;

// lang1 = langs[0];
// lang2 = langs[1];
// lang3 = langs[2];
// lang4 = langs[3];
// console.log(lang1,lang2,lang3,lang4);

// let langs = ["İstanbul","Ankara","Eskişehir","Antalya"];
// let [lang1,lang2,lang3,lang4]=langs;
// console.log(lang1,lang2,lang3,lang4);

// const calculate = (a, b) => {
//   const collect = a + b;
//   const subtract = a - b;
//   const impact = a * b;
//   const divide = a / b;
  

//   const array = [collect,subtract,impact,divide];
//   return array;
// };

// let[a,b,c,d] =  calculate(10,2);
// console.log(a,b,c,d)


// const person = {
//     firstName: "Enes",
//     lastName : "Bayram",
//     age:20,
//     city :"Ankara",
//     job :"Builder"
// }

// // let name,lastName,age,city,job;

// let {firstName,lastName,age,city,job} =person;
// console.log(firstName,lastName,age,city,job);