// innerHTML get html element
// innerText only text
// var element = document.querySelector('p');
// console.log(element.innerHTML); // hello mr fakhora <span>hi</span>
// console.log(element.innerText); // hello mr fakhora

// var div = document.createElement('div');
// div.append('varName');
// div.prepend('varName')

var element = document.querySelector('section');
console.log(element.children);
element.children[1].style.color = 'red'
console.log(element.nextElementSibling); // next element direct 
console.log(element.previousElementSibling); // previous element
console.log(element.nextSibling); // next element or space next direct 

