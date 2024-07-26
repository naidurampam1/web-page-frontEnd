let timerValue = document.getElementById("timer");
let hour = 12;
let minute = 59;
let sec = 59;
let uniqueId = setInterval(function () {
  sec -= 1;
  if (sec === 0) {
    minute -= 1;
    sec = 59;
  }
  if (minute === 0) {
    hour -= 1;
    minute = 59;
  }
  timerValue.textContent = hour + ":" + minute + ":" + sec;
}, 1000);
