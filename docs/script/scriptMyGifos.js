let savedmyOwnGifs = document.querySelector("#savedmyOwnGifs")
let myCreatedGifos = [];

let showButtonsMoreInFavorite = () => {
    let checkContentClass = document.getElementById("noContent");
    let hasOff = checkContentClass.classList.contains("off");
    console.log(hasOff)
    if (hasOff === true) {
        changeOfBtnSeeMore()
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

    localStorage.setItem("modeStyle", isDark);
    
    if (isDark === true) {
        document.body.classList.add("dark")
        darkMode.innerHTML = "Modo Diurno <hr>"
        changeBtnSlider()
        changesLogosHeader()
        showButtonsMoreInFavorite()
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

//La siguiente función muestra cada Gifo creado por el usuario en tamaño maximo
let functionMaxMyGifos = (text) => { 
        let brotherMax = text.nextSibling
    let lastChildOfFather = brotherMax.lastChild
    let h3 = lastChildOfFather
    let h2 = h3.previousSibling

    let idMyGifos = text.getAttribute("id")
    console.log(text)
    console.log(idMyGifos)

    let containerMaxGifs = document.querySelector("#containerMaxGifs")
    let containerImage = document.createElement("img")

    let imgCross = document.createElement("img")
    let iconTrashMyGifos = document.createElement("img")
    let iconTrashMyGifosActive = document.createElement("img")
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

    containerImage.src = text.src
    containerImage.setAttribute("class", "imgMaxSize")
    
    iconTrashMyGifos.src = '../assets/icon-trash-normal.svg';
    iconTrashMyGifos.setAttribute("class", "iconTrashMyGifos Trash");

    iconTrashMyGifosActive.src = '../assets/icon-trash-hover.svg';
    iconTrashMyGifosActive.setAttribute("class", "iconTrashMyGifos off");
    iconTrashMyGifosActive.setAttribute("id", "TrashActive");

    imgDownload.src = '../assets/icon-download-hover.svg';
    imgDownload.setAttribute("class", "imgDownloadMax")

    const titleGifos = document.createElement("h2")
    titleGifos.textContent = h2.innerText
    const user = document.createElement("h3")
    user.textContent = h3.innerText
    document.querySelector("#containerMaxGifs").appendChild(titleGifos)
    document.querySelector("#containerMaxGifs").appendChild(user)

    containerMaxGifs.appendChild(containerImage)
    containerMaxGifs.appendChild(imgCross)
    containerMaxGifs.appendChild(iconTrashMyGifos)
    containerMaxGifs.appendChild(iconTrashMyGifosActive)
    containerMaxGifs.appendChild(imgDownload)

    document.querySelector("#containerMaxGifs").style.display = "block"

    const crossMax = document.getElementById("imgCrossMax")
    crossMax.addEventListener("click", () => {
        containerMaxGifs.innerHTML = ""
        document.querySelector("#containerMaxGifs").style.display = "none";
        let textToSearch = localStorage.getItem("textToSearch")
        getGifos(textToSearch);
        structureGifosTrend(apiResponseList);
    })

    let imgDownloadMax = document.querySelector(".imgDownloadMax")
    imgDownloadMax.addEventListener("click", () => {
        let functionForDownload = async () => {
            let anchor = document.createElement("a");
            
            let previousSiblingUrl = imgDownloadMax.previousSibling
            console.log(previousSiblingUrl)
            let imgUrl = previousSiblingUrl.getAttribute("src")
            console.log(imgUrl)
            //utilizo fetch para la comunicación con el API, la respuesta
            //mediante response.blob es como un objeto binario.
            let response = await fetch(imgUrl);
            let urlBlob = await response.blob();
            
            let urlLocal = window.URL.createObjectURL(urlBlob);
            anchor.setAttribute("href", urlLocal);
            anchor.setAttribute("target", "_blank");
            anchor.setAttribute("download", "my_Gifos");
            //con esto emulo el click sobre el elemento ancla
            anchor.click();
        }
        functionForDownload();
    })

    //la siguiente function corresponde al evento click sobre el boton trash, elimina los gifos Creados
    iconTrashMyGifos.addEventListener("click", () => {
        myCreatedGifos = JSON.parse(window.localStorage.getItem("mygifos"))
        let indexOfMyGifos = myCreatedGifos.indexOf(idMyGifos);
        if (indexOfMyGifos > -1) {
            myCreatedGifos.splice(indexOfMyGifos, 1);
            localStorage.setItem("mygifos", JSON.stringify(myCreatedGifos));
            getGifos();
        }
    })        
}

getGifos = async () => {
    myCreatedGifos = JSON.parse(window.localStorage.getItem("mygifos"))
    const response = await fetch(`https://api.giphy.com/v1/gifs?api_key=${API_KEY}&ids=${myCreatedGifos.join()}`)
    const result = await response.json()  
    savedmyOwnGifs.innerHTML = "";
    for (let i = 0; i < result.data.length; i++){
        if (i > amount) {break}
        let fatherMyGifosCheck = document.createElement("div");
        fatherMyGifosCheck.setAttribute("class", "fatherMyGifosCheck");
        let brotherMyGifosCheck = document.createElement("div");
        brotherMyGifosCheck.setAttribute("class", "brotherMyGifosCheck off");
        const image = document.createElement('img')
        image.setAttribute("class", "myGifosCheck")
        image.setAttribute("id", result.data[i].id)
        image.src = result.data[i].images.original.url
        fatherMyGifosCheck.appendChild(image)
        fatherMyGifosCheck.appendChild(brotherMyGifosCheck)
        savedmyOwnGifs.appendChild(fatherMyGifosCheck)

        let iconTrashMyGifos = document.createElement("img");
        iconTrashMyGifos.src = '../assets/icon-trash-normal.svg';
        iconTrashMyGifos.setAttribute("class", "iconTrashMyGifos");
        
        let iconTrashMyGifosActive = document.createElement("img");
        iconTrashMyGifosActive.src = '../assets/icon-trash-hover.svg';
        iconTrashMyGifosActive.setAttribute("class", "iconTrashMyGifos off");
        
        let iconDowMyGifos = document.createElement("img");
        iconDowMyGifos.src = '../assets/icon-download.svg';
        iconDowMyGifos.setAttribute("class", "iconDowMyGifos");
        
        let iconDowMyGifosActive = document.createElement("img");
        iconDowMyGifosActive.src = '../assets/icon-download-hover.svg';
        iconDowMyGifosActive.setAttribute("class", "iconDowMyGifos off");
        
        let iconMaxMyGifos = document.createElement("img");
        iconMaxMyGifos.src = '../assets/icon-max-normal.svg';
        iconMaxMyGifos.setAttribute("class", "iconMaxMyGifos");
        
        let iconMaxMyGifosActive = document.createElement("img");
        iconMaxMyGifosActive.src = '../assets/icon-max-hover.svg';
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

        //hover iconos favorite, download and max
        iconTrashMyGifos.addEventListener("mouseover", () => {
            iconTrashMyGifos.src = '../assets/icon-trash-hover.svg'
        })
        
        iconTrashMyGifos.addEventListener("mouseout", () => {
            iconTrashMyGifos.src = '../assets/icon-trash-normal.svg'
        })

        iconDowMyGifos.addEventListener("mouseover", () => {
            iconDowMyGifos.src = '../assets/icon-download-hover.svg'
        })
        
        iconDowMyGifos.addEventListener("mouseout", () => {
            iconDowMyGifos.src = '../assets/icon-download.svg'
        })

        iconMaxMyGifos.addEventListener("mouseover", () => {
            iconMaxMyGifos.src = '../assets/icon-max-hover.svg'
        })
        
        iconMaxMyGifos.addEventListener("mouseout", () => {
            iconMaxMyGifos.src = '../assets/icon-max-normal.svg'
        })
    }
    document.querySelector(".noContent").classList.add("off");
    document.querySelector(".noContentText").classList.add("off");
    showButtonsMoreInFavorite() 
    //la siguiente function corresponde al evento click sobre Gifo creado - Mobile     
    //el fin es mostrar el Gifo en tamaño maximo     
    let myGifosCheck = document.querySelectorAll(".myGifosCheck")
    myGifosCheck.forEach(myGifo => {
        myGifo.addEventListener("click", () => {
                functionMaxMyGifos(myGifo);
        })
    })
    //la siguiente function corresponde al evento click sobre el boton icon-max desktop     
    //el fin es mostrar el Gifo en tamaño maximo     
    let iconMaxMyGifos = document.querySelectorAll(".iconMaxMyGifos")
    iconMaxMyGifos.forEach(maxMyGifos => {
        maxMyGifos.addEventListener("click", () => {
            let parentMaxMyGifos = maxMyGifos.parentNode
            let brotherParentMaxMyGifos = parentMaxMyGifos.previousSibling
            functionMaxMyGifos(brotherParentMaxMyGifos);
        })
    })
    //la siguiente function corresponde al evento click sobre el boton trash, elimina los gifos Creados
    let iconTrashMyGifos = document.querySelectorAll(".iconTrashMyGifos")    
    iconTrashMyGifos.forEach(Trash => {
        Trash.addEventListener("click", () => {
            let fatherTrash = Trash.parentNode
            let brotherPreviousOfFather = fatherTrash.previousSibling
            let idTrash = brotherPreviousOfFather.getAttribute("id")
            myCreatedGifos = JSON.parse(window.localStorage.getItem("mygifos"))
            let indexOfMyGifos = myCreatedGifos.indexOf(idTrash);
            if (indexOfMyGifos > -1) {
                myCreatedGifos.splice(indexOfMyGifos, 1);
                localStorage.setItem("mygifos", JSON.stringify(myCreatedGifos));
                console.log(myCreatedGifos)
                getGifos();
            }
        })   
    })
    let iconDowMyGifos = document.querySelectorAll(".iconDowMyGifos")
    iconDowMyGifos.forEach(iconDown => {
        iconDown.addEventListener("click", () => {
            let functionForDownload = async () => {
                let anchor = document.createElement("a");
                let fatherOfElem = iconDown.parentNode
                let previousSiblingUrl = fatherOfElem.previousSibling
                let imgUrl = previousSiblingUrl.getAttribute("src")
                console.log(imgUrl)
                //utilizo fetch para la comunicación con el API, la respuesta
                //mediante response.blob es como un objeto binario.
                let response = await fetch(imgUrl);
                let urlBlob = await response.blob();
                
                let urlLocal = window.URL.createObjectURL(urlBlob);
                anchor.setAttribute("href", urlLocal);
                anchor.setAttribute("target", "_blank");
                anchor.setAttribute("download", "my_Gifos");
                //con esto emulo el click sobre el elemento ancla
                anchor.click();
            }
            functionForDownload();
        })
    })
}
getGifos()