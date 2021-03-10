/*----------------------------*/
/*   CLICK - NAVIGATION BAR   */
/*----------------------------*/
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
    document.body.classList.toggle("dark")
    document.querySelector("#menu").classList.add("off")
    document.querySelector("#cross").classList.add("off")
    document.querySelector("#burgerDark").classList.remove("off")
    document.querySelector("#magniDark").classList.remove("off")
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

/*----------------------------*/
/*       BACK DAYMODE         */
/*----------------------------*/
const dayMode = document.querySelector("#dayMode")
dayMode.addEventListener("click", () => {
    document.body.classList.toggle("dark")
    document.querySelector("#menu").classList.add("off")
    document.querySelector("#cross").classList.add("off")
    document.querySelector("#burger").classList.remove("off")
    document.querySelector("#burgerDark").classList.add("off")
    document.querySelector("#crossDark").classList.add("off")
})