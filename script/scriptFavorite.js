let isDark = false//isDark es el booleano con el que defino el estado day(false, es modo claro) o dark(true, entonces es modo nocturno)
//de la aplicación
//modeStyle, es la keyName utilizada en todo el programa para obtener y guardar
//la información de isDark
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
        isDark = Boolean(styleStatus);//el session Storage me entrega string y yo necesito Booleano por eso
        //se castea el dato, o se convierte el valor.
        console.log("entro al else");
        console.log("3. styleStatus: " + styleStatus);
        sessionStorage.setItem("modeStyle", styleStatus);
    }
}
modeValidation();
console.log(isDark);

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

/*----------------------------*/
/*         DARK MODE          */
/*----------------------------*/
const changeModeStyle = (text) => { // "" == "lightMode"
    if (text == "darkLogoClick") {//al darle click al logo dark
        console.log("Entrendo por darkLogo");
        isDark = true;
    }else if(text == "dayLogoClick") {
        console.log("Entrendo por DAYLogo");
        isDark = false;
    }else if(text == "repaintStyles") {
        console.log("Entrendo A Repintar Styles");
        console.log(isDark)
    }else {
        if (isDark == true) {
            console.log("Cambiando IsDark a Falso");
            isDark = false;
        } else {
            console.log("Cambiando IsDark a verdad");
            isDark = true;
        }
    }
    console.log(isDark)
    sessionStorage.setItem("modeStyle", isDark);
    console.log(isDark)
    console.log(isDark === true)
    
    if (isDark === true) {
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

const darkMode = document.querySelector("#darkMode")
console.log(darkMode)
darkMode.addEventListener("click", () => {  
    changeModeStyle()
})

let logoDark = document.querySelector("#logoDark")
logoDark.addEventListener("click", () => {
    changeModeStyle("darkLogoClick")
})

let logo = document.querySelector("#logo")
logo.addEventListener("click", () => {
    changeModeStyle("dayLogoClick")
})

changeModeStyle("repaintStyles")

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

