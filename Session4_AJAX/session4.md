# DOM : Document Object Model

## select element from html
- from id
```js
var element = document.getElementById('myId');
```
- nameTag
```js 
var element = document.getElementsByTagName('myName'); // htmlCollection list
```
- from class
```js
var element = document.getElementsByClassName('myClass'); // htmlCollection list not array
```
- name attribute
```js
var element = document.getElementsByName('myName'); // NodeList not array 
```
- Query Selector
```js
var element = document.querySelector('#myId css Selector'); // select first element not list
```
- Query Selector All
```js
var element = document.querySelectorAll('css Selector'); // select all element in list NodeList
```
- document.head
- document.image
- document.title

> Event Listener
- add to only one element 
- varname.addEventLisitener('click',functionName)
- varname.addEventLisitener('click',functionName()) -> function call not on click
