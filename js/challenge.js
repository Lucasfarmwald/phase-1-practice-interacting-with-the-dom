 const minusBtn = document.getElementById("minus");
 const plusBtn = document.getElementById('plus');
 const pauseBtn = document.getElementById('pause');
 const heartBtn = document.getElementById('heart');
 const counter = document.getElementById('counter')



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
   
    //console.log(pauseBtn)
})

// when pause button has been clicked, interval resumes when clicked again.