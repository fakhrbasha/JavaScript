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
