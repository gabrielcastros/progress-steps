const steps = document.querySelectorAll('.step')
const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')
let pos = 1

function avancar() {

    if (steps[pos].className === 'step') {
        steps[pos].className = 'step active'
    }

    pos++

    if (steps[pos] === undefined) {
        nextButton.disabled = true
        nextButton.className = 'btn inactive'
    }
    
    if (pos > 1) {
        prevButton.disabled = false
        prevButton.className = 'btn'
        prevButton.classList.add('transition')
    }

    let percent = (pos / 4) * 100
    percent = percent - 25
    const progress = document.querySelector('.steps-wrapper')
    progress.style.setProperty('--width', `${percent}%`)
}

function retroceder() {
    pos--

    if (steps[pos].className === 'step active') {
        steps[pos].className = 'step'
    }

    if (pos < 4) {
        nextButton.disabled = false
        nextButton.className = 'btn'
    } 
    
    if (pos < 2) {
        prevButton.disabled = true
        prevButton.className = 'btn inactive'
    }
    
    let percent = (pos / 4) * 100
    percent = percent - 25
    const progress = document.querySelector('.steps-wrapper')
    progress.style.setProperty('--width', `${percent}%`)
}

nextButton.addEventListener('click', avancar)
prevButton.addEventListener('click', retroceder)