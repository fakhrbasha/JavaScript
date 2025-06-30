

// try{
//     let x = 10;
//     console.log(y);
    
// }catch(parm){
    
// }

// api -> url (website jsonPlaceholder)
// ajax
// xmlHttpRequest
// http.open( 'method' , 'api' ) -> open connection establish connection

//method
// get -> retrieve data from server
// post -> send data to server
// put -> updata
// patch -> updata
// delete

// send request
// http.send()

// add event because when load send response


// response
// http.response
// convert to json
// Json.parse(http.response)


// state when connect
// http.readystate(4) -> 
// ready state = 0 not connection
// ready state = 1 establish con
// ready state = 2 send req
// ready state = 3 processing
// ready state = 4 response is ready

// http.status = 200 done
// http.status = 403 not have access to this url
// http.status = 404 url not found
// http.status = 501 url not error on server

// create instance from xmlHttpRequest
// open()
// http.send

// addEvent when readyStateChange ,
// check readystste & status
// convert to json

// let http = new XMLHttpRequest()
// http.open('get' , 'https://jsonplaceholder.typicode.com/albums')
// http.send()
// let datalist = []
// http.addEventListener('readystatechange' , function(){
//     if(http.readyState == 4 && http.status == 200) {
//         datalist = JSON.parse(http.response)
//         console.log(datalist);
//     }
// })
// forkify api food
// face store api
// news api
// movies api
// free api


// let nav_Links = document.querySelectorAll('.nav-link') // list
// // for eACH
// nav_Links.forEach(function(item){
//     item.addEventListener('click' , function(eventInfo){
//         // console.log(eventInfo.target.innerText);
//         let rec = eventInfo.target.innerText;
//         getRecipy(rec)
//     })
// })

//     let datalist = []
// getRecipy('pizza') // by default
// function getRecipy(recipy){

//     let http = new XMLHttpRequest()
//     http.open('get',`https://forkify-api.herokuapp.com/api/search?q=${recipy}`);
//     http.send()

//     http.addEventListener('readystatechange' , function(){
//         if(http.readyState == 4 && http.status == 200) {
//             datalist = JSON.parse(http.response).recipes
//             display()
//             // to loading another way
//             // if(datalist.length==0){
//             //     document.querySelector('.row').innerHTML = `<span class="loader"></span>`
//             // }else{
//             //     display()
//             // }
//             // console.log(datalist);
//         }
//     })
// }


// function display(){
//     let box = ``
//     for(let i=0;i<datalist.length;i++){
//         box+=`
//         <div class="col-md-3 ">
//             <div class="border h-100 shadow-sm rounded-3 p-3">
//                 <img src="${datalist[i].image_url}" height="200px" class="w-100" alt="">
//                 <h6>${datalist[i].title}</h6>
//                 <p>${datalist[i].publisher}</p>
//             </div>
//             </div>
//         `
//     }
//     document.querySelector('.row').innerHTML = box
// }

//css spinner



// asynchronism method
// sync func run ala tol and name blocking

// function pizza(){

//     let http = new XMLHttpRequest()
//     http.open('get',`https://forkify-api.herokuapp.com/api/search?q=pizza`);
//     http.send()

//     http.addEventListener('readystatechange' , function(){
//         if(http.readyState == 4 && http.status == 200) {
//             datalist = JSON.parse(http.response).recipes
            
            
//         }
//     })
// }

// 1 
// variable and sync method


// ------------------------------------------ //
// try catch

// let element = document.querySelector('h1')
// try{
//     let x = 10;
//     console.log(y);
// }catch(errorHere){
//     element.innerHTML = errorHere
// }

// // throw custom error

// try{
//     let x = 10;
//     console.log(x);
//     throw new Error('ay haga feh error') // custom error

// }catch(errorHere){
//     element.innerHTML = errorHere
// }

// // finally  

// api

// xmlHttpREquest -> connect any  db or api
// open 
// send 
// response


let allProduct = []

let mytHttp = new XMLHttpRequest(); // create instance 
// mytHttp.open('method' , 'urlAPI')
mytHttp.open('GET','https://ecommerce.routemisr.com/api/v1/products') // establish connection
mytHttp.send() // start send request
// mytHttp.response  data here
// console.log(mytHttp.response); run automatic when open because that response empty
////// Don’t display the response until you're sure the request has completed
// myHttp has event name load fire when complete
// mytHttp.addEventListener('load' , function(){
//     // console.log(mytHttp.response); // convert to JSON
//     // console.log(JSON.parse(mytHttp.response).data);
//     allProduct = JSON.parse(mytHttp.response).data
// })

// state have event name readyststechange
// event run every change in ready state
// readyState return number The changes in the request's readyState 

// mytHttp.readyState = 0  request not initialize
// mytHttp.readyState = 1 connection establish
// mytHttp.readyState = 2 request received
// mytHttp.readyState = 3 request processing
// mytHttp.readyState = 4 response is ready

// every number change readystate run
mytHttp.addEventListener('readystatechange' , function(e){
    // console.log(mytHttp.readyState); 2 3 4
    if(mytHttp.readyState == 4){
        allProduct = JSON.parse(mytHttp.response).data
    }
})

// has event name error when has api error
mytHttp.addEventListener('error' , function(){
    alert('Error in loading data from server')
})