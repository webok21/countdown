

// Übung lev1_1 settimeout setinterval

// 1.)

let text = document.getElementById('text');

text.innerHTML = "Start Warten für 3 Sekunden..."

const SecTimeout = () => {
    setTimeout(() => {
        text.innerHTML = `"Erledigt. Du hast 3 Sekunden verschwendet."`
    }, 1000)
}
SecTimeout()


// 2.)

let timeInterval = setInterval(() => {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    console.log(hours + ":" + minutes + ":" + seconds)
}, 1000)


// 3.)

let timeCounter = 11

let counter = setInterval(() => {
    timeCounter--
    if (timeCounter >= 1) {
        console.log(timeCounter)
    } else {
        console.log("Endlich Feierabend")
        clearInterval(counter)
    }
}, 1000)



