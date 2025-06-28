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


// map

// let user = {
//     name : 'ahmed',
//     age : 21 ,
//     gender : 'male'
// }



// let userMap  = new Map() // {}
// // create map empty
// // userMap.set('key' , 'value')
// userMap.set('name' , 'ahmed')
// userMap.set('age',21)
// userMap.set('gender', 'male');
// userMap.set('salary' , 50000)


// console.log(userMap);
// /*
//     {'name' => 'ahmed', 'age' => 21, 'gender' => 'male', 'salary' => 50000}
// */
// // profit
// console.log(userMap.size); // 4 not in obj
// // userMap.delete('key')
// userMap.delete('age')
// console.log(userMap); // Map(3) {'name' => 'ahmed', 'gender' => 'male', 'salary' => 50000}
// // has key
// console.log(userMap.has('name') ); // true or false
// // userMap.clear() to clear map
// console.log(userMap.get('salary'));
// console.log(userMap.keys());
// console.log(userMap.values());
// console.log(userMap.entries()); // element

// for (const x of userMap) {
//     console.log(x); // return entries
// }
// for (const x of userMap) {
//     console.log(x[0]); // return keys
// }
// for (const x of userMap) {
//     console.log(x[1]); // return values
// }
// /*
//     (2) ['name', 'ahmed']
//     (2) ['gender', 'male']
//     (2) ['salary', 50000]
//     return array
// */
// // using destructing 
// for (const [key,value] of userMap) {
//     console.log(key , value); 
// }
// // map can make any datatype of key you want to make key as object available , or func


// // convert obj to map
// let user = {
//     name : 'ahmed',
//     age : 21 ,
//     gender : 'male'
// }
// let userMap2 = new Map(Object.entries(user))
// console.log(userMap2); // and make all method

// // convert from map to obj
// let obj = Object.fromEntries(userMap)
// console.log(obj);

// // # Destructuring
// // - it's a way to extract values from arrays or objects and assign them to variables
// let  x = ['ahmed' , 'mohamed']
// let [y,z] = x 
// // y = 'ahmed
// // z = mohamed

// set

// let prices = new Set()
// prices.add(100).add(200).add(100)
// console.log(prices); // return unique values
// 100
// 200
// same method map
// for (const x of prices) {
//     console.log(x);
// }
// don't have array method
// let arr =Array.from (new Set([100,100,1001,1001,110,200,200]))
// console.log(arr);
// (4) [100, 1001, 110, 200]
// let uniqueArr = new Set(arr)
// console.log(uniqueArr); // return unique values
// // Set(4) {100, 1001, 110, 200}
// let arrayUniqueArr = Array.from(uniqueArr)
// console.log(arrayUniqueArr); // return unique values
// // [100, 1001, 110, 200]


// 'use strict'
// function test (){
//     console.log(this);
// }
// test()


// let person = {
//     name : 'ahmed',
//     age : 21 ,
//     salary : 8000,
//     hello:function(){
//         console.log(`hi me ${this.name}`); // ahmed
//     },
//     calcSalary:function(){
//         function calcTax(){
//           return (this.salary * 10) / 100; // this here return undefined because this this here Dealing with the function outside the scope (in window)
//         }
//         return this.salary - calcTax()
//     }
// }
// console.log(person.calcSalary()); // NaN
// to solve this 
// create variable and move it 

// let person = {
//     name : 'ahmed',
//     age : 21 ,
//     salary : 8000,
//     hello:function(){
//         console.log(`hi me ${this.name}`); // ahmed
//     },
//     calcSalary:function(){
//         let that = this
//         function calcTax(){
//           return (that.salary * 10) / 100; // this here return undefined because this this here Dealing with the function outside the scope (in window)
//         }
//         return this.salary - calcTax()
//     }
// }
// console.log(person.calcSalary()); // 7200
// or arrow func

// declaration func (hoisting)
// function test(userName){
//     console.log(`welcome ${userName}`);
// }
// // expression func (not hoisting)
// let welcome = function(userName){
//     console.log(`welcome ${userName}`);
// }
// // arrow func
// // delete keyword function and add after () arrow =>
// let welcome2 = (username)=>{
//     console.log(`welcome ${username}`);
// }
// // if func have one return statement can remove return keyword and {}
// let welcome3 = (user)=> `welcome ${user}`

// let person = {
//     name : 'ahmed',
//     age : 21 ,
//     salary : 8000,
//     hello:function(){
//         console.log(`hi me ${this.name}`); // ahmed
//     },
//     calcSalary:function(){
//         let calcTax = ()=>
//         {
//             return this.salary * 10 / 100; 
//         }
//         return this.salary - calcTax()
//     }
// }
// console.log(person.calcSalary()); // 7200

// oop

let human = {
    isLive : true,
    eat:()=>{
        console.log('hello');
    }
}
let user = {
    name : 'ahmed',
    age : 22
}
let eng = {
    dept : 'CS',
    uni : 'Sadat'
}
// to create inheritance
// Object.setPrototypeOf(child , parent)
Object.setPrototypeOf(user , human)
console.log(user.isLive);
Object.setPrototypeOf(eng , user)
console.log(eng);
// anything add in setPrototype(not object or null) without this ignore