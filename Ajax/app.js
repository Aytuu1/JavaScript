//? AJAX
// const xhr = new XMLHttpRequest();
// console.log(xhr);


// https://jsonplaceholder.typicode.com/comments

// function prepareURL(url,id){
//     if (id===null) {
//         return url;
//     }
//     return `${url}?postId=${id}`
// }

// function getComments(url,id){
//    let newURL= prepareURL(url,id);
//     const xhr = new XMLHttpRequest();
//     xhr.addEventListener("readystatechange",()=>{
//         if (xhr.readyState===4 && xhr.status===200) {
//             console.log(xhr.responseText);
//         }
//     });
//     xhr.open("GET",newURL);
//     xhr.send();
// }

// getComments("https://jsonplaceholder.typicode.com/comments",null);


// function getWeatherURL(url,lat,lon){
//     if (lat ===null || lon === null) {
//         return url;
//     }
//     return `${url}?lat=${lat}&lon=${lon}&appid=72432fe4aa9db7ee91fa07faddbc582e`;


// }

// function getWeather(url,lat,lon){
// let newUrl =getWeatherURL(url,lat,lon);
// const xhr = new XMLHttpRequest();
// xhr.addEventListener("readystatechange",()=>{
// if (xhr.status === 200 && xhr.readyState === 4) {
//     console.log(xhr.responseText);
// }
// });
// xhr.open("GET",newUrl);
// xhr.send();
// }


// getWeather("https://api.openweathermap.org/data/2.5/weather", 39.9208, 32.8541);
