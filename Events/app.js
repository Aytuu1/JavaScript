//? ------------- Klavye Eventları -----------
// 1 -> keypress //! Klavyeden basılan tuşu yakalamak için kullanılır (Harf ve sayılarda tetiklenir)
// 2 -> keydown  //! Klavyeden basılan tuşu yakalamak için kullanılır (Herşey'de tetiklenir)
// 3 -> keyup    //! Klavyede ki basılan tuştan elini kaldırdığında çalışır.(Herşey'de tetiklenir)
 

//! ----------------- Keypress Kullanımı --------------
// document.addEventListener("keypress",run);
// function run(e){
//     console.log("Klavyeden basılan harf: "+e.key);
//     console.log("Klavyeden Basılan harfin Kodu: " + e.keyCode);
// }

//! ----------------- Keydown Kullanımı --------------
// document.addEventListener("keydown",run);
// function run(e){
//     console.log("Klavyeden basılan harf: "+e.key);
//     console.log("Klavyeden Basılan harfin Kodu: " + e.keyCode);
// }

//! ----------------- Keyup Kullanımı --------------
// document.addEventListener("keyup",run);
// function run(e){
//     console.log("Klavyeden basılan harf: "+e.key);
//     console.log("Klavyeden Basılan harfin Kodu: " + e.keyCode);
// }


// const cardTitle = document.querySelectorAll(".card-title")[0];
// const input = document.querySelector("#todoName");

// input.addEventListener("keyup",function(write){
//     cardTitle.textContent = write.target.value;
// });

//? ------------- INPUT EVENTLARI ---------

// 1 -> focus //! Input'a odaklanıldığında çalıştırılır.
// 2 -> blur  //! Input'dan çıkıldığında çalıştırılır.
// 3 -> copy  //! Input'un içinde ki değeri kopyaladığınızda çalıştırılır.
// 4 -> paste //! Input'un içine kopyaladığınız değeri yapıştırdıgınızda çalıştırılır.
// 5 -> cut   //! Input'un içinde ki değeri kestiğinizde çalıştırılır.
// 6 -> select //! Input'un içinde ki değeri seçtiğinizde çalıştırılır.

// const todoName = document.querySelector("#todoName");
// todoName.addEventListener("blur",run)
// todoName.addEventListener("focus",run);
// todoName.addEventListener("copy",run);
//  todoName.addEventListener("paste",run);
// todoName.addEventListener("cut",run);
//  todoName.addEventListener("select",run);

// function run(e){
//     console.log(e.type);
// };

