// Schreibe eine Funktion die beim Start, die Zahlen runter zählt.
// Schau Dir die Ergebnisvorschau an.

// Nutze 
// window.onload
// setInterval()
// clearInterval()
// getElementsByClassName()/getElementById()
// if, else if


let timeCounter = document.getElementById('count')
let time = 10

let counter3 = setInterval(() => {
    window.onload

    if (time !== 0) {
        time--
        timeCounter.innerHTML = time
        if (time < 10 && time !== 0) {
            timeCounter.innerHTML = "0" + time
        }
    } else if (time < 0) {
        clearInterval(counter3)
    } else {
        document.querySelector('.message').style.display = "none"
    }
}, 1000)

