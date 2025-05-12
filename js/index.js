// window.alert('hello world');
// print message
// object use to print message in browser
// window
// any "" may use '' and reverse
// window.alert("Hello JS");

// Console
// console.log('Hello JS');

// if you need js write in html use document

// document.getElementById("demo").innerHTML = "Hello Mr Fakhr";

// comment
/* comment */

// js case sensitive 

// Don't forget to use semicolon automatic 

// declare variable 

// ecma last 2015

// var age = 29;

// // //  when you declare variable use camelCase best practice
// // var firstName = 'Fakhr';

// // data type
// // primitive DT
// //  Number -> 1 10101010 0.4 0.0007
// // string -> "ahmed" 'ali' '12345' "false"
// // Boolean -> true , false 
// // undefined  -> var x;

// var isFalse = true;

// // // undefined 
// var x; 
// // // null
// var y = null; // null is object

// console.log("Hello");
// console.log(age);
// // which type
// console.log(age ,typeof age); // 29 'number'
// console.log(isFalse ,typeof isFalse); // true 'boolean'
// console.log(y ,typeof y); // null 'object'
// console.log(x ,typeof x); // undefined 'undefined'


// //  arithmetic operator
// // + - * / % ++ --

// var x = 10;
// console.log(x*10);
// // 2 power 3
// console.log(2 ** 3);
// // mod 4 % 2 = 0 // 3 %  2 = 1
// console.log(7%5); //2

// var x = 10;
// x+=20; // example x = x + 20; etc...
// console.log(x); // 30

// // comparison operator
// // == != > < >= <=

// var x = 10;
// var y = 20;
// console.log(x == y); // if x = y or not return true or false abstract equality
// var z = "10";
// console.log(x == z); // == not important dt -> true convert y to number and compare
// // === strict equality
// console.log(x === z); // false must be same dt and value


// // console.log(x != y); // if x = y or not return true or false
// // console.log(x > y); // if x > y return true or false
// // console.log(x < y); // if x < y return true or false
// // console.log(x >= y); // if x >= y return true or false
// // console.log(x <= y); // if x <= y return true or false

// // logical operator
// // && || !
// var x = 10;
// var y = 20;
// console.log(!(x==y));
// console.log("Ali" && "ahmed"); // return last value 
// console.log(true && 22); // 22

// // undefined return false
// // null return false
// // " " return false
// // NaN return false 

// // anything else return true
// console.log(undefined && 'ahmed'); // undefined

//IF 
var age = 20;
// if(age>16){
//     console.log("Enter" ,age);
// }else{
//     console.log("NO");
// }
if(age >= 20 && age < 18){
    console.log("+18");
}else if(age >=20 ||  age <=16){
    console.log('+16');
}else{
    console.log('NO');
}

//  nested if
var lang = 'php';
if(lang=='php'){
    if(age==30){
        console.log("AC");
    }else{
        console.log("NO age");
    }
    
}else{
    console.log('NO');
}

// switch
var skill = 'JS';
switch(skill){
    case 'JS':
        console.log('Good');
        break;
    case 'php':
        console.log('boor');
        break;
    default:
        console.log('NO');
        break;
}