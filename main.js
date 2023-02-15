const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const count = document.getElementById("count");
let startTime;
let stopTime = 0;
let intervalId;

function displayTime() { 
  intervalId = setInterval(() => {
    const currentTime = new Date(Date.now() - startTime + stopTime);
    const seconds = String(currentTime.getSeconds()).padStart(4, "0");
    count.textContent = seconds.slice(0, 1) + ":" + seconds.slice(1, 2) + ":" + seconds.slice(2, 3) + ":" + seconds.slice(3, 4);
  }, 1000);
}

start.addEventListener("click", ()=> {
  document.getElementById("stop").disabled = false;
  document.getElementById("start").disabled = true;
  document.getElementById("reset").disabled = false;
  
  startTime = Date.now();
  displayTime();
})

stop.addEventListener("click", () => {
  clearInterval(intervalId);
  
  document.getElementById("stop").disabled = true;
  document.getElementById("start").disabled = false;
  document.getElementById("reset").disabled = false;
  
  stopTime += (Date.now() - startTime);
})

reset.addEventListener("click", () => {
  clearInterval(intervalId)
  document.getElementById("stop").disabled = true;
  document.getElementById("start").disabled = false;
  document.getElementById("reset").disabled = true;
  stopTime = 0;
  count.textContent = "0:0:0:0";
})

  