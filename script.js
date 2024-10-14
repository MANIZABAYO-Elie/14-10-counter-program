const increaseBtn = document.getElementById('increase_btn');
const decreaseBtn = document.getElementById('decrease_btn');
const resetBtn = document.getElementById('reset_btn');
const display = document.getElementById('display');


let count = 0;

increaseBtn.addEventListener('click',function(){
    display.textContent= count;
    count++
})


decreaseBtn.addEventListener('click',function(){
    display.textContent= count;
    count--
})

resetBtn.addEventListener('click',function(){
    count=0;
    display.textContent= count;
})
  


