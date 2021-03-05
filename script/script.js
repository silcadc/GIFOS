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

//trending
const API_KEY = 'VfAQnZwBHdFaj75QChwBF5O4uEoTxQXh'
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

// GIFOS in Trend 
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

/*----------------------------*/
/*         DARK MODE          */
/*----------------------------*/
const darkMode = document.querySelector("#darkMode")
darkMode.addEventListener("click", () => {
    document.body.classList.toggle("dark")
    document.querySelector("#menu").classList.add("off")
    document.querySelector("#cross").classList.add("off")
    document.querySelector("#burgerDark").classList.remove("off")
    document.querySelector("#magniDark").classList.remove("off")
})
//click - navigation bar
let crossDark = document.getElementById("burgerDark")
crossDark.addEventListener("click", () => {
    crossDark.classList.add("off")
    document.querySelector("#crossDark").classList.remove("off")
    document.querySelector("#menu").classList.remove("off")
    document.querySelector("#darkMode").classList.add("off")
    document.querySelector("#dayMode").classList.remove("off")
    document.querySelector("#magniDark").classList.add("off")
})

let hamburDark = document.getElementById("crossDark")
hamburDark.addEventListener("click", () => {
    hamburDark.classList.add("off")
    document.querySelector("#burgerDark").classList.remove("off")
    document.querySelector("#menu").classList.add("off")
    document.querySelector("#magniDark").classList.remove("off")
})
//click - GIFOS Finder - First Section
let magnifDark = document.getElementById("magniDark")
magnifDark.addEventListener("click", () => {
    magnifDark.classList.add("off")
    document.querySelector("#crossMagniDark").classList.remove("off")
})

let crossMagnifDark = document.getElementById("crossMagniDark")
crossMagnifDark.addEventListener("click", () => {
    crossMagnifDark.classList.add("off")
    document.querySelector("#magniDark").classList.remove("off")
})

//back dayMode
const dayMode = document.querySelector("#dayMode")
dayMode.addEventListener("click", () => {
    document.body.classList.toggle("dark")
    document.querySelector("#menu").classList.add("off")
    document.querySelector("#cross").classList.add("off")
    document.querySelector("#burger").classList.remove("off")
    document.querySelector("#burgerDark").classList.add("off")
    document.querySelector("#crossDark").classList.add("off")
})