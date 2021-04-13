let magnifying = document.getElementById("magnifying")
let crossMagnifying = document.getElementById("crossMagnifying")

let magnifDark = document.getElementById("magniDark")
let crossMagnifDark = document.getElementById("crossMagniDark")

const gifosContainer = document.querySelector(".gifosContainer")

const formGifosFinder = document.querySelector("#gifosFinder")
inputTextToSearch = document.querySelector("#searchGifos")

const lineHr = document.querySelector(".lineUnderSearch")
const wordSearchH2 = document.querySelector(".termToSearch")

const tryAnotherSearch = document.querySelector("#tryAnotherSearch")

const offH1Mobile = document.querySelector("#h1Mobile")
const offH1Desktops = document.querySelector("#h1Desktops")
const offIlustration = document.querySelector(".ilustra_header")

const changePositionCross = document.querySelectorAll(".search")

const clickMagnifying = document.querySelector("#magnifying")
const clickMagniDark = document.querySelector("#magniDark")

sessionStorage.setItem("textToSearch", "");

/*------------------------------------------*/
/*   CLICK - GIFOS FINDER - FIRST SECTION   */
/*------------------------------------------*/
magnifying.addEventListener("click", () => {
    magnifying.classList.add("off")
    document.querySelector("#crossMagnifying").classList.remove("off")
})

crossMagnifying.addEventListener("click", () => {
    crossMagnifying.classList.add("off")
    document.querySelector("#magnifying").classList.remove("off")
})

/*----------------------------*/
/*          TRENDING          */
/*----------------------------*/
fetch(`https://api.giphy.com/v1/trending/searches?api_key=${API_KEY}`)
    .then (response => response.json())
    .then (response => {
        const ulcreate = document.createElement("ul")
        response.data.slice(0,5).forEach( term => {
            const liTerms = document.createElement("li")
            const aTerms = document.createElement("a")
            aTerms.textContent = term + ", "
            ulcreate.appendChild(liTerms)
            liTerms.appendChild(aTerms)
        })
        document.querySelector(".ultrendings").appendChild(ulcreate)

        const clickLista = document.querySelectorAll(".ultrendings > ul > li > a")
        clickLista.forEach( clicksito => {
            let texto = clicksito.innerText
            clicksito.addEventListener("click", () => {
                inputTextToSearch.value = texto
                getGifos(inputTextToSearch.value)
                showTermH2()
                showLineHr()
                showButtonsMore()
            })
        })
    })

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
        document.querySelector("#cross").classList.add("off")
        document.querySelector("#crossDark").classList.add("off")
        document.querySelector("#burgerDark").classList.remove("off")
        document.querySelector("#magnifying").classList.add("off")
        document.querySelector("#magniDark").classList.remove("off")
        document.querySelector("#magnifying").classList.add("off")
        document.querySelector(".seeMore").classList.add("off")
        changeBtnSlider()
        changesLogosHeader()
        changesIconsMedia()
        if (text == "darkLogoClick") {
            document.querySelector("#crossDark").classList.add("off")
            document.querySelector("#burger").classList.add("off")
            document.querySelector("#burgerDark").classList.remove("off")
        } else if (text == undefined || text == "repaintStyles") {
            document.querySelector("#menu").classList.add("off")
            document.querySelector("#crossDark").classList.add("off")
            document.querySelector("#burgerDark").classList.remove("off")
            showButtonsMore()
        }
    } else {
        document.body.classList.remove("dark")
        darkMode.innerHTML = "Modo Nocturno <hr>"
        document.querySelector("#crossDark").classList.add("off")
        document.querySelector("#burgerDark").classList.add("off")
        document.querySelector("#magnifying").classList.remove("off")
        document.querySelector("#magniDark").classList.add("off")
        document.querySelector("#cross").classList.remove("off")
        document.querySelector("#burger").classList.add("off")
        document.querySelector(".seeMoreDark").classList.add("off")
        changeBtnSlider()
        changesLogosHeader()
        changesIconsMedia()
        if (text == undefined || text == "repaintStyles") {
            document.querySelector("#menu").classList.add("off")
            document.querySelector("#cross").classList.add("off")
            document.querySelector("#burger").classList.remove("off")
            showButtonsMore()
        } else if (text == "dayLogoClick") {
            document.querySelector("#cross").classList.add("off")
            document.querySelector("#burger").classList.remove("off")
        }
    }
}

darkMode.addEventListener("click", () => {
    changeModeStyle()
})

changeModeStyle("repaintStyles")
/*------------------------------------------*/
/*    DARK MODE - CLICK - NAVIGATION BAR    */
/*------------------------------------------*/
crossDark.addEventListener("click", () => {
    crossDark.classList.add("off")
    document.querySelector("#crossDark").classList.remove("off")
    document.querySelector("#menu").classList.remove("off")
    document.querySelector("#magniDark").classList.add("off")
})

hamburDark.addEventListener("click", () => {
    hamburDark.classList.add("off")
    document.querySelector("#burgerDark").classList.remove("off")
    document.querySelector("#menu").classList.add("off")
    document.querySelector("#magniDark").classList.remove("off")
})

/*------------------------------------------------------*/
/*   DARK MODE - CLICK - GIFOS FINDER - FIRST SECTION   */
/*------------------------------------------------------*/
magnifDark.addEventListener("click", () => {
    magnifDark.classList.add("off")
    document.querySelector("#crossMagniDark").classList.remove("off")
})

crossMagnifDark.addEventListener("click", () => {
    crossMagnifDark.classList.add("off")
    document.querySelector("#magniDark").classList.remove("off")
})

/*----------------------------*/
/*        GIFOS FINDER        */
/*----------------------------*/
clickMagnifying.addEventListener("click", () =>{
    if (inputTextToSearch.value !== "") {
        getGifos(inputTextToSearch.value)
        showTermH2()
        showLineHr()
        showButtonsMore()
        offH1Title()
        offIlustra_header()
        hiddenIconAnotherSearch()
        positionCross()
        document.querySelector("#searchGifos").style.marginTop = "50px";
    } else {
        showLineHr()
        showIconAnotherSearch()
    }
})

clickMagniDark.addEventListener("click", () =>{
    if (inputTextToSearch.value !== "") {
        getGifos(inputTextToSearch.value)
        showTermH2()
        showLineHr()
        showButtonsMore()
        offH1Title()
        offIlustra_header()
        positionCross()
        hiddenIconAnotherSearch()
        document.querySelector("#searchGifos").style.marginTop = "50px";
    } else {
        showLineHr()
        showIconAnotherSearch()
    }
})

formGifosFinder.addEventListener("submit" , (text) => {
    text.preventDefault()
    if (inputTextToSearch.value !== "") {
        getGifos(inputTextToSearch.value)
        showTermH2()
        showLineHr()
        showButtonsMore()
        hiddenIconAnotherSearch()
        document.querySelector("#searchGifos").style.marginTop = "50px";
    } else {
        getGifos(inputTextToSearch.value)
        showTermH2()
        showLineHr()
        showIconAnotherSearch()
    }
})

const getGifos = async (textToSearch) => {
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${textToSearch}`)
    const responseFromApi = await response.json()
    gifosContainer.innerHTML = ""
    sessionStorage.setItem("textToSearch", textToSearch);
    for (let i = 0; i < responseFromApi.pagination.count; i++)
    {
        if (i > amount) {break}
        let arrayOfFavCheck = [];
        if (sessionStorage.getItem("fullHeart") !== "" && sessionStorage.getItem("fullHeart") !== null) {
            //-----------------------------------------------------//
            arrayOfFavCheck = JSON.parse(sessionStorage.getItem("fullHeart"));
            //-----------------------------------------------------//
        }
        let fatherShowGifos = document.createElement("div");
        fatherShowGifos.setAttribute("class", "gifosInTopFive");
        let brotherShowGifos = document.createElement("div");
        brotherShowGifos.setAttribute("class", "filterPurpleTopFive off");
        const imageGifos = document.createElement("img")
        imageGifos.classList.add("showGifos")
        imageGifos.setAttribute("id", responseFromApi.data[i].id)
        imageGifos.src = responseFromApi.data[i].images.fixed_width.url
        fatherShowGifos.appendChild(imageGifos)
        fatherShowGifos.appendChild(brotherShowGifos)
        gifosContainer.appendChild(fatherShowGifos)

        let iconFavTopFive = document.createElement("img");
        iconFavTopFive.src = './assets/icon-fav.svg';
        iconFavTopFive.setAttribute("class", "iconFavTopFive");
        
        let iconFavTopFiveActive = document.createElement("img");
        iconFavTopFiveActive.src = './assets/icon-fav-active.svg';
        iconFavTopFiveActive.setAttribute("class", "iconFavTopFive iconFavTopFiveActive off");

        let isFullHeart = arrayOfFavCheck.includes(responseFromApi.data[i].id)
        if (isFullHeart === true) {               
            iconFavTopFive.setAttribute("class", "iconFavTopFive off");
            iconFavTopFiveActive.setAttribute("class", "iconFavTopFive iconFavTopFiveActive");
        }
        
        let iconDowTopFive = document.createElement("img");
        iconDowTopFive.src = './assets/icon-download.svg';
        iconDowTopFive.setAttribute("class", "iconDowTopFive");
        
        let iconDowTopFiveActive = document.createElement("img");
        iconDowTopFiveActive.src = './assets/icon-download-hover.svg';
        iconDowTopFiveActive.setAttribute("class", "iconDowTopFive off");
        
        let iconMaxTopFive = document.createElement("img");
        iconMaxTopFive.src = './assets/icon-max-normal.svg';
        iconMaxTopFive.setAttribute("class", "iconMaxTopFive");
        
        let iconMaxTopFiveActive = document.createElement("img");
        iconMaxTopFiveActive.src = './assets/icon-max-hover.svg';
        iconMaxTopFiveActive.setAttribute("class", "iconMaxTopFive off");
        
        const titleGifosTopFive = document.createElement("h2")
        titleGifosTopFive.textContent = responseFromApi.data[i].title
        
        const userTopFive = document.createElement("h3")
        userTopFive.textContent = responseFromApi.data[i].username
    
        brotherShowGifos.appendChild(iconFavTopFive)
        brotherShowGifos.appendChild(iconFavTopFiveActive)
        brotherShowGifos.appendChild(iconDowTopFive)
        brotherShowGifos.appendChild(iconDowTopFiveActive)
        brotherShowGifos.appendChild(iconMaxTopFive)
        brotherShowGifos.appendChild(iconMaxTopFiveActive)
        brotherShowGifos.appendChild(titleGifosTopFive)
        brotherShowGifos.appendChild(userTopFive)

        if (window.screen.width > 768) {
            let fatherOfBrotherShowGifos = imageGifos.parentNode
            fatherOfBrotherShowGifos.addEventListener("mouseover", () => {
                let purpleBrother = fatherOfBrotherShowGifos.lastChild
                purpleBrother.classList.remove("off"); 
            })
            fatherOfBrotherShowGifos.addEventListener("mouseleave", () => {
                let purpleBrother = fatherOfBrotherShowGifos.lastChild
                purpleBrother.classList.add("off");
            })
        }
        //hover iconos favorite, download and max
        iconFavTopFive.addEventListener("mouseover", () => {
            iconFavTopFive.src = './assets/icon-fav-hover.svg'
        })
        
        iconFavTopFive.addEventListener("mouseout", () => {
            iconFavTopFive.src = './assets/icon-fav.svg'
        })

        iconDowTopFive.addEventListener("mouseover", () => {
            iconDowTopFive.src = './assets/icon-download-hover.svg'
        })
        
        iconDowTopFive.addEventListener("mouseout", () => {
            iconDowTopFive.src = './assets/icon-download.svg'
        })

        iconMaxTopFive.addEventListener("mouseover", () => {
            iconMaxTopFive.src = './assets/icon-max-hover.svg'
        })
        
        iconMaxTopFive.addEventListener("mouseout", () => {
            iconMaxTopFive.src = './assets/icon-max-normal.svg'
        })
    }
    //la siguiente function corresponde al evento click sobre el Gifo - Mobile  
    //el fin es mostrar el Gifo en tamaño maximo    
    let showGifos = document.querySelectorAll(".showGifos")
    showGifos.forEach(showGif => {
        showGif.addEventListener("click", () => {
            functionMaximumGifs(showGif);
        })
    })

    //la siguiente function corresponde al evento click sobre el boton icon-max desktop  
    //el fin es mostrar el Gifo en tamaño maximo    
    let iconsMaxPrincipalPage = document.querySelectorAll(".iconMaxTopFive")
    iconsMaxPrincipalPage.forEach(iconMaxPrincipal => {
        iconMaxPrincipal.addEventListener("click", () => {
            let parentIconMaxPrin = iconMaxPrincipal.parentNode
            let brotherParentIconMaxPrin = parentIconMaxPrin.previousSibling
            functionMaximumGifs(brotherParentIconMaxPrin);
        })
    })
    //la siguiente function corresponde al evento click sobre el icon-favorite
    let iconFavTopFive = document.querySelectorAll(".iconFavTopFive")
    iconFavTopFive.forEach(iconFavTop => {
        iconFavTop.addEventListener("click", () => {
            iconFavTop.classList.toggle("off")
            let brotherIconFavTop = iconFavTop.nextSibling
            brotherIconFavTop.classList.toggle("off");
            let parentIconFavTop = iconFavTop.parentNode
            let brotherParentIconFavTop = parentIconFavTop.previousSibling
            let idAttriTop = brotherParentIconFavTop.getAttribute("id")
            if (sessionStorage.getItem("fullHeart") !== "" && sessionStorage.getItem("fullHeart") !== null) {
                //-----------------------------------------------------//
                arrayFavorite = JSON.parse(sessionStorage.getItem("fullHeart"));
                //-----------------------------------------------------//
            }
            let inArrayFavorite = arrayFavorite.includes(idAttriTop)
            if (inArrayFavorite === false ) {
                arrayFavorite.push(idAttriTop);
            }
            sessionStorage.setItem("fullHeart", JSON.stringify(arrayFavorite));
            let textToSearch = sessionStorage.getItem("textToSearch")
            getGifos(textToSearch)
        })
    })
    //la siguiente function es para eliminar el icono de favoritos de los gifos y 
    //por ende de la lista de favoritos
    let iconFavTopFiveActive = document.querySelectorAll(".iconFavTopFiveActive")
    iconFavTopFiveActive.forEach(iconTopActive => {
        iconTopActive.addEventListener("click", () => {
            if (sessionStorage.getItem("fullHeart") !== "" && sessionStorage.getItem("fullHeart") !== null) {
                //-----------------------------------------------------//
                arrayFavorite = JSON.parse(sessionStorage.getItem("fullHeart"));
                //-----------------------------------------------------//
            }
            iconTopActive.classList.toggle("off")
            let brotherFavTopActive = iconTopActive.previousSibling
            brotherFavTopActive.classList.toggle("off");
            let parentFavTopActive = iconTopActive.parentNode
            let brotherParentFavTopActive = parentFavTopActive.previousSibling
            let idAttriTopActive = brotherParentFavTopActive.getAttribute("id")
            let indexArrayTop = arrayFavorite.indexOf(idAttriTopActive);
            if (indexArrayTop > -1) {
                arrayFavorite.splice(indexArrayTop, 1);
                sessionStorage.setItem("fullHeart", JSON.stringify(arrayFavorite));
                let textToSearch = sessionStorage.getItem("textToSearch")
                getGifos(textToSearch)
            }
        })
    })
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

const offH1Title = () => {
    offH1Mobile.classList.add("off")
    offH1Desktops.style.display="none";
}

const offIlustra_header = () => {
    offIlustration.classList.remove("ilustra_header")
    offIlustration.classList.add("off")
}

const positionCross = () => {
    for (i = 0; i < changePositionCross.length; i++) {
        changePositionCross[i].classList.replace("search", "searchToTerm")
    }
}