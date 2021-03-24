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
        let apiResponseList = response.data
        response.data.forEach( gif => {
            const image = document.createElement("img")
            image.src = gif.images.original.url
            image.setAttribute("id", gif.id)
            document.querySelector("#newGifos").appendChild(image)
        })

             
        let imgNewGifos = document.querySelectorAll("#newGifos > img")
        imgNewGifos.forEach(imgGifosTrend => {
            imgGifosTrend.addEventListener("click", () => {
                let arrayFavorite = [];
                if (sessionStorage.getItem("fullHeart") !== "" && sessionStorage.getItem("fullHeart") !== null) {
                    //-----------------------------------------------------//
                    arrayFavorite = JSON.parse(sessionStorage.getItem("fullHeart"));//JSON.parse, me permite convertir el String a un objeto.
                    //-----------------------------------------------------//
                }
                console.log(arrayFavorite)
                console.log(sessionStorage.getItem("fullHeart"))
                
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

                
                console.log(idGifos)
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
                crossMax.addEventListener("click", () => {
                    containerMaxGifs.innerHTML = "" 
                    document.querySelector("#containerMaxGifs").style.display = "none"
                })

                // const downloadMax = document.getElementById("imgDownloadMax")
                // downloadMax.addEventListener("click", () => {
                
                // })

                imgFavorite.addEventListener("click", () => {
                    imgFavorite.classList.toggle("off")
                    favoriteActive.classList.remove("off");//Todos los ID que tengan el corazon full se van al array vacio
                    console.log(arrayFavorite)
                    arrayFavorite.push(idGifos);
                    
                    sessionStorage.setItem("fullHeart", JSON.stringify(arrayFavorite));//JSON.stringify convierte el objeto a string
                    console.log("Guardó")
                })
                
                favoriteActive.addEventListener("click", () => {
                    favoriteActive.classList.toggle("off")
                    imgFavorite.classList.remove("off")
                    let index = arrayFavorite.indexOf(idGifos);
                    if (index > -1) {//-1 indica que no encontre el elemento
                        arrayFavorite.splice(index, 1);
                        sessionStorage.setItem("fullHeart", JSON.stringify(arrayFavorite));
                        console.log("Quitó")
                    }
                })
            })
        })    
    })      

let arrayFavoriteToString = JSON.parse(sessionStorage.getItem("fullHeart"));
console.log("array:: " )
console.log(arrayFavoriteToString)
let idsFavorite = arrayFavoriteToString.join(", ");
console.log("string: ")//las comillas la consola no las imprime
console.log(idsFavorite)
    
//let ids = "JqKHI0KIxwHZed0kO4, MH3y35SMbg2DLnGckG, oz9W4lw0qaisN18bQQ";
/*--------------------------------*/   
/*        FAVORITES GIFOS         */   
/*--------------------------------*/   
fetch(`https://api.giphy.com/v1/gifs?api_key=${API_KEY}&ids=${idsFavorite}`)
    .then (response => response.json())
    .then (response => {
        let apiIdsList = response.data
        console.log(apiIdsList)
        response.data.forEach( gif => {
            const image = document.createElement("img")
            image.src = gif.images.original.url
            image.setAttribute("id", "idsFavorites")
            document.querySelector(".theFavoriteGifs").appendChild(image)
        })
        document.querySelector(".noContent").classList.add("off");
        document.querySelector(".noContentText").classList.add("off");
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

