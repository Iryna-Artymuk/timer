function show(smt) {
  console.log(smt);
}

// const date1 = new Date()
// console.dir(date1)
// console.log(date1.getTime())
// console.log(date1.getFullYear())
// console.log(date1.getUTCHours())
// console.log(date1.toUTCString())
// console.log(date1. toTimeString())
// console.log(date1.toLocaleTimeString())
// console.log(date1.toLocaleDateString())

// setTimeout(() => {
//     const date2 = new Date()
//     console.log(date2)

//     const dif = date2 - date1
//     console.log( dif )
// }, 3000)

// const date1 = Date.now()
// console.log(date1)
// setTimeout(() => {
//     const date2 = Date.now()
//     console.log(date2)

//     const dif = date2 - date1
//     console.log( dif )
// }, 3000)

const timerSec = document.querySelector("#second");
const timerMin = document.querySelector("#minute");
const timerHour = document.querySelector("#hr");
const stopButton = document.querySelector("#stop");
const startButton = document.querySelector("#start");

stopButton.addEventListener("click", stopOnClick);
startButton.addEventListener("click", startOnClick);
// startButton.addEventListener("click", timer.start.bind(timer));
// stopButton.addEventListener("click", timer.stop.bind(timer));





class Timer {
  constructor({ onTick }) {
    this.timetId = null
      this.isActive = false
      this.onTick = onTick
  

  }
  convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = this.pad(Math.floor(ms / day));
    // Remaining hours
    const hours = this.pad(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = this.pad(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = this.pad(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  }
    pad(value) {
    return String(value).padStart(2, "0");
  }
  start() {
    if (this.isActive) {
      return;
    }
    const startTime = Date.now();
    this.isActive = true;
    this.timetId = setInterval(() => {
      const currentTime = Date.now();
      const ms = currentTime - startTime;
      const time = this.convertMs(ms);
      this.onTick(time);
      // updateTimer(time);
    }, 1000);
  }
  stop() {
    clearInterval(timer.timetId);
    this.isActive = false;
  }
}



const timer = new Timer({
  onTick: updateTimer,
});




function updateTimer(time) {
  show(`${time.days}:${time.hours}:${time.minutes}:${time.seconds}`);
  timerSec.textContent = `${time.seconds}`;
  timerMin.textContent = `${time.minutes}`;
  timerHour.textContent = `${time.hours}`;
}

function startOnClick() {
  timer.start();
}
function stopOnClick() {
  timer.stop();
}
