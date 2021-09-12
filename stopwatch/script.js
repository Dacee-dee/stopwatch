let seconds = 0;
let minutes = 0;
let hours = 0;
let MilliSeconds = 0

let displayMilliSeconds = document.getElementById("milSec");
let displaySeconds = document.getElementById("sec");
let displayMinutes = document.getElementById("min");
let displayHours = document.getElementById("hour");
let displayStart = document.getElementById("Start");
let displayReset = document.getElementById("reset");
let stopwatchStatus = "Stop";
let interval;

function startStopwatch(){
  if (stopwatchStatus == "Stop"){
    interval = setInterval(start , 100);
    displayStart.innerText = "Stop";
    stopwatchStatus = "Start";
    displayReset.style.display = "flex";
  }else{
    clearInterval(interval);
    displayStart.innerText = "Start";
    stopwatchStatus = "Stop";
  }
}
function start() {
  MilliSeconds++;
  if(MilliSeconds == 100){
    seconds++;
    MilliSeconds = 0;
  }if(seconds == 60){
    minutes++;
    seconds = 0;
  }if(minutes == 60){
    hours++;
    minutes = 0;
  }
  displayMilliSeconds.innerHTML = (MilliSeconds < 10) ? `0${MilliSeconds}`: MilliSeconds;
  displaySeconds.innerHTML = (seconds<10) ? `0${seconds}`: seconds;
  displayMinutes.innerHTML = (minutes<10) ? `0${minutes}` : minutes;
  displayHours.innerHTML = (hours<10) ? `0${hours}` : hours;
}
function reset(){
  MilliSeconds = 0;
  seconds = 0;
  minutes = 0;
  hours = 0 ;
  clearInterval(interval);
  stopwatchStatus = "Stop";
  displayStart.innerText = "Start";
  displaySeconds.innerText = "00";
  displayMinutes.innerText = "00";
  displayHours.innerText = "00";
}