/*----------------------------*/
/*   CLICK - NAVIGATION BAR   */
/*----------------------------*/
let viewMode = false;

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

/*------------------------------------------*/
/*   CLICK - GIFOS FINDER - FIRST SECTION   */
/*------------------------------------------*/
//borrada

/*----------------------------*/
/*          TRENDING          */
/*----------------------------*/
const API_KEY = 'VfAQnZwBHdFaj75QChwBF5O4uEoTxQXh'

/*----------------------------*/
/*       GIFOS IN TREND       */
/*----------------------------*/    
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
    if (viewMode = true) {
        document.body.classList.add("dark")
        document.querySelector("#menu").classList.add("off")
        document.querySelector("#cross").classList.add("off")
        document.querySelector("#burgerDark").classList.remove("off")
    } else {
        console.log("entrando en modo nocturno")
        document.body.classList.remove("dark")
        document.querySelector("#menu").classList.remove("off")
        document.querySelector("#cross").classList.remove("off")
        document.querySelector("#burgerDark").classList.add("off")
        document.querySelector("#magniDark").classList.add("off")
    }
})

/*------------------------------------------*/
/*    DARK MODE - CLICK - NAVIGATION BAR    */
/*------------------------------------------*/
let crossDark = document.getElementById("burgerDark")
crossDark.addEventListener("click", () => {
    crossDark.classList.add("off")
    document.querySelector("#crossDark").classList.remove("off")
    document.querySelector("#menu").classList.remove("off")
    document.querySelector("#darkMode").classList.add("off")
})

let hamburDark = document.getElementById("crossDark")
hamburDark.addEventListener("click", () => {
    hamburDark.classList.add("off")
    document.querySelector("#burgerDark").classList.remove("off")
    document.querySelector("#menu").classList.add("off")
})