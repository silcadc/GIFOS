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
fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=3`)
    .then (response => response.json())
    .then (response => {
        let apiResponseList = response.data//esta variable trae consigo una lista, 
        //por eso cuando la usaba en otros lugares junto con .title era undefined,
        //yo queria que me dieran el titulo de todo un array. Para usar la variabla
        //luego del for le agrego [i] indicando el indice al que quiero acceder. 
       // console.log("API RESPUESTA" + apiResponseList)
        console.log(apiResponseList)
        response.data.forEach( gif => {
            const image = document.createElement("img")
            image.src = gif.images.original.url
            image.setAttribute("id", gif.id)
            document.querySelector("#newGifos").appendChild(image)
        })

        let favoritesGifosCheck = [];
        document.getElementById("savedGifs").innerHTML = favoritesGifosCheck;
             
        let imgNewGifos = document.querySelectorAll("#newGifos > img")
        imgNewGifos.forEach(imgGifosTrend => {
            imgGifosTrend.addEventListener("click", () => {
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
                
                imgDownload.src = './assets/icon-download-hover.svg';
                imgDownload.setAttribute("id", "imgDownloadMax")

                let idGifos = imgGifosTrend.getAttribute("id")
                for (i=0; i<apiResponseList.length; i++) {
                    if (idGifos === apiResponseList[i].id) {
                        const titleGifos = document.createElement("h2")
                        titleGifos.textContent = apiResponseList[i].title
                        const user = document.createElement("h3")
                        user.textContent = apiResponseList[i].username
                        document.querySelector("#containerMaxGifs").appendChild(titleGifos)
                        document.querySelector("#containerMaxGifs").appendChild(user)
                        href.value = apiResponseList[i].images.original.url
                        console.log(href)
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
                console.log("crossMax    " + crossMax)
                crossMax.addEventListener("click", () => {
                    containerMaxGifs.innerHTML = "" //con esta línea evito guardar las imagenes
                    document.querySelector("#containerMaxGifs").style.display = "none"
                })

                // const downloadMax = document.getElementById("imgDownloadMax")
                // downloadMax.addEventListener("click", () => {
                
                // })

                imgFavorite.addEventListener("click", () => {
                    imgFavorite.classList.toggle("off")
                    favoriteActive.classList.remove("off")
                    //con este click se debe guardar en mis favoritos
                    //document.querySelector(".theFavoriteGifs").add("off")

                })
                
                favoriteActive.addEventListener("click", () => {
                    favoriteActive.classList.toggle("off")
                    imgFavorite.classList.remove("off")
                    //con este click se debe sacar de mis favoritos
                })
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

logoDark.addEventListener("click", () => {
    changeModeStyle("darkLogoClick")
})

logo.addEventListener("click", () => {
    changeModeStyle("dayLogoClick")
})

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

