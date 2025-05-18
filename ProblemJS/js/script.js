// -- -- problem 1 -- //
// var num = prompt();
// console.log(num);

/* -- --- --- --- --- --- ---- ---- ----- --- */

// -- -- problem 2 -- //
// var num = prompt();
// if(num % 3 ==0 && num % 4 == 0){
//     console.log('yes');
// }else{
//     console.log('no');
// }


/* -- --- --- --- --- --- ---- ---- ----- --- */

// -- -- problem 3 -- //

// var num1 = prompt('enter first num');
// var num2 = prompt('enter second number');
// if(num1 > num2){
//     console.log(num1);
// }else{
//     console.log(num2);
// }


/* -- --- --- --- --- --- ---- ---- ----- --- */

// -- -- problem 4 -- //
// var num = prompt('enter a number');
// if(num>0){
//     console.log('Positive');
// }else{
//     console.log('Negative');
// }


/* -- --- --- --- --- --- ---- ---- ----- --- */

// -- -- problem 5 -- //
// var x = prompt('enter first number');
// var y = prompt('enter second number');
// var z = prompt('enter last number');
// var mx , mn;
// if(x >= y && x >= z){
//     mx = x;
// }
// else if(y >= x && y >= z){
//     mx = y;
// }else{
//     mx = z;
// }
// if(x < y && x< z){
//     mn= x;
// }
// else if(y < x && y < z){
//     mn = y;
// }else{
//     mn = z;
// }
// console.log(mx , 'the max and' , mn ,'is the min');



/* -- --- --- --- --- --- ---- ---- ----- --- */

// -- -- problem 6 -- //
// var x = prompt('enter number');
// if(x&1){ // or x % 2 == 0 -> even else odd
//     console.log('Odd.');
// }else{
//     console.log('Even.');
// }


/* -- --- --- --- --- --- ---- ---- ----- --- */

// -- -- problem 7 -- //
// var x = prompt('enter char to check vowel or not');
// if(x == 'A' || x == 'a' || x == 'e' || x == 'E'|| x == 'I' || x == 'i' || x == 'O' || x == 'o' || x == 'U' || x == 'u')
// {
//     console.log('Vowel');
// }else{
//     console.log('Consonant.');
// }


/* -- --- --- --- --- --- ---- ---- ----- --- */

// -- -- problem 8 -- //
// var x = prompt('Enter Number to Stop loop');
// for(var i = 1 ; i <=x ; i++){
//     console.log(i);
// }


/* -- --- --- --- --- --- ---- ---- ----- --- */

// -- -- problem 9 -- //
// var x = prompt("Enter base");
// for(var i = 1 ; i <= 12 ; i++){
//     console.log(x*i);
// }








/* -- --- --- --- --- --- ---- ---- ----- --- */

// -- -- problem 10 -- //
// var x = prompt('print even num');
// for(var i = 2 ; i <= x ; i+=2){
//     console.log(i);
// }


/* -- --- --- --- --- --- ---- ---- ----- --- */

// -- -- problem 11 -- //
// var x = prompt('enter base');
// var y = prompt('enter exp');
// var rs = 1;
// for(var i=1 ; i<= y; i++){
//     rs*=x;
// }console.log(rs);


/* -- --- --- --- --- --- ---- ---- ----- --- */

// -- -- problem 12 -- //

// var sum = 0;
// var avg = 0;
// for(var i = 1 ; i <= 5 ; i++){
//     var x = parseInt(prompt('Entre your marks ' + i + ' : '));
//     sum += x;
// }
// avg = sum / 5;
// console.log(sum);
// var percentage  = (sum / (5 * 100) ) * 100;
// console.log(avg);
// console.log(percentage + '%');



/* -- --- --- --- --- --- ---- ---- ----- --- */
// -- -- problem 13 -- //


// var month = parseInt(prompt('Enter a Month: '));
// if (month === 1 || month === 3 || month === 5 || month === 7 || 
//     month === 8 || month === 10 || month === 12) {
//     console.log('31 days');
// } else if (month === 2) {
//     console.log('28/29 days');
// } else if (month === 4 || month === 6 || month === 9 || month === 11) {
//     console.log('30 days');
// } else {
//     console.log('Invalid Month');
// }



/* -- --- --- --- --- --- ---- ---- ----- --- */
// -- -- problem 14 -- //


// var sum = 0;
// for (var i = 1; i <= 5; i++) {
//     var x = parseInt(prompt('Enter a grade ' + i + ' : '));
//     if (x >= 90 && x <= 100) {
//         console.log(i + ' Grade A ' + x + '%');
//     } else if (x >= 80 && x <= 89) {
//         console.log(i + ' Grade B ' + x + '%');
//     } else if (x >= 70 && x <= 79) {
//         console.log(i + ' Grade C ' + x + '%');
//     } else if (x >= 50 && x <= 69) {
//         console.log(i  + ' Grade D ' + x + '%');
//     } else {
//         console.log(i + ' Grade E ' + x + '%');
//     }

// }




/* -- --- --- --- --- --- ---- ---- ----- --- */
// -- -- problem 15 -- //


// var month = parseInt(prompt('Enter a Month: '));
// switch(month){
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         console.log('31 days');
//         break;
//     case 2:
//         console.log('28/29 days');
//         break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         console.log('30 days');
//         break;
//     default:
//         console.log('Invalid Month');
//         break;
// }

/* -- --- --- --- --- --- ---- ---- ----- --- */
// -- -- problem 16 -- //

// var char = prompt('Enter a character: ');
// switch(char){
//     case 'a':
//     case 'e':
//     case 'i':
//     case 'o':
//     case 'u':
//         console.log('Vowel');
//         break;
//     case 'A':
//     case 'E':
//     case 'I':
//     case 'O':
//     case 'U':
//         console.log('Vowel');
//         break;
//     default:
//         console.log('Consonant');
//         break;
// }

/* -- --- --- --- --- --- ---- ---- ----- --- */
// -- -- problem 17 -- //

// var x = prompt('enter first number');
// var y = prompt('enter second number');
// switch(true){
//     case x > y:
//         console.log(x);
//         break;
//     case x < y:
//         console.log(y);
//         break;
//     default:
//         console.log('Invalid Number');
//         break;
// }

/* -- --- --- --- --- --- ---- ---- ----- --- */
// -- -- problem 18 -- //

// var x = parseInt(prompt('enter number'));
// switch(true){
//     case x %2 ==0:
//         console.log('even');
//         break;
//     case x %2==1:
//         console.log('odd');
//         break;
//     default:
//         console.log('Invalid Number');
//         break;  
// }


/* -- --- --- --- --- --- ---- ---- ----- --- */
// -- -- problem 19 -- //

// var x = parseInt(prompt('enter number'));
// switch(true){
//     case x > 0:
//         console.log('positive');
//         break;
//     case x < 0:
//         console.log('negative');
//         break;
//     default:
//         console.log('zero');
//         break;
// }


/* -- --- --- --- --- --- ---- ---- ----- --- */
// -- -- problem 20 -- //

// var num = parseInt(prompt('enter first number'));
// var num2 = parseInt(prompt('enter second number'));
// var char = prompt('enter operator'); ;
// switch(char){
//     case '+':
//         console.log(num + num2);
//         break;
//     case '-':
//         console.log(num - num2);
//         break;
//     case '*':
//         console.log(num * num2);
//         break;
//     case '/':
//         console.log(num / num2);
//         break;
//     default:
//         console.log('Invalid Operator');
//         break;

// }


// -- -- -- -- -- -- -- -- --- ---- -- -- -- --- -- -- -- --- END -- -- -- --- -- --- -- -- -- -- -- -- --- -- --- -- --//