// DOM 
var btn = document.querySelector('button');

function test(){
    alert('hi fakhora');
}
// var.addEventListener('eventName',function}
// btn.addEventListener('click', test);
// on addEventListener if event has (on) delete it
// don't add () for function
// if you need function has a parameter can make it anonymous function
// function testt(user){
//     alert("hi "+user);
// }
// btn.addEventListener('click',function(){
//     // CALL function with user
//     testt('Ahmed')
// })
// btn.onclick = function(){
//     alert('hi');
// }
// btn.onclick = test;
// if you add () this function call automatic on open

// if you make two func in on click last one run
// on event lis two func run

// var fakhr = document.getElementsByTagName('p');

// for(var i = 0;i<fakhr.length;i++){
//     fakhr[i].addEventListener('click',function(element){
//         // console.log(element); object has many property get details of click
//         console.log(element.target);
//         alert('hello mr fakhr')
//     })
// }
// event
// click

// double click dblclick
// mousemove while move in id
// mouseleave
// mouseenter
// mouseup
// mousedown
// keyup
// keydown
// keypress
// input 
// change
// blur
// focus
// scroll in window 
// dragend in html draggable = true
// submit

// if you make form when submit make refresh 
// form.addEventListener('submit',function(e){
//     e.preventDefault(); // this
//     console.log('submit');
//     alert('submit');
//     // console.log('submit');
//     // alert('submit');
// });

// change style
// tag.style.property= 'value; 
// inline style

// var demo = document.getElementById('demo');

// btn.addEventListener('click',function(){
//     demo.style.backgroundColor = 'red';
//     demo.style.width='300px'
// })
// move img with you
// var img = document.querySelector('img');
// document.addEventListener('mousemove',function(e){
//     img.style.position = 'absolute'
//     img.style.left = e.clientX+'px';
//     img.style.top = e.clientY+'px';
// })

// setAttribute
// getAttribute
// removeAttribute




// classList
// add
// remove
// toggle here remove not here add
// contains
// item
// replace
// btn,addEventListener('click',function(){
//     demo.setAttribute('href','#fakhr')
//     var x = demo.getAttribute('id')
//     console.log(x); // demo
//     demo.classList.add('text-info')
//     demo.classList.toggle('text-center');
//     demo.classList.replace('text-info' , 'text-white')
//     demo.classList.remove('text-white');
// })

var primary = document.querySelector('.imgBox');
var sec = document.querySelectorAll('.img-item');

for(var i = 0 ; i < sec.length;i++){
    sec[i].addEventListener('click',function(element){
        var clicked = element.target;
        console.log(element.target);
        var imgSrc = clicked.getAttribute('src');
        primary.setAttribute('src',imgSrc)
    })
}