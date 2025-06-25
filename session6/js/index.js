// es6

// var
// let 
// const

// declaration - scope - hoisting

// var x = 8
// var x = 7 not error

// let y = 7
// let y = 7 error

// let x = 9
// x = 8 //  allow


// const y = 9
// // y = 8 not allow

// // scope

// {
// // block scope

// }

// function test(){
//     var x = 8;
// }
// console.log(x); // failed to load resource: the server responded with a status of 404 (Not Found) in function only


// if(true){
//     var x = 8;
// }
// console.log(x); // allow

// if(true){
//     let x = 8;
// }
// console.log(x); // index.js:35 Uncaught ReferenceError: x is not defined

// // if use let not allow  


// hoisting

// dead zone before declaration
// console.log(x); // Cannot access 'x' before initialization
// let x = 8;
// console.log(x); // 8







// const when declare element from html







// const friend = ['ahmed' , 'mohamed' , 'ali']

// for(const x of friend){
//     console.log(x); // allow because pointer not change same address
// }

// // template literal

// function welcome(name='ahmed' , age=10  ,salary=2002){
// // ternary operator
// // age == undefined ? (age = 10) : (age = age);
// // salary == undefined? (salary = 1000) : (salary = salary);
// name ==undefined ? (name = 'ahmed') : (name = name)

//     console.log(
//     `hi ${name} age ${age},
//         you are ${salary} salary`);
// }

// welcome ()
// // welcome('ali',20,2000)

// spread operator

// const friend = ['ahmed' , 'mohamed' , 'ali']
// const allFriend = ['fakhr' , 'basha' , ...friend]
// // concatenate all in array one


// function test (x,y,z)
// {
//     console.log(x,y,z);
// }

// let arr = [1,2,3]
// test(arr) //(3) [1, 2, 3] undefined undefined
// test(...arr) //1 2 3


// // reset parameter

// function reset(...x){
//     console.log(x);
// }
// test(1,2,3) //1 2 3 concatenate all in array one






// this => object not specific object

// console.log(this); // window
// function test(){
//     console.log(this);
// }

// test() // window

// const div = document.querySelector('div')

// div.addEventListener('click',function(e){
//   console.log(e.target); // same this
//   console.log(this); // div
// })

// let person = {
//     name : 'ahmed',
//     age : 21,
//     welcome : function(){
//         console.log(`hi ${this.name}`); // ahmed
//     }
// }

// console.log(person.welcome());


// expression function

// let sayHi = function()
// {
//     console.log(hi);
// }
// sayHi()

// // arrow func
// let sayHello = ()=>{
//     console.log(hallo);
// }
// sayHello()

// let num = (x,y)=> {
//     return x+y // if return plus only
// }   

// // can make same this
// let num1 = (x,y)=> x+y

// // sugar syntax
// let num2 = x => x+4


// let res = num(3,2)

// interview

//  what arrow func and this 
// arrow func don't create itself (this)
// arrow func don't have it's own this
// let student = {
//     name : 'ahmed',
//     age:21,
//     welcome : function(){
//         console.log(`this`);
//         let salary= function(){
//             console.log(this);
//         }
//         salary()
//     }
// }
// student.welcome();  

/*
{name: 'ahmed', age: 21, welcome: ƒ}
Window {window: Window, self: Window, document: document, name: '', location: Location, …}
*/
// let student = {
//     name : 'ahmed',
//     age:21,
//     welcome : function(){
//         console.log(this);
//         let salary= ()=>{
//             console.log(this);
//         }
//         salary()
//     }
// }
// student.welcome();  

/*
{name: 'ahmed', age: 21, welcome: ƒ}
{name: 'ahmed', age: 21, welcome: ƒ}
*/


// shallow copy & deep copy
// let arr = [1,2,3]
// let arr2 = arr


// arr2.push(4);
// console.log(arr); // [1, 2, 3, 4]
// console.log(arr2); // [1, 2, 3, 4]

// deep copy
// let arr = [1,2,3[1,2]]
// // let arr2 = [...arr]

// let arr1 = structuredClone(arr)

// arr1[3].push(4);

// console.log(arr); // [1, 2, 3]
// console.log(arr1); // [1, 2, 3, 4]

// deep copy
// let arr1 = [1,2,3,[4,5,6]]

// // let arr2 = structuredClone(arr1);
// let arr2 = JSON.parse(JSON.stringify(arr1))

// arr2[3].push(10);

// console.log(arr1);  // (4) [1, 2, 3, Array(3)]
// console.log(arr2); //(4) [1, 2, 3, Array(4)]

// destructing


// foreach

// let prices = [100, 200, 300, 400, 500];
// prices.forEach((price, index) => {
//     console.log(price, index);
// })

// map return new array
// let prices = [100, 200, 300, 400, 500];
// let newPrices = prices.map((price)=>{
//     return price * 2;
// })

// console.log(newPrices);

// filter

// let newPrices = prices.filter((price)=>{
//     return price > 300;
// }).map((prices)=>{
//     return prices * 2;
// })
// console.log(newPrices);

// reduce

// let total = prices.reduce(
//     (prev, next) => {
//     return prev + next;
//   } /* default value */
// );
// console.log(total);
// default value = 0
// 0 + 100 = 100
// 100 + 200 = 300
// 300 + 300 = 600
// 600 + 400 = 1000
// 1000 + 500 = 1500


// ==============================/\/\/\/\\/===============================/\/\\/\/\\/\

// function test(){
//   x = 100; // global karsa
// }
// test()
// console.log(x); // 100
// // 2009 es5 strick mode don't allow error 

// 'use strict';
// function test(){
//   x = 100; 
// }
// test()
// console.log(x); // x is not defined

// function test2(){
// 'use strict';
//   x = 100; 
// }
// test()
// console.log(x); 
// // // 2015 es6
// const x = 10;
// console.log(x);
// const friend = ['ahmed' , 'mohamed' ,'salah']
// for(const i of friend){
//   console.log(i);
// }

// default parm

// function test (name = 'ahmed',age = 21,salary = 3200){
//   console.log('welcome ' + name + ' your age is ' + age + ' your salary is ' + salary);
// }
// test('ahmed', 20, 3000);
// // welcome ahmed your age is 20 your salary is 3000
// test( 'ahmed',29)
// // welcome ahmed your age is 29 your salary is 3200
// test('ahmed')
// // welcome ahmed your age is 21 your salary is 3200


// template literals
// const name = 'ahmed';
// const age = 21;
// const salary = 3200;
// const message = `welcome ${name} 
// your age is ${age} 
// your salary is ${salary}`;
// console.log(message);

// spread operator

// function getAvg (x=0,y=0,z=0){
//   let sum = x + y + z;
//   let avg = sum / 4;
//   console.log(avg);
// }
// let nums = [10,20,30,40]
// // getAvg(10,20,30,40);
// getAvg(...nums);

// let schoolFriend = ['ahmed' , 'ali' , 'fakhr']
// let allFriend = ['mohamed' ,[...schoolFriend], 'shaker']
// console.log(allFriend);
// /*
//  (3) ['mohamed', Array(3), 'shaker']
// 0: "mohamed"
// 1: (3) ['ahmed', 'ali', 'fakhr']
// 2: "shaker"
// length: 3 
//  */

// rest param

// // function getAvg(...num)
// // {
// //   console.log(num); // (4) [10, 20, 30, 40]
// // }
// // getAvg(10,20,30,40)
// function getAvg(...nums)
// {
//   let sum = 0;
//   for (const num of nums) {
//     sum+=num
//   }
//   let avg = sum/nums.length
//   console.log(avg);
// }
// getAvg(10,20,30,40,50)

// let obj1 = {
//   name : 'ahmed',
//   age : 21
// }
// let obj2 = {
//   gender : 'male',
//   salary : 90000,
//   ...obj1
// }
// console.log(obj2); // {name: 'ahmed', age: 21, gender: 'male', salary: 90000}


// deep copy

// let nums1 = [10,20,30,40]
// let nums2 =nums1 ;

// nums2.push(50)

// console.log(nums1); // (5) [10, 20, 30, 40,50]
// console.log(nums2); // (5) [10, 20, 30, 40,50]

// let nums1 = [10,20,30,40]
// let nums2 =[...nums1] ;

// nums2.push(50)

// console.log(nums1); // (4) [10, 20, 30, 40]
// console.log(nums2); // (5) [10, 20, 30, 40,50]




// let obj1 = {
//   isAdmin : false,
//   age : 21,
//   son :{
//     age : 1
//   }
// }
// let obj2 = structuredClone(obj1)
// obj1.son.age = 2;
// console.log(obj1);
// console.log(obj2);




















// # Destructuring
// - it's a way to extract values from arrays or objects and assign them to variables
