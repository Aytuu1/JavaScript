//? --------- Fetch API -----------

// function getData(url){
//     fetch(url)
//     .then((response)=>{
//         return response.json();
//     })
//     .then((data)=>{
//         console.log(data)
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
// }

// getData("https://jsonplaceholder.typicode.com/users");

//?------------  ASYNC AWAİT --------

// async function hello(){
//     return "hello world";
// }
// console.log(hello());

// document.querySelector("#button").addEventListener("click", () => {
//   fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((response) => response.json())
//     .then((post) => {
//       fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
//       .then((response)=>response.json())
//       .then((comments)=>console.log(comments));
//     });
// });


//! ASYNC AWAIT

// document.querySelector("#button").addEventListener("click", async () => {
//   const responsePost = await fetch("https://jsonplaceholder.typicode.com/posts/1")
//   const post = await responsePost.json();
  
//   const reponseComments = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
  
//   const comments = await reponseComments.json();
//   console.log(comments);
// })