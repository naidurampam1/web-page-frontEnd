// Initialize timer variables
let startTime = Date.now();
let timerInterval;
let secondsElapsed = 0;

// Function to update the timer display
function updateTime() {
  // Calculate elapsed time
  const now = Date.now();
  secondsElapsed = Math.floor((now - startTime) / 1000);

  // Convert seconds to minutes and seconds
  const minutes = Math.floor(secondsElapsed / 60);
  const seconds = secondsElapsed % 60;

  // Update the display
  const timeDisplay = document.getElementById("time");
  if (minutes > 0) {
    timeDisplay.textContent = `${minutes}min ${seconds}sec`;
  } else {
    timeDisplay.textContent = `${seconds}sec`;
  }
}

// Start the timer
function startTimer() {
  timerInterval = setInterval(updateTime, 1000);
}

// Clear the timer
function stopTimer() {
  clearInterval(timerInterval);
}

// Start the timer when the page loads
window.addEventListener("load", startTimer);

// Stop the timer when the page is unloaded
window.addEventListener("beforeunload", stopTimer);
