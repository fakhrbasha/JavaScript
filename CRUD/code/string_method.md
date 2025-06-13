# String Methods
- charAt(index) : get character at index MOST COMMON
- at(index) : get character at index (2022)
- variableNme[index] : get character at index same array (2022)
```js
var myStr = 'Hello iam ahmed mohamed and my nickname is fakhr because iam fakhr';

var x = myStr.charAt(2);
console.log(x);

var x = myStr.at(2);
var x = myStr[2];


// output : l
```
> difference between charAt and at
- charAt : return string
- at : return number can use (-)
----------
> slice(start, end) : get part of string
```js
var myStr = 'Hello iam ahmed mohamed and my nickname is fakhr because iam fakhr';

// var x = myStr.slice(start,end);
var x = myStr.slice(5,15);
console.log(x);

// output :  iam ahmed 
```
- slice(5,) -> 5 to end
- slice(,6) -> 0 to 6
- can use (-)

-----
> substring(start, end) : get part of string
```js
var myStr = 'Hello iam ahmed mohamed and my nickname is fakhr because iam fakhr';
var x = myStr.slice(5,15);
console.log(x);
// output :  iam ahmed 
```
- difference between slice and substring
- slice : can use (-)
- substring : can't use (-)
----
> toLowerCase() : convert to lower case
```js
var myStr = 'Hello iam ahmed mohamed and my nickname is fakhr because iam fakhr';
var x = myStr.toLowerCase();
console.log(x);
// output : hello iam ahmed mohamed and my nickname is fakhr because iam fakhr
```
----
> toUpperCase() : convert to upper case
```js
var myStr = 'Hello iam ahmed mohamed and my nickname is fakhr because iam fakhr';
var x = myStr.toUpperCase();
console.log(x);
// output : HELLO I AM AHMED MOHAMED AND MY NICKNAME IS FAKHR BECAUSE I AM FAKHR
```
----
> toLocaleLowerCase() : convert to lower case
```js
var myStr = 'Hello iam ahmed mohamed and my nickname is fakhr because iam fakhr';
var x = myStr. toLocaleLowerCase(/*'translate' */"en"| 'fa' | 'tr' etc );
console.log(x);
// output : hello iam ahmed mohamed and my nickname is fakhr because iam fakhr
```
----
> Concat('string') : concatenate two string
- + plus
```js
var myStr = 'Hello iam ahmed mohamed and my nickname is fakhr because iam fakhr';

var x = myStr.concat(' i love coding');
console.log(x);

var x = myStr+' i love coding'; // same as concat


// Hello iam ahmed mohamed and my nickname is fakhr because iam fakhr i love coding
```
-----
> trim() : remove space from beginning and end of string
- trimStart() : remove space from beginning of string
- trimEnd() : remove space from end of string
```js
var myStr = '  Hello iam ahmed mohamed and my nickname is fakhr because iam fakhr ';

var x = myStr.trim();
console.log(x);

// output : Hello iam ahmed mohamed and my nickname is fakhr because iam fakhr

```
----
> split("split where you want") : convert string to array
- split(" "); : split where you read space
```js
var myStr = 'Hello iam ahmed mohamed and my nickname is fakhr because iam fakhr';

var x = myStr.split(" ");
console.log(x);

// output : ['Hello', 'iam', 'ahmed', 'mohamed', 'and', 'my', 'nickname', 'is', 'fakhr', 'because', 'iam', 'fakhr']

/*
0: "Hello"
1: "iam"
2: "ahmed"
3: "mohamed"
4: "and"
5: "my"
6: "nickname"
7: "is"
8: "fakhr"
9: "because"
10: "iam"
11: "fakhr"
length: 12
[[Prototype]]: Array(0)

*/

var x = myStr.split("and");
// where you want to split if you read and split etc
console.log(x);

// output : ['Hello iam ahmed mohamed ', ' my nickname is fakhr because iam fakhr']

var x = myStr.split();
// output : ['Hello iam ahmed mohamed and my nickname is fakhr because iam fakhr']


var x = myStr.split('');
// output : ['H', 'e', 'l', 'l', 'o', ' ', 'i', 'a', 'm', ' ', 'a', 'h', 'm', 'e', 'd', ' ', 'm', 'o', 'h', 'a', 'm', 'e', 'd', ' ', 'a', 'n', 'd', ' ', 'm', 'y', ' ', 'n', 'i', 'c', 'k', 'n', 'a', 'm', 'e', ' ', 'i', 's', ' ', 'f', 'a', 'k', 'h', 'r', ' ', 'b', 'e', 'c', 'a', 'u', 's', 'e', ' ', 'i', 'a', 'm', ' ', 'f', 'a', 'k', 'h', 'r']
```

----
> split with slice 

```js
var myStr = 'Hello iam ahmed mohamed and my nickname is fakhr because iam fakhr';

var x = myStr.split(' ').slice(2,4);
console.log(x);

// output : ['ahmed', 'mohamed']
```
---
> join : convert array to string
```js
var myStr = 'Hello iam ahmed mohamed and my nickname is fakhr because iam fakhr';

var x = myStr.split(' ').slice(2,4).join();
console.log(x);

// output : ahmed,mohamed

var x = myStr.split(' ').slice(2,4).join("");
// output : ahmedmohamed

var x = myStr.split(' ').slice(2,4).join(" ");
// output : ahmed mohamed

```
- string convert to array and splice this array to get part and covert array to string
-----
> include ; check if string include a word
- bool function return true or false 
- case sensitive

```js
var myStr = 'Hello iam ahmed mohamed and my nickname is fakhr because iam fakhr';

var x = myStr.includes("fakhr");
console.log(x);

// output : true
```
