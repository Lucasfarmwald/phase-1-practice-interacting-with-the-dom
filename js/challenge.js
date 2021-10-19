 const minusBtn = document.getElementById("minus");
 const plusBtn = document.getElementById('plus');
 const pauseBtn = document.getElementById('pause');
 const heartBtn = document.getElementById('heart');
 const counter = document.getElementById('counter');
 const commentInput = document.getElementById('comment-input');
 const submitBtn = document.getElementById('submit');
 let pause = false


// starts timer when page is loaded

 let timer = setInterval(() => {
     counter.innerText++
 }, 1000);


 // subtract 1 to the counter when the "minus" button is clicked.

 minusBtn.addEventListener('click',function(e){
     counter.innerText -= 1
    console.log(counter)
 })

 // add 1 to the counter when clicking on the "plus" button.

 plusBtn.addEventListener('click',function(e){
    counter.innerText = parseInt(counter.innerText) + 1
   console.log(typeof counter.innerText)
 })

// pause the timer when the "pause" button is clicked.

pauseBtn.addEventListener('click',function (){
   clearInterval(timer)
   console.log("before change",pause)
    if(pause){
        pause = false
        pauseBtn.innerText = "pause"
        timer = setInterval(() => {
            counter.innerText++
        }, 1000);
        console.log(pause)
    }else{
        pause = true
        pauseBtn.innerText = "resume"
        console.log(pause)
    }
    //console.log(pauseBtn)
})

// when hearBtn is clicked it takes the number it clicked on and stores it in a "li"


heartBtn.addEventListener('click', function(){
    console.log(heartBtn)
})



// comment box will display comments on the webpage.

submitBtn.addEventListener('click',function(e){
    e.preventDefault()
    commentInput.appendChild('list')
    console.log(submitBtn)
})