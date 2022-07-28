//GRAB ELE FROM DOM
const pomodoro = document.getElementById("pomodoro");
const shortBreak = document.getElementById("short_break");
const longBreak = document.getElementById("long_break");
const countdowntimerOutput = document.getElementById("countdown_timer");
const startStopBtn = document.getElementById("start_stop_btn");
const studyMsg = document.getElementById("study_msg");
const userTask = document.getElementById("user_tasks");
const addTask = document.getElementById("add_task");
const taskToComplete = document.getElementById("tasks_to_complete");

// EVENTLISTENERS
pomodoro.addEventListener("click", pomodoroStudy);
shortBreak.addEventListener("click", shorterBreak);
longBreak.addEventListener("click", longerBreak);
startStopBtn.addEventListener("click", startStop);
startStopBtn.addEventListener("click", clickSound);
addTask.addEventListener("click", newTask);

// GLOBAL VARIABLES
let minutes;
let seconds;
let timeInterval;
let isRunning = false;
let stage = "work";

////////////////////////////////////

// COLOUR STYLING FUNCTIONS

////////////////////////////////////

function pomodoroStyling() {
  document.body.style.backgroundColor = "#D95550";
  const containerBg = document.getElementById("timer_container");
  containerBg.style.backgroundColor = "#DD6864";
  pomodoro.style.backgroundColor = "#D95550";
  shortBreak.style.backgroundColor = "transparent";
  longBreak.style.backgroundColor = "transparent";
  startStopBtn.style.color = "#CA4E49";

  const taskBg = document.getElementById("user_tasks");
  taskBg.style.backgroundColor = "#DD6864";
  addTask.style.color = "#CA4E49";
}

pomodoroStyling();

function shorterBreakStyling() {
  document.body.style.backgroundColor = "#4B8F93";
  const containerBg = document.getElementById("timer_container");
  containerBg.style.backgroundColor = "#619DA0";
  pomodoro.style.backgroundColor = "transparent";
  longBreak.style.backgroundColor = "transparent";
  shortBreak.style.backgroundColor = "#4B8F93";
  startStopBtn.style.color = "#4B8F93";

  const taskBg = document.getElementById("user_tasks");
  taskBg.style.backgroundColor = "#619DA0";
  addTask.style.color = "#4B8F93";
}

function longererBreakStyling() {
  document.body.style.backgroundColor = "#447CA3";
  const containerBg = document.getElementById("timer_container");
  containerBg.style.backgroundColor = "#5A8AAD";
  longBreak.style.backgroundColor = "#447CA3";
  pomodoro.style.backgroundColor = "transparent";
  shortBreak.style.backgroundColor = "transparent";
  startStopBtn.style.color = "#447CA3";

  const taskBg = document.getElementById("user_tasks");
  taskBg.style.backgroundColor = "#5A8AAD";
  addTask.style.color = "#447CA3";
}

////////////////////////////////////

// STUDY/BREAK TIME FUNCTIONS

////////////////////////////////////

function pomodoroStudy() {
  pomodoroStyling();
  startStopBtn.innerHTML = "START";

  stage = "work";
  minutes = 24;
  seconds = 60;

  countdowntimerOutput.innerHTML = "25:00";
  studyMsg.innerHTML = "Time to study!";
}

pomodoroStudy();

////////////////////////////////////

function shorterBreak() {
  shorterBreakStyling();
  startStopBtn.innerHTML = "START";

  stage = "break";
  minutes = 4;
  seconds = 60;

  countdowntimerOutput.innerHTML = "05:00";
  studyMsg.innerHTML = "Time for a break!";
}

////////////////////////////////////

function longerBreak() {
  longererBreakStyling();
  startStopBtn.innerHTML = "START";

  minutes = 14;
  seconds = 60;

  countdowntimerOutput.innerHTML = "15:00";
  studyMsg.innerHTML = "Time for a break!";
}

////////////////////////////////////

// AUDIO FUNCTIONS

////////////////////////////////////

function clickSound() {
  const clickSound = new Audio("Audio/Click-sound.mp3");
  clickSound.play();
}

function finishedSound() {
  const finishedSound = new Audio("Audio/success.mp3");
  finishedSound.play();
}

////////////////////////////////////

function startStop() {
  if (isRunning) {
    isRunning = false;
    return stopCountdown();
  }
  isRunning = true;
  timeIntervals();
}

////////////////////////////////////

function timeIntervals() {
  timeInterval = setInterval(startCountdown, 1000);
}

////////////////////////////////////

// COUNTDOWN FUNCTIONALITY FUNCTION

////////////////////////////////////

function startCountdown() {
  startStopBtn.innerHTML = "STOP";

  if (seconds > 0) {
    seconds = seconds - 1;
  } else {
    seconds = 60;
  }

  if (minutes > 0 && seconds === 0) {
    minutes = minutes - 1;
  }

  let sec = seconds < 10 ? "0" + seconds : seconds;
  let min = minutes < 10 ? "0" + minutes : minutes;

  countdowntimerOutput.innerHTML = `${min}:${sec}`;

  if (minutes === 0 && seconds === 0) {
    finishedSound();
    stage === "work" ? shorterBreak() : pomodoroStudy();
  }
}

////////////////////////////////////

function stopCountdown() {
  startStopBtn.innerHTML = "START";
  clearInterval(timeInterval);
}

////////////////////////////////////

// TASKS SECTION

////////////////////////////////////

function newTask(event) {
  event.preventDefault();

  const newTodoItem = userTask.value;

  if (userTask.value === "") return;

  const newTodo = document.createElement("ol");
  newTodo.classList.add("new_todo");

  const todoContent = `
  <div class="view">
    <label>${newTodoItem}</label>
    <input class="toggle" type="checkbox">
  </div> `;

  newTodo.innerHTML = todoContent;
  taskToComplete.append(newTodo);
  userTask.value = "";
}

////////////////////////////////////

// CHECK ITEM OFF LIST

////////////////////////////////////

taskToComplete.addEventListener("click", function (e) {
  if (e.target && e.target.matches(".toggle")) {
    checkItemsOffList(e);
  }
});

function checkItemsOffList(event) {
  if (event.target.checked) {
    let parentDiv = event.target.parentNode;
    parentDiv.classList.add("checked");
  }

  if (event.target.checked === false) {
    let parentDiv = event.target.parentNode;
    parentDiv.classList.remove("checked");
  }
}
