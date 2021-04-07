let isDark;
//-
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
let logoDarkDesktop = document.querySelector("#logoDarkDesktop")
let logoDesktop = document.querySelector("#logoDesktop")
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
const offH1Mobile = document.querySelector("#h1Mobile")
const offH1Desktops = document.querySelector("#h1Desktops")
const offIlustration = document.querySelector(".ilustra_header")
//-
const changePositionCross = document.querySelectorAll(".search")
//-
const clickMagnifying = document.querySelector("#magnifying")
const clickMagniDark = document.querySelector("#magniDark")
//-
const btnSliderLeft = document.querySelector("#btnSliderLeft")
const btnSliderRight = document.querySelector("#btnSliderRight")
const btnSliderLeftDark = document.querySelector("#btnSliderLeftDark")
const btnSliderRightDark = document.querySelector("#btnSliderRightDark")
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

let showButtonsMore = () => {
    let checkClass = document.getElementById("titleToSearch");
    let hasClassOff = checkClass.classList.contains('off');
    if (hasClassOff == false) {
        if (isDark == false) {
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
/*       GIFOS IN TREND       */
/*----------------------------*/
fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`)
    .then (response => response.json())
    .then (response => {
        let apiResponseList = response.data
        response.data.forEach( gif => {
            let purpleFilterContainer = document.createElement("div")
            purpleFilterContainer.setAttribute("class", "purpleFilterWithIcons off");
            const image = document.createElement("img")
            const divContainer = document.createElement("div")
            divContainer.setAttribute("id", "gifosInTrendingContainer");
            image.src = gif.images.fixed_width.url
            image.setAttribute("id", gif.id)
            image.setAttribute("class", 'gifTrends')
            divContainer.appendChild(image)
            divContainer.appendChild(purpleFilterContainer)
            
            const anchor = document.createElement("a");
            const href = document.createAttribute("href");

            let iconFavorite = document.createElement("img");
            iconFavorite.src = './assets/icon-fav.svg';
            iconFavorite.setAttribute("class", "iconFavoriteStyle");
            
            let iconFavoriteActive = document.createElement("img");
            iconFavoriteActive.src = './assets/icon-fav-active.svg';
            iconFavoriteActive.setAttribute("class", "iconFavoriteStyle off");
           
            let iconDownload = document.createElement("img");
            iconDownload.src = './assets/icon-download.svg';
            iconDownload.setAttribute("class", "iconDownloadStyle");
            
            let iconDownloadActive = document.createElement("img");
            iconDownloadActive.src = './assets/icon-download-hover.svg';
            iconDownloadActive.setAttribute("class", "iconDownloadStyle off");
            
            let iconMaximum = document.createElement("img");
            iconMaximum.src = './assets/icon-max-normal.svg';
            iconMaximum.setAttribute("class", "iconMaximumStyle");
            
            let iconMaximumActive = document.createElement("img");
            iconMaximumActive.src = './assets/icon-max-hover.svg';
            iconMaximumActive.setAttribute("class", "iconMaximumStyle off");
           
            document.querySelector("#newGifos").appendChild(divContainer);
           
            //anchor.appendChild(containerImage)
            purpleFilterContainer.appendChild(iconFavorite)
            purpleFilterContainer.appendChild(iconFavoriteActive)
            purpleFilterContainer.appendChild(iconDownload)
            purpleFilterContainer.appendChild(iconDownloadActive)
            purpleFilterContainer.appendChild(iconMaximum)
            purpleFilterContainer.appendChild(iconMaximumActive)

            let idOfGifosMouseOver = image.getAttribute("id")

            for (i=0; i<apiResponseList.length; i++) {
                if (idOfGifosMouseOver === apiResponseList[i].id) {
                    const titleGifos = document.createElement("h2")
                    titleGifos.textContent = apiResponseList[i].title
                    const user = document.createElement("h3")
                    user.textContent = apiResponseList[i].username
                    purpleFilterContainer.appendChild(titleGifos)
                    purpleFilterContainer.appendChild(user)
                    href.value = apiResponseList[i].images.fixed_width.url
                    break;
                }
            }
        })

        let imgNewGifos = document.querySelectorAll("#newGifos > div > img")
        imgNewGifos.forEach(imgGifosTrend => {
            imgGifosTrend.addEventListener("click", () => {
                let arrayFavorite = [];
                if (sessionStorage.getItem("fullHeart") !== "" && sessionStorage.getItem("fullHeart") !== null) {
                    //-----------------------------------------------------//
                    arrayFavorite = JSON.parse(sessionStorage.getItem("fullHeart"));
                    //-----------------------------------------------------//
                }

                let isFavorite = false;
                let idGifos = imgGifosTrend.getAttribute("id")
                for (i=0; i<arrayFavorite.length; i++) {
                    if (idGifos === arrayFavorite[i]) {
                        isFavorite = true;
                    }
                }

                let containerMaxGifs = document.querySelector("#containerMaxGifs")
                let containerImage = document.createElement("img")

                const anchor = document.createElement("a");
                const href = document.createAttribute("href");

                let imgCross = document.createElement("img")
                let imgFavorite = document.createElement("img")
                let favoriteActive = document.createElement("img")
                let imgDownload = document.createElement("img")

                if (isDark == true) {
                    containerMaxGifs.style.background = "#000000";

                    imgCross.src = './assets/close-modo-noct.svg';
                    imgCross.setAttribute("id", "imgCrossMax")
                } else if (isDark !== true) {
                    containerMaxGifs.style.backgroundColor = "#ffffff";

                    imgCross.src = './assets/close.svg';
                    imgCross.setAttribute("id", "imgCrossMax")
                }

                anchor.setAttributeNode(href);
                anchor.setAttribute("download", "Gifo");
                anchor.setAttribute("id", "anchorDownload")
                //anchor.setAttribute("target", "_blank")

                containerImage.src = imgGifosTrend.src
                containerImage.setAttribute("id", "imgMaxSize")

                imgFavorite.src = './assets/icon-fav-hover.svg';
                imgFavorite.setAttribute("id", "imgFavoriteMax");

                favoriteActive.src = './assets/icon-fav-active.svg'
                favoriteActive.setAttribute("class", "off");
                favoriteActive.setAttribute("id", "favoriteActive");

                if (isFavorite === true) {
                    favoriteActive.classList.remove("off");
                    imgFavorite.classList.add("off");
                }else {
                    imgFavorite.classList.remove("off");
                    favoriteActive.classList.add("off");
                }

                imgDownload.src = './assets/icon-download-hover.svg';
                imgDownload.setAttribute("id", "imgDownloadMax")

                for (i=0; i<apiResponseList.length; i++) {
                    if (idGifos === apiResponseList[i].id) {
                        const titleGifos = document.createElement("h2")
                        titleGifos.textContent = apiResponseList[i].title
                        const user = document.createElement("h3")
                        user.textContent = apiResponseList[i].username
                        document.querySelector("#containerMaxGifs").appendChild(titleGifos)
                        document.querySelector("#containerMaxGifs").appendChild(user)
                        href.value = apiResponseList[i].images.fixed_width.url
                        break;
                    }
                }

                anchor.appendChild(containerImage)
                containerMaxGifs.appendChild(anchor)
                containerMaxGifs.appendChild(imgCross)
                containerMaxGifs.appendChild(imgFavorite)
                containerMaxGifs.appendChild(favoriteActive)
                containerMaxGifs.appendChild(imgDownload)

                document.querySelector("#containerMaxGifs").style.display = "block"

                const crossMax = document.getElementById("imgCrossMax")
                crossMax.addEventListener("click", () => {
                    containerMaxGifs.innerHTML = ""
                    document.querySelector("#containerMaxGifs").style.display = "none"
                })

                // const downloadMax = document.getElementById("imgDownloadMax")
                // downloadMax.addEventListener("click", () => {

                // })

                imgFavorite.addEventListener("click", () => {
                    imgFavorite.classList.toggle("off")
                    favoriteActive.classList.remove("off");
                    arrayFavorite.push(idGifos);
                    sessionStorage.setItem("fullHeart", JSON.stringify(arrayFavorite));
                })

                favoriteActive.addEventListener("click", () => {
                    favoriteActive.classList.toggle("off")
                    imgFavorite.classList.remove("off")
                    let index = arrayFavorite.indexOf(idGifos);
                    if (index > -1) {
                        arrayFavorite.splice(index, 1);
                        sessionStorage.setItem("fullHeart", JSON.stringify(arrayFavorite));
                    }
                })
            })

            //estas funciones comentareadas funcionaban pero provocaban un conflicto, cuando hacia mouseover
            //o mouseleave se bloqueaba y no mostraba correctamente el filtro morado sobre el gifo, el evento
            //estaba en el hermano. 
            // imgGifosTrend.addEventListener("mouseover", () => {
            //     let purpleSibling = imgGifosTrend.nextSibling
            //     purpleSibling.classList.remove("off");
            // })
            // imgGifosTrend.addEventListener("mouseleave", () => {
            //     let purpleSibling = imgGifosTrend.nextSibling
            //     purpleSibling.classList.add("off");
            // })
            //las funciones fueron modificadas, incluyendo el evento al padre.
            //el padre reconoce limpiamente si el mouse esta sobre o fuera del gifo
            //entre hermanos hay un conflicto
            let father = imgGifosTrend.parentNode
            father.addEventListener("mouseover", () => {
                let purpleSibling = father.lastChild
                purpleSibling.classList.remove("off"); 
            })
            father.addEventListener("mouseleave", () => {
                let purpleSibling = father.lastChild
                purpleSibling.classList.add("off");
            })
        })

        let gifTrends = document.querySelectorAll(".gifTrends");

        let index = 3;
        let show = function(increase) {
            console.log(show)
            index = index + increase;
            index = Math.min(
                Math.max(index,0),
                gifTrends.length-1
            );
            gifTrends[index].scrollIntoView({behavior: 'smooth'});
        }

        btnSliderRight.addEventListener('click', function(){
            show(+1);
        });

        btnSliderRightDark.addEventListener('click', function(){
            show(+1);
        });

        btnSliderLeft.addEventListener('click', function(){
            show(-1);
        });

        btnSliderLeftDark.addEventListener('click', function(){
            show(-1);
        });
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
    for (let i = 0; i < responseFromApi.pagination.count; i++)
    {
        if (i > amount) {break}
        let fatherShowGifos = document.createElement("div");
        fatherShowGifos.setAttribute("class", "gifosInTopFive");
        let brotherShowGifos = document.createElement("div");
        brotherShowGifos.setAttribute("class", "filterPurpleTopFive off");
        const imageGifos = document.createElement("img")
        imageGifos.classList.add("showGifos")
        imageGifos.src = responseFromApi.data[i].images.fixed_width.url
        fatherShowGifos.appendChild(imageGifos)
        fatherShowGifos.appendChild(brotherShowGifos)
        gifosContainer.appendChild(fatherShowGifos)

        let iconFavTopFive = document.createElement("img");
        iconFavTopFive.src = './assets/icon-fav.svg';
        iconFavTopFive.setAttribute("class", "iconFavTopFive");
        
        let iconFavTopFiveActive = document.createElement("img");
        iconFavTopFiveActive.src = './assets/icon-fav-active.svg';
        iconFavTopFiveActive.setAttribute("class", "iconFavTopFive off");
        
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
}

clickSeeMore.addEventListener("click", () => {
    clickButtonSeeMore()
})

clickSeeMoreDark.addEventListener("click", () => {
    clickButtonSeeMore()
})

const clickButtonSeeMore = () => {
    amount = amount + 12
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

btnSliderRight.addEventListener("mouseover", () => {
    btnSliderRight.src = './assets/Button-Slider-right-hover.svg'
})

btnSliderRight.addEventListener("mouseout", () => {
    btnSliderRight.src = './assets/Button-Slider-right.svg'
})

btnSliderLeft.addEventListener("mouseover", () => {
    btnSliderLeft.src = './assets/Button-Slider-left-hover.svg'
})

btnSliderLeft.addEventListener("mouseout", () => {
    btnSliderLeft.src = './assets/button-slider-left.svg'
})

btnSliderRightDark.addEventListener("mouseover", () => {
    btnSliderRightDark.src = './assets/Button-Slider-right-hover.svg'
})

btnSliderRightDark.addEventListener("mouseout", () => {
    btnSliderRightDark.src = './assets/button-slider-right-md-noct.svg'
})

btnSliderLeftDark.addEventListener("mouseover", () => {
    btnSliderLeftDark.src = './assets/Button-Slider-left-hover.svg'
})

btnSliderLeftDark.addEventListener("mouseout", () => {
    btnSliderLeftDark.src = './assets/button-slider-left-md-noct.svg'
})