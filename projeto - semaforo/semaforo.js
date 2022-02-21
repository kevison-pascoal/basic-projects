const img = window.document.getElementById('img')
const buttons = document.getElementById('buttons')
let colorIndex = 0
let intervalId = null

const trafficLight = (event) => {
    stopAutomatic()
    turnOn[event.target.id]();
}

const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0


const changecolor = () => {
    console.log('teste cor')
    const colors = ['red', 'yellow', 'green']
    const color = colors[colorIndex]
    turnOn[color]()
    nextIndex()
}

const stopAutomatic = () => {
    clearInterval(intervalId)
}

const turnOn = {
    'red': () => img.src = '_imagens/vermelho.png',
    'yellow': () => img.src = '_imagens/amarelo.png',
    'green': () => img.src = '_imagens/verde.png',
    'automatic': () => intervalId = setInterval(changecolor, 1000)
}

buttons.addEventListener('click', trafficLight)
