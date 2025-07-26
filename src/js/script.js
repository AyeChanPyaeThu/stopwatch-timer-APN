let timerInterval;
let elapsedTime = 0;

const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const display = document.getElementById('display');

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

function startTimer() {
    if (!timerInterval) {
        timerInterval = setInterval(() => {
            elapsedTime += 100;
            updateDisplay();
        }, 100);
    }
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetTimer() {
    stopTimer();
    elapsedTime = 0;
    updateDisplay();
}

function updateDisplay() {
    const time = new Date(elapsedTime);
    const minutes = String(time.getUTCMinutes()).padStart(2, '0');
    const seconds = String(time.getUTCSeconds()).padStart(2, '0');
    const milliseconds = String(time.getUTCMilliseconds()).padStart(3, '0').slice(0, 2);
    display.textContent = `${minutes}:${seconds}.${milliseconds}`;
}