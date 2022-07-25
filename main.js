//GRAB ELE FROM DOM
const pomodoro = document.getElementById("pomodoro")
const shortBreak = document.getElementById("short_break")
const longBreak = document.getElementById("long_break")
const countdowntimerOutput = document.getElementById("countdown_timer")
const startBtn = document.getElementById("start_btn")
const stopBtn = document.getElementById("stop_btn")
const studyMsg = document.getElementById("study_msg")

// EVENTLISTENERS
pomodoro.addEventListener("click", pomodoroStudy)
shortBreak.addEventListener("click", shorterBreak)
longBreak.addEventListener("click", longerBreak)
startBtn.addEventListener("click", startCountdown)
stopBtn.addEventListener("click", stopCountdown)
startBtn.addEventListener("click", clickSound)
stopBtn.addEventListener("click", clickSound)

// GLOBAL VARIABLES
let minutes
let seconds
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

function pomodoroStudy() {
  pomodoroStyling()
  clearTimeout(time)

  minutes = 24
  seconds = 60

  countdowntimerOutput.innerHTML = "25:00"
  studyMsg.innerHTML = "Time to study!"
}

pomodoroStudy()

////////////////////////////////////

function shorterBreak() {
  shorterBreakStyling()
  clearTimeout(time)

  minutes = 4
  seconds = 60

  // NEED TO ADD CONFIRM IF STATMENT HERE
  countdowntimerOutput.innerHTML = "05:00"
  studyMsg.innerHTML = "Time for a break!"
}

////////////////////////////////////

function longerBreak() {
  longererBreakStyling()
  clearTimeout(time)

  minutes = 14
  seconds = 60

  countdowntimerOutput.innerHTML = "15:00"
  studyMsg.innerHTML = "Time for a break!"
}

////////////////////////////////////

function clickSound() {
  let clickSound = new Audio("Audio/Click-sound.mp3")
  clickSound.play()
}

////////////////////////////////////

// COUNTDOWN FUNCTIONALITY FUNCTION

////////////////////////////////////

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
    alert("It's time for a break!")
    shorterBreak()
    return
  }

  time = setTimeout(startCountdown, 1000)

  let sec = seconds < 10 ? "0" + seconds : seconds
  let min = minutes < 10 ? "0" + minutes : minutes

  countdowntimerOutput.innerHTML = `${min}:${sec}`
}

////////////////////////////////////

function stopCountdown() {
  clearTimeout(time)
}
