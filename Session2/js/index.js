// // function
// var x = 5 ; 
// var y = 5 ;
// var sum = x + y;
// var avg = sum / 2 ;
// console.log(avg);
// var z = 5 ; 
// var s = 5 ;
// var sum = z+ s;
// var avg = sum / 2 ;
// console.log(avg);
//  reusability 
// reuse code 

//  implement 
// function getAvg(){
//     var x = 5 ; 
//     var y = 8 ;
//     var sum = x + y;
//     var avg = sum / 2 ;
//     console.log(avg);
// }
// call function to run *invoke*
// getAvg(); 

//              parameter 
// function average( x ,  y ){ // why not type var -> because we use x and y  parameter not variable
//     var sum = x + y;
//     var avg = sum / 2;
//     console.log(avg);
// }
//  invoke 
//      x   y
//     argument
// average(8 , 2);
// average(20,30);
// average(100,200);
// average('ahmed','mohamed') ; // NaN 
// average(100,200,300); ; // x -> 100 , y -> 200 , 300 -> goodbye
// average('ahmed',200); //NaN


// function mx(x,y){
//     return x>y?x:y;
// }
// var l = mx(10, 20);
// document.getElementById('demo').innerHTML = l + ' hello';



// function scope

// function getSum( x , y){
//     var summ = x + y;
// }
// getSum(10,20);
// console.log(summ); // error summ not defined you need to defined in global

// var y = 100; // global scope
// function welcome(){
//     var xx = 10; // local scope
// }
// console.log(y);
// welcome();
// console.log(xx); // error x not defined
// if (true){
//     var z = 100; // global scope
// }
// console.log(z); // 100

// self invoked function -> anonymous function -> function without name call itself

// (function(){
//     console.log('self invoked function');
//     var x = 100; // local scope
// })();
// var x = 100; // global scope
// console.log('self invoked function');
// // important thing in self invoked function -> scope is not global scope
// // it is local scope | function scope |

// return statement
// // return statement -> return a value

// function getAvg(x,y){
//     var sum = x + y;
//     var avg = sum / 2;
//     console.log(avg);
//     return avg;

//   // unreachable code
//   var goodbye = 'goodbye'; // not return
//     return goodbye;
// }
// var res = getAvg(10,20);
// res++;
// console.log(res);
// //  if delete return statement res will be undefined
// // if need the value in another action use return type

// function calcPrice(price , profit , tax , ads){
//     var price1 = price + profit;
//     var price2 = price1 * tax;
//     var price3 = price2 + ads ;
//     return price3;
// }
// var finalPrice = calcPrice(100,10,1.5,200);
// function getAvg(x,y){
//     var sum = x+y;
//     var avg = sum/2;
//     console.log(avg);
// }
// // getAvg(finalPrice, 100); or 
// //         must return value
// getAvg(calcPrice(100,10,1.5,200) , 20);
// // if you don't use return statement in function -> undefined
// function parent(){
//     function child1(){
//         return 'child1';
//     }
//     function child2(){
//         return 'child2';
//     }
//     var x = child1();
//     console.log(x); // log child1
//     return 'fakhr';
// }
// parent(); // child1

// var fa5r = parent();
// console.log(fa5r);

// function parent1(){
//     function child1(){
//         return 'child1!';
//     }
//     return child1(); // return return child1
// }
// var x = parent1();
// console.log(x); // child1   

// Hoisting   tricks js
//  in general 
// function test (){
//     console.log('hello');
//     console.log('welcome');
//     console.log('hello');

//     var x = 10 ;
//     //  var x ->  declare 
//     // x = 10 -> assignment
//     //  hoisting will push declaration to top of the scope
// }
// function test (){
//     var x ;
//     console.log('hello');
//     console.log('welcome');
//     console.log('hello');

//     x = 10 ;
// }
// ex
// console.log(x);
// var x= 10;
// output undefined
// why 
// interpreter take the declaration and push it to top of 
// var x ;
// console.log(x);
// x = 10 ;
// because this output undefined any other language program get error
// but in javascript it just print undefined

//  type write function

// declaration function
// function getAvg(x,y){
//     var sum = x + y;
//     var avg = sum / 2;
//     return avg;
// }
// // expression function
// var getAvg = function(x,y){
//     var sum = x + y;
//     var avg = sum / 2;
//     return avg;
// }

// //  -> any function start word function -> declaration
// // another this -> expression function
// //  the difference is -> expression function is not hoisting 
// // declaration function is hoisting take in top 
// // expression function have hoisting in declaration but body still in place
// // ex 
// // code this
// console.log('hello ');
// console.log('hello ');
// console.log('hello ');
// console.log('hello ');
// console.log('hello ');
// function getAvg(x,y){
//     var sum = x + y;
//     var avg = sum / 2;
//     return avg;
// }

// // expression function
// var getAvg = function(x,y){
//     var sum = x + y;
//     var avg = sum / 2;
//     return avg;
// }

// // run this 
// function getAvg(x,y){
//     var sum = x + y;
//     var avg = sum / 2;
//     return avg;
// }
// var getAvg ;

// console.log('hello ');
// console.log('hello ');
// console.log('hello ');
// console.log('hello ');
// console.log('hello ');


// // expression function
// getAvg = function(x,y){
//     var sum = x + y;
//     var avg = sum / 2;
//     return avg;
// }


// getAvg(10,20 );
// function getAvg(x,y){
//     var sum = x + y;
//     var avg = sum / 2;
//     console.log(avg);
// }
// // output 15 
// // any program lang other this code has error
// // but hosting change this to -> 
// function getAvg(x,y){
//     var sum = x + y;
//     var avg = sum / 2;
//     console.log(avg);
// }
// getAvg(10,20 );

// can run this in expression function? / NO
// getAvg(10,20); // getAvg is not defined
// var getAvg = function(x,y){
//     var sum = x + y;
//     var avg = sum / 2;
//     console.log(avg);
// }
// code
function foo(){
    console.log('welcome to foo');
    function getAvg(x,y){
        var sum = x + y;
        var avg = sum / 2;
        console.log(avg);
    }

    var getAvg = function(x,y){
        var sum = x + y;
        var avg = sum / 2;
        console.log(avg);
    }
}
// interpreter hoisting 
function foo(){
    var getAvg;
    function getAvg(x,y){
        var sum = x + y;
        var avg = sum / 2;
        console.log(avg);
    }
    console.log('welcome to foo');
    

    getAvg = function(x,y){
        var sum = x + y;
        var avg = sum / 2;
        console.log(avg);
    }
}

//  Object