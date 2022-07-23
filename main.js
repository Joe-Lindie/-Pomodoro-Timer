//GRAB ELE FROM DOM
const pomodoro = document.getElementById("pomodoro")
const shortBreak = document.getElementById("short_break")
const longBreak = document.getElementById("long_break")
const countdowntimerOutput = document.getElementById("countdown_timer")
const startBtn = document.getElementById("start_btn")
const stopBtn = document.getElementById("stop_btn")

// EVENTLISTENERS
pomodoro.addEventListener("click", studyCountdown)
shortBreak.addEventListener("click", shorterBreak)
longBreak.addEventListener("click", longerBreak)

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
}

function shorterBreak() {
  shorterBreakStyling()
  countdowntimerOutput.innerHTML = "05:00"
}

function longerBreak() {
  longererBreakStyling()
  countdowntimerOutput.innerHTML = "15:00"
}
