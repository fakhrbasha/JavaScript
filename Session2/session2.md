***JAVA-SCRIPT***
1. Function
    -  reusability 
    - reuse code 
```
var x = 5 ; 
var y = 5 ;
var sum = x + y;
var avg = sum / 2 ;
console.log(avg);
var z = 5 ; 
var s = 5 ;
var sum = z+ s;
var avg = sum / 2 ;
console.log(avg);
-> duplicate code -> DRY <-
```
- implementation

    ```
    function getAvg(){
    var x = 5 ; 
    var y = 8 ;
    var sum = x + y;
    var avg = sum / 2 ;
    console.log(avg);
    }
    ```
    - _call function to run *invoke*_
    ```
    getAvg(); 
    ```
    - parameter 
```
                 parameter
function average( x ,  y ){ // why not type var -> because we use x and y  parameter not variable
    var sum = x + y;
    var avg = sum / 2;
    console.log(avg);
}
  invoke 
       x   y
      argument
average(8 , 2); // call , invoke
average(20,30); // call , invoke
average(100,200); // call , invoke
average('ahmed','mohamed') ; // NaN
average(100,200,300); ; // x -> 100 , y -> 200 , 300 -> goodbye
average('ahmed',200); //NaN

```

2. Function Scope

```
function getSum( x , y){
    var summ = x + y;
}
getSum(10,20);
console.log(summ); // error summ not defined you need to defined in global
```
-----
```
var y = 100; // global scope
function welcome(){
    var xx = 10; // local scope
}
console.log(y);
welcome();
console.log(xx); // error x not defined
```
---- 
```
if (true){
    var z = 100; // global scope
}
console.log(z); // 100
and we can use z in any place in our code 
loop same thing
```

__*any variable global scope ! defined in function*__

3. self invoked function
    -  self invoked function -> anonymous function -> function without name call itself

```
(function(){
    console.log('self invoked function');
    var x = 100; // local scope
})();
var x = 100; // global scope
console.log('self invoked function');

```
- **_important thing in self invoked function -> scope is not global scope_**
- **_it is local scope | function scope |_**

4. return statement
```
- return statement -> return a value

function getAvg(x,y){
    var sum = x + y;
    var avg = sum / 2;
    console.log(avg);
    return avg;

  // unreachable code
  var goodbye = 'goodbye'; // not return
    return goodbye;
}
var res = getAvg(10,20);
res++;
console.log(res);
```
- if delete return statement res will be undefined
- if need the value in another action use return type

**_Example_**
```
function calcPrice(price , profit , tax , ads){
    var price1 = price + profit;
    var price2 = price1 * tax;
    var price3 = price2 + ads ;
    return price3;
}
var finalPrice = calcPrice(100,10,1.5,200);
function getAvg(x,y){
    var sum = x+y;
    var avg = sum/2;
    console.log(avg);
}
// getAvg(finalPrice, 100); or 
//         must return value
getAvg(calcPrice(100,10,1.5,200) , 20);
```
-  if you don't use return statement in function -> undefined

**_Example_**
```
function parent(){
    function child1(){
        return 'child1';
    }
    function child2(){
        return 'child2';
    }
    var x = child1();
    console.log(x); // log child1
    return 'fakhr';
}
parent(); // child1

var fa5r = parent();
console.log(fa5r);

--- ---
function parent1(){
    function child1(){
        return 'child1!';
    }
    return child1(); // return return child1
}
var x = parent1();
console.log(x); // child1   
```

4. ***Hoisting***    ! important for interview
-  hoisting will push declaration to top of the scope
- from this
```

function test (){
    console.log('hello');
    console.log('welcome');
    console.log('hello');

    var x = 10 ;
    //  var x ->  declare 
    // x = 10 -> assignment
    //  hoisting will push declaration to top of the scope
}
```
- to this
```
function test (){
    var x ;
    console.log('hello');
    console.log('welcome');
    console.log('hello');

    x = 10 ;
}
```
**_EX_**
- type this 
```
console.log(x); // undefined
var x = 10 ;
```
- hoisting will push declaration to top of the scope 
- interpreter take the declaration and push it to top of scope
- run this
```
var x ;
console.log(x);
x = 10 ;
```
- this is interpreter make it 
- because this output undefined any other language program get error
- but in javascript it just print undefined

**_Type Function_**
- declaration function ->any function start with keyword function
- expression function -> any function without keyword function


- declaration function
```
function getAvg(x,y){
    var sum = x + y;
    var avg = sum / 2;
    return avg;
}
```
- expression function

```
var getAvg = function(x,y){
    var sum = x + y;
    var avg = sum / 2;
    return avg;
}
```
- the difference is -> expression function is not hoisting 
- declaration function is hoisting take in top 
- expression function have hoisting in declaration but body still in place

**EX**

- code this

```
console.log('hello ');
console.log('hello ');
console.log('hello ');
console.log('hello ');
console.log('hello ');
function getAvg(x,y){
    var sum = x + y;
    var avg = sum / 2;
    return avg;
}

// expression function
var getAvg = function(x,y){
    var sum = x + y;
    var avg = sum / 2;
    return avg;
}
```
- run this
```
function getAvg(x,y){
    var sum = x + y;
    var avg = sum / 2;
    return avg;
}
var getAvg ;

console.log('hello ');
console.log('hello ');
console.log('hello ');
console.log('hello ');
console.log('hello ');


// expression function
getAvg = function(x,y){
    var sum = x + y;
    var avg = sum / 2;
    return avg;
}
```

**_EX_**
```
getAvg(10,20 );
function getAvg(x,y){
    var sum = x + y;
    var avg = sum / 2;
    console.log(avg);
}
```
- output 15 
- any program lang other this code has error
- but hosting change this to -> 
```
function getAvg(x,y){
    var sum = x + y;
    var avg = sum / 2;
    console.log(avg);
}
getAvg(10,20 );
```
- output 15
- hosting -> move function to top of file

- can run this in expression function? / NO
**_EX_**
```
getAvg(10,20);
var getAvg = function(x,y){
    var sum = x + y;
    var avg = sum / 2;
    console.log(avg);
}
```
- getAvg is not a function interpreter show this function as variable 

```
var getAvg ;
getAvg(10,20);
getAvg = function(x,y){
    var sum = x + y;
    var avg = sum / 2;
    console.log(avg);
}
```

**EX**
- code 
```
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
```
- interpreter hoisting 
```
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
```
- review
- Same routine
- Don't go out scope


***Interpreter*** <p>It's a process that happens before code execution, where the code is read line by line and directly translated for execution without being compiled into an executable file beforehand. </p>
