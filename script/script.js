//click - navigation bar
let headerCross = document.getElementById("burger")
headerCross.addEventListener("click", () => {
    headerCross.classList.add("burgerOff")
    document.querySelector("#cross").classList.remove("crossOff")
    document.querySelector("#menu").classList.remove("menuOff")
})

let headerBurger = document.getElementById("cross")
headerBurger.addEventListener("click", () => {
    headerBurger.classList.add("crossOff")
    document.querySelector("#burger").classList.remove("burgerOff")
    document.querySelector("#menu").classList.add("menuOff")
})

//click - GIFOS Finder - First Section
let magnifying = document.getElementById("magnifying")
magnifying.addEventListener("click", () => {
    magnifying.classList.add("magnifyingOff")
    document.querySelector("#crossMagnifying").classList.remove("finderOff")
})

let crossMagnifying = document.getElementById("crossMagnifying")
crossMagnifying.addEventListener("click", () => {
    crossMagnifying.classList.add("finderOff")
    document.querySelector("#magnifying").classList.remove("magnifyingOff")
})

// GIFOS in Trend 
const API_KEY = 'VfAQnZwBHdFaj75QChwBF5O4uEoTxQXh'

fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=3`)
    .then (response => response.json())
    .then (response => {
        console.log(response)
        response.data.forEach( gif => {
            const image = document.createElement("img")
            image.src = gif.images.original.url
            document.querySelector("#newGifos").appendChild(image)
        })
    })

// Dark Mode
const darkMode = document.querySelector("#darkMode")
darkMode.addEventListener("click", () => {
    document.body.classList.toggle("dark")
    //document.querySelector("#header").classList.add("border")
    darkMode.classList.add(".logoOff")
    document.querySelector("#firtSection")
    document.classList.add(".color_white")
    document.querySelector("#firtSection")
    document.classList.remove(".color_purple")
})



