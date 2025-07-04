

// try{
//     let x = 10;
//     console.log(y);

// }catch(parm){

// }

// api -> url (website jsonPlaceholder)
// ajax
// xmlHttpRequest
// http.open( 'method' , 'api' ) -> open connection establish connection

//method
// get -> retrieve data from server
// post -> send data to server
// put -> updata
// patch -> updata
// delete

// send request
// http.send()

// add event because when load send response


// response
// http.response
// convert to json
// Json.parse(http.response)


// state when connect
// http.readystate(4) -> 
// ready state = 0 not connection
// ready state = 1 establish con
// ready state = 2 send req
// ready state = 3 processing
// ready state = 4 response is ready

// http.status = 200 done
// http.status = 403 not have access to this url
// http.status = 404 url not found
// http.status = 501 url not error on server

// create instance from xmlHttpRequest
// open()
// http.send

// addEvent when readyStateChange ,
// check readystste & status
// convert to json

// let http = new XMLHttpRequest()
// http.open('get' , 'https://jsonplaceholder.typicode.com/albums')
// http.send()
// let datalist = []
// http.addEventListener('readystatechange' , function(){
//     if(http.readyState == 4 && http.status == 200) {
//         datalist = JSON.parse(http.response)
//         console.log(datalist);
//     }
// })
// forkify api food
// face store api
// news api
// movies api
// free api


// let nav_Links = document.querySelectorAll('.nav-link') // list
// // for eACH
// nav_Links.forEach(function(item){
//     item.addEventListener('click' , function(eventInfo){
//         // console.log(eventInfo.target.innerText);
//         let rec = eventInfo.target.innerText;
//         getRecipy(rec)
//     })
// })

//     let datalist = []
// getRecipy('pizza') // by default
// function getRecipy(recipy){

//     let http = new XMLHttpRequest()
//     http.open('get',`https://forkify-api.herokuapp.com/api/search?q=${recipy}`);
//     http.send()

//     http.addEventListener('readystatechange' , function(){
//         if(http.readyState == 4 && http.status == 200) {
//             datalist = JSON.parse(http.response).recipes
//             display()
//             // to loading another way
//             // if(datalist.length==0){
//             //     document.querySelector('.row').innerHTML = `<span class="loader"></span>`
//             // }else{
//             //     display()
//             // }
//             // console.log(datalist);
//         }
//     })
// }


// function display(){
//     let box = ``
//     for(let i=0;i<datalist.length;i++){
//         box+=`
//         <div class="col-md-3 ">
//             <div class="border h-100 shadow-sm rounded-3 p-3">
//                 <img src="${datalist[i].image_url}" height="200px" class="w-100" alt="">
//                 <h6>${datalist[i].title}</h6>
//                 <p>${datalist[i].publisher}</p>
//             </div>
//             </div>
//         `
//     }
//     document.querySelector('.row').innerHTML = box
// }

//css spinner



// asynchronism method
// sync func run ala tol and name blocking

// function pizza(){

//     let http = new XMLHttpRequest()
//     http.open('get',`https://forkify-api.herokuapp.com/api/search?q=pizza`);
//     http.send()

//     http.addEventListener('readystatechange' , function(){
//         if(http.readyState == 4 && http.status == 200) {
//             datalist = JSON.parse(http.response).recipes


//         }
//     })
// }

// 1 
// variable and sync method


// ------------------------------------------ //
// try catch

// let element = document.querySelector('h1')
// try{
//     let x = 10;
//     console.log(y);
// }catch(errorHere){
//     element.innerHTML = errorHere
// }

// // throw custom error

// try{
//     let x = 10;
//     console.log(x);
//     throw new Error('ay haga feh error') // custom error

// }catch(errorHere){
//     element.innerHTML = errorHere
// }

// // finally  

// api

// xmlHttpREquest -> connect any  db or api
// open 
// send 
// response


// let allProduct = []

// let mytHttp = new XMLHttpRequest(); // create instance 
// // mytHttp.open('method' , 'urlAPI')
// mytHttp.open('GET','https://ecommerce.routemisr.com/api/v1/products') // establish connection
// mytHttp.send() // start send request
// mytHttp.response  data here
// console.log(mytHttp.response); run automatic when open because that response empty
////// Don’t display the response until you're sure the request has completed
// myHttp has event name load fire when complete
// mytHttp.addEventListener('load' , function(){
//     // console.log(mytHttp.response); // convert to JSON
//     // console.log(JSON.parse(mytHttp.response).data);
//     allProduct = JSON.parse(mytHttp.response).data
// })

// state have event name readyststechange
// event run every change in ready state
// readyState return number The changes in the request's readyState 

// mytHttp.readyState = 0  request not initialize
// mytHttp.readyState = 1 connection establish
// mytHttp.readyState = 2 request received
// mytHttp.readyState = 3 request processing
// mytHttp.readyState = 4 response is ready

// every number change readystate run
// mytHttp.addEventListener('readystatechange' , function(e){
//     // console.log(mytHttp.readyState); 2 3 4
//     if(mytHttp.readyState == 4){
//         allProduct = JSON.parse(mytHttp.response).data
//     }
// })

// // has event name error when has api error
// mytHttp.addEventListener('error' , function(){
//     alert('Error in loading data from server')
// })

// let allRecipes = []

// function getPizza(callback) {
//     let myHttp = new XMLHttpRequest()
//     myHttp.open('GET', 'https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza')
//     myHttp.send()

//     myHttp.addEventListener('readystatechange', function () {
//         if (myHttp.readyState == 4) {
//             console.log('pizza');
//             allRecipes = JSON.parse(myHttp.response).data.recipes;
//             // console.log(allRecipes);
//             callback()

//         }
//     })
// }
// console.log('hello1'); // synchronous
// console.log('hello1'); // synchronous
// console.log('hello1'); // synchronous
// console.log('hello1'); // synchronous
// getPizza() // Asynchronous i didn't know this code time this code
// console.log('hello1'); // synchronous
// console.log('hello1'); // synchronous
// console.log('hello1'); // synchronous
// console.log('hello2'); // synchronous
// interview

// js complete any sync code first and after this Async

// getPizza() go to webAPIs and when js complete all sync code go to webAPIs and return function completed

// hello1 
// hello1 
// hello1 
// hello1 
// hello1 
// hello1 
// hello1 
// hello2 
// getPizza()
// function getPizza(callback) {
//     let myHttp = new XMLHttpRequest()
//     myHttp.open('GET', 'https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza')
//     myHttp.send()

//     myHttp.addEventListener('readystatechange', function () {
//         if (myHttp.readyState == 4) {
//             console.log('pizza');
//             allRecipes = JSON.parse(myHttp.response).data.recipes;
//             // console.log(allRecipes);
//             if(callback){
//                 callback()
//             }
//         }
//     })
// }
// function getSalad(callback) {
//     let myHttp = new XMLHttpRequest()
//     myHttp.open('GET', 'https://forkify-api.herokuapp.com/api/v2/recipes?search=salad')
//     myHttp.send()
//     myHttp.addEventListener('readystatechange', function () {
//         if (myHttp.readyState == 4) {
//             console.log('salad');
//             allRecipes = JSON.parse(myHttp.response).data.recipes;
//             // console.log(allRecipes);
//             if(callback){
//                 callback()
//             }
//         }
//     })
// }
// function getPasta(callback) {
//     let myHttp = new XMLHttpRequest()
//     myHttp.open('GET', 'https://forkify-api.herokuapp.com/api/v2/recipes?search=pasta')
//     myHttp.send()
//     myHttp.addEventListener('readystatechange', function () {
//         if (myHttp.readyState == 4) {
//             console.log('pasta');
//             allRecipes = JSON.parse(myHttp.response).data.recipes;
//             // console.log(allRecipes);
//             if(callback){
//                 callback()
//             }
//         }
//     })
// }

// getPizza() // async
// getSalad() // async
// getPasta() // async

// first complete first display
// Queue FCFS
//  i need salad and pasta and pizza solution
// callback function
// pass function as argument to another function and call this function after end first function
// function one(callback){
//     console.log('one');
//     callback()
// }
// one(two)
// one(three)
// function two(){
//     console.log('two');
// }
// function three(){
//     console.log('three');
// }

// salad pasta pizza

// callback hells
// getSalad(function(){
//     getPasta(function(){
//         getPizza(allDone)
//     })
// })

// promise

//  have then.()

// if you need add more then must have return promise anonymous function

// function one(){
//     return new Promise(function(callback){
//         console.log('one');
//         callback()
//     })
// }
// function two(){
//     return new Promise (function(callback){
//         console.log('two');
//         callback()
//     })
// }
// function three(){
//     return new Promise(function(callback){
//         console.log('three');
//         callback()
//     })
// }
// function allDone(){
//     console.log('done');
// }

// one().then(two) 
// if you need call more than function 
// must return promise because that make anonymous function
// call promise function

// one()
// .then(function(){return two()})
// .then(function(){return three()})
// .then(allDone)

// if i need return two callback

// then take callback if code not error 
// catch take callback if code has error

// function one(){
//     return new Promise(function(resolved , rejected){
//         // resolved  =two , rejected = printError
//         console.log('one');
//         let error = false;
//         if(!error){
//             resolved() // two
//         }else{
//             rejected() // printError
//         }
//     })
// }
// function two(){
//     return new Promise (function(callback){
//         console.log('two');
//         callback()
//     })
// }
// function three(){
//     return new Promise(function(callback){
//         console.log('three');
//         callback()
//     })
// }
// function allDone(){
//     console.log('done');
// }

// function printError(){
//     console.log(error);
// }
// one().then(two).catch(printError)

// promise new concept in ES6 because solve problem name callback if have async function and i want run this function specific order
// in promise every function return promise open then thoma then thoma then Replace the nested callbacks.
// code more readability
// also contain same then but catch to catch error resolve when code success and reject when code has error

// case promise
// pending 
// Fulfilled go to then success code
// rejected go to rejected 


// promise.all after complete all function

// this function not run until all function ended
// Promise.all([one , two , three]).then(function(){
//     console.log('all Done');
// })

// function hello(){
//     console.log('hi');
//     return Promise.resolve('mr')
// }
// hello().then(function(x){
//     console.log(x);
// })

// function getPizza() {
//     return new Promise(function (resolved, rejected) {
//         let myHttp = new XMLHttpRequest()
//         myHttp.open('GET', 'https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza')
//         myHttp.send()

//         myHttp.addEventListener('readystatechange', function () {
//             if (myHttp.readyState == 4) {
//                 console.log('pizza');
//                 allRecipes = JSON.parse(myHttp.response).data.recipes;
//             }
//             resolved()
//         })
//         myHttp.addEventListener('error', function () {
//             rejected()
//         })
//     })
// }

// function getSalad() {
//     return new Promise(function (resolved, rejected) {
//         let myHttp = new XMLHttpRequest()
//         myHttp.open('GET', 'https://forkify-api.herokuapp.com/api/v2/recipes?search=salad')
//         myHttp.send()
//         myHttp.addEventListener('readystatechange', function () {
//             if (myHttp.readyState == 4) {
//                 console.log('Salad');
//                 allRecipes = JSON.parse(myHttp.response).data.recipes;
//             }
//             resolved()
//         })
//         myHttp.addEventListener('error', function () {
//             rejected()  
//         })
//     })
// }
// function getPasta() {
//     return new Promise(function (resolved, rejected) {
//         let myHttp = new XMLHttpRequest()
//         myHttp.open('GET', 'https://forkify-api.herokuapp.com/api/v2/recipes?search=pasta')
//         myHttp.send()
//         myHttp.addEventListener('readystatechange', function () {
//             if (myHttp.readyState == 4) {
//                 console.log('pasta');
//                 allRecipes = JSON.parse(myHttp.response).data.recipes;
//             }
//             resolved()
//         })
//         myHttp.addEventListener('error' , function(){
//             rejected()
//         })
//     })
// }
// getSalad()
// i need return promise make anonymous func
// .then(function (){ return getPasta ()})
// .then(function(){return getPizza()})
// .catch(function(){ console.log('error'); })
// finally already run in every time


// function getSalad() {
//     // fetch('https://forkify-api.herokuapp.com/api/v2/recipes?search=salad',{
//     //     method : 'GET'
//     // }) // by default method get
//     fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=salad`)
//     .then(function(response){ return response.json() })
//     .then(function (data) { console.log(data.data.recipes); })
// }
let RecipeFood = document.getElementById('RecipeFood')
let allRecipes = []



async function getSalad(recipe) {
    let response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${recipe}`)
    let finalData = await response.json()
    allRecipes = finalData.data.recipes
    display()

    // console.log(allRecipes);
}
getSalad('pizza')

function display() {
    let cont = ``
    for (let i = 0; i < allRecipes.length; i++) {
        cont += `
        <div class="col-md-3 h-100 ">
            <img src="${allRecipes[i].image_url}" height="200px" class="w-100" alt="">
            <h2>${allRecipes[i].title}</h2>
            <p>${allRecipes[i].publisher}</p>
        </div>
        `
    }
    document.querySelector('.row').innerHTML = cont
}