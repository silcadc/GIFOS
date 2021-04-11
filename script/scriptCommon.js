let isDark;
let amount = 11
const API_KEY = 'VfAQnZwBHdFaj75QChwBF5O4uEoTxQXh'

const newGifos = document.querySelector("#newGifos")

let inputTextToSearch = ""

let headerCross = document.getElementById("burger")
let headerBurger = document.getElementById("cross")

let crossDark = document.getElementById("burgerDark")
let hamburDark = document.getElementById("crossDark")

const darkMode = document.querySelector("#darkMode")
let logoDark = document.querySelector("#logoDark")
let logo = document.querySelector("#logo")
let logoDarkDesktop = document.querySelector("#logoDarkDesktop")
let logoDesktop = document.querySelector("#logoDesktop")

const clickSeeMore = document.querySelector(".seeMore")
const clickSeeMoreDark = document.querySelector(".seeMoreDark")

const btnSliderLeft = document.querySelector("#btnSliderLeft")
const btnSliderRight = document.querySelector("#btnSliderRight")
const btnSliderLeftDark = document.querySelector("#btnSliderLeftDark")
const btnSliderRightDark = document.querySelector("#btnSliderRightDark")

let facebook = document.querySelector(".facebook")
let facebookHover = document.querySelector(".facebookHover")
let facebookDark = document.querySelector(".facebookDark")

let twitter = document.querySelector(".twitter")
let twitterHover = document.querySelector(".twitterHover")

let instagram = document.querySelector(".instagram")
let instagramHover = document.querySelector(".instagramHover")
let instagramDark = document.querySelector(".instagramDark")

let createOwnGifosOff = document.querySelector("#createOwnGifosOff")
let iconCreateNormal = document.querySelector(".iconNormal")
let iconCreateNoc = document.querySelector(".noc")
let iconCreateHover = document.querySelector(".hover")
let iconCreateHoverNoc = document.querySelector(".hoverNoc")
let iconCreateActive = document.querySelector(".active")
let iconCreateActiveNoc = document.querySelector(".activeNoc")

let seeMoreEventMouse = document.querySelector(".seeMoreEventMouse")
let seeMoreMouse = document.querySelector(".seeMoreMouse") 

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

/*----------------------------*/
/*       CLICK - SLIDER       */
/*----------------------------*/
let changeBtnSlider = () => {
    if (btnSliderLeft !== null) {
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
}
changeBtnSlider()

let changeOfBtnSeeMore = () => {
    if (isDark === false) {
        document.querySelector(".seeMore").classList.remove("off")
        document.querySelector(".seeMoreDark").classList.add("off")
    } else {
        document.querySelector(".seeMore").classList.add("off")
        document.querySelector(".seeMoreDark").classList.remove("off")
    }
}

let showButtonsMore = () => {
    let checkClass = document.getElementById("titleToSearch");
    let hasClassOff = checkClass.classList.contains('off');
    if (hasClassOff == false) {
        changeOfBtnSeeMore()
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
    if (inputTextToSearch !== "undefined" && inputTextToSearch !== "") {
        getGifos(inputTextToSearch.value)
    } else {
        getGifos()
    }
}

//La siguiente función muestra cada Gifo en tamaño maximo
let functionMaximumGifs = (text) => { 
    if (sessionStorage.getItem("fullHeart") !== "" && sessionStorage.getItem("fullHeart") !== null) {
        //-----------------------------------------------------//
        arrayFavorite = JSON.parse(sessionStorage.getItem("fullHeart"));
        //-----------------------------------------------------//
    }

    let brotherMax = text.nextSibling
    let lastChildOfFather = brotherMax.lastChild
    let h3 = lastChildOfFather
    let h2 = h3.previousSibling

    let isFavorite = false;
    let idGifos = text.getAttribute("id")
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

        imgCross.src = '../assets/close-modo-noct.svg';
        imgCross.setAttribute("id", "imgCrossMax")
    } else if (isDark !== true) {
        containerMaxGifs.style.backgroundColor = "#ffffff";

        imgCross.src = '../assets/close.svg';
        imgCross.setAttribute("id", "imgCrossMax")
    }

    anchor.setAttributeNode(href);
    anchor.setAttribute("download", "Gifo");
    anchor.setAttribute("id", "anchorDownload")
    //anchor.setAttribute("target", "_blank")

    containerImage.src = text.src
    containerImage.setAttribute("id", "imgMaxSize")

    imgFavorite.src = '../assets/icon-fav-hover.svg';
    imgFavorite.setAttribute("id", "imgFavoriteMax");

    favoriteActive.src = '../assets/icon-fav-active.svg'
    favoriteActive.setAttribute("class", "off");
    favoriteActive.setAttribute("id", "favoriteActive");

    if (isFavorite === true) {
        favoriteActive.classList.remove("off");
        imgFavorite.classList.add("off");
    }else {
        imgFavorite.classList.remove("off");
        favoriteActive.classList.add("off");
    }

    imgDownload.src = '../assets/icon-download-hover.svg';
    imgDownload.setAttribute("id", "imgDownloadMax")

    const titleGifos = document.createElement("h2")
    titleGifos.textContent = h2.innerText
    const user = document.createElement("h3")
    user.textContent = h3.innerText
    document.querySelector("#containerMaxGifs").appendChild(titleGifos)
    document.querySelector("#containerMaxGifs").appendChild(user)

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
}

/*----------------------------*/
/*       GIFOS IN TREND       */
/*----------------------------*/
fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`)
    .then (response => response.json())
    .then (response => {
        let apiResponseList = response.data
        response.data.forEach( gif => {
            let arrayOfFavCheck = [];
            if (sessionStorage.getItem("fullHeart") !== "" && sessionStorage.getItem("fullHeart") !== null) {
                //-----------------------------------------------------//
                arrayOfFavCheck = JSON.parse(sessionStorage.getItem("fullHeart"));
                //-----------------------------------------------------//
            }
            const divContainer = document.createElement("div")
            divContainer.setAttribute("id", "gifosInTrendingContainer");
            let purpleFilterContainer = document.createElement("div")
            purpleFilterContainer.setAttribute("class", "purpleFilterWithIcons off");
            const image = document.createElement("img")
            image.src = gif.images.fixed_width.url
            image.setAttribute("id", gif.id)
            
            image.setAttribute("class", 'gifTrends')
            divContainer.appendChild(image)
            divContainer.appendChild(purpleFilterContainer)
            newGifos.appendChild(divContainer)
            
            const anchor = document.createElement("a");
            const href = document.createAttribute("href");

            let iconFavorite = document.createElement("img");
            iconFavorite.src = '../assets/icon-fav.svg';
            iconFavorite.setAttribute("class", "iconFavoriteStyle iconFav");
            
            let iconFavoriteActive = document.createElement("img");
            iconFavoriteActive.src = '../assets/icon-fav-active.svg';
            iconFavoriteActive.setAttribute("class", "iconFavoriteStyle off iconFavActive");

            let isFullHeart = arrayOfFavCheck.includes(gif.id)
            if (isFullHeart === true) {               
                iconFavorite.setAttribute("class", "iconFavoriteStyle iconFav off");
                iconFavoriteActive.setAttribute("class", "iconFavoriteStyle iconFavActive");
            }
           
            let iconDownload = document.createElement("img");
            iconDownload.src = '../assets/icon-download.svg';
            iconDownload.setAttribute("class", "iconDownloadStyle iconDownload");
            
            let iconDownloadActive = document.createElement("img");
            iconDownloadActive.src = '../assets/icon-download-hover.svg';
            iconDownloadActive.setAttribute("class", "iconDownloadStyle off iconDownloadHover");
            
            let iconMaximum = document.createElement("img");
            iconMaximum.src = '../assets/icon-max-normal.svg';
            iconMaximum.setAttribute("class", "iconMaximumStyle iconMax");
            
            let iconMaximumActive = document.createElement("img");
            iconMaximumActive.src = '../assets/icon-max-hover.svg';
            iconMaximumActive.setAttribute("class", "iconMaximumStyle off iconMaxHover");
           
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

            if (window.screen.width > 768) {
                let father = image.parentNode
                father.addEventListener("mouseover", () => {
                    let purpleSibling = father.lastChild
                    purpleSibling.classList.remove("off");
                })
                father.addEventListener("mouseleave", () => {
                    let purpleSibling = father.lastChild
                    purpleSibling.classList.add("off");
                })
            }

            //hover iconos favorite, download and max
            iconFavorite.addEventListener("mouseover", () => {
                iconFavorite.src = '../assets/icon-fav-hover.svg'
            })
            
            iconFavorite.addEventListener("mouseout", () => {
                iconFavorite.src = '../assets/icon-fav.svg'
            })

            iconDownload.addEventListener("mouseover", () => {
                iconDownload.src = '../assets/icon-download-hover.svg'
            })
            
            iconDownload.addEventListener("mouseout", () => {
                iconDownload.src = '../assets/icon-download.svg'
            })

            iconMaximum.addEventListener("mouseover", () => {
                iconMaximum.src = '../assets/icon-max-hover.svg'
            })
            
            iconMaximum.addEventListener("mouseout", () => {
                iconMaximum.src = '../assets/icon-max-normal.svg'
            })
        })

        let arrayFavorite = [];

        //la siguiente function corresponde al evento click sobre la imagen en first mobile  
        let imgNewGifos = document.querySelectorAll("#newGifos > div > img") 
        imgNewGifos.forEach(imgGifosTrend => {
            imgGifosTrend.addEventListener("click", () => {
                functionMaximumGifs(imgGifosTrend);
            })
        })
        //la siguiente function corresponde al evento click sobre el boton icon-max desktop      
        let iconsMax = document.querySelectorAll(".iconMax")
        iconsMax.forEach(iconMax => {
            iconMax.addEventListener("click", () => {
                let parentIconMax = iconMax.parentNode
                let brotherParentIconMax = parentIconMax.previousSibling
                functionMaximumGifs(brotherParentIconMax);
            })
        })
        //la siguiente function corresponde al evento click sobre el icon-favorite
        let iconsFavo = document.querySelectorAll(".iconFav")
        iconsFavo.forEach(iconFav => {
            iconFav.addEventListener("click", () => {
                iconFav.classList.toggle("off")
                let brotherIconFav = iconFav.nextSibling
                brotherIconFav.classList.toggle("off");
                let parentIconFav = iconFav.parentNode
                let brotherParentIconFav = parentIconFav.previousSibling
                let idAttribute = brotherParentIconFav.getAttribute("id")
                if (sessionStorage.getItem("fullHeart") !== "" && sessionStorage.getItem("fullHeart") !== null) {
                    //-----------------------------------------------------//
                    arrayFavorite = JSON.parse(sessionStorage.getItem("fullHeart"));
                    //-----------------------------------------------------//
                }
                arrayFavorite.push(idAttribute);
                sessionStorage.setItem("fullHeart", JSON.stringify(arrayFavorite));
                getGifosFavorites()
            })
        })
        //la siguiente function es para eliminar los gifos de la lista de favoritos
        let iconsFavActive = document.querySelectorAll(".iconFavActive")
        iconsFavActive.forEach(iconFavActive => {
            iconFavActive.addEventListener("click", () => {
                if (sessionStorage.getItem("fullHeart") !== "" && sessionStorage.getItem("fullHeart") !== null) {
                    //-----------------------------------------------------//
                    arrayFavorite = JSON.parse(sessionStorage.getItem("fullHeart"));
                    //-----------------------------------------------------//
                }
                iconFavActive.classList.toggle("off")
                let brotherIconFavActive = iconFavActive.previousSibling
                brotherIconFavActive.classList.toggle("off");
                let parentIconFavActive = iconFavActive.parentNode
                let brotherParentIconFavActive = parentIconFavActive.previousSibling
                let idAttributeActive = brotherParentIconFavActive.getAttribute("id")
                let indexArray = arrayFavorite.indexOf(idAttributeActive);
                if (indexArray > -1) {
                    arrayFavorite.splice(indexArray, 1);
                    sessionStorage.setItem("fullHeart", JSON.stringify(arrayFavorite));
                    getGifosFavorites()
                }
            })
        })
    
        let gifTrends = document.querySelectorAll(".gifTrends");
        let index = 3;
        let show = function(increase) {
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

let changesLogosHeader = () => {
    if (window.screen.width > 768) {
        createOwnGifosOff.style.display = "block"
        if (isDark === true) {
            logoDarkDesktop.style.display = "block"
            logoDesktop.style.display = "none"
            logoDark.style.display = "none"
            logo.style.display = "none"
            facebook.classList.add('off') 
            facebookDark.classList.remove('off') 
            instagram.classList.add('off') 
            instagramDark.classList.remove('off') 
            iconCreateNormal.classList.add('off') 
            iconCreateNoc.classList.remove('off') 
        } else {
            logoDarkDesktop.style.display = "none"
            logoDesktop.style.display = "block"
            logoDark.style.display = "none"
            logo.style.display = "none"
            facebook.classList.remove('off') 
            facebookDark.classList.add('off') 
            instagram.classList.remove('off') 
            instagramDark.classList.add('off')
            iconCreateNormal.classList.remove('off') 
            iconCreateNoc.classList.add('off') 
        }
    } else if (window.screen.width < 768) {
        createOwnGifosOff.style.display = "none"
        if (isDark === true) {
            logoDesktop.style.display = "none"
            logoDarkDesktop.style.display = "none"
            logo.style.display = "none"
            logoDark.style.display = "block"
            facebook.classList.add('off') 
            facebookDark.classList.remove('off') 
            instagram.classList.add('off') 
            instagramDark.classList.remove('off') 
        } else {
            logoDesktop.style.display = "none"
            logoDarkDesktop.style.display = "none"
            logoDark.style.display = "none"
            logo.style.display = "block"
            facebook.classList.remove('off') 
            facebookDark.classList.add('off') 
            instagram.classList.remove('off') 
            instagramDark.classList.add('off')
        }
    }
}
changesLogosHeader()

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
//------Icons Media Hover
facebook.addEventListener("mouseover", () => {
    facebook.src = '/assets/icon_facebook_hover.svg'
})
facebook.addEventListener("mouseout", () => {
    facebook.src = '/assets/icon_facebook.svg'
})
facebookDark.addEventListener("mouseover", () => {
    facebookDark.src = '/assets/icon_facebook_hover.svg'
})
facebookDark.addEventListener("mouseout", () => {
    facebookDark.src = '/assets/icon_facebook_noc.svg'
})

twitter.addEventListener("mouseover", () => {
    twitter.src = '/assets/icon-twitter-hover.svg'
})
twitter.addEventListener("mouseout", () => {
    twitter.src = '/assets/icon-tw-normal.svg'
})

instagram.addEventListener("mouseover", () => {
    instagram.src = '/assets/icon_instagram-hover.svg'
})
instagram.addEventListener("mouseout", () => {
    instagram.src = '/assets/icon_instagram.svg'
})
instagramDark.addEventListener("mouseover", () => {
    instagramDark.src = '/assets/icon_instagram-hover.svg'
})
instagramDark.addEventListener("mouseout", () => {
    instagramDark.src = '/assets/icon_instagram_noc.svg'
})

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

let changesIconsMedia = () => {
    facebook.addEventListener("click", () => {
        facebook.classList.add("off")
        facebookHover.classList.remove("off")
    })
    facebookDark.addEventListener("click", () => {
        facebookDark.classList.add("off")
        facebookHover.classList.remove("off")
    })
    twitter.addEventListener("click", () => {
        twitter.classList.add("off")
        twitterHover.classList.remove("off")
    })
    instagram.addEventListener("click", () => {
        instagram.classList.add("off")
        instagramHover.classList.remove("off")
    })
    instagramDark.addEventListener("click", () => {
        instagramDark.classList.add("off")
        instagramHover.classList.remove("off")
    })
}
changesIconsMedia();

iconCreateNormal.addEventListener("mouseover", () => {
    iconCreateNormal.src = '/assets/CTA-crear-gifo-hover.svg'
})
iconCreateNormal.addEventListener("mouseout", () => {
    iconCreateNormal.src = '/assets/button-crear-gifo.svg'
})
//---------------Dark Mode
iconCreateNoc.addEventListener("mouseover", () => {
    iconCreateNoc.src = '/assets/CTA-crear-gifo-hover-modo-noc.svg'
})
iconCreateNoc.addEventListener("mouseout", () => {
    iconCreateNoc.src = '/assets/CTA-crear-gifo-modo-noc.svg'
})

//Btn See More
seeMoreEventMouse.addEventListener("mouseover", () => {
    seeMoreEventMouse.src = '/assets/CTA-ver-mas-hover.svg'
})
seeMoreEventMouse.addEventListener("mouseout", () => {
    seeMoreEventMouse.src = '/assets/CTA-ver-mas.svg'
})
//---------------Dark Mode
seeMoreMouse.addEventListener("mouseover", () => {
    seeMoreMouse.src = '/assets/CTA-ver+hover-modo-noc.svg'
})
seeMoreMouse.addEventListener("mouseout", () => {
    seeMoreMouse.src = '/assets/CTA-ver+-modo-noc.svg'
})