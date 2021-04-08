let isDark;
const API_KEY = 'VfAQnZwBHdFaj75QChwBF5O4uEoTxQXh'

const darkMode = document.querySelector("#darkMode")

let logoDarkDesktop = document.querySelector("#logoDarkDesktop")
let logoDesktop = document.querySelector("#logoDesktop")

let camera = document.getElementById("camera")
let cameraDark = document.getElementById("cameraDark")

let movie = document.getElementById("movie")
let movieDark = document.getElementById("movieDark")

let steplight = document.querySelector(".steplight")
let stepDark = document.querySelector(".stepDark")

let myGifos = []

const video = document.querySelector("video");
const btnStart = document.querySelector("#btnStart");
const btnRecord = document.querySelector("#btnRecord");
const btnFinish = document.querySelector("#btnFinish");
const btnUpload = document.querySelector("#btnUpload");
let btnCreateGifos = document.querySelector(".btnCreateGifos");

let h1CreateGifos = document.querySelector("#h1CreateGifos");
let h1CameraAccess = document.querySelector("#h1CameraAccess");
let h2instructionCreate = document.querySelector("#instructionCreate");
let instructionOfAccess = document.querySelector("#instructionOfAccess");

let stepOne = document.querySelector(".stepOne");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let stepTwo = document.querySelector(".stepTwo");
let three = document.querySelector(".three");
let stepThree = document.querySelector(".stepThree");

let chronometer = document.querySelector(".chronometer");
let hr = 0;
let min = 0;
let seg = 0;
let idInterval;

let repeatCapture = document.querySelector(".repeatCapture");
let purpleFilterCreate = document.querySelector(".purpleFilterCreate");
let upSuccess = document.querySelector(".upSuccess");

let recorder
let gifBlob

let facebook = document.querySelector(".facebook")
let facebookHover = document.querySelector(".facebookHover")
let facebookDark = document.querySelector(".facebookDark")

let twitter = document.querySelector(".twitter")
let twitterHover = document.querySelector(".twitterHover")

let instagram = document.querySelector(".instagram")
let instagramHover = document.querySelector(".instagramHover")
let instagramDark = document.querySelector(".instagramDark")

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

// let changesIconsMedia = () => {
//     console.log(1)
//     fb.addEventListener("click", () => {
//         fb.classList.add("off")
//         fbHover.classList.remove("off")
//         console.log(fbHover)
//     })
//     fbDark.addEventListener("click", () => {
//         fbDark.classList.add("off")
//         fbHover.classList.remove("off")
//     })
//     tw.addEventListener("click", () => {
//         tw.classList.add("off")
//         twHover.classList.remove("off")
//     })
//     insta.addEventListener("click", () => {
//         insta.classList.add("off")
//         instaHover.classList.remove("off")
//     })
//     instaDark.addEventListener("click", () => {
//         instaDark.classList.add("off")
//         instaHover.classList.remove("off")
//     })
// }
// changesIconsMedia();

let changesIcons = () => {
    if (isDark === true) {
        logoDarkDesktop.style.display = "block"
        logoDesktop.style.display = "none"
        camera.style.display = "none"
        cameraDark.style.display = "block"
        movie.style.display = "none"
        movieDark.style.display = "block"
        steplight.classList.add('off')
        stepDark.classList.remove('off')
        stepOne = document.querySelector(".stepDark > .stepOne");
        one = document.querySelector(".stepDark > .one");
        two = document.querySelector(".stepDark > .two");
        stepTwo = document.querySelector(".stepDark > .stepTwo");
        three = document.querySelector(".stepDark > .three");
        stepThree = document.querySelector(".stepDark > .stepThree");
    } else {
        camera.style.display = "block"
        cameraDark.style.display = "none"
        movie.style.display = "block"
        movieDark.style.display = "none"
        steplight.classList.remove('off')
        stepDark.classList.add('off')
        logoDarkDesktop.style.display = "none"
        logoDesktop.style.display = "block"
        stepOne = document.querySelector(".steplight > .stepOne");
        one = document.querySelector(".steplight > .one");
        two = document.querySelector(".steplight > .two");
        stepTwo = document.querySelector(".steplight > .stepTwo");
        three = document.querySelector(".steplight > .three");
        stepThree = document.querySelector(".steplight > .stepThree");
    }
}
changesIcons()

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
        changesIcons()
        if (text == undefined || text == "repaintStyles") {
            document.querySelector("#menu").classList.add("off")
        }
    } else {
        document.body.classList.remove("dark")
        darkMode.innerHTML = "Modo Nocturno <hr>"
        changesIcons()
        if (text == undefined || text == "repaintStyles") {
            document.querySelector("#menu").classList.add("off")
        }
    }
}

darkMode.addEventListener("click", () => {
    changeModeStyle()
})

changeModeStyle("repaintStyles")

if (window.localStorage.getItem("mygifos")) {
     myGifos = JSON.parse(window.localStorage.getItem("mygifos"))
}

const getStream = () => {
    navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
            height: 480
        }
    })
    .then(stream => {
        video.srcObject = stream;
        video.play()
        recorder = RecordRTC(stream, {
            type: 'gif',
            frameRate: 1,
            quality: 10,
            width: 360,
            height: 240,
            onGifRecordingStarted: function() {
                console.log('Debe volver a intentarlo')
            }
        })
        btnStart.classList.add('off')
        btnRecord.classList.remove('off')
    })
    .catch(error => {
        console.error(error)
        alert(`Debe permitir el acceso a la camara`)
    })
}

const recordStart = () => {
    recorder.startRecording();
    btnRecord.classList.add('off');
    btnFinish.classList.remove('off');
}

const recordStop = () => {
    recorder.stopRecording(() => {
        gifBlob = recorder.getBlob();
    });
    btnFinish.classList.add('off');
    btnUpload.classList.remove('off');
}

const uploadGif = async () => {
    let data = new FormData();
    data.append('file', gifBlob, 'Gifos_Project.gif')
    const response = await fetch(`https://upload.giphy.com/v1/gifs?api_key=${API_KEY}
    `, {
      method: 'POST',
      body: data
    })
    const responseJson = await response.json()
    myGifos.push(responseJson.data.id)
    window.localStorage.setItem('mygifos', JSON.stringify(myGifos))
    purpleFilterCreate.classList.add('off');
    upSuccess.classList.remove('off');
}

btnStart.addEventListener('click', () => {
    h1CreateGifos.classList.add('off');
    h1CameraAccess.classList.remove('off');
    h2instructionCreate.classList.add('off');
    instructionOfAccess.classList.remove('off');
    stepOne.classList.add('off');
    one.classList.remove('off');
    getStream();
});

btnRecord.addEventListener('click', () => {
    two.classList.add('off');
    stepTwo.classList.remove('off');
    stepOne.classList.remove('off');
    one.classList.add('off');
    chronometer.classList.remove('off');
    recordStart();
    chronometerFunction();
});

btnFinish.addEventListener('click', () => {
    two.classList.remove('off');
    stepTwo.classList.add('off');
    three.classList.add('off');
    stepThree.classList.remove('off');
    stopChronometer()
    chronometer.classList.add('off');
    repeatCapture.classList.remove('off');
    recordStop()
});

function chronometerFunction(){
    hr = 0;
    min = 0;
    seg = 0;
    counting();
    idInterval = setInterval(counting,1000);
}

function counting(){
    let hAux, mAux, sAux;
    seg++;
    if (seg>59){
        min++;
        seg=0;
    }
    if (min>59){
        hr++;
        min=0;
    }
    if (hr>24){
        hr=0;
    }
    if (seg<10){
        sAux="0"+seg;
    }else{
        sAux=seg;
    }
    if (min<10){
        mAux="0"+min;
    }else{
        mAux=min;
    }
    if (hr<10){
        hAux="0"+hr;
    }else{
        hAux=hr;
    }
    chronometer.innerHTML = hAux + ":" + mAux + ":" + sAux;
}

function stopChronometer(){
    clearInterval(idInterval);
}

repeatCapture.addEventListener('click', () => {
    getStream();
    stepOne.classList.remove('off');
    one.classList.add('off');
    two.classList.add('off');
    stepTwo.classList.remove('off');
    three.classList.remove('off');
    stepThree.classList.add('off');
    btnStart.classList.add('off')
    btnUpload.classList.add('off');
    btnRecord.classList.remove('off')
    repeatCapture.classList.add('off');
})

btnUpload.addEventListener('click', () => {
    btnUpload.classList.add('off');
    repeatCapture.classList.add('off');
    three.classList.add('off');
    stepThree.classList.remove('off');
    repeatCapture.classList.add('off');
    chronometer.classList.add('off');
    purpleFilterCreate.classList.remove('off');
    uploadGif();
});

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
