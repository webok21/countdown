// Nutze unter anderem
// setInterval()
// clearInterval()
// if


let minutes = document.getElementById('minutes');
let time = document.getElementById('time');
let startInterval
let minute
let seconds


function startMinCountdown() {
    minute = minutes.value * 1 - 1
    time.innerHTML = minute + 1 + ":" + "00"
    seconds = 59

    startInterval = setInterval(() => {
        console.log(seconds)
        time.innerHTML = minute + ":" + seconds

        if (seconds == 0 && minute == 0) {
            clearInterval(startInterval)
        } else if (seconds == 0) {
            minute--
            seconds = 59
            time.innerHTML = minute + ":" + seconds
        } else {
            seconds--
        }

    }, 1000)
}

function pauseMinCountdown() {
    clearInterval(startInterval)
}

function restartMinCountdown() {
    startInterval = setInterval(() => {
        console.log(seconds)
        time.innerHTML = minute + ":" + seconds
        if (seconds == 0 && minute == 0) {
            clearInterval(startInterval)
        } else if (seconds == 0) {
            minute--
            seconds = 59
            time.innerHTML = minute + ":" + seconds
        } else {
            seconds--
        }
    }, 1000)
}