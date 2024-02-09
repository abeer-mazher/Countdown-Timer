let hours = 0;
let minutes = 0 ;
let seconds = 0;
let reaminingHours = 0;
let remaingMinutes =  0; 
let remaingSeconds = 0 ;
let interval;



let inputHours = document.getElementById("inputHours");
let inputMinutes = document.getElementById("inputMinutes");
let inputSeconds = document.getElementById("inputSeconds");

let hoursDis = document.getElementById("hoursDis");
let minutesDis = document.getElementById("minutesDis");
let secondsDis = document.getElementById("secondsDis");

let inputMAx = document.querySelectorAll("input")
inputMAx.forEach(inputMAx =>{
    inputMAx.oninput = () =>{
        if(inputMAx.value.length > inputMAx.maxLength) inputMAx.value = inputMAx.value.slice(0 ,inputMAx.maxLength);
    };   
});



function renderDisplay(){
    hoursDis.innerHTML = hours < 10 ? "0" + hours : hours;
    minutesDis.innerHTML = minutes < 10 ? "0"+ minutes : minutes;
    secondsDis.innerHTML = seconds < 10 ? "0" + seconds : seconds;
}

function startTimer(){
    if (inputHours.value === "" && inputMinutes.value === "" && inputSeconds.value === "" ){
        alert("please put a value in input");
    }


    if ( inputHours.value === ""  ){
        hours = 0;
    }else{
        hours = parseInt(inputHours.value);
    }
    if(inputMinutes.value === "" ){
        minutes = 0;
    }else {
        minutes = parseInt(inputMinutes.value);
    }
    if (inputSeconds.value === ""){
        seconds = 0;
    }else{
        seconds = parseInt(inputSeconds.value);
    }

    if (reaminingHours > 0 || remaingMinutes > 0 || remaingSeconds > 0){
        hours = reaminingHours;
        minutes = remaingMinutes;
        seconds = remaingSeconds;   
    }




    if (minutes > 60 || seconds > 60){
        alert("minutes & seconds  should be less than or equal to 60")
        resetTimer();
    }

   



    interval = setInterval(function(){
        if(hours === 0 && minutes === 0 && seconds === 0){

            stopTimer();
        }else{
            if(seconds > 0 ){
                seconds--;
            }else{
                if(minutes > 0){
                    minutes--;
                    seconds = 59;
                }else{
                    if(hours > 0){
                        hours--;
                        seconds = 59;
                        minutes = 59;
                    }
                }
            }
        }
        renderDisplay ();
    },1000)
}

function stopTimer(){
    clearInterval(interval);
    reaminingHours = hours;
    remaingMinutes = minutes;
    remaingSeconds = seconds;
}

function resetTimer(){
    stopTimer();
    hours = 0;
    minutes = 0;
    seconds = 0;
    reaminingHours = 0;
    remaingMinutes = 0;
    remaingSeconds = 0;
    renderDisplay();
    inputHours.value = "";
    inputMinutes.value = ""
    inputSeconds.value = ""
}
