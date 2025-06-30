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


> DOM Traversal
- traverse between element
```html
    <h1>hello fakhr</h1>
    <div class="container bg-danger">
        <h1>hello mr</h1>
        <h1>hello mr</h1>
        <h1>hello mr</h1>
        <h1>hello mr</h1>
        <h1>hello mr</h1>
    </div>
    <h1>hello fakhr</h1>
```
- children
- parentElement
- childNodes
- nextElementSibling
- nextSibling
- previousElementSibling
```js
var container = document.querySelector('.container')

// all children 
console.log(container.children); // HTMLCollection(5) [h1, h1, h1, h1, h1]

// change color second children to white when click container
container.addEventListener('click',function(){
    container.children[1].style.color = 'white'
    // parent element
    container.parentElement.style.backgroundColor = 'blue'
})
// childNode : anything calculated space between child calculated
console.log(container.childNodes); // NodeList(11) [text, h1, text, h1, text, h1, text, h1, text, h1, text]

console.log(container.nextElementSibling); // first element next me
console.log(container.nextSibling); // first anything next me node or text or space

console.log(container.previousElementSibling); // first element prevues me
```
> Create Element 

```js
var myImg = document.createElement('img')
myImg.setAttribute('src' , '/img/3.jpg')
myImg.setAttribute('alt' , 'fakhr')
myImg.classList.add('w-50' , 'rounded-circle')
// add image in body
document.body.appendChild(myImg)

// append 
// prepend
```
> different between htmlCollection & NodeList

|   htmlCollection               | NodeList                               |
| -----------------------------|----------------------------------------|
| return html element only     | return node element may text node      |
| live can update (append) | Not Live (don't change)                                  |
| less info                        | More info                                   |

- htmlCollection
```js
var element = document.getElementsByTagName('p')
console.log(element);
var newP = document.createElement('p')
document.body.append(newP);
console.log(element);
// output : 
/*
HTMLCollection(4) [p, p, p, p]
HTMLCollection(5) [p, p, p, p, p]
*/
```
- NodeList
```js
var element = document.querySelectorAll('p')
console.log(element);
var newP = document.createElement('p')
document.body.append(newP);
console.log(element);
// output : 
/*
HTMLCollection(4) [p, p, p, p]
HTMLCollection(4) [p, p, p, p]
*/
```

## Event Listener
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
- Event start from child to parent

```html
<section class="w-50 bg-danger p-5">
        <h1>Lorem, ipsum.</h1>
        <div class="w-50 bg-success p-5">
            <h2>Lorem, ipsum.</h2>
            <button class="btn btn-info">hello</button>
        </div>
    </section>
```
```js
var section = document.querySelector('section');
var div = document.querySelector('div');
var button = document.querySelector('button');

function sayHello(eventInfo){
    console.log('hello' + this);
    // eventInfo.stopPropagation(); // to stop bubbling
    //  eventInfo.currentTarget == this
    // if you make (target) of button then button fire only
}
// all fire because section is parent of div and div is parent of button 
section.addEventListener ('click' , sayHello);  //3
div.addEventListener ('click' , sayHello); //2
button.addEventListener ('click' , sayHello); //1
document.body.addEventListener ('click' , sayHello); //4
```
```bash
output : 
hello[object HTMLButtonElement]
hello[object HTMLDivElement]
hello[object HTMLElement]
hello[object HTMLBodyElement]
```
- how stop event bubbling
1. stopPropagation()

```js
button.addEventListener('click' , function(e){
    console.log('hi' + e.currentTarget);
})
section.addEventListener('click' , function(e){
    console.log('hello' + e.currentTarget);
})
div.addEventListener('click' , function(e){
    console.log('hello' + e.currentTarget);
    e.stopPropagation(); // stop bubbling
})
```
```bash
output : 
hi[object HTMLButtonElement]
hello[object HTMLDivElement]
```
> Event :Capturing
- Capture : event start from parent to child add true after function
```js

button.addEventListener('click' , function(e){ //3
    console.log('hi' + e.currentTarget);
},true)
section.addEventListener('click' , function(e){ //1
    console.log('hello' + e.currentTarget);
},true)
div.addEventListener('click' , function(e){ //2
    console.log('hello' + e.currentTarget);
    e.stopPropagation(); // stop bubbling

},true)
```
```bash

    output : 
hello[object HTMLElement]
hello[object HTMLDivElement]
hi[object HTMLButtonElement]
```
## change Style
- use camelCase
- you have two way to change style in js
    1. elementName.style.property
    2. cssText = 'cssCode'

```html
    <div class="item ">
    </div>
```
```css
.item{
    width: 200px;
    height: 200px;
    background-color: red;
    margin: 10px;
}
```

```js
var element = document.querySelector('.item');

element.addEventListener('click',function(){
    // inline style
    // element.style.backgroundColor = 'blue'; 
    // element.style.position = 'absolute';
    // element.style.left = '300px'
    // element.style.top = '300px'
    // or
    element.style.cssText =
    'background-color:blue;position:absolute;left:300px;top:300px';
})
```
> Update ClassList
- varName.classList.add('class')
- varName.classList.remove('class') 
- varName.classList.replace('oldClass' , 'newClass') // replace old class with new class
- varName.classList.toggle('class') // remove if exist or add if not exist
- varName.classList.contains('class') // return true or false
- varName.classList.item(index) // return class name in index
- varName.classList.length // return length of class list
- varName.classList.toString() // return string of class list

```js
var element = document.querySelector('.item');
var h2 = document.querySelector('h2');

element.addEventListener('click',function(){
    // classlist
    h2.classList.add('text-center', 'bg-success');
    h2.classList.replace('bg-success' , 'bg-info')
    // h2.classList.contains('bg-info');
    // h2.classList.toggle('bg-success');
    // h2.classList.remove('bg-success');
})
```

> Attribute 
- setAttribute('attribute', 'value')
- removeAttribute('attribute')
- getAttribute('attribute')
```html
<img>
```

```js
var img = document.querySelector('img')
img.setAttribute('src' , `/img/FB_IMG_1688991757918.jpg`);
img.setAttribute('alt' , 'fakhr')

console.log(img.getAttribute('src'));
```

*EX*
```html
    <img src="/img/3.jpg" alt="no">
```
```js
var img = document.querySelector('img')
img.addEventListener('mouseenter' , function(){
    img.setAttribute('src' , `/img/1.jpg`);
    img.setAttribute('alt' , 'mouseenter')
})
img.addEventListener('mouseleave' , function(){
    img.setAttribute('src' , `/img/2.jpg`);
    img.setAttribute('alt' , 'mouseleave')
})

console.log(img.getAttribute('src')); // /img/FB_IMG_1689083930739.jpg
```

> **_Exercise 1_**
- change mouse cursor to photo 
```html
    <img src="/img/mouse.png" alt="mouse">
```
```js
var mouse = document.querySelector('img');
document.addEventListener('mousemove'  , function(eventInfo){
    mouse.style.width = '30px';
    mouse.style.position = 'absolute';
    mouse.style.left = eventInfo.clientX + 'px';
    mouse.style.top = eventInfo.clientY + 'px';
})
```

> **_Exercise 2_**
- photo in top and photo in down and click to photo to replace int top
```html
    <div class="itemM w-25 py-4 mx-auto">
        <img id="mainImage" src="/img/1.jpg" class="w-100" alt="">
        <img class="item-img" src="/img/1.jpg" alt="">
        <img class="item-img" src="/img/2.jpg" alt="">
        <img class="item-img" src="/img/3.jpg" alt="">
        <img class="item-img" src="/img/4.jpg" alt="">
    </div>
```
```css
.item-img{
    width: 25%;
    float: left;
    padding: 10px;
    cursor: pointer;
}
```
```js
var mainImg = document.querySelector('#mainImage')
var replaced = document.querySelectorAll('.item-img')

for(var i=0;i<replaced.length;i++){
    replaced[i].addEventListener('click',function(evenInfo){
        var imgSrc = evenInfo.target.getAttribute('src')
        mainImg.setAttribute('src' , imgSrc)
    })
}
```

