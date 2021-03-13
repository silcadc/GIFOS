let isDark = sessionStorage.getItem("modeStyle"); /*Esto implica que el modo es Light*/
console.log(isDark)

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

/*----------------------------*/
/*       GIFOS IN TREND       */
/*----------------------------*/    
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
//verificado
//con la siguiente funcion quiero lograr el retono a la pagina principal en modo dark
//dando click al logo en modo Dark y no que regrese a la pagina principal en modo day
const darkMode = document.querySelector("#darkMode")
console.log(darkMode)
darkMode.addEventListener("click", () => {  
    backDarkMode()
})

let logoDark = document.querySelector("#logoDark")
logoDark.addEventListener("click", () => {
    backDarkMode("darkMode")
})

/*----------------------------*/
/*         DARK MODE          */
/*----------------------------*/
const backDarkMode = (text) => { // "" == "lightMode"
    if (text == "darkMode") {
        isDark = true;
    }else if(text == "lightMode") {
        isDark = false;
    }
    else {
        if (isDark == true) {
            isDark = false;
        } else {
            isDark = true;
        }
    }
    sessionStorage.setItem("modeStyle", isDark);
    if (isDark == true) {
        console.log("entrando en modo nocturno")
        document.body.classList.add("dark")
        darkMode.innerHTML = "Modo Diurno <hr>"
        document.querySelector("#menu").classList.add("off")
        document.querySelector("#cross").classList.add("off")
        document.querySelector("#burgerDark").classList.remove("off")
    } else {
        console.log("entrando en modo diurno")
        document.body.classList.remove("dark")
        darkMode.innerHTML = "Modo Nocturno <hr>"
        document.querySelector("#menu").classList.remove("off")
        document.querySelector("#cross").classList.remove("off")
        document.querySelector("#burgerDark").classList.add("off")
    }
}

backDarkMode()



let logo= document.querySelector("#logo")
logo.addEventListener("click", () => {
    backDarkMode("lightMode")
})

/*------------------------------------------*/
/*    DARK MODE - CLICK - NAVIGATION BAR    */
/*------------------------------------------*/
let crossDark = document.getElementById("burgerDark")
crossDark.addEventListener("click", () => {
    crossDark.classList.add("off")
    document.querySelector("#crossDark").classList.remove("off")
    document.querySelector("#menu").classList.remove("off")
})

let hamburDark = document.getElementById("crossDark")
hamburDark.addEventListener("click", () => {
    hamburDark.classList.add("off")
    document.querySelector("#burgerDark").classList.remove("off")
    document.querySelector("#menu").classList.add("off")
})

