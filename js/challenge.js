 const minusBtn = document.getElementById("minus");
 const plusBtn = document.getElementById('plus');
 const pauseBtn = document.getElementById('pause');
 const heartBtn = document.getElementById('heart');
 const counter = document.getElementById('counter')



// starts timer when page is loaded

function startTimer(){
    counter.innerText = parseInt(counter.innerText) + 1
    counter
}


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

// pause the counter when the "pause" button is clicked.

pauseBtn.addEventListener('click',function (){
    counter.innerText =
    console.log(pauseBtn)
})