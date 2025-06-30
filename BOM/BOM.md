# BOM => Browser Object Model
- browser = window
- BOM(DOM)
- window => super global object

> setInterval
- setInterval => call specific function over a certain period of time

```js
function test(){
    console.log('hi');
}
let x = setInterval(test , 2000) // 2 sec
```
- to stop it 
```js
document.addEventListener('click' , function(){
    clearInterval(x)
})
// if you click to anything the interval stop
```

> SetTimeOut
- another way but this run once over a certain period of time
```js
setTimeout(test , 2000)


setTimeout(function(){
    console.log('time');
},2000)
```
- to stop it 
```js
let x =  setTimeout(test , 2000)

document.addEventListener('click' , function(){
    clearTimeout(x)
})

```

*EX*
```js
let counter = 0
function count(){
    counter++;
    console.log(counter);
}
setInterval(count , 2000)
```

> BOM properties
```js
// BOM Properties
document.addEventListener('click' , function(){
    // window.open('http://www.google.com') // open google in new tab when click
    // if you need in same tab
    // window.open('http://www.google.com' , '_blank')
    // _self in same tab , _blank in another tab
    // select ab3ad elshasha
    // window.open('http://www.google.com' , '_blank' , 'width = 500px , height = 500px')
    // window.close() // close window

    // to know width and height window
    // console.log(window.innerHeight);
    // console.log(window.innerWidth);

    // screen not affect in any change in screen
    // console.log(screen.width);
    // console.log(screen.height);
    // console.log(screen.availWidth);
    // console.log(screen.availHeight);

    // location
    location.href = '' // hywadek ala fen


    // history

    // window.history.back()
    // window.history.forward() 
})
```