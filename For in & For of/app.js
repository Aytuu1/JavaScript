//? For in & For Of Loops

// let names =["Enes","Ali","Yusuf","Betül","Ceyda"];
// names.forEach(x =>{
//     console.log(x);
// })

//! For in Loop  (index numarasını verir.)
// let names =["Enes","Ali","Yusuf","Betül","Ceyda"];
// for(let name of names){
//     console.log(name);
// }

//! For Of Loop  (Değeri verir.)
// let names =["Enes","Ali","Yusuf","Betül","Ceyda"];
// for(let name of names){
//     console.log(name);
// }

//----------------------------------------------------------------------

//? ------------ Map -- > key(anahtar) value(değer)

const map1 = new Map();

//! Set Method

// map1.set(1,"Burak");
// map1.set(true,5);
// map1.set([1,2,3],{firstName:"Enes",lastName:"Çapur"});

let value ;

map1.set(34,"İstanbul");
map1.set(35,"İzmir");
map1.set(6,"Ankara");
map1.set(1,"Adana");

//! Get Method

// console.log(map1.get(1));

//! Size 
// value = map1.size;

//!Delete
// value = map1.delete(34);
// value = map1.get(34);

//! HAS Method (Map'in içerisinde bir değer var mı)
// value = map1.has(34);
// value = map1.has(55);


//! For Of methodu ile map üzerinde dönebiliriz.
// for (let[key,value] of map1){
//     console.log(key,value);
// }

// const key = map1.keys();
// console.log(key);


// for (let value of map1.values()){
//     console.log(a);
// }


//! ----------Map'den ARRAY ÇEVİRME--------
// console.log(map1);
// let array = Array.from(map1);
// console.log(array);


// const array2 = [
//     [34,"İstanbul"],
//     [35,"İzmir"],
//     [06,"Ankara"],
//     [01,"Adana"],
// ]

// const array = Array.from(map1);
// array.forEach((value) =>{
//     console.log(value[0],value[1]);
// });


//! Array'i  Map'e Çevirmek 
const array2 = [
    [34,"İstanbul"],
    [35,"İzmir"],
    [06,"Ankara"],
    [01,"Adana"],
]
const myMap = new Map(array2);
const myArray = Array.from(myMap);
console.log(myArray);