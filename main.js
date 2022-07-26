//GRAB ELE FROM DOM
const pomodoro = document.getElementById("pomodoro")
const shortBreak = document.getElementById("short_break")
const longBreak = document.getElementById("long_break")
const countdowntimerOutput = document.getElementById("countdown_timer")
const startStopBtn = document.getElementById("start_stop_btn")
const studyMsg = document.getElementById("study_msg")

// EVENTLISTENERS
pomodoro.addEventListener("click", pomodoroStudy)
shortBreak.addEventListener("click", shorterBreak)
longBreak.addEventListener("click", longerBreak)
startStopBtn.addEventListener("click", startStop)
startStopBtn.addEventListener("click", clickSound)
startStopBtn.addEventListener("click", clickSound)

// GLOBAL VARIABLES
let minutes
let seconds
let time
let isRunning = false
startStopBtn.innerHTML = "START"

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
  startStopBtn.style.color = "#CA4E49"
  startStopBtn.style.color = "#CA4E49"
}

pomodoroStyling()

function shorterBreakStyling() {
  document.body.style.backgroundColor = "#4B8F93"
  const containerBg = document.getElementById("timer_container")
  containerBg.style.backgroundColor = "#619DA0"
  pomodoro.style.backgroundColor = "transparent"
  longBreak.style.backgroundColor = "transparent"
  shortBreak.style.backgroundColor = "#4B8F93"
  startStopBtn.style.color = "#4B8F93"
  startStopBtn.style.color = "#4B8F93"
}

function longererBreakStyling() {
  document.body.style.backgroundColor = "#447CA3"
  const containerBg = document.getElementById("timer_container")
  containerBg.style.backgroundColor = "#5A8AAD"
  longBreak.style.backgroundColor = "#447CA3"
  pomodoro.style.backgroundColor = "transparent"
  shortBreak.style.backgroundColor = "transparent"
  startStopBtn.style.color = "#447CA3"
  startStopBtn.style.color = "#447CA3"
}

////////////////////////////////////

// FUNCTIONS

////////////////////////////////////

function pomodoroStudy() {
  pomodoroStyling()
  clearTimeout(time)
  startStopBtn.innerHTML = "START"

  minutes = 0
  seconds = 5

  countdowntimerOutput.innerHTML = "25:00"
  studyMsg.innerHTML = "Time to study!"
}

pomodoroStudy()

////////////////////////////////////

function shorterBreak() {
  shorterBreakStyling()
  clearTimeout(time)
  startStopBtn.innerHTML = "START"

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
  startStopBtn.innerHTML = "START"

  minutes = 14
  seconds = 60

  countdowntimerOutput.innerHTML = "15:00"
  studyMsg.innerHTML = "Time for a break!"
}

////////////////////////////////////

function clickSound() {
  const clickSound = new Audio("Audio/Click-sound.mp3")
  clickSound.play()
}

function finishedSound() {
  const finishedSound = new Audio("Audio/success.mp3")
  finishedSound.play()
}

////////////////////////////////////

function startStop() {
  if (isRunning) {
    isRunning = false
    return stopCountdown()
  }
  isRunning = true
  startCountdown()
}

////////////////////////////////////

// COUNTDOWN FUNCTIONALITY FUNCTION

////////////////////////////////////

function startCountdown() {
  startStopBtn.innerHTML = "STOP"

  if (seconds > 0) {
    seconds = seconds - 1
  } else {
    seconds = 60
  }

  if (minutes > 0 && seconds === 0) {
    minutes = minutes - 1
  }

  if (minutes === 0 && seconds === 0) {
    finishedSound()

    countdowntimerOutput.innerHTML = "00:00"

    //Wait 4 seconds before calling shorterBreak()
    setTimeout(function () {
      shorterBreak()
    }, 4000)

    return
  }

  time = setTimeout(startCountdown, 1000)

  let sec = seconds < 10 ? "0" + seconds : seconds
  let min = minutes < 10 ? "0" + minutes : minutes

  countdowntimerOutput.innerHTML = `${min}:${sec}`
}

////////////////////////////////////

function stopCountdown() {
  startStopBtn.innerHTML = "START"

  // if (minutes > 0 || seconds > 0) {
  //   if (confirm("Are you sure you wish to end this session early?") == true) {
  //     shorterBreak()
  //   } else {
  //     return
  //   }
  // }

  clearTimeout(time)
}
