// function
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
//  reusability 
// reuse code 

//  implement 
function getAvg(){
    var x = 5 ; 
    var y = 8 ;
    var sum = x + y;
    var avg = sum / 2 ;
    console.log(avg);
}
// call function to run *invoke*
getAvg(); 

//              parameter 
function average( x ,  y ){ // why not type var -> because we use x and y  parameter not variable
    var sum = x + y;
    var avg = sum / 2;
    console.log(avg);
}
//  invoke 
//      x   y
//     argument
average(8 , 2);
average(20,30);
average(100,200);
