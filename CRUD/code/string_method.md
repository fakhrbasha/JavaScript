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
-- difference between charAt and at
- charAt : return string
- at : return number can use (-)
----------
- slice(start, end) : get part of string
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
- substring(start, end) : get part of string
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
- toLowerCase() : convert to lower case
```js
var myStr = 'Hello iam ahmed mohamed and my nickname is fakhr because iam fakhr';
var x = myStr.toLowerCase();
console.log(x);
// output : hello iam ahmed mohamed and my nickname is fakhr because iam fakhr
```
----
- toUpperCase() : convert to upper case
```js
var myStr = 'Hello iam ahmed mohamed and my nickname is fakhr because iam fakhr';
var x = myStr.toUpperCase();
console.log(x);
// output : HELLO I AM AHMED MOHAMED AND MY NICKNAME IS FAKHR BECAUSE I AM FAKHR
```
----
- toLocaleLowerCase() : convert to lower case
```js
var myStr = 'Hello iam ahmed mohamed and my nickname is fakhr because iam fakhr';
var x = myStr. toLocaleLowerCase(/*'translate' */"en"| 'fa' | 'tr' etc );
console.log(x);
// output : hello iam ahmed mohamed and my nickname is fakhr because iam fakhr
```
----
- Concat('string') : concatenate two string
- +
```js
var myStr = 'Hello iam ahmed mohamed and my nickname is fakhr because iam fakhr';

var x = myStr.concat(' i love coding');
console.log(x);

var x = myStr+' i love coding'; // same as concat


// Hello iam ahmed mohamed and my nickname is fakhr because iam fakhr i love coding
```
