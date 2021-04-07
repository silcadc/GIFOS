
/*----------------------------*/
/*       GIFOS IN TREND       */
/*----------------------------*/
fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`)
    .then (response => response.json())
    .then (response => {
        let apiResponseList = response.data
        response.data.forEach( gif => {
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
            iconFavorite.setAttribute("class", "iconFavoriteStyle");
            
            let iconFavoriteActive = document.createElement("img");
            iconFavoriteActive.src = '../assets/icon-fav-active.svg';
            iconFavoriteActive.setAttribute("class", "iconFavoriteStyle off");
           
            let iconDownload = document.createElement("img");
            iconDownload.src = '../assets/icon-download.svg';
            iconDownload.setAttribute("class", "iconDownloadStyle");
            
            let iconDownloadActive = document.createElement("img");
            iconDownloadActive.src = '../assets/icon-download-hover.svg';
            iconDownloadActive.setAttribute("class", "iconDownloadStyle off");
            
            let iconMaximum = document.createElement("img");
            iconMaximum.src = '../assets/icon-max-normal.svg';
            iconMaximum.setAttribute("class", "iconMaximumStyle");
            
            let iconMaximumActive = document.createElement("img");
            iconMaximumActive.src = '../assets/icon-max-hover.svg';
            iconMaximumActive.setAttribute("class", "iconMaximumStyle off");
           
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
                    console.log(1)
                    let purpleSibling = father.lastChild
                    console.log(purpleSibling)
                    purpleSibling.classList.remove("off"); 
                    console.log(purpleSibling)
                })
                father.addEventListener("mouseleave", () => {
                    console.log(2)
                    let purpleSibling = father.lastChild
                    purpleSibling.classList.add("off");
                })
            }
        })

        let functionMaximumGifs = () => {     
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

                    containerImage.src = imgGifosTrend.src
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
            })
        }
        functionMaximumGifs();

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