let percentCounter = document.querySelector('.zeit')
let percent = 100

function countdown() {
    let counter2 = setInterval(() => {

        if (percent === 0) {
            clearInterval(counter2)

        } else {
            percent--
            percentCounter.innerHTML = percent + "%"
        }
    }, 250)
}
