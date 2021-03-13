let isDark = sessionStorage.getItem("modeStyle"); /*Esto implica que el modo es Light*/
sessionStorage.setItem("modeStyle", isDark);
console.log(isDark)
/*----------------------------*/
/*   CLICK - NAVIGATION BAR   */
/*----------------------------*/
let headerCross = document.getElementById("burger")
headerCross.addEventListener("click", () => {
    headerCross.classList.add("off")
    document.querySelector("#cross").classList.remove("off")
    document.querySelector("#menu").classList.remove("off")
})//verificado

let headerBurger = document.getElementById("cross")
headerBurger.addEventListener("click", () => {
    headerBurger.classList.add("off")
    document.querySelector("#burger").classList.remove("off")
    document.querySelector("#menu").classList.add("off")
})//verificado

/*------------------------------------------*/
/*   CLICK - GIFOS FINDER - FIRST SECTION   */
/*------------------------------------------*/
let magnifying = document.getElementById("magnifying")
magnifying.addEventListener("click", () => {
    magnifying.classList.add("off")
    document.querySelector("#crossMagnifying").classList.remove("off")
})//verificado

let crossMagnifying = document.getElementById("crossMagnifying")
crossMagnifying.addEventListener("click", (clic) => {
    clic.preventDefault()
    crossMagnifying.classList.add("off")
    document.querySelector("#magnifying").classList.remove("off")
})//verificado

/*----------------------------*/
/*          TRENDING          */
/*----------------------------*/
const API_KEY = 'VfAQnZwBHdFaj75QChwBF5O4uEoTxQXh'
fetch(`https://api.giphy.com/v1/trending/searches?api_key=${API_KEY}`)
    .then (response => response.json())
    .then (response => {
        console.log(response)
        const ulcreate = document.createElement("ul")
        
        response.data.slice(0,5).forEach( term => {
            //console.log(term)
            //liTerms.textContent = liTerms.textContent + ", " + term.charAt(0).toUpperCase() + term.slice(1);
            const liTerms = document.createElement("li")//este li estaba fuera del forEach lo que mostraba
            //en pantalla era el último string traido desde el array, ahora dentro del for, se crearan suficientes
            //li para almacenar cada string del objeto
            const aTerms = document.createElement("a")
            aTerms.textContent = term + ", " 
            console.log(term)
            ulcreate.appendChild(liTerms)
            liTerms.appendChild(aTerms)
            //document.querySelector(".ultrendings").appendChild(ulcreate) 
        })
        //ulcreate.appendChild(liTerms)
        document.querySelector(".ultrendings").appendChild(ulcreate) 
    })

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
    
    sessionStorage.setItem("modeStyle", isDark);//utilizando local storage se logra almacenar el modo
    //escogido sea dark o day, entonces debo utilizarlo para almacenar el mismo modo actual en los
    //script.

    if (isDark == true) {
        console.log("entrando en modo nocturno")
        document.body.classList.add("dark")
        darkMode.innerHTML = "Modo Diurno <hr>"
        document.querySelector("#menu").classList.add("off")
        document.querySelector("#cross").classList.add("off")
        document.querySelector("#burgerDark").classList.remove("off")
        document.querySelector("#magnifying").classList.add("off")
        document.querySelector("#magniDark").classList.remove("off")
    } else {
        console.log("entrando en modo diurno")
        document.body.classList.remove("dark")
        darkMode.innerHTML = "Modo Nocturno <hr>"
        document.querySelector("#menu").classList.remove("off")
        document.querySelector("#cross").classList.remove("off")
        document.querySelector("#burgerDark").classList.add("off")
        document.querySelector("#magnifying").classList.remove("off")
        document.querySelector("#magniDark").classList.add("off")
    }
}



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
    backDarkMode("darkMode")//ya entiendo que pasa, cuando clickeo el logo Dark y ejecuto la funcion
    //backDarkMode, el logo me lleve a la pagina principal en modo day porque la validación
    //isDark == true es falsa entonces entra al modo diurno!!!
})

let logo= document.querySelector("#logo")
logo.addEventListener("click", () => {
    backDarkMode("lightMode")//ya entiendo que pasa, cuando clickeo el logo Dark y ejecuto la funcion
    //backDarkMode, el logo me lleve a la pagina principal en modo day porque la validación
    //isDark == true es falsa entonces entra al modo diurno!!!
})
backDarkMode()
/*------------------------------------------*/
/*    DARK MODE - CLICK - NAVIGATION BAR    */
/*------------------------------------------*/
let crossDark = document.getElementById("burgerDark")
crossDark.addEventListener("click", () => {
    crossDark.classList.add("off")
    document.querySelector("#crossDark").classList.remove("off")
    document.querySelector("#menu").classList.remove("off")
    document.querySelector("#magniDark").classList.add("off") //document.querySelector("#magniDark").classList.remove("off")
})//verificado

let hamburDark = document.getElementById("crossDark")
hamburDark.addEventListener("click", () => {
    hamburDark.classList.add("off")
    document.querySelector("#burgerDark").classList.remove("off")
    document.querySelector("#menu").classList.add("off")
    document.querySelector("#magniDark").classList.remove("off")//esta línea funciona pero aún esta por ser revisada
})//verificado

/*------------------------------------------------------*/
/*   DARK MODE - CLICK - GIFOS FINDER - FIRST SECTION   */
/*------------------------------------------------------*/
let magnifDark = document.getElementById("magniDark")
magnifDark.addEventListener("click", () => {
    magnifDark.classList.add("off")
    document.querySelector("#crossMagniDark").classList.remove("off")
})//verificado

let crossMagnifDark = document.getElementById("crossMagniDark")
crossMagnifDark.addEventListener("click", () => {
    crossMagnifDark.classList.add("off")
    document.querySelector("#magniDark").classList.remove("off")
})//verificado

/*----------------------------*/
/*        GIFOS FINDER        */
/*----------------------------*/
const formGifosFinder = document.querySelector("#gifosFinder")
const inputTextToSearch = document.querySelector("#searchGifos")
const lineHr = document.querySelector(".lineUnderSearch")
const wordSearchH2 = document.querySelector(".termToSearch")
const tryAnotherSearch = document.querySelector("#tryAnotherSearch")
const buttonSeeMore = document.querySelector(".seeMore")
const buttonSeeMoreDark = document.querySelector(".seeMoreDark")
const offH1 = document.querySelector(".color_purple")
const offIlustration = document.querySelector(".ilustra_header")
const changePositionCross = document.querySelectorAll(".search")

const clickMagnifying = document.querySelector("#magnifying")
const clickMagniDark = document.querySelector("#magniDark")
//necesito que la siguiente funcion se ejecute al recibir un click
//tanto en #magnifying como en #magniDark, debo solucionarlo
clickMagnifying.addEventListener("click", () =>{
    console.log(inputTextToSearch)
    console.log(inputTextToSearch.value)
    if (inputTextToSearch.value !== "") {
        getGifos(inputTextToSearch.value)
        showTermH2()
        showLineHr()
        showButton()
        offH1Title()
        offIlustra_header()
        hiddenIconAnotherSearch()
        positionCross()//funciona
    } else {
        showLineHr()
        showIconAnotherSearch()
    }//esta funcion ejecuta muy bien
})

clickMagniDark.addEventListener("click", () =>{
    console.log(inputTextToSearch)
    console.log(inputTextToSearch.value)
    if (inputTextToSearch.value !== "") {
        getGifos(inputTextToSearch.value)
        showTermH2()
        showLineHr()
        showButtonDark()
        offH1Title()
        offIlustra_header()
        positionCross()
        hiddenIconAnotherSearch()
    } else {
        showLineHr()
        showIconAnotherSearch()
    }//esta funcion ejecuta muy bien
})

formGifosFinder.addEventListener("submit" , (text) => {
    text.preventDefault()
    if (inputTextToSearch.value !== "") {
        console.log(inputTextToSearch.value)
        getGifos(inputTextToSearch.value)
        showTermH2()
        showLineHr()
        showButton()
        hiddenIconAnotherSearch()
    } else {
        getGifos(inputTextToSearch.value)
        showTermH2()
        showLineHr()
        showIconAnotherSearch()
    }//esta funcion ejecuta muy bien
})

let amount = 11
const gifosContainer = document.querySelector(".gifosContainer")
const getGifos = async (textToSearch) => {
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${textToSearch}`)
    console.log(textToSearch)
    const responseFromApi = await response.json() 
    console.log(responseFromApi) 
    gifosContainer.innerHTML = ""
    for (let i = 0; i < responseFromApi.pagination.count; i++)
    {
        if (i > amount) {break}
        const imageGifos = document.createElement("img")
        imageGifos.classList.add("showGifos")
        imageGifos.src = responseFromApi.data[i].images.original.url
        gifosContainer.appendChild(imageGifos)
    }
}//bien hasta ahora

const clickSeeMore = document.querySelector(".seeMore")
const clickSeeMoreDark = document.querySelector(".seeMoreDark")
// clickSeeMore.addEventListener("click", () => {
//     amount = amount + 12
//     console.log(amount)
//     getGifos(inputTextToSearch.value)
// }) //bien hasta ahora

let clickButton 
if (clickButton === clickSeeMore || 
    clickButton === clickSeeMoreDark) {
        clickButton.addEventListener("click", () => {
            amount = amount + 12
            console.log(amount)
            getGifos(inputTextToSearch.value)
    })
}//el operador lógico "O" parece que no funciona, además de otras situaciones
//al cambiar de modo day a dark siempre ocurren detalles en la pág que hacen
//ver que falta aún mucho trabajo.

const showLineHr = () => {
    lineHr.classList.remove("off")
}

const showTermH2 = () => {
    wordSearchH2.textContent = inputTextToSearch.value
    wordSearchH2.classList.remove("off")
}

const showIconAnotherSearch = () => {
    tryAnotherSearch.classList.remove("off")
    buttonSeeMore.classList.add("off")
    buttonSeeMoreDark.classList.add("off")
}

const hiddenIconAnotherSearch = () => {
    tryAnotherSearch.classList.add("off")
}

const showButton = () => {
    buttonSeeMore.classList.remove("off")
    buttonSeeMoreDark.classList.add("off")
}

const showButtonDark = () => {
    buttonSeeMoreDark.classList.remove("off")
    buttonSeeMore.classList.add("off")
}

const offH1Title = () => {
    offH1.classList.add("off")
}

const offIlustra_header = () => {
    offIlustration.classList.remove("ilustra_header")
    offIlustration.classList.add("off")
}

const positionCross = () => {
    console.log("entro a la función")
    for (i = 0; i < changePositionCross.length; i++) {
        changePositionCross[i].classList.replace("search", "searchToTerm")
    }
}






//click on trendings words
// const clickLi = document.querySelector(".ultrendings > li > a")
// clickLi.addEventListener("click", () => {
//     inputTextToSearch.value = a.textContent
//     console.log(inputTextToSearch.value)
//     getGifos(inputTextToSearch.value)
// })//no funciona esta funcion, continuare trabajando


/*----------------------------*/
/*     MOBILE GIFOS MAX       */
/*----------------------------*/
// const clickTrendingGifo = async (gifosTrending) => {
//     const threeGifos = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=3`)
//     const data = await response.json() 
//     console.log(data) 
//     response.data.forEach( gif => {
//         const image = document.createElement("img")
//         image.src = gif.images.original.url
//         document.querySelector("#newGifos").appendChild(image)
//     })
//     let imageNewGifos = document.querySelector("#newGifos > img")
//     imageNewGifos.addEventListener("click", () => {
//         const imgUser = document.createElement("h3")
//         imgUser.textContent = data[i].user.username
//         console.log(imgUser.textContent)
//         //const imgTitle = document.createElement("h2")
//     }) no muestra los tres gifs tendencia
// }