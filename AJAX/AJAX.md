# AJAX
**Asynchronous JavaScript And XML But don’t let the name confuse you — it’s not limited to XML anymore. You can use JSON, HTML, text, etc.**

## Try Catch
- try...catch is a JavaScript statement used for error handling — it lets you run code that might throw an error, and gracefully handle it without crashing your program.


```js
let element = document.querySelector('h1')
try{
    let x = 10;
    console.log(y);
}catch(errorHere){
    element.innerHTML = errorHere
}

```
- throw custom error
```js

try{
    let x = 10;
    console.log(x);
    throw new Error('ay haga feh error') // custom error

}catch(errorHere){
    element.innerHTML = errorHere
}

// finally  
```
## API 
**API stands for Application Programming Interface.**
- 🔌 It’s like a waiter between your app (frontend) and a server (backend).
You ask for something (data), and it brings it to you.
- api code generate by backend and give front end documentation to use this api in frontend
- The data I send to the API is in JSON, and the data I receive is also in JSON.
- JSON every platforms and tools understood very good and Very light and fast in data transfer 
- every api have base-url and what i need from database name end-point

> JSON : JavaScript Object notation


### xmlHttpRequest
**XMLHttpRequest is an older API used to send HTTP requests and receive responses from a server without reloading the page — a core part of AJAX (Asynchronous JavaScript and XML).**
```js
let allProduct = []
let mytHttp = new XMLHttpRequest(); // create instance 
```
- mytHttp.open('method' , 'urlAPI')
```js
mytHttp.open('GET','https://ecommerce.routemisr.com/api/v1/products') // establish connection
mytHttp.send() // start send request
```
- mytHttp.response  data here
- console.log(mytHttp.response); run automatic when open because that response empty 

*Don’t display the response until you're sure the request has completed*
- xmlHttpRequest has event name load fire when complete
```js
mytHttp.addEventListener('load' , function(){
    // console.log(mytHttp.response); // convert to JSON
    // console.log(JSON.parse(mytHttp.response).data);
    allProduct = JSON.parse(mytHttp.response).data
})
```
- also XMLHttpRequest have event name readyststechange
- event run every change in ready state
- readyState return number The changes in the request's readyState 
```bash
// mytHttp.readyState = 0  request not initialize
// mytHttp.readyState = 1 connection establish
// mytHttp.readyState = 2 request received
// mytHttp.readyState = 3 request processing
// mytHttp.readyState = 4 response is ready
```
- every number change readystate run
```js
mytHttp.addEventListener('readystatechange' , function(e){
    // console.log(mytHttp.readyState); 2 3 4
    if(mytHttp.readyState == 4){
        allProduct = JSON.parse(mytHttp.response).data
    }
})
```
- has event name error when has api error
```js
mytHttp.addEventListener('error' , function(){
    alert('Error in loading data from server')
})
```
[APIs][https://github.com/public-apis/public-apis]


## Sync:Async
### Synchronous
**A synchronous operation executes tasks one after another, in order. Each line of code waits for the previous one to finish before running.**

### Asynchronous
**An asynchronous operation does not wait for previous tasks to complete. It allows the program to continue running while waiting for a slower operation (like a server request or timer) to finish in the background.**
```js
let allRecipes = []

function getPizza() {
    let myHttp = new XMLHttpRequest()
    myHttp.open('GET', 'https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza')
    myHttp.send()

    myHttp.addEventListener('readystatechange', function () {
        if (myHttp.readyState == 4) {
            console.log('pizza');
            allRecipes = JSON.parse(myHttp.response).data.recipes;
            console.log(allRecipes);
        }
    })
}
console.log('hello1'); // synchronous
console.log('hello1'); // synchronous
console.log('hello1'); // synchronous
console.log('hello1'); // synchronous
getPizza() // Asynchronous i didn't know this code time this code
console.log('hello1'); // synchronous
console.log('hello1'); // synchronous
console.log('hello1'); // synchronous
console.log('hello2'); // synchronous
```
- output
```bash
hello1 
hello1 
hello1 
hello1 
hello1 
hello1 
hello1 
hello2 
getPizza()
```
> js complete any sync code first and after this Async
> getPizza() go to webAPIs and when js complete all sync code go to webAPIs and return function completed
```js
let allRecipes = []

function getPizza() {
    let myHttp = new XMLHttpRequest()
    myHttp.open('GET', 'https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza')
    myHttp.send()

    myHttp.addEventListener('readystatechange', function () {
        if (myHttp.readyState == 4) {
            console.log('pizza');
            allRecipes = JSON.parse(myHttp.response).data.recipes;
            console.log(allRecipes);
        }
    })
}
function getSalad() {
    let myHttp = new XMLHttpRequest()
    myHttp.open('GET', 'https://forkify-api.herokuapp.com/api/v2/recipes?search=salad')
    myHttp.send()
    myHttp.addEventListener('readystatechange', function () {
        if (myHttp.readyState == 4) {
            console.log('salad');
            allRecipes = JSON.parse(myHttp.response).data.recipes;
            console.log(allRecipes);
        }
    })
}
function getPasta() {
    let myHttp = new XMLHttpRequest()
    myHttp.open('GET', 'https://forkify-api.herokuapp.com/api/v2/recipes?search=pasta')
    myHttp.send()
    myHttp.addEventListener('readystatechange', function () {
        if (myHttp.readyState == 4) {
            console.log('pasta');
            allRecipes = JSON.parse(myHttp.response).data.recipes;
            console.log(allRecipes);
        }
    })
}

getSalad() // async
getPasta() // async
getPizza() // async

// first complete first display
// Queue FCFS
```

### Callback Function
**A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.**
- pass function as argument to another function and call this function after end first function

```js
function one(callback){
    console.log('one');
    callback()
}
one(two)
one(three)
function two(){
    console.log('two');
}
function three(){
    console.log('three');
}
```
- if two has argument create anonymous func 
```js
function one(callback){
    console.log('one');
    callback()
}
one(function(){
    two('ahmed')
})
one(three)
function two(name){
    console.log('two '+ name);
}
function three(){
    console.log('three');
}
```
- two & three callback function from one