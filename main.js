
let timerP = document.getElementById('time');
const startButton = document.getElementById('start-button');
let didStart = false;
let timer;

function startButtonfun(event){
    if(didStart){
        clearInterval(timer);
        timerP.innerText = '0';
        startButton.innerText = 'Start'
        didStart = false; 
    }else{
        startTimer();
        startButton.innerText = 'Stop'
        didStart = true; 
    }}
function startTimer(){
  const dateRun = new Date().valueOf();
  const dateNow = new Date().valueOf();
  const newTimer = Math.floor((dateNow - dateRun ) / 1000);
  timerP.innerText = newTimer;

  timer = setInterval(() => {
  const dateNow = new Date().valueOf();
  const newTimer = Math.floor((dateNow - dateRun ) / 1000);
  timerP.innerText = newTimer;
  }, 500); 
}

