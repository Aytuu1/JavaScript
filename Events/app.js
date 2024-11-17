//? -------- Events (Olay)----------
//?addEventListener(Dinleyici)

// const clearButton= document.querySelector("#clearButton");

//! ---------------- 1.Kullanımı ------------
// clearButton.addEventListener("click",function(){
//     alert("Merhaba");
// })

//! ------------2.Kullanımı ----------------
// clearButton.addEventListener("click",changeTitle);

// function changeTitle() {
//   document.querySelector("#clearButton").style.backgroundColor = "red";
// }

//! ----------- 3. Kullanımı ------------
// clearButton.addEventListener("click",changeTitle);

// function changeTitle(e){
//   console.log(e);
//   console.log(e.type);
//   console.log(e.target);
//   console.log(e.target.textContent);
//   console.log(e.target.className);
// }

//? --------------- MOUSE EVENTLARI ------------

// 1 -> DOMContentLoaded //! Sayfa yüklendiğinde çalıştırılır. kaynakların yüklenmesini beklemez direk çalıştırılır.
// 2 -> load             //! Sayfa yüklendiğinde kaynakların yüklenmesini bekler ve sonra çalıştırılır.
// 3 -> click            //! mouse ile üstüne tıklandığında çalıştırılır.
// 4 -> dblclick         //! mouse ile üstüne çift tıklandığında çalıştırılır.
// 5 -> mouseover        //! mouse'yi üstüne getirdiğinizde çalışır.
// 6 -> mouseout         //! mouse'yi üstünden çektiğinizde çalışır.
// 7 -> mouseenter       //! mouse'yi ilgili html elementinin üzerine geldiğinde tetiklenir.
// 8 -> mouseleave       //!  mouse'yi ilgili html elementinin üzerinden çıktığında tetiklenir.

//! ----------- DOMContentLoaded kullanımı -------------
// document.addEventListener("DOMContentLoaded",run);
// function run(){
//     alert("Sayfa yüklendi");
// }

//! ----------- Load kullanımı -------------
// window.addEventListener("load",run);
// function run(){
//     alert("Sayfa Yüklendi");
// }

// const cardTitle = document.querySelectorAll(".card-title")[1];
// const cardBody  = document.querySelectorAll(".card-body")[1];
// const clearButton = document.querySelector("#clearButton");

//! ------------------- Mouseover kullanımı ---------------
// cardBody.addEventListener("mouseover",over);
// function over(e){
//     cardBody.style.color ="red";
// }

//! ------------------- click kullanımı ---------------
// cardTitle.addEventListener("click",clicked);

// function clicked(){
//    cardTitle.style.backgroundColor="black";
// }

//! ------------------- Mouseout kullanımı ---------------
// clearButton.addEventListener("mouseout",mouseOut);
// function mouseOut(){
//     clearButton.style.borderRadius="40px";
// }

//! ------------------- Mousenter kullanımı ---------------
// clearButton.addEventListener("mouseenter", mousEnter);
// function mousEnter(e) {
//   if (e.type == "mouseenter") {
//     console.log("Üzerine gelindi");
//   }
// }
