# Strict Mode 

## What is Strict 
- A mode that can be added to JavaScript code to help avoid some common errors
```js
function test(){
  x = 100; // global karsa
}
test()
console.log(x); // 100
```
- 2009 es5 strick mode don't allow error 
- how use in top define : 

```js
'use strict';
function test(){
  x = 100; 
}
test()
console.log(x); // x is not defined
```
- another way : 
```js   
function test2(){
'use strict';
  x = 100; 
}
test()
console.log(x); 

```

# Const
- const is a keyword that can be used to declare a constant variable, which means the value of the variable cannot be changed once it is assigned.
```js
const x = 100;
x = 200; // error
```
- const is a block scope variable, which means it is only accessible within the block of code where it is defined.
- const is not hoisted, which means it is not accessible before it is 
```js
function test(){
  const x = 100;
  if(true){
    const x = 200;
    console.log(x); // 200
  }
  console.log(x); // 100
}
```
- **any variable you know it didn't reassign the best practice define const**
- const not change value in code but can change value in execution 
- *EX*
- forOf -> es6 
```js
const friend = ['ahmed' , 'mohamed' ,'salah']
for(const i of friend){
  console.log(i);
}
// this code run and print value because const locate point to const variable not to value
```
- the value can't change through reassignment using the operator 

# let
- let is a keyword that can be used to declare a variable that can be reassigned.
- let is a block scope variable, which means it is only accessible within the block of code where it is defined.

```js
function test(){
    let x = 100;
  if(true){
    let x = 200;
    console.log(x); // 200
  }
  console.log(x); // 100
}
```
- let is not hoisted, which means it is not accessible before it is 
```js
console.log(x);
let x = 10;
console.log(x);
// output : Cannot access 'x' before initialization
```
# Default Parameters

```js
function test (name,age,salary){
  console.log('welcome ' + name + ' your age is ' + age + ' your salary is ' + salary);
}
test('ahmed', 20, 3000);
// welcome ahmed your age is 20 your salary is 3000
test( 'ahmed',29)
// welcome ahmed your age is 29 your salary is undefined
test( 29)
// welcome 29 your age is undefined your salary is undefined
```
- its a moseba
- First Solve this problem use if condition but not optimal
```js
function test (name,age,salary){
    // ternary operator
    name === undefined ? name = 'ahmed' : name ;
    age === undefined ? age = 21 : age;
    salary === undefined ? (salary = 1000) : salary;

  console.log('welcome ' + name + ' your age is ' + age + ' your salary is ' + salary);
}
test('ahmed', 20, 3000);
// welcome ahmed your age is 20 your salary is 3000
test( 'ahmed',29)
// welcome ahmed your age is 29 your salary is 1000
test( 29)
// welcome 29 your age is 21 your salary is 1000
```
- ES6 give default parm
- in function have default parm can't use (use strict)
```js
function test (name = 'ahmed',age = 21,salary = 3200){
  console.log('welcome ' + name + ' your age is ' + age + ' your salary is ' + salary);
}
test('ahmed', 20, 3000);
// welcome ahmed your age is 20 your salary is 3000
test( 'ahmed',29)
// welcome ahmed your age is 29 your salary is 3200
test('ahmed')
// welcome ahmed your age is 21 your salary is 3200
```
# template literals 
- ES6
- it's a way to create string with multi line and variables
- use backtick ` `
- use ${} to insert variables

```js
const name = 'ahmed';
const age = 21;
const salary = 3200;
const message = 'welcome ' + name + ' your age is ' + age + ' your salary is ' + salary;
console.log(message);
// welcome ahmed your age is 21 your salary is 3200
```
- use template literals
```js
const name = 'ahmed';
const age = 21;
const salary = 3200;
const message = `welcome ${name} your age is ${age} your salary is ${salary}`;
```
```js
const name = 'ahmed';
const age = 21;
const salary = 3200;
const message = `welcome ${name} 
your age is ${age} 
your salary is ${salary}`;
console.log(message);
// welcome ahmed
// your age is 21
// your salary is 3200
```

# Spread operator 
- ES6
- it's a way to copy array or object
- use `...`
```js
function getAvg (x=0,y=0,z=0){
  let sum = x + y + z;
  let avg = sum / 4;
  console.log(avg);
}
let nums = [10,20,30,40]
// getAvg(10,20,30,40);
getAvg(...nums);
// 15
```
