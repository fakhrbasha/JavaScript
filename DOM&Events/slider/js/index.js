// Array.from 
// convert iterable object to array
// iterable object -> object can make for loop

var imgList = Array.from( document.querySelectorAll('.item img')) // 6photo  Array.from  convert to array
// imgList // array now  can make arr method 
var lightBoxContainer = document.querySelector('.light-box-container'); 
var lightBoxItem = document.querySelector('.lightbox-item'); 

var close = document.querySelector('#close');
var prev = document.getElementById('prev')
var next = document.getElementById('next')

var currentIndex ;


for(var i=0;i<imgList.length;i++){
    imgList[i].addEventListener('click' , function(eventInfo){
        // console.log(eventInfo.target);
        lightBoxContainer.classList.replace('d-none' , 'd-flex')
        var imgSrc = eventInfo.target.getAttribute('src') ;
        // console.log(imgSrc);
        lightBoxItem.style.backgroundImage = `url(${imgSrc})`
        // console.log(imgList.indexOf(eventInfo.target)); // array now 
        currentIndex = imgList.indexOf(eventInfo.target);
    
    })
}

// next.addEventListener('click' ,nextSlide)
// prev.addEventListener('click' , prevSlide)

// function nextSlide(){
//     currentIndex++;
//     if(currentIndex == imgList.length){
//         currentIndex = 0;
//     }
//     var imgSrc = imgList[currentIndex].getAttribute('src');
//     lightBoxItem.style.backgroundImage = `url(${imgSrc})`

// }

// function prevSlide(){

//     currentIndex--;
//     if(currentIndex <0){
//         currentIndex = imgList.length-1;
//     }
//     var imgSrc = imgList[currentIndex].getAttribute('src');
//     lightBoxItem.style.backgroundImage = `url(${imgSrc})`

// }



// merge slider on one function
function slider(step)
{
    // step -> 1 or -1
    currentIndex+=step
    if(currentIndex == imgList.length){
        currentIndex = 0;
    }
    if(currentIndex <0){
        currentIndex = imgList.length-1;
    }
    var imgSrc = imgList[currentIndex].getAttribute('src');
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`

}
next.addEventListener('click' , function(){slider(1)})
prev.addEventListener('click' , function(){slider(-1)})


document.addEventListener('keydown',function(eventInfo){
    if(eventInfo.key=='ArrowRight'){
        slider(1)
    }else if(eventInfo.key=='ArrowLeft'){
        slider(-1)
    }else if(eventInfo.key=='Escape'){
        closeSlide()
    }
})

lightBoxContainer.addEventListener('click' ,function(){
    closeSlide()
})
lightBoxItem.addEventListener('click' ,function(eventInfo){
    eventInfo.stopPropagation(); // because bubbling
})


function closeSlide(){
    lightBoxContainer.classList.replace('d-flex' , 'd-none')
}
close.addEventListener('click' ,closeSlide)