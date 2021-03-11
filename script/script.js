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

/*------------------------------------------------------*/
/*   DARK MODE - CLICK - GIFOS FINDER - FIRST SECTION   */
/*------------------------------------------------------*/
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

/*----------------------------*/
/*       BACK DAYMODE         */
/*----------------------------*/
// const dayMode = document.querySelector("#dayMode")
// dayMode.addEventListener("click", () => {
//     document.body.classList.toggle("dark")
//     document.querySelector("#menu").classList.add("off")
//     document.querySelector("#cross").classList.add("off")
//     document.querySelector("#burger").classList.remove("off")
//     document.querySelector("#burgerDark").classList.add("off")
//     document.querySelector("#crossDark").classList.add("off")
// }) 
//  ¡¡¡¡agregue al elemento ancla #dayMode un enlace
//     al index.html para volver al modo light!!!

/*----------------------------*/
/*        GIFOS FINDER        */
/*----------------------------*/
const formGifosFinder = document.querySelector("#gifosFinder")
const inputTextToSearch = document.querySelector("#searchGifos")
const lineHr = document.querySelector(".lineUnderSearch")
const wordSearchH2 = document.querySelector(".termToSearch")
const tryAnotherSearch = document.querySelector("#tryAnotherSearch")
const buttonSeeMore = document.querySelector(".seeMore")
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
        positionCross()
    } else {
        getGifos(inputTextToSearch.value)
        showTermH2()
        showLineHr()
        showIconAnotherSearch()
    }
})
//esta es la funcion para clickMagniDark, aunque parece no funcionar
clickMagniDark.addEventListener("click", () =>{
    console.log(inputTextToSearch)
    console.log(inputTextToSearch.value)
    if (inputTextToSearch.value !== "") {
        getGifos(inputTextToSearch.value)
        showTermH2()
        showLineHr()
        showButton()
        offH1Title()
        offIlustra_header()
        positionCross()
        hiddenIconAnotherSearch()
    } else {
        getGifos(inputTextToSearch.value)
        showTermH2()
        showLineHr()
        showIconAnotherSearch()
    }
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
    }
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
}

const clickSeeMore = document.querySelector(".seeMore")
clickSeeMore.addEventListener("click", () => {
    amount = amount + 12
    console.log(amount)
    getGifos(inputTextToSearch.value)
})

const showLineHr = () => {
    lineHr.classList.remove("off")
}

const showTermH2 = () => {
    wordSearchH2.textContent = inputTextToSearch.value
    wordSearchH2.classList.remove("off")
}

const showIconAnotherSearch = () => {
    tryAnotherSearch.classList.remove("off")
}

const hiddenIconAnotherSearch = () => {
    tryAnotherSearch.classList.add("off")
    //buttonSeeMore.classList.add("off")
}

const showButton = () => {
    buttonSeeMore.classList.remove("off")
}

const offH1Title = () => {
    offH1.classList.add("off")
}

const offIlustra_header = () => {
    offIlustration.classList.remove("ilustra_header")
    offIlustration.classList.add("off")
}

// function myFunction() {
//     var x, i;
//     x = document.querySelectorAll(".example");
//     for (i = 0; i < x.length; i++) {
//       x[i].style.backgroundColor = "red";
//     }ejemplo de stackoverflow
// }

const positionCross = () => {
    console.log("entro a la función")
    //changePositionCross.classList.replace("search", "searchToTerm")
    for (i = 0; i < changePositionCross.length; i++) {
        changePositionCross[i].classList.replace("search", "searchToTerm")
    }//pude utilizar este for para mejorar la función positionCross 
    //y la variable changePositionCross accede a todos los nodos con la 
    //clase .search, gracias al uso de document.querySelectorAll
    //necesito un for para aplicar el remplazo de clases a todos los elementos
    //con .search porque all solo aplicara cambios a un solo nodo que yo 
    //especifique, con el for puedo recorer la longitud de nodos con .search
    console.log(changePositionCross)
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