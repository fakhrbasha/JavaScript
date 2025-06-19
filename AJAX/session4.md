# DOM : Document Object Model

## select element from html
- from id
```js
var element = document.getElementById('myId');
```
- nameTag
```js 
var element = document.getElementsByTagName('myName'); // htmlCollection list
```
- from class
```js
var element = document.getElementsByClassName('myClass'); // htmlCollection list not array
```
- name attribute
```js
var element = document.getElementsByName('myName'); // NodeList not array 
```
- Query Selector
```js
var element = document.querySelector('#myId css Selector'); // select first element not list
```
- Query Selector All
```js
var element = document.querySelectorAll('css Selector'); // select all element in list NodeList
```
- document.head
- document.image
- document.title

> Event Listener
- add to only one element 
- varName.addEventLisitener('click',functionName)
- varName.addEventLisitener('click',functionName()) -> function call not on click
```js
variable.addEventListener('eventName',functionName)
```
*EX*
```js
var btn = document.querySelector('button');

function test(){
    alert('hi fakhora');
}
btn.addEventListener('click', test);
```
- on addEventListener if event has (on) delete it
- don't add () for function
- if you need function has a parameter can make it anonymous function
*EX*
```js
var btn = document.querySelector('button');

function testt(user){
    alert("hi "+user);
}

btn.addEventListener('click',function(){
    // CALL function with user
    testt('Ahmed')
})
```
- another way to add eventListener

```js
btn.onclick = function(){
    alert('hi');
}
btn.onclick = test;
```
- if you add () this function call automatic on open
- if you make two func in on click last one run
- on event lis two func run

*EX*
```js
var fakhr = document.getElementsByTagName('p');

for(var i = 0;i<fakhr.length;i++){
    fakhr[i].addEventListener('click',function(element){
        // console.log(element); object has many property get details of click
        console.log(element.target);
        alert('hello mr fakhr')
    })
}
```
> Events
- click
- mouseover
- mouseout
- mousemove
- keydown
- keyup
- keypress
- focus
- blur
- change
- submit
- load
- resize
- scroll
- dblclick
- contextmenu
- wheel
- drag
- drop
- dragstart
- dragend
- dragover
- dragenter
- dragleave
- drop
- input 
*EX*
```js
// document.body.addEventListener('click',function(e){
//     console.log(e.clientX);
//     // console.log('hi');
// })
var item = document.querySelector('.item');

// click
// var item = document.querySelector('.item');
// item.addEventListener('click' , function(){
//     console.log("hello");
// })

// double click
// item.addEventListener('dblclick' , function(){
//     console.log("hello");
// })

// right click
// item.addEventListener('contextmenu', function () {
//     console.log('hello');
// });

// turn off the right click
// preventDefault -> don't do anything 
// item.addEventListener('contextmenu', function (e) {
//     e.preventDefault();
// });

//  mouse move
// document.addEventListener('mousemove', function () {
//     console.log('hi');
// });

// mousedown
// when press on mouse down not click same bit click mouse down and up 
// document.addEventListener('mousedown', function () {
//     console.log('hi');
// });

// mouseup
// document.addEventListener('mouseup', function () {
//     console.log('hi');
// });

// mouse enter
// when mouse enter in the element
// item.addEventListener('mouseenter', function () {
//     console.log('hi');
// });


// mouseleave
// when mouse leave the element
// item.addEventListener('mouseleave', function () {
//     console.log('hi');
// });

// drag
// var img = document.querySelector('img');
// img.addEventListener('drag', function (){
//     console.log('hi');
// });
// when drag photo cl 


// keydown
// when press any key any key space , shift
// document.addEventListener('keydown', function () {
//     console.log('hi');
// });

// keypress
// when press any key used 
// document.addEventListener('keypress',function(){
//     console.log('keypress');
// })

// keyup
// when release any key used 
// document.addEventListener('keyup',function(evenInfo){
//     if(evenInfo.key==' '){
//         console.log('hello');
//     }
// })

// focus
// when focus in the input field
// var element = document.querySelector('input');
// element.addEventListener('focus', function () {
//     console.log('hello');
// }
// )

// blur
// un focus in the input field
// var element = document.querySelector('input');
// element.addEventListener('blur', function () {
//     console.log('hello');
// }
// )

// submit
var submit = document.forms[0]; // first form
submit.addEventListener('submit',function(evenInfo){
    console.log('hello');
    evenInfo.preventDefault();
})
// why submit not click in button because can submit any another way 
```
---------
- when you create form with submit when click to submit page has refreshed if you need to unrefreshed 
```js
form.addEventListener('submit',function(e){
    e.preventDefault(); // this
    console.log('submit');
    alert('submit');
});
```
----------

#### interview Question
> Event Bubbling


> change Style
