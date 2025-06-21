// document.body.addEventListener('click',function(e){
//     console.log(e.clientX);
//     // console.log('hi');


// })
// var item = document.querySelector('.item');

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
// var submit = document.forms[0]; // first form
// submit.addEventListener('submit',function(evenInfo){
//     console.log('hello');
//     evenInfo.preventDefault();
// })
// why submit not click in button because can submit any another way 

// Event Bubbling

// var section = document.querySelector('section');
// var div = document.querySelector('div');
// var button = document.querySelector('button');

// function sayHello(eventInfo){
//     console.log('hello' + this);
//     eventInfo.stopPropagation(); // to stop bubbling
//   //  eventInfo.currentTarget == this
//   // if you make target of button then button fire only
// }
// // all fire because section is parent of div and div is parent of button 
// section.addEventListener ('click' , sayHello);  //3
// div.addEventListener ('click' , sayHello); //2
// button.addEventListener ('click' , sayHello); //1
// document.body.addEventListener ('click' , sayHello); //4

/*
output : 
hello[object HTMLButtonElement]
hello[object HTMLDivElement]
hello[object HTMLElement]
hello[object HTMLBodyElement]
*/
//  how stop event bubbling
//  1. stopPropagation()
//  2. stopImmediatePropagation()

// button.addEventListener('click' , function(e){
//     console.log('hi' + e.currentTarget);
// })
// section.addEventListener('click' , function(e){
//     console.log('hello' + e.currentTarget);
// })
// div.addEventListener('click' , function(e){
//     console.log('hello' + e.currentTarget);
//     e.stopPropagation(); // stop bubbling

//     /* output : 
//     hi[object HTMLButtonElement]
//     hello[object HTMLDivElement] */
// })
// Bubbling : event start from child to parent

// Capture : event start from parent to child add true after func

// button.addEventListener('click' , function(e){ //3
//     console.log('hi' + e.currentTarget);
// },true)
// section.addEventListener('click' , function(e){ //1
//     console.log('hello' + e.currentTarget);
// },true)
// div.addEventListener('click' , function(e){
//   //2
//   console.log('hello' + e.currentTarget);
  
// },true)
/*
output : 
hello[object HTMLElement]
hello[object HTMLDivElement]
hi[object HTMLButtonElement]
 */

// style

// var element = document.querySelector('.item');
// var h2 = document.querySelector('h2');

// element.addEventListener('click',function(){
//     // inline style
//     // element.style.backgroundColor = 'blue'; 
//     // element.style.position = 'absolute';
//     // element.style.left = '300px'
//     // element.style.top = '300px'
//     // or
//     h2.style.fontSize = '15px';
//     h2.style.color = 'white'
//     element.style.cssText =
//     'background-color:blue;position:absolute;left:300px;top:300px;';

//     // classlist
//     h2.classList.add('text-center', 'bg-success');
//     h2.classList.replace('bg-success' , 'bg-info')
//     // h2.classList.contains('bg-info');
//     // h2.classList.toggle('bg-success');
//     // h2.classList.remove('bg-success');
// })

//  
// var mouse = document.querySelector('img');
// document.addEventListener('mousemove'  , function(eventInfo){
//     mouse.style.width = '30px';
//     mouse.style.position = 'absolute';
//     mouse.style.left = eventInfo.clientX + 'px';
//     mouse.style.top = eventInfo.clientY + 'px';
// })

// var mainImg = document.querySelector('#mainImage')
// var replaced = document.querySelectorAll('.item-img')

// for(var i=0;i<replaced.length;i++){
//     replaced[i].addEventListener('click',function(evenInfo){
//         var imgSrc = evenInfo.target.getAttribute('src')
//         mainImg.setAttribute('src' , imgSrc)
//     })
// }

// dom traversal

// var container = document.querySelector('.container')

// // all children 
// console.log(container.children); // HTMLCollection(5) [h1, h1, h1, h1, h1]

// // change color second children to white when click container
// container.addEventListener('click',function(){
//     container.children[1].style.color = 'white'
//     // parent element
//     container.parentElement.style.backgroundColor = 'blue'
// })
// // childNode : anything calculated space between child calculated
// console.log(container.childNodes); // NodeList(11) [text, h1, text, h1, text, h1, text, h1, text, h1, text]

// console.log(container.nextElementSibling); // first element next me
// console.log(container.nextSibling); // first anything next me node or text or space

// console.log(container.previousElementSibling); // first element prevues me

// cerate element
// var myImg = document.createElement('img')
// myImg.setAttribute('src' , '/img/3.jpg')
// myImg.setAttribute('alt' , 'fakhr')
// myImg.classList.add('w-50' , 'rounded-circle')
// // add image in body
// document.body.appendChild(myImg)

// // append 
// // prepend

var element = document.querySelectorAll('p')
console.log(element);
var newP = document.createElement('p')
document.body.append(newP);
console.log(element);