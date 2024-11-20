//? 1 ->  Tüm Elementleri Seçmek
const form = document.querySelector("#todoAddForm");
const addInput = document.querySelector("#todoName");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.querySelector("#clearButton");
const filterInput = document.querySelector("#todoSearch");

let todos = [];

runEvents();
function runEvents() {
  form.addEventListener("submit", addTodo);
  document.addEventListener("DOMContentLoaded", pageLoaded);
  secondCardBody.addEventListener("click", removeTodoToUI);
  clearButton.addEventListener("click", allTodosEverywhere);
  filterInput.addEventListener("keyup",filter);
}

function filter(e){
    const filterValue = e.target.value.toLowerCase().trim();
    const todoListesi = document.querySelectorAll(".list-group-item");
    if (todoListesi.length > 0) {
        todoListesi.forEach(function(todo){
        if(todo.textContent.toLowerCase().trim().includes(filterValue)){
            todo.setAttribute("style","display : block");
        }
        else{
            todo.setAttribute("style","display : none !important");
        }
        });
    }
    else{
        showAlert("warning","Filtreleme yapmak için en az bir todo olmak zorundadır.");
    }
    
}





function pageLoaded() {
  checkTodosFromStorage();
  todos.forEach(function (todo) {
    addTodoUI(todo);
  });
}
function allTodosEverywhere() {
  const todoListesi = document.querySelectorAll(".list-group-item");
  if (todoListesi.length > 0) {
    todoListesi.forEach(function (todo) {
      todo.remove();
    });

    //! Storage'den silme
    todos = [];
    localStorage.setItem("todos", JSON.stringify(todos));
    showAlert("success","Başarılı bir şekilde silindi.");
  } 
  else {
    showAlert("warning", "Silmek için en az bir todo giriniz.");
  }
}

function addTodo(e) {
  const inputText = addInput.value.trim().toUpperCase();

  if (inputText === null || inputText === "") {
    showAlert("warning", "Lütfen boş bırakmayınız.");
    return; // Boş giriş yapıldığında eklemeyi durdur
  }

  // Veriyi kontrol et
  if (checkTodo(inputText)) {
    return; // Eğer aynı veri varsa eklemeyi durdur
  }

  // Arayüze ekleme işlemi
  addTodoUI(inputText);
  addTodoToStorage(inputText);
  showAlert("success", "Başarıyla eklendi.");

  e.preventDefault();
}

function checkTodo(inputText) {
  if (todos.includes(inputText)) {
    showAlert("warning", "Daha önce zaten eklediniz.");
    return true; // Aynı veri varsa true döndür
  }
  return false; // Aynı veri yoksa false döndür
}

function addTodoUI(newTodo) {
  const li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between";
  li.textContent = newTodo;

  const a = document.createElement("a");
  a.href = "#";
  a.className = "delete-item";

  const i = document.createElement("i");
  i.className = "fa fa-remove";

  a.appendChild(i);
  li.appendChild(a);
  todoList.appendChild(li);

  addInput.value = "";
}

function addTodoToStorage(newTodo) {
  checkTodosFromStorage();
  todos.push(newTodo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function checkTodosFromStorage() {
  if (localStorage.getItem("todos") == null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
}

function showAlert(type, message) {
  /* <div class="alert alert-warning" role="alert">
                        
   </div>     */

  //! Aynı mesajın sürekli verilmesini engellemek için
  const exitsAlert = document.querySelector(`.alert.alert-${type}`);
  if (exitsAlert && exitsAlert.textContent === message) {
    return;
  }

  const div = document.createElement("div");
  div.className = `alert alert-${type}`;
  div.textContent = message;

  firstCardBody.appendChild(div);
  setTimeout(function () {
    div.remove();
  }, 3000);
}

function removeTodoToUI(e) {
  if (e.target.className === "fa fa-remove") {
    //! Ekrandan Silme
    const todo = e.target.parentElement.parentElement;
    todo.remove();

    //! Storage'den Silme
    removeTodoToStorage(todo.textContent);
    showAlert("success", "Todo Başarıyla silindi.");
  }
}

function removeTodoToStorage(removeTodo) {
  checkTodosFromStorage();
  todos.forEach(function (todo, index) {
    if (removeTodo === todo) {
      todos.splice(index, 1);
    }
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}
