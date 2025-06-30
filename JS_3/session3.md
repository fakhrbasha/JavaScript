=======================
# JS
=======================

<h3>Object</h3>

- non preemptive dt
- object to simulate real world object

```js
var obj = {}; 
console.log(typeof obj); // object
```

```js
var obj = {
    // property
    // key      value
    fullname :"ahmed ",
    gender : 'male' ,
    age : 22 ,
    salary : 20,
}
console.log(obj);
console.log(obj.age);
// another way to access property

// console.log(objname['key']); // to access property with variable
console.log(obj['salary']);

```

<h5>Nested Object</h5>

```js
//  obj nested
var obj = {
    // property
    // key      value
    fullname :"ahmed ",
    gender : 'male' ,
    age : 22 ,
    salary : 20,
    objchild : {
        name:'fakhrayan',
        age : 22,
        gender : 'female'
    }
}
console.log(obj);
console.log(obj.objchild.name);
//  objchild property not object
```
<h5>property function</h5>

```js
var obj = {
    // property
    // key      value
    fullname :"ahmed ",
    gender : 'male' ,
    age : 22 ,
    salary : 20,
    objchild : {
        name:'fakhrayan',
        age : 22,
        gender : 'female'
    },
    eat:function(meal){
        console.log('eat ' , meal);
    },
}
obj.eat('pasta');
```

<h2>Array</h2>

- list
- var friend = [] ;

```js
var friends = ['Ahmed' , 'Ali' , 'Amr' , 'Saif'];
console.log(friends);
console.log(friends[1]); // Ali
console.log(friends[7]); // undefined 
console.log(friends.length); // 4 
for(var i = 0 ; i < friends.length ; i++){
    console.log(i  ,friends[i]);
}
```
<h5>Array method</h5>


- Sort 
```js
var friends = ['Ahmed' , 'Ali' , 'Amr' , 'Saif'];
friends.sort();
console.log(friends);
```
- reverse
```js
var friends = ['Ahmed' , 'Ali' , 'Amr' , 'Saif'];
friends.reverse(); // saif ali amr ahmed
console.log(friends);
```
- push
```js
var friends = ['Ahmed' , 'Ali' , 'Amr' , 'Saif'];
friends.push('fakhrayan'); // saif ali amr ahmed fakhrayan
friends.push('amr ','ahmed ali')
console.log(friends);
```
- pop
```js
var friends = ['Ahmed' , 'Ali' , 'Amr' , 'Saif'];
var removed = friends.pop(); // Saif
console.log(removed);
console.log(friends); // Ahmed Ali Amr
```

- unshift -> push in first 
```js
friends.unshift('fakhrayan'); // fakhrayan ahmed ali amr 
console.log(friends);
```
- shift -> pop in first 
```js
friends.shift(); // ahmed ali amr 
console.log(friends);
```
- splice -> remove and return deleted element
- splice (start , delete count )
- splice add 
- splice (start , delete count , add item 1 , add item 2 , add item 3 , add item 4 )

```js
var friends = ['ahmed' , 'ali' , 'amr' , 'fakhr'];
var deleted = friends.splice(1,2,"fakhrbasha","mohamed salah");
console.log(friends);
console.log(deleted);
// if i need to add but not delete
friends.splice(1,0,"Rof");
console.log(friends);
```

- slice  Returns a copy of a section of an array.
```js
var friends = ['ahmed' ,"fakhr", 'ali' , 'amr' , 'fakhr'];

var after = friends.slice(1,2); // ali
// var after = friends.slice(2); 2 to end
// var after = friends.slice(undefined,0); undefined = 0 to 5
console.log(after); // ali
```
- includes -> search
```js
friends.includes("ali"); // true
friends.includes("fakhr"); // false

console.log(friends.includes("ali",2)); // false from 2 to end
```
- indexOf -> search return index of first value
```js
console.log(friends.indexOf("fakhr")); // 3
console.log(friends.lastIndexOf("fakhr")); // last index
```

- tostring 
```js
var xx =friends.toString();
console.log(xx); //ahmed,ali,amr,fakhr

```
```js
var friendss = ['fakhr', 'fakhr' , 'ahmed' ,'ali' , 'fakhr'];
var foundfakhr = [];
var count = 0;
for(var i = 0 ; i < friendss.length ; i++){
    if(friendss[i] === 'fakhr'){
        foundfakhr.push(i);
        count++;
    }
}
console.log(foundfakhr);
console.log(count);
```


<h6 style="text-align: center">Fakhr</h6>

