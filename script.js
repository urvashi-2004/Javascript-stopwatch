let timer = document.querySelector('.timer');

let sec = 00;
let min = 00;
let hr = 00;

let timerId = null;

startbtn.addEventListener('click', function(){
    if(timerId !== null){
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
});

stopbtn.addEventListener('click', function(){
    clearInterval(timerId);
});

resetbtn.addEventListener('click', function(){
    clearInterval(timerId);
    timer.innerHTML = `00 : 00 : 00`;
    sec = min = hr = 00;
});

function startTimer(){
    sec++;
    if(sec == 100){
        sec = 0;
        min++;
        if(min == 60){
            min = 0
            hr++
        }
    }

    let secString = sec < 10 ? `0${sec}` : sec;
    let minString = min < 10 ? `0${min}` : min;
    let hrString = hr < 10 ? `0${hr}` : hr;
    

    timer.innerHTML = `${hrString} : ${minString} : ${secString}`;

}