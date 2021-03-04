//click - navigation bar
let headerCross = document.getElementById("burger")
headerCross.addEventListener("click", () => {
    headerCross.classList.add("off")
    document.querySelector("#cross").classList.remove("off")
    document.querySelector("#menu").classList.remove("off")
})

let headerBurger = document.getElementById("cross")
headerBurger.addEventListener("click", () => {
    headerBurger.classList.add("off")
    document.querySelector("#burger").classList.remove("off")
    document.querySelector("#menu").classList.add("off")
})

//click - GIFOS Finder - First Section
let magnifying = document.getElementById("magnifying")
magnifying.addEventListener("click", () => {
    magnifying.classList.add("off")
    document.querySelector("#crossMagnifying").classList.remove("off")
})

let crossMagnifying = document.getElementById("crossMagnifying")
crossMagnifying.addEventListener("click", () => {
    crossMagnifying.classList.add("off")
    document.querySelector("#magnifying").classList.remove("off")
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
    document.querySelector("#firtSection")
    document.classList.remove(".color_purple")
    document.querySelector("#firtSection")
    document.classList.add(".color_white")
})

//trendin
fetch(`https://api.giphy.com/v1/trending/searches?api_key=${API_KEY}`)
    .then (response => response.json())
    .then (response => {
        console.log(response)
        const ulTerms = document.createElement("p")
        response.data.slice(0,5).forEach( term => {
            console.log(term)
            ulTerms.textContent = ulTerms.textContent + ", " + term.charAt(0).toUpperCase() + term.slice(1);
        })
        ulTerms.textContent = ulTerms.textContent.substring(1)   
        document.querySelector(".ultrendings").appendChild(ulTerms) 
    })



