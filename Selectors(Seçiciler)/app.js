//? Selectors(seçiciler) - Style Özellikleri

// Classname , id , tag name

//! getElementById : id'ye göre elementi yakalar.
//! getElementByClassName : Class İsmine göre yakalar.
//! getElementByTagName : Etiket ismine göre yakalar.

// let value;

// value= document.getElementById("todoAddButton");

//value = document.getElementsByClassName("card-title") ;

//value = document.getElementsByTagName("Form");

//! querySelector - querySelectorAll

// value = document.querySelector("#clearButton");
// value = document.querySelectorAll(".btn");
// value = Array.from(document.querySelectorAll("li")).forEach(item => {
//     console.log(item.classList[2]);
// })

// value = Array.from(document.querySelectorAll("li:nth-child(even)")).forEach(item =>{
//     item.style.backgroundColor="grey";
// });

// value = document.querySelectorAll("button");
// value.forEach(function(item){
//     item.style.backgroundColor="red";
// })
// console.log(value);

// //? Style özelliği Kullanımı

// var value = document.querySelectorAll(".list-group-item")[0];
// var value2 = document.querySelector(".list-group");
// var clearBtn=document.querySelector("#clearButton");

// value.style.color="yellow";
// value.style.backgroundColor="purple";
// value.style.fontWeight="bold";
// value.style.paddingTop="10px";
// value.style.paddingLeft="10px";

// value2.style.marginTop="20px";
// value2.style.marginLeft ="80px";
// value2.style.marginRight="90px";

// clearBtn.style.backgroundColor = "red ";
// clearBtn.style.fontSize ="15px";
// clearBtn.style.borderRadius="100px";
// clearBtn.style.display="flex";
// clearBtn.style.fontWeight="bold";
// clearBtn.style.marginTop="10px";

// console.log(value);
// console.log(value2);
// console.log(clearBtn);

//? HTML Elementleri Üzerinde Gezinmek.

// let todo = document.querySelector(".list-group-item");
// let todoList = document.querySelector(".list-group");
// let card = document.querySelector(".card");

// let value;

// //? ---------- Anneden çocuklara erişmek ------------

// value = todoList;
// value = todoList.children[0];
// value = todoList.children[1];
// value = todoList.children[todoList.children.length-1];
// value = todoList.children[todoList.children.length-1].textContent="Değişti";

// value = Array.from(todoList.children);
// value.forEach(function(item){
//     if (item.textContent == "Değişti") {
//         item.textContent = "Değişmedi";

//     }
//     else if(item.textContent == "Todo 2"){
//         item.innerHTML.fontSize="<b></b>";
//     }
// })

// console.log(value);

// const todo = document.querySelector(".list-group-item");
// const todoList = document.querySelector(".list-group");
// const card = document.querySelector(".card");

// let value;

// value = todoList;
// value=todoList.children[0];
// value=todoList.children[2];
// value = todoList.children[todoList.children.length-1];
// value = todoList.children[2].textContent="Değişti";

// value = Array.from(todoList.children);
// value.forEach(element => {
//     console.log(element.textContent);
// });

//? --------- Çocuktan anne'ye erişmek ---------------

// value = todo; //! 1.Yöntem
// value=todo.parentElement.parentElement.parentElement.parentElement;

// //! 2.Yöntem (Parçalayarak gitmek)
// value = todo;

// let ul = value.parentElement;
// let cardBody = ul.parentElement;
// let cardElement = cardBody.parentElement;
// let row = cardElement.parentElement;
// let container = row.parentElement;
// let body = container.parentElement;
// let html = body.parentElement;

// //? --------------- Kardeşler Arasında Gezinmek ------------------

//  const row2 = document.querySelectorAll(".row")[0];
//  value = row2.children[0].children[3].children[0].textContent="Değişti";

// const container2 = document.querySelector(".container");
// value = container2.children[0].children[0].children[3].children[2].children[2];
// value.innerHTML="<b>Todo Değiştirildi</b>.";
// value.style.backgroundColor="red";

// console.log(value);

//?----------- Dinamik Olarak Element Oluşturmak ---------

// const cardBody = document.querySelectorAll(".card-body")[1];
// const todoList = document.querySelectorAll("ul")[0];

// console.log(cardBody);

// const link = document.createElement("a");
// link.id = "goBlogWebSite";
// link.className = "btn btn-dark btn-sm mt-3";
// link.href = "http://google.com";
// link.target = "_blank";
// link.innerHTML = "Kişisel Websiteme Git";
// cardBody.appendChild(link);

// const todo = document.createElement("li");
// const todoLink = document.createElement("a");
// const i = document.createElement("i");

// todo.className = "list-group-item d-flex justify-content-between";
// todo.innerHTML = "Todo 4";

// todoLink.href = "#";
// todoLink.className="delete-item";

// i.className="fa fa-remove";

// todoLink.appendChild(i);
// todo.appendChild(todoLink);
// todoList.appendChild(todo);

// console.log(todo);

//? ------------- Element Silmek ----------------

//! -------- 1. Silme Yöntemi -----------
// const todo = document.querySelectorAll("ul")[0].children[0];
// todo.remove();
 


//! -------- 2. Silme Yöntemi -----------
// const todo = document.querySelectorAll(".list-group-item");
// todo[0].remove();


// console.log(todo);


//? ----------- Elementleri Yer Değiştirmek ------

// const cardBody = document.querySelectorAll(".card-body")[1];



// const newTitle = document.createElement("h2");
// newTitle.className="card-title";
// newTitle.innerHTML="Todo Listesi  & Yeni";

// cardBody.replaceChild(newTitle,cardBody.childNodes[1]);

// console.log(cardBody.childNodes[1]);