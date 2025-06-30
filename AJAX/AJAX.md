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