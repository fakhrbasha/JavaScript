# AJAX

**Asynchronous JavaScript And XML But don’t let the name confuse you — it’s not limited to XML anymore. You can use JSON, HTML, text, etc.**

## Try Catch

- try...catch is a JavaScript statement used for error handling — it lets you run code that might throw an error, and gracefully handle it without crashing your program.

```js
let element = document.querySelector('h1');
try {
  let x = 10;
  console.log(y);
} catch (errorHere) {
  element.innerHTML = errorHere;
}
```

- throw custom error

```js
try {
  let x = 10;
  console.log(x);
  throw new Error('ay haga feh error'); // custom error
} catch (errorHere) {
  element.innerHTML = errorHere;
}

// finally
```

## API

**API stands for Application Programming Interface.**

- 🔌 It’s like a waiter between your app (frontend) and a server (backend).
  You ask for something (data), and it brings it to you.
- api code generate by backend and give front end documentation to use this api in frontend
- The data I send to the API is in JSON, and the data I receive is also in JSON.
- JSON every platforms and tools understood very good and Very light and fast in data transfer
- every api have base-url and what i need from database name end-point

> JSON : JavaScript Object notation

### xmlHttpRequest

**XMLHttpRequest is an older API used to send HTTP requests and receive responses from a server without reloading the page — a core part of AJAX (Asynchronous JavaScript and XML).**

```js
let allProduct = [];
let mytHttp = new XMLHttpRequest(); // create instance
```

- mytHttp.open('method' , 'urlAPI')

```js
mytHttp.open('GET', 'https://ecommerce.routemisr.com/api/v1/products'); // establish connection
mytHttp.send(); // start send request
```

- mytHttp.response data here
- console.log(mytHttp.response); run automatic when open because that response empty

_Don’t display the response until you're sure the request has completed_

- xmlHttpRequest has event name load fire when complete

```js
mytHttp.addEventListener('load', function () {
  // console.log(mytHttp.response); // convert to JSON
  // console.log(JSON.parse(mytHttp.response).data);
  allProduct = JSON.parse(mytHttp.response).data;
});
```

- also XMLHttpRequest have event name readyststechange
- event run every change in ready state
- readyState return number The changes in the request's readyState

```bash
// mytHttp.readyState = 0  request not initialize
// mytHttp.readyState = 1 connection establish
// mytHttp.readyState = 2 request received
// mytHttp.readyState = 3 request processing
// mytHttp.readyState = 4 response is ready
```

- every number change readystate run

```js
mytHttp.addEventListener('readystatechange', function (e) {
  // console.log(mytHttp.readyState); 2 3 4
  if (mytHttp.readyState == 4) {
    allProduct = JSON.parse(mytHttp.response).data;
  }
});
```

- has event name error when has api error

```js
mytHttp.addEventListener('error', function () {
  alert('Error in loading data from server');
});
```

[APIs][https://github.com/public-apis/public-apis]

## Sync:Async

### Synchronous

**A synchronous operation executes tasks one after another, in order. Each line of code waits for the previous one to finish before running.**

### Asynchronous

**An asynchronous operation does not wait for previous tasks to complete. It allows the program to continue running while waiting for a slower operation (like a server request or timer) to finish in the background.**

```js
let allRecipes = [];

function getPizza() {
  let myHttp = new XMLHttpRequest();
  myHttp.open(
    'GET',
    'https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza'
  );
  myHttp.send();

  myHttp.addEventListener('readystatechange', function () {
    if (myHttp.readyState == 4) {
      console.log('pizza');
      allRecipes = JSON.parse(myHttp.response).data.recipes;
      console.log(allRecipes);
    }
  });
}
console.log('hello1'); // synchronous
console.log('hello1'); // synchronous
console.log('hello1'); // synchronous
console.log('hello1'); // synchronous
getPizza(); // Asynchronous i didn't know this code time this code
console.log('hello1'); // synchronous
console.log('hello1'); // synchronous
console.log('hello1'); // synchronous
console.log('hello2'); // synchronous
```

- output

```bash
hello1
hello1
hello1
hello1
hello1
hello1
hello1
hello2
getPizza()
```

> js complete any sync code first and after this Async
> getPizza() go to webAPIs and when js complete all sync code go to webAPIs and return function completed

```js
let allRecipes = [];

function getPizza() {
  let myHttp = new XMLHttpRequest();
  myHttp.open(
    'GET',
    'https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza'
  );
  myHttp.send();

  myHttp.addEventListener('readystatechange', function () {
    if (myHttp.readyState == 4) {
      console.log('pizza');
      allRecipes = JSON.parse(myHttp.response).data.recipes;
      console.log(allRecipes);
    }
  });
}
function getSalad() {
  let myHttp = new XMLHttpRequest();
  myHttp.open(
    'GET',
    'https://forkify-api.herokuapp.com/api/v2/recipes?search=salad'
  );
  myHttp.send();
  myHttp.addEventListener('readystatechange', function () {
    if (myHttp.readyState == 4) {
      console.log('salad');
      allRecipes = JSON.parse(myHttp.response).data.recipes;
      console.log(allRecipes);
    }
  });
}
function getPasta() {
  let myHttp = new XMLHttpRequest();
  myHttp.open(
    'GET',
    'https://forkify-api.herokuapp.com/api/v2/recipes?search=pasta'
  );
  myHttp.send();
  myHttp.addEventListener('readystatechange', function () {
    if (myHttp.readyState == 4) {
      console.log('pasta');
      allRecipes = JSON.parse(myHttp.response).data.recipes;
      console.log(allRecipes);
    }
  });
}

getSalad(); // async
getPasta(); // async
getPizza(); // async

// first complete first display
// Queue FCFS
```

### Callback Function

**A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.**

- pass function as argument to another function and call this function after end first function

```js
function one(callback) {
  console.log('one');
  callback();
}
one(two);
one(three);
function two() {
  console.log('two');
}
function three() {
  console.log('three');
}
```

- if two has argument create anonymous func

```js
function one(callback) {
  console.log('one');
  callback();
}
one(function () {
  two('ahmed');
});
one(three);
function two(name) {
  console.log('two ' + name);
}
function three() {
  console.log('three');
}
```

- two & three callback function from one

```js
function getPizza(callback) {
  let myHttp = new XMLHttpRequest();
  myHttp.open(
    'GET',
    'https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza'
  );
  myHttp.send();

  myHttp.addEventListener('readystatechange', function () {
    if (myHttp.readyState == 4) {
      console.log('pizza');
      allRecipes = JSON.parse(myHttp.response).data.recipes;
      // console.log(allRecipes);
      if (callback) {
        callback();
      }
    }
  });
}
function getSalad(callback) {
  let myHttp = new XMLHttpRequest();
  myHttp.open(
    'GET',
    'https://forkify-api.herokuapp.com/api/v2/recipes?search=salad'
  );
  myHttp.send();
  myHttp.addEventListener('readystatechange', function () {
    if (myHttp.readyState == 4) {
      console.log('salad');
      allRecipes = JSON.parse(myHttp.response).data.recipes;
      // console.log(allRecipes);
      if (callback) {
        callback();
      }
    }
  });
}
function getPasta(callback) {
  let myHttp = new XMLHttpRequest();
  myHttp.open(
    'GET',
    'https://forkify-api.herokuapp.com/api/v2/recipes?search=pasta'
  );
  myHttp.send();
  myHttp.addEventListener('readystatechange', function () {
    if (myHttp.readyState == 4) {
      console.log('pasta');
      allRecipes = JSON.parse(myHttp.response).data.recipes;
      // console.log(allRecipes);
      if (callback) {
        callback();
      }
    }
  });
}

// getPizza() // async
// getSalad() // async
// getPasta() // async

// first complete first display
// Queue FCFS
//  i need salad and pasta and pizza solution
```

> pass function as argument to another function and call this function after end first function

```js
// callback hells
getSalad(function () {
  getPasta(function () {
    getPizza(allDone);
  });
});
```

- not readability

### promise

- have then.()
- if you need add more then must have return promise anonymous function
- return promise
- callback argument put in function in promise

```js
function one() {
  return new Promise(function (callback) {
    console.log('one');
    callback();
  });
}
function two() {
  return new Promise(function (callback) {
    console.log('two');
    callback();
  });
}
function three() {
  return new Promise(function (callback) {
    console.log('three');
    callback();
  });
}
function allDone() {
  console.log('done');
}
one().then(two);
```

- if you need call more than function
- must return promise because that make anonymous function
- call promise function

```js
one()
  .then(function () {
    return two();
  })
  .then(function () {
    return three();
  })
  .then(allDone);
```

> if i need return two callback

- then take callback if code not error
- catch take callback if code has error
  > Gar El3orf Ben el-developer in if code not contain error name resolved & if contain error name rejected

```js
function one() {
  return new Promise(function (resolved, rejected) {
    // resolved  =two , rejected = printError
    console.log('one');
    let error = false;
    if (!error) {
      resolved(); // two
    } else {
      rejected(); // printError
    }
  });
}
function two() {
  return new Promise(function (callback) {
    console.log('two');
    callback();
  });
}
function three() {
  return new Promise(function (callback) {
    console.log('three');
    callback();
  });
}
function allDone() {
  console.log('done');
}

function printError() {
  console.log(error);
}
one().then(two).catch(printError);
```

> recap promise

- promise new concept in ES6 because solve problem name callback if have async function and i want run this function specific order
- in promise every function return promise open then thoma then thoma then Replace the nested callbacks.
- code more readability
- also contain same then but catch to catch error resolve when code success and reject when code has error

> case promise

- pending
- Fulfilled go to then success code
- rejected go to rejected

- promise.all after complete all function

```js
// this function not run until all function ended
Promise.all([one, two, three]).then(function () {
  console.log('all Done');
});
// when complete three function cl 'all Done'
```

- another way resolve

```js
function hello() {
  console.log('hi');
  return Promise.resolve('mr');
}
hello().then(function (x) {
  console.log(x);
});
// hi
// mr
```

- take x parameter and pass in argument in resolve

**Make Promise in real api**

```js
function getPizza() {
  return new Promise(function (resolved, rejected) {
    let myHttp = new XMLHttpRequest();
    myHttp.open(
      'GET',
      'https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza'
    );
    myHttp.send();

    myHttp.addEventListener('readystatechange', function () {
      if (myHttp.readyState == 4) {
        console.log('pizza');
        allRecipes = JSON.parse(myHttp.response).data.recipes;
      }
      resolved();
    });
    myHttp.addEventListener('error', function () {
      rejected();
    });
  });
}
function getSalad() {
  return new Promise(function (resolved, rejected) {
    let myHttp = new XMLHttpRequest();
    myHttp.open(
      'GET',
      'https://forkify-api.herokuapp.com/api/v2/recipes?search=salad'
    );
    myHttp.send();
    myHttp.addEventListener('readystatechange', function () {
      if (myHttp.readyState == 4) {
        console.log('Salad');
        allRecipes = JSON.parse(myHttp.response).data.recipes;
      }
      resolved();
    });
    myHttp.addEventListener('error', function () {
      rejected();
    });
  });
}
function getPasta() {
  return new Promise(function (resolved, rejected) {
    let myHttp = new XMLHttpRequest();
    myHttp.open(
      'GET',
      'https://forkify-api.herokuapp.com/api/v2/recipes?search=pasta'
    );
    myHttp.send();
    myHttp.addEventListener('readystatechange', function () {
      if (myHttp.readyState == 4) {
        console.log('pasta');
        allRecipes = JSON.parse(myHttp.response).data.recipes;
      }
      resolved();
    });
    myHttp.addEventListener('error', function () {
      rejected();
    });
  });
}
getSalad()
  // i need return promise make anonymous func
  .then(function () {
    return getPasta();
  })
  .then(function () {
    return getPizza();
  })
  .catch(function () {
    console.log('error');
  });
// finally already run in every time
```

### Fetch Api

- The Fetch API is a modern way in JavaScript to make HTTP requests (GET, POST, PUT, DELETE, etc.) to servers.
- It replaces older techniques like XMLHttpRequest.

- It is promise-based, which means it works well with .then() and async/await.
- function must add async before function keyword
- ✅ await is used to wait for the API response before continuing execution.
- By default method in fetch get but you can change it

```js
function getSalad() {
  fetch('https://forkify-api.herokuapp.com/api/v2/recipes?search=salad', {
    method: 'POST',
  }); // by default method get
}
```

- Ex

```js
let RecipeFood = document.getElementById('RecipeFood');
let allRecipes = [];

async function getSalad() {
  let response = await fetch(
    `https://forkify-api.herokuapp.com/api/v2/recipes?search=salad`
  );
  let finalData = await response.json(); // wait to get data and convert to json
  allRecipes = finalData.data.recipes;
  console.log(allRecipes);
}
```

- full example

```js
let RecipeFood = document.getElementById('RecipeFood');
let allRecipes = [];
async function getSalad(recipe) {
  let response = await fetch(
    `https://forkify-api.herokuapp.com/api/v2/recipes?search=${recipe}`
  );
  let finalData = await response.json();
  allRecipes = finalData.data.recipes;
  display();
}
getSalad('pizza');

function display() {
  let cont = ``;
  for (let i = 0; i < allRecipes.length; i++) {
    cont += `
        <div class="col-md-3 h-100 ">
            <img src="${allRecipes[i].image_url}" height="200px" class="w-100" alt="">
            <h2>${allRecipes[i].title}</h2>
            <p>${allRecipes[i].publisher}</p>
        </div>
        `;
  }
  document.querySelector('.row').innerHTML = cont;
}
```
