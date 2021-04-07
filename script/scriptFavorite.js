let isDark;
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
let headerCross = document.getElementById("burger")
let headerBurger = document.getElementById("cross")
//-
let amount = 11
const theFavoriteGifs = document.querySelector(".theFavoriteGifs")
//-
const clickSeeMore = document.querySelector(".seeMore")
const clickSeeMoreDark = document.querySelector(".seeMoreDark")
//-
const buttonSeeMore = document.querySelector(".seeMore")
const buttonSeeMoreDark = document.querySelector(".seeMoreDark")
//-
/*-------------------------------*/
/*   CHANGE MODE - DAY OR DARK   */
/*-------------------------------*/
let modeValidation = () => {
    let styleStatus = sessionStorage.getItem("modeStyle");
    if (styleStatus === null) {
        styleStatus = false;    
        sessionStorage.setItem("modeStyle", styleStatus);
    } else if (styleStatus !== null) {
        isDark = (styleStatus == 'true');
        sessionStorage.setItem("modeStyle", styleStatus);
    }
}
modeValidation();

/*----------------------------*/
/*   CLICK - NAVIGATION BAR   */
/*----------------------------*/
headerCross.addEventListener("click", () => {
    headerCross.classList.add("off")
    document.querySelector("#cross").classList.remove("off")
    document.querySelector("#menu").classList.remove("off")
})

headerBurger.addEventListener("click", () => {
    headerBurger.classList.add("off")
    document.querySelector("#burger").classList.remove("off")
    document.querySelector("#menu").classList.add("off")
})

let showButtonsMoreInFavorite = () => {
    let checkContentClass = document.getElementById("noContent");
    let hasOff = checkContentClass.classList.contains("off");//CONTAINS,solo me funciono 
    //utilizando getElementById, intente con class y era undefined.
    if (hasOff === true) {
        if (isDark === false) {
            document.querySelector(".seeMore").classList.remove("off")
            document.querySelector(".seeMoreDark").classList.add("off")
        } else {
            document.querySelector(".seeMore").classList.add("off")
            document.querySelector(".seeMoreDark").classList.remove("off")
        }
    }
}

let changeBtnSlider = () => {
    if (window.screen.width > 768) {
        if (isDark === true) {
            btnSliderLeft.style.display = "none"
            btnSliderRight.style.display = "none"
            btnSliderLeftDark.style.display = "block"
            btnSliderRightDark.style.display = "block"
        } else {
            btnSliderLeft.style.display = "block"
            btnSliderRight.style.display = "block"
            btnSliderLeftDark.style.display = "none"
            btnSliderRightDark.style.display = "none"
        }
    } else if (window.screen.width < 768) {
        btnSliderLeft.style.display = "none"
        btnSliderRight.style.display = "none"
        btnSliderLeftDark.style.display = "none"
        btnSliderRightDark.style.display = "none"
    } 
}
changeBtnSlider()      

let savedGifs = document.querySelector("#savedGifs")
const getGifosFavorites = () => {
    let arrayFavoriteToString = JSON.parse(sessionStorage.getItem("fullHeart"));
    let cantFavorite = arrayFavoriteToString.join(", ");
    if (arrayFavoriteToString.length > 0) {
        /*--------------------------------*/   
        /*        FAVORITES GIFOS         */   
        /*--------------------------------*/  
        fetch(`https://api.giphy.com/v1/gifs?api_key=${API_KEY}&ids=${cantFavorite}`)
        .then (response => response.json())
        .then (response => {
            savedGifs.innerHTML = ""
            for (let i = 0; i < response.data.length; i++){
                if (i > amount) {break}
                let fatherFavoGifos = document.createElement("div");
                fatherFavoGifos.setAttribute("class", "fatherFavoGifos");
                let brotherFavoGifos = document.createElement("div");
                brotherFavoGifos.setAttribute("class", "brotherFavoGifos off");
                const image = document.createElement("img")
                image.src = response.data[i].images.original.url
                image.setAttribute("class", "favoritesGifosCheck")
                
                fatherFavoGifos.appendChild(image)
                fatherFavoGifos.appendChild(brotherFavoGifos)
                savedGifs.appendChild(fatherFavoGifos)
        
                let iconFavoGifos = document.createElement("img");
                iconFavoGifos.src = '/assets/icon-fav.svg';
                iconFavoGifos.setAttribute("class", "iconFavoGifos");
                
                let iconFavoGifosActive = document.createElement("img");
                iconFavoGifosActive.src = '/assets/icon-fav-active.svg';
                iconFavoGifosActive.setAttribute("class", "iconFavoGifos off");
                
                let iconDowFavoGifos = document.createElement("img");
                iconDowFavoGifos.src = '/assets/icon-download.svg';
                iconDowFavoGifos.setAttribute("class", "iconDowFavoGifos");
                
                let iconDowFavoGifosActive = document.createElement("img");
                iconDowFavoGifosActive.src = '/assets/icon-download-hover.svg';
                iconDowFavoGifosActive.setAttribute("class", "iconDowFavoGifos off");
                
                let iconMaxFavoGifos = document.createElement("img");
                iconMaxFavoGifos.src = '/assets/icon-max-normal.svg';
                iconMaxFavoGifos.setAttribute("class", "iconMaxFavoGifos");
                
                let iconMaxFavoGifosActive = document.createElement("img");
                iconMaxFavoGifosActive.src = '/assets/icon-max-hover.svg';
                iconMaxFavoGifosActive.setAttribute("class", "iconMaxFavoGifos off");
                
                const titleFavoGifos = document.createElement("h2")
                titleFavoGifos.textContent = response.data[i].title
                
                const userFavoGifos = document.createElement("h3")
                userFavoGifos.textContent = response.data[i].username
            
                brotherFavoGifos.appendChild(iconFavoGifos)
                brotherFavoGifos.appendChild(iconFavoGifosActive)
                brotherFavoGifos.appendChild(iconDowFavoGifos)
                brotherFavoGifos.appendChild(iconDowFavoGifosActive)
                brotherFavoGifos.appendChild(iconMaxFavoGifos)
                brotherFavoGifos.appendChild(iconMaxFavoGifosActive)
                brotherFavoGifos.appendChild(titleFavoGifos)
                brotherFavoGifos.appendChild(userFavoGifos)
                
                let fatherFavoriteGifos = image.parentNode
                fatherFavoriteGifos.addEventListener("mouseover", () => {
                    let purpleBrotherFavoGifos = fatherFavoGifos.lastChild
                    purpleBrotherFavoGifos.classList.remove("off"); 
                })
                fatherFavoriteGifos.addEventListener("mouseleave", () => {
                    let purpleBrotherFavoGifos = fatherFavoGifos.lastChild
                    purpleBrotherFavoGifos.classList.add("off");
                })
            }
            document.querySelector(".noContent").classList.add("off");
            document.querySelector(".noContentText").classList.add("off");
            showButtonsMoreInFavorite() 
        })
    }
}

/*----------------------------*/
/*         DARK MODE          */
/*----------------------------*/
const changeModeStyle = (text) => { 
    if (text == "darkLogoClick") {
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
    }

    sessionStorage.setItem("modeStyle", isDark);
    
    if (isDark === true) {
        document.body.classList.add("dark")
        darkMode.innerHTML = "Modo Diurno <hr>"
        changeBtnSlider()
        changesLogosHeader()
        showButtonsMoreInFavorite()
        getGifosFavorites()
        if (text == "darkLogoClick") {
            document.querySelector("#crossDark").classList.add("off")
            document.querySelector("#burger").classList.add("off")
            document.querySelector("#burgerDark").classList.remove("off")
        } else if (text == undefined || text == "repaintStyles") {
            document.querySelector("#menu").classList.add("off")
            document.querySelector("#burgerDark").classList.remove("off")
            document.querySelector("#cross").classList.add("off")
        }
    } else {
        document.body.classList.remove("dark")
        darkMode.innerHTML = "Modo Nocturno <hr>"
        changeBtnSlider()
        changesLogosHeader()
        showButtonsMoreInFavorite()
        getGifosFavorites()
        if (text == undefined || text == "repaintStyles") {
            document.querySelector("#menu").classList.add("off")
            document.querySelector("#cross").classList.add("off")
            document.querySelector("#crossDark").classList.add("off") 
            document.querySelector("#burger").classList.remove("off")
            document.querySelector("#burgerDark").classList.add("off")
        } else if (text == "dayLogoClick") {
            document.querySelector("#cross").classList.add("off") 
            document.querySelector("#burger").classList.remove("off")
        }
    }
}

darkMode.addEventListener("click", () => {  
    changeModeStyle()
})

let changesLogosHeader = () => {
    if (window.screen.width > 768) {
        if (isDark === true) { 
            logoDarkDesktop.style.display = "block"
            logoDesktop.style.display = "none"
            logoDark.style.display = "none"
            logo.style.display = "none" 
        } else {
            logoDarkDesktop.style.display = "none"
            logoDesktop.style.display = "block"
            logoDark.style.display = "none"
            logo.style.display = "none" 
            
        }
    } else if (window.screen.width < 768) {
        if (isDark === true) { 
            logoDesktop.style.display = "none"
            logoDarkDesktop.style.display = "none"
            logo.style.display = "none" 
            logoDark.style.display = "block"
        } else {
            logoDesktop.style.display = "none"
            logoDarkDesktop.style.display = "none"
            logoDark.style.display = "none"
            logo.style.display = "block" 
        }     
    } 
}
changesLogosHeader()

changeModeStyle("repaintStyles")

/*------------------------------------------*/
/*    DARK MODE - CLICK - NAVIGATION BAR    */
/*------------------------------------------*/
crossDark.addEventListener("click", () => {
    crossDark.classList.add("off")
    document.querySelector("#crossDark").classList.remove("off")
    document.querySelector("#menu").classList.remove("off")
})

hamburDark.addEventListener("click", () => {
    hamburDark.classList.add("off")
    document.querySelector("#burgerDark").classList.remove("off")
    document.querySelector("#menu").classList.add("off")
})


clickSeeMore.addEventListener("click", () => {
    clickButtonSeeMore()

}) 

clickSeeMoreDark.addEventListener("click", () => {
    clickButtonSeeMore()
})

const clickButtonSeeMore = () => {
    amount = amount + 12
    getGifosFavorites()
}

btnSliderRight.addEventListener("mouseover", () => {
    btnSliderRight.src = '/assets/Button-Slider-right-hover.svg'
})

btnSliderRight.addEventListener("mouseout", () => {
    btnSliderRight.src = '/assets/Button-Slider-right.svg'
})

btnSliderLeft.addEventListener("mouseover", () => {
    btnSliderLeft.src = '/assets/Button-Slider-left-hover.svg'
})

btnSliderLeft.addEventListener("mouseout", () => {
    btnSliderLeft.src = '/assets/button-slider-left.svg'
})

btnSliderRightDark.addEventListener("mouseover", () => {
    btnSliderRightDark.src = '/assets/Button-Slider-right-hover.svg'
})

btnSliderRightDark.addEventListener("mouseout", () => {
    btnSliderRightDark.src = '/assets/button-slider-right-md-noct.svg'
})

btnSliderLeftDark.addEventListener("mouseover", () => {
    btnSliderLeftDark.src = '/assets/Button-Slider-left-hover.svg'
})

btnSliderLeftDark.addEventListener("mouseout", () => {
    btnSliderLeftDark.src = '/assets/button-slider-left-md-noct.svg'
})