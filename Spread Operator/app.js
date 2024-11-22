//? ------------ Spread Operatör Kullanımı ------


// let numbers = [10,20,30,40];
// function add(a,b,c,d){
//     console.log(a+b+c+d);
// }

// ! old way 
// add(numbers[0],numbers[1],numbers[2],numbers[3]);


/*
! --------- new way ---------
...numbers  =>  numbers[0],numbers[1],numbers[2],numbers[3]
*/
// add(...numbers);

//! -------- old way --------
// const languages = ["Java","Python"];
// const languages2 = ["Php","C#",languages[0],languages[1]];
// console.log(languages2);


//! --------- new way --------
// const languages = ["Java","Python"];
// const languages2 = ["Php","C#",...languages];
// console.log(languages2);


// const numbers = [1,2,3,4,5,6,7,8,9];
// let [a,b,...remainderNumbers]= numbers;
// console.log(a,b,...remainderNumbers);

//! -------- old way --------
// const city = ["İstanbul","Ankara","Malatya"];
// const city2 = [];

// city2[0]=city[0];
// city2[1]=city[1];
// city2[2]=city[2];
// console.log(city2);

//! --------- new way --------
// const city  =["İstanbul","Ankara","Malatya"];
// const city2 = [...city];
// console.log(city2);



