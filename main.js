// @ts-nocheck
let apiURL = "https://cataas.com/cat"
const img = document.querySelector('#img')
const btn = document.querySelector('#generate')
const fiesta = document.querySelector('#fiesta')
const stop = document.querySelector('#stop')
const input = document.querySelector('input')

let inter

btn.addEventListener('click', () => {
    getCat()
})

fiesta.addEventListener('click', () => {
    inter = setInterval(() => {
        getCat(true)
    }, 200)
})

stop.addEventListener('click', () => {
    clearInterval(inter)
})

window.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        getCat()
    }
})

function getCat(fiesta = false) {
    let url = apiURL
    if (input.value !== "") {
        url = `${apiURL}/says/${input.value}?fontSize=100&fontColor=white`
    }
    if (fiesta) {
        url = `${apiURL}/says/FIESTA BOOM BOOM?fontSize=${Math.floor(Math.random() * 100) + 40}&fontColor=${`rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`}`
    }
    fetch(url)
        .then(response => response.blob())
        .then(blob => {
            img.style.backgroundImage = `url(${URL.createObjectURL(blob)})`
            document.body.style.backgroundImage = `url(${URL.createObjectURL(blob)})`
            fiesta ? document.body.style.filter = `hue-rotate(${Math.random() * 360}deg)` : document.body.style.filter = `hue-rotate(0deg)`
        })
}