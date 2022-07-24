//GRAB ELE FROM DOM
const pomodoro = document.getElementById("pomodoro")
const shortBreak = document.getElementById("short_break")
const longBreak = document.getElementById("long_break")
const countdowntimerOutput = document.getElementById("countdown_timer")
const startBtn = document.getElementById("start_btn")
const stopBtn = document.getElementById("stop_btn")
const studyMsg = document.getElementById("study_msg")

// EVENTLISTENERS
pomodoro.addEventListener("click", studyCountdown)
shortBreak.addEventListener("click", shorterBreak)
longBreak.addEventListener("click", longerBreak)
startBtn.addEventListener("click", startCountdown)
stopBtn.addEventListener("click", stopCountdown)

// GLOBAL VARIABLES
let minutes = 24
let seconds = 60
let time

////////////////////////////////////

// COLOUR STYLING FUNCTIONS

////////////////////////////////////

function pomodoroStyling() {
  document.body.style.backgroundColor = "#D95550"
  const containerBg = document.getElementById("timer_container")
  containerBg.style.backgroundColor = "#DD6864"
  pomodoro.style.backgroundColor = "#D95550"
  shortBreak.style.backgroundColor = "transparent"
  longBreak.style.backgroundColor = "transparent"
  startBtn.style.color = "#CA4E49"
  stopBtn.style.color = "#CA4E49"
}

pomodoroStyling()

function shorterBreakStyling() {
  document.body.style.backgroundColor = "#4B8F93"
  const containerBg = document.getElementById("timer_container")
  containerBg.style.backgroundColor = "#619DA0"
  pomodoro.style.backgroundColor = "transparent"
  longBreak.style.backgroundColor = "transparent"
  shortBreak.style.backgroundColor = "#4B8F93"
  startBtn.style.color = "#4B8F93"
  stopBtn.style.color = "#4B8F93"
}

function longererBreakStyling() {
  document.body.style.backgroundColor = "#447CA3"
  const containerBg = document.getElementById("timer_container")
  containerBg.style.backgroundColor = "#5A8AAD"
  longBreak.style.backgroundColor = "#447CA3"
  pomodoro.style.backgroundColor = "transparent"
  shortBreak.style.backgroundColor = "transparent"
  startBtn.style.color = "#447CA3"
  stopBtn.style.color = "#447CA3"
}

////////////////////////////////////

// FUNCTIONS

////////////////////////////////////

function studyCountdown() {
  pomodoroStyling()
  countdowntimerOutput.innerHTML = "25:00"
  studyMsg.innerHTML = "Time to focus!"
}

studyCountdown()

function shorterBreak() {
  shorterBreakStyling()
  countdowntimerOutput.innerHTML = "05:00"
  studyMsg.innerHTML = "Time for a break!"
}

function longerBreak() {
  longererBreakStyling()
  countdowntimerOutput.innerHTML = "15:00"
  studyMsg.innerHTML = "Time for a break!"
}

function startCountdown() {
  if (seconds > 0) {
    seconds = seconds - 1
  } else {
    seconds = 60
  }

  if (minutes > 0 && seconds === 0) {
    minutes = minutes - 1
  }

  if (minutes === 0 && seconds === 0) {
    alert("Time for a break!")
    return
  }

  time = setTimeout(startCountdown, 1000)

  countdowntimerOutput.innerHTML = `${minutes}:${seconds}`
}

function stopCountdown() {
  clearTimeout(time)
}
