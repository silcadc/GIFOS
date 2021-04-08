const savedmyOwnGifs = document.querySelector("#savedmyOwnGifs")

let showButtonsMoreInFavorite = () => {
    let checkContentClass = document.getElementById("noContent");
    let hasOff = checkContentClass.classList.contains("off");
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

    sessionStorage.setItem("modeStyle", isDark);
    
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

gifos = JSON.parse(window.localStorage.getItem('mygifos'))

getGifos = async () => {
    const response = await fetch(`https://api.giphy.com/v1/gifs?api_key=${API_KEY}&ids=${gifos.join()}`)
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