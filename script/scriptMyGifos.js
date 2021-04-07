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
const savedmyOwnGifs = document.querySelector("#savedmyOwnGifs")
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
    let hasOff = checkContentClass.classList.contains("off");
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
        //getGifosFavorites()
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
        //getGifosFavorites()
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

gifos = JSON.parse(window.localStorage.getItem('mygifos'))
console.log(gifos)

getGifos = async () => {
    const response = await fetch(`https://api.giphy.com/v1/gifs?api_key=${API_KEY}&ids=${gifos.join()}`)
    const result = await response.json()  
    savedmyOwnGifs.innerHTML = "";
    for (let i = 0; i < result.data.length; i++){
        console.log(result.data.length)
        if (i > amount) {break}
        let fatherMyGifosCheck = document.createElement("div");
        fatherMyGifosCheck.setAttribute("class", "fatherMyGifosCheck");
        let brotherMyGifosCheck = document.createElement("div");
        brotherMyGifosCheck.setAttribute("class", "brotherMyGifosCheck off");
        const image = document.createElement('img')
        image.setAttribute("class", "myGifosCheck")
        image.src = result.data[i].images.original.url
        fatherMyGifosCheck.appendChild(image)
        fatherMyGifosCheck.appendChild(brotherMyGifosCheck)
        savedmyOwnGifs.appendChild(fatherMyGifosCheck)

        let iconTrashMyGifos = document.createElement("img");
        iconTrashMyGifos.src = '/assets/icon-trash-normal.svg';
        iconTrashMyGifos.setAttribute("class", "iconTrashMyGifos");
        
        let iconTrashMyGifosActive = document.createElement("img");
        iconTrashMyGifosActive.src = '/assets/con-trash-hover.svg';
        iconTrashMyGifosActive.setAttribute("class", "iconTrashMyGifos off");
        
        let iconDowMyGifos = document.createElement("img");
        iconDowMyGifos.src = '/assets/icon-download.svg';
        iconDowMyGifos.setAttribute("class", "iconDowMyGifos");
        
        let iconDowMyGifosActive = document.createElement("img");
        iconDowMyGifosActive.src = '/assets/icon-download-hover.svg';
        iconDowMyGifosActive.setAttribute("class", "iconDowMyGifos off");
        
        let iconMaxMyGifos = document.createElement("img");
        iconMaxMyGifos.src = '/assets/icon-max-normal.svg';
        iconMaxMyGifos.setAttribute("class", "iconMaxMyGifos");
        
        let iconMaxMyGifosActive = document.createElement("img");
        iconMaxMyGifosActive.src = '/assets/icon-max-hover.svg';
        iconMaxMyGifosActive.setAttribute("class", "iconMaxMyGifos off");
        
        const titleGifosMyGifos = document.createElement("h2")
        titleGifosMyGifos.textContent = result.data[i].title
        
        const userMyGifos = document.createElement("h3")
        userMyGifos.textContent = result.data[i].username
    
        brotherMyGifosCheck.appendChild(iconTrashMyGifos)
        brotherMyGifosCheck.appendChild(iconTrashMyGifosActive)
        brotherMyGifosCheck.appendChild(iconDowMyGifos)
        brotherMyGifosCheck.appendChild(iconDowMyGifosActive)
        brotherMyGifosCheck.appendChild(iconMaxMyGifos)
        brotherMyGifosCheck.appendChild(iconMaxMyGifosActive)
        brotherMyGifosCheck.appendChild(titleGifosMyGifos)
        brotherMyGifosCheck.appendChild(userMyGifos)

        if (window.screen.width > 768) {
            let fatherOfMyGifos = image.parentNode
            fatherOfMyGifos.addEventListener("mouseover", () => {
                let purpleBrotherMyGifos = fatherOfMyGifos.lastChild
                purpleBrotherMyGifos.classList.remove("off"); 
            })
            fatherOfMyGifos.addEventListener("mouseleave", () => {
                let purpleBrotherMyGifos = fatherOfMyGifos.lastChild
                purpleBrotherMyGifos.classList.add("off");
            })
        }
    }
    document.querySelector(".noContent").classList.add("off");
    document.querySelector(".noContentText").classList.add("off");
    showButtonsMoreInFavorite() 
}
getGifos()

clickSeeMore.addEventListener("click", () => {
    clickButtonSeeMore()
}) 

clickSeeMoreDark.addEventListener("click", () => {
    clickButtonSeeMore()
})

const clickButtonSeeMore = () => {
    amount = amount + 12
    getGifos()
}