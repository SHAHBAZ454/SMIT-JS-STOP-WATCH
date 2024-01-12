let milliseconds = 0;
let lapCounter = 1;

function startStopwatch() {
  timer = setInterval(updateStopwatch, 10);
}

function stopStopwatch() {
  clearInterval(timer);
}

function resetStopwatch() {
  stopStopwatch();
  milliseconds = 0;
  lapCounter = 1;
  updateStopwatch();
  clearLapTimes();
}

function recordLap() {
  const lapTime = getFormattedTime();
  const lapTimesList = document.getElementById('lapTimes');

  const lapItem = document.createElement('li');
  lapItem.classList.add('lapTime');
  lapItem.innerHTML = `<span>Lap ${lapCounter}</span><span>${lapTime}</span>`;

  lapTimesList.insertBefore(lapItem, lapTimesList.firstChild);
  lapCounter++;
}

function updateStopwatch() {
  milliseconds += 10;
  const formattedTime = getFormattedTime();
  document.getElementById('stopwatch').textContent = formattedTime;
}


function getFormattedTime() {
  const hours = Math.floor(milliseconds / 3600000);
  const minutes = Math.floor((milliseconds % 3600000) / 60000);
  const seconds = Math.floor((milliseconds % 60000) / 1000);
  const remainingMilliseconds = milliseconds % 1000;

  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${padMilliseconds(remainingMilliseconds)}`;
}

function pad(value) {
  return value < 10 ? `0${value}` : value;
}

function padMilliseconds(value) {
return value < 10 ? `00${value}` : value < 100 ? `0${value}` : value.toString().slice(0, 2);
}

function clearLapTimes() {
  const lapTimesList = document.getElementById('lapTimes');
  lapTimesList.innerHTML = '';
}