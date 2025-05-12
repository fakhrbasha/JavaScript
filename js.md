***__Javascript__***

- EcmaScript 2015 (ES6)

- Detect user event
- validation 
- connection between F & B

1.  implement login
    - DOM Document Object Model
    - BOM Browser Object Model
    
*link js*
- in head
```
  <script src="/js/index.js"></script>
```

- print message
- object use to print message in browser
- window
- any "" may use '' and reverse
- window.alert("Hello JS");


*__ Console__*
- console.log('Hello JS');

- if you need js write in html use document
```
 document.getElementById("demo").innerHTML = "Hello Mr Fakhr";
 ```

**_Declare Variable_**
- ecma last 2015
    -var age = 29;

- when you declare variable use camelCase best practice
    -var firstName = 'Fakhr';

- Data  Type primitive
    - number -> 1 10101010 0.4 0.0007
    - string  -> "ahmed" 'ali' '12345' "false"
    - boolean -> true , false
    - undefined  -> var x;
    - null -> var x =null;  // null is object

**How know type of data**
```
 typeof x
```

**arithmetic operator**
```
 + - * / %
```
```
var x = 10;
console.log(x*10);
// 2 power 3
console.log(2 ** 3);
// mod 4 % 2 = 0 // 3 %  2 = 1
console.log(7%5); //2

var x = 10;
x+=20; // example x = x + 20; etc...
console.log(x); // 30
```

**comparison operator**
```
 == != > < >= <= ===
```
```
var x = 10;
var y = 20;
console.log(x == y); // if x = y or not return true or false abstract equality
var z = "10";
console.log(x == z); // == not important dt -> true convert y to number and compare
// === strict equality
console.log(x === z); // false must be same dt and value


// console.log(x != y); // if x = y or not return true or false
// console.log(x > y); // if x > y return true or false
// console.log(x < y); // if x < y return true or false
// console.log(x >= y); // if x >= y return true or false
// console.log(x <= y); // if x <= y return true or false
```

**logical operator**
```
 && || !
```
```
var x = 10;
var y = 20;
console.log(x == y && x > y); // false
console.log(x == y || x < y); // true one statement true return true
console.log(!(x==y)); // true
```
```
console.log("Ali" && "ahmed"); // return last value 
console.log(true && 22); // 22

// undefined return false
// null return false
// " " return false
// NaN return false 
// 0 return false

console.log(undefined && 'ahmed'); // undefined

// anything else return true

```

Conditional  statement 
- if
- switch
```
    if(condition){
        // code
    }else{
        //code
    }

---> EX :

    var age = 20;
    if(age>16){
        console.log("Enter");
    }else{
        console.log("NO");
}


---> if else if
var age = 20;
if(age>16){
    console.log("Enter" ,age);
}else{
    console.log("NO");
}
if(age >= 20 && age < 18){
    console.log("+18");
}else if(age >=20 && age <=16){
    console.log('+16');
}else{
    console.log('NO');
}
```
- ternary operator
```
    var age = 20;
    var result = age > 16 ? "Enter" : "NO";
    console.log(result);
```
- nested if 
```
var lang = 'php';
if(lang=='php'){
    if(age==30){
        console.log("AC");
    }else{
        console.log("NO");
    }
    
}else{
    console.log('NO');
}
```

- Switch Case
```
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
```