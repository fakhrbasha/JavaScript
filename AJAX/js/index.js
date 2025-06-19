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
// var submit = document.forms[0]; // first form
// submit.addEventListener('submit',function(evenInfo){
//     console.log('hello');
//     evenInfo.preventDefault();
// })
// why submit not click in button because can submit any another way 

// Event Bubbling

var section = document.querySelector('section');
var div = document.querySelector('div');
var button = document.querySelector('button');

function sayHello(eventInfo){
    console.log('hello' + eventInfo.currentTarget);
  // if you make target of button then button fire only
}
// all fire because section is parent of div and div is parent of button 
section.addEventListener ('click' , sayHello);  //3
div.addEventListener ('click' , sayHello); //2
button.addEventListener ('click' , sayHello); //1
document.body.addEventListener ('click' , sayHello); //4

/*
output : 
hello[object HTMLButtonElement]
hello[object HTMLDivElement]
hello[object HTMLElement]
hello[object HTMLBodyElement]
*/