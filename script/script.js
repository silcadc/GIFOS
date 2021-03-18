let isDark;//isDark es el booleano con el que defino el estado day(false, es modo claro) o dark(true, entonces es modo nocturno)
//de la aplicación
//modeStyle, es la keyName utilizada en todo el programa para obtener y guardar
//la información de isDark
let headerCross = document.getElementById("burger")
let headerBurger = document.getElementById("cross")
//-
let magnifying = document.getElementById("magnifying")
let crossMagnifying = document.getElementById("crossMagnifying")
//-
const API_KEY = 'VfAQnZwBHdFaj75QChwBF5O4uEoTxQXh'
//-
const darkMode = document.querySelector("#darkMode")
let logoDark = document.querySelector("#logoDark")
let logo = document.querySelector("#logo")
//-
let crossDark = document.getElementById("burgerDark")
let hamburDark = document.getElementById("crossDark")
//-
let magnifDark = document.getElementById("magniDark")
let crossMagnifDark = document.getElementById("crossMagniDark")
//-
let amount = 11
const gifosContainer = document.querySelector(".gifosContainer")
//-
const clickSeeMore = document.querySelector(".seeMore")
const clickSeeMoreDark = document.querySelector(".seeMoreDark")
//-
const formGifosFinder = document.querySelector("#gifosFinder")
const inputTextToSearch = document.querySelector("#searchGifos")
//-
const lineHr = document.querySelector(".lineUnderSearch")
const wordSearchH2 = document.querySelector(".termToSearch")
//-
const tryAnotherSearch = document.querySelector("#tryAnotherSearch")

const buttonSeeMore = document.querySelector(".seeMore")
const buttonSeeMoreDark = document.querySelector(".seeMoreDark")
//-
const offH1 = document.querySelector(".color_purple")
const offIlustration = document.querySelector(".ilustra_header")
//-
const changePositionCross = document.querySelectorAll(".search")
//-
const clickMagnifying = document.querySelector("#magnifying")
const clickMagniDark = document.querySelector("#magniDark")

/*-------------------------------*/
/*   CHANGE MODE - DAY OR DARK   */
/*-------------------------------*/
let modeValidation = () => {
    let styleStatus = sessionStorage.getItem("modeStyle");
    console.log("1. styleStatus: " + styleStatus);
    if (styleStatus === null) {
        styleStatus = false;    
        console.log("entro al if");
        console.log("2. styleStatus: " + styleStatus);
        sessionStorage.setItem("modeStyle", styleStatus);//debo guardar el valor modeStyle, porque lo pido
        //al iniciar la funcion y si no lo guardo mi funcion seguira con un valor nulo y siempre entrara en 
        //if.
    } else if (styleStatus !== null) {
        isDark = (styleStatus == 'true');//el session Storage me entrega string y yo necesito Booleano por eso
        //se castea el dato, o se convierte el valor.
        console.log("entro al else");
        console.log("3. styleStatus: " + styleStatus);
        console.log("4. isDark: " + isDark);
        sessionStorage.setItem("modeStyle", styleStatus);
    }
}
modeValidation();
console.log(isDark);
/*----------------------------*/
/*   CLICK - NAVIGATION BAR   */
/*----------------------------*/
headerCross.addEventListener("click", () => {
    headerCross.classList.add("off")
    document.querySelector("#cross").classList.remove("off")
    document.querySelector("#menu").classList.remove("off")
})//verificado

headerBurger.addEventListener("click", () => {
    headerBurger.classList.add("off")
    document.querySelector("#burger").classList.remove("off")
    document.querySelector("#menu").classList.add("off")
})//verificado

/*------------------------------------------*/
/*   CLICK - GIFOS FINDER - FIRST SECTION   */
/*------------------------------------------*/
magnifying.addEventListener("click", () => {
    magnifying.classList.add("off")
    document.querySelector("#crossMagnifying").classList.remove("off")
})//verificado

crossMagnifying.addEventListener("click", (clic) => {
    clic.preventDefault()
    crossMagnifying.classList.add("off")
    document.querySelector("#magnifying").classList.remove("off")
})//verificado

//Con la function showButtonsMore busco validar la aparición de los botones de ver más
//de acuerdo con el styleMode que tenga la página. 
let showButtonsMore = () => {
    let checkClass = document.getElementById("titleToSearch");//
    console.log("Hola Soy Silena" + document.getElementById("titleToSearch"))
    console.log(document.getElementById("titleToSearch"))

    let hasClassOff = checkClass.classList.contains('off');//
    if (hasClassOff == false) {//si h2 no contiene Off quiere decir que se esta mostrando
        console.log("Entro a hasClassOff")
        if (isDark == false) {
            document.querySelector(".seeMore").classList.remove("off")
            document.querySelector(".seeMoreDark").classList.add("off")
        } else {
            console.log("Entro a hasClassOff")
            document.querySelector(".seeMore").classList.add("off")
            document.querySelector(".seeMoreDark").classList.remove("off")
        }
    }
}

/*----------------------------*/
/*          TRENDING          */
/*----------------------------*/
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
        
        const clickLista = document.querySelectorAll(".ultrendings > ul > li > a")
        console.log(document.querySelectorAll(".ultrendings > ul > li > a"))
        console.log("prueba en lista:" + clickLista)
        console.log(clickLista)
        console.log(clickLista.length)//imprime 5
        // for (i = 0; i < clickLista.length; i++) {
        //     console.log(i)//imprime los indices en consola
        //     console.log(clickLista[i].innerText)//imprime los indices en consola
        //     var texto = clickLista[i].innerText
        //     clickLista[i].addEventListener("click", () => {
        //         console.log(texto)
        //         inputTextToSearch.value = texto
        //         console.log(inputTextToSearch.value)
        //         getGifos(inputTextToSearch.value)
        //     })//no funciona esta funcion, continuare trabajando
        // }
        clickLista.forEach( clicksito => {
            let texto = clicksito.innerText
            clicksito.addEventListener("click", () => {
                console.log("es undefined?" + texto)
                inputTextToSearch.value = texto
                console.log(inputTextToSearch.value)
                getGifos(inputTextToSearch.value)
                showTermH2()
                showLineHr()
                showButtonsMore()
                // if (isDark === true) {
                //     console.log("que es esto?" + showButtonDark)
                //     showButtonDark()
                // } else {
                //     console.log("que ?" + showButton)
                //     showButton()//esta validación queda por fuera ya que la function showButtonsMore
                //es más efectiva para ahorrar algo de cód
                // }  
            })
        })//Tan raro, aun no se por que con el for no tomaba cada elemento "a" (cada trending traido con el fetch)
        //pero con el forEach si logre que cada evento click impactara en su elemento "a" correspondiente.
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
//probando
        let imgNewGifos = document.querySelectorAll("#newGifos > img")
        console.log("El Perro Loco  " + document.querySelectorAll("#newGifos > img"))
        console.log(imgNewGifos)
        imgNewGifos.forEach(imgGifosTrend => {
            imgGifosTrend.addEventListener("click", () => {
                console.log("Son Gifos" + imgGifosTrend)
                let containerMaxGifs = document.querySelector("#containerMaxGifs")
                let containerFather = document.createElement("div")
                let imgCross = document.createElement("img")
                let imgFavorite = document.createElement("img")
                let imgDownload = document.createElement("img")
                let titleGifos = document.createElement("h2")
                let user = document.createElement("h3")

                
                containerMaxGifs.appendChild(containerFather)
                containerFather.appendChild(imgCross)
                containerFather.appendChild(imgFavorite)
                containerFather.appendChild(imgDownload)
                containerFather.appendChild(titleGifos)
                containerFather.appendChild(user)
//Continuare avanzando en la creacion de la seccion para mostrar el tamaño maximo de los Gifos
//Con sus caracteristicas más importantes.
            })
        })
    })

/*----------------------------*/
/*         DARK MODE          */
/*----------------------------*/
const changeModeStyle = (text) => { // "" == "lightMode"
    if (text == "darkLogoClick") {//al darle click al logo dark
        isDark = true;
    }else if(text == "dayLogoClick") {
        isDark = false;
    }else if(text == "repaintStyles") {
    }else {
        if (isDark == true) {
            isDark = false;
        } else {
            isDark = true;
        }
    }//esta validación es necesario para los 4 casos que se presentar al cambiar de
    //pagina, y asi controlar que se mantenga el estilo.
//1er. caso cuando la funcion se ejecuta con un parametro vacio porque le doy click al 
//logo dark. 
//2do caso
    sessionStorage.setItem("modeStyle", isDark);//utilizando local storage se logra almacenar el modo
    //escogido sea dark o day, entonces debo utilizarlo para almacenar el mismo modo actual en los
    //script.
    console.log(isDark)
    console.log(isDark === true)

    if (isDark === true) {
        console.log("entrando en modo nocturno")
        document.body.classList.add("dark")
        darkMode.innerHTML = "Modo Diurno <hr>"
        //document.querySelector("#menu").classList.add("off")
        document.querySelector("#cross").classList.add("off")
        document.querySelector("#crossDark").classList.add("off")
        document.querySelector("#burgerDark").classList.remove("off")
        document.querySelector("#magnifying").classList.add("off")
        document.querySelector("#magniDark").classList.remove("off")
        document.querySelector("#magnifying").classList.add("off")
        document.querySelector(".seeMore").classList.add("off")
        console.log(text)
        if (text == "darkLogoClick") {
            console.log("if del click logo Dark")
            document.querySelector("#crossDark").classList.add("off")
            document.querySelector("#burger").classList.add("off")
            document.querySelector("#burgerDark").classList.remove("off")
        } else if (text == undefined || text == "repaintStyles") {//debo usar este operador lógico || porque cuando la
            //pág carga por primera vez text es undefined pero al moverme entre páginas (de dark a day por ejemplo),
            //text es igual a repaintStyles, si solo dejo una condición los cambios de modo no se ejecutan junto
            //y de acuerdo con todos los eventos que requiere la app.
            console.log("if del click repaintStyles")
            document.querySelector("#crossDark").classList.remove("off")
            document.querySelector("#burgerDark").classList.add("off")
            showButtonsMore()
        }
    } else {
        console.log("entrando en modo diurno")
        document.body.classList.remove("dark")
        darkMode.innerHTML = "Modo Nocturno <hr>"
        document.querySelector("#crossDark").classList.add("off")
        document.querySelector("#burgerDark").classList.add("off")
        document.querySelector("#magnifying").classList.remove("off")
        document.querySelector("#magniDark").classList.add("off")
        document.querySelector("#cross").classList.remove("off")
        document.querySelector("#burger").classList.add("off")
        document.querySelector(".seeMoreDark").classList.add("off")
        console.log("text:" + text)
        if (text == undefined || text == "repaintStyles") {//debo usar este operador lógico || porque cuando la
            //pág carga por primera vez text es undefined pero al moverme entre páginas (de dark a day por ejemplo),
            //text es igual a repaintStyles, si solo dejo una condición los cambios de modo no se ejecutan junto
            //y de acuerdo con todos los eventos que requiere la app.
            document.querySelector("#menu").classList.add("off")
            document.querySelector("#cross").classList.add("off") 
            document.querySelector("#burger").classList.remove("off")
            showButtonsMore()
        } else if (text == "dayLogoClick") {
            console.log("entrando dayLogoClick")
            document.querySelector("#cross").classList.add("off") 
            document.querySelector("#burger").classList.remove("off")
        }
    }
}

//verificado
//con la siguiente funcion quiero lograr el retono a la pagina principal en modo dark
//dando click al logo en modo Dark y no que regrese a la pagina principal en modo day
//--------------------------
//--------1er caso, es donde decido inicialmente cambiar el modo, doy click en barra 
//de navegación.
console.log(darkMode)
darkMode.addEventListener("click", () => {  
    changeModeStyle()
})
//2do caso cuando le doy click al logo en dark, para volver al inicio de la app 
//pero manteniendo el dark, el parametro lo identifico como darkLogoClick
logoDark.addEventListener("click", () => {
    changeModeStyle("darkLogoClick")
})
//3er caso cuando le doy click al logo en day, para volver al inicio de la app 
//pero manteniendo el day, el parametro lo identifico como dayLogoClick
logo.addEventListener("click", () => {
    changeModeStyle("dayLogoClick")
})
//El 4to caso es donde la funcion se ejecuta con un parametro para reescribir los estilos
changeModeStyle("repaintStyles")//cuando ejecuto la funcion con este prametro se hace un
//cambio con los booleanos
/*------------------------------------------*/
/*    DARK MODE - CLICK - NAVIGATION BAR    */
/*------------------------------------------*/
crossDark.addEventListener("click", () => {
    crossDark.classList.add("off")
    document.querySelector("#crossDark").classList.remove("off")
    document.querySelector("#menu").classList.remove("off")
    document.querySelector("#magniDark").classList.add("off") 
})//verificado

hamburDark.addEventListener("click", () => {
    hamburDark.classList.add("off")
    document.querySelector("#burgerDark").classList.remove("off")
    document.querySelector("#menu").classList.add("off")
    document.querySelector("#magniDark").classList.remove("off")
})//verificado

/*------------------------------------------------------*/
/*   DARK MODE - CLICK - GIFOS FINDER - FIRST SECTION   */
/*------------------------------------------------------*/
magnifDark.addEventListener("click", () => {
    magnifDark.classList.add("off")
    document.querySelector("#crossMagniDark").classList.remove("off")
})//verificado

crossMagnifDark.addEventListener("click", () => {
    crossMagnifDark.classList.add("off")
    document.querySelector("#magniDark").classList.remove("off")
})//verificado

/*----------------------------*/
/*        GIFOS FINDER        */
/*----------------------------*/
clickMagnifying.addEventListener("click", () =>{
    console.log(inputTextToSearch)
    console.log(inputTextToSearch.value)
    if (inputTextToSearch.value !== "") {
        getGifos(inputTextToSearch.value)
        showTermH2()
        showLineHr()
        //showButton()
        showButtonsMore()
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
        //showButtonDark()
        showButtonsMore()
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
        showButtonsMore()
        hiddenIconAnotherSearch()
    } else {
        getGifos(inputTextToSearch.value)
        showTermH2()
        showLineHr()
        showIconAnotherSearch()
    }//esta funcion ejecuta muy bien
})

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

clickSeeMore.addEventListener("click", () => {
    clickButtonSeeMore()
}) //bien hasta ahora

clickSeeMoreDark.addEventListener("click", () => {
    clickButtonSeeMore()
})

const clickButtonSeeMore = () => {
    amount = amount + 12
    console.log(amount)
    getGifos(inputTextToSearch.value)
}

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

// const showButton = () => {
//     buttonSeeMore.classList.remove("off")
//     buttonSeeMoreDark.classList.add("off")
// }//estas funciones para mostrar los botones de acuerdo con el stryleMode
//ya no son necesarias por la implementación de la funcion de showButtonsMore

// const showButtonDark = () => {
//     buttonSeeMoreDark.classList.remove("off")
//     buttonSeeMore.classList.add("off")
// }//estas funciones para mostrar los botones de acuerdo con el stryleMode
//ya no son necesarias por la implementación de la funcion de showButtonsMore

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

/*----------------------------*/
/*     MOBILE GIFOS MAX       */
/*----------------------------*/


