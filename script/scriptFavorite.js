let savedGifs = document.querySelector("#savedGifs")

let showButtonsMoreInFavorite = () => {
    let checkContentClass = document.getElementById("noContent");
    let hasOff = checkContentClass.classList.contains("off");
    if (hasOff === true) {
        changeOfBtnSeeMore()
    }
}

const getGifos = (text) => {
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
                    image.setAttribute("id", response.data[i].id)

                    fatherFavoGifos.appendChild(image)
                    fatherFavoGifos.appendChild(brotherFavoGifos)
                    savedGifs.appendChild(fatherFavoGifos)

                    let iconFavoGifos = document.createElement("img");
                    iconFavoGifos.src = '/assets/icon-fav.svg';
                    iconFavoGifos.setAttribute("class", "iconFavoGifos off");

                    let iconFavoGifosActive = document.createElement("img");
                    iconFavoGifosActive.src = '/assets/icon-fav-active.svg';
                    iconFavoGifosActive.setAttribute("class", "activeStyle");

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

                    if (window.screen.width > 768) {    
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
                    //hover iconos download and max
                    iconDowFavoGifos.addEventListener("mouseover", () => {
                        iconDowFavoGifos.src = '/assets/icon-download-hover.svg'
                    })
                    
                    iconDowFavoGifos.addEventListener("mouseout", () => {
                        iconDowFavoGifos.src = '/assets/icon-download.svg'
                    })

                    iconMaxFavoGifos.addEventListener("mouseover", () => {
                        iconMaxFavoGifos.src = '/assets/icon-max-hover.svg'
                    })
                    
                    iconMaxFavoGifos.addEventListener("mouseout", () => {
                        iconMaxFavoGifos.src = '/assets/icon-max-normal.svg'
                    })

                    //la siguiente function corresponde al evento click sobre el icon-favorite
                    //para eliminarel gifo de la section favorite
                    iconFavoGifosActive.addEventListener("click", () => {
                        iconFavoGifosActive.classList.add("off");
                        iconFavoGifos.classList.remove("off");
                        
                        let parentHeart = iconFavoGifos.parentNode
                        let brotherParentHeart = parentHeart.previousSibling
                        let idImgClick = brotherParentHeart.getAttribute("id")

                        let indexArrayImgClick = arrayFavoriteToString.indexOf(idImgClick);
                        if (indexArrayImgClick > -1) {
                            arrayFavoriteToString.splice(indexArrayImgClick, 1);
                            sessionStorage.setItem("fullHeart", JSON.stringify(arrayFavoriteToString));
                            getGifos()
                        }
                    })
                }
                document.querySelector(".noContent").classList.add("off");
                document.querySelector(".noContentText").classList.add("off");
                showButtonsMoreInFavorite()
                //la siguiente function corresponde al evento click sobre el boton icon-max desktop      
                let iconMaxFavoGifos = document.querySelectorAll(".iconMaxFavoGifos")
                iconMaxFavoGifos.forEach(iconMaxFavos => {
                    iconMaxFavos.addEventListener("click", () => {
                        let parentMaxFavos = iconMaxFavos.parentNode
                        let brotherParentMaxFavos = parentMaxFavos.previousSibling
                        functionMaximumGifs(brotherParentMaxFavos);
                    })
                })
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
        getGifos()
        changesIconsMedia()
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
        getGifos()
        changesIconsMedia()
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

changeModeStyle("repaintStyles")