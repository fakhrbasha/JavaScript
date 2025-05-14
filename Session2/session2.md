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
```


