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
let headerCross = document.getElementById("burger")
let headerBurger = document.getElementById("cross")
//-
let camera = document.getElementById("camera")
let cameraDark = document.getElementById("cameraDark")
//-
let movie = document.getElementById("movie")
let movieDark = document.getElementById("movieDark")
//-
let steplight = document.querySelector("#steplight")
let stepDark = document.querySelector("#stepDark")
//-
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

let changesIcons = () => {
    if (window.screen.width > 768) {
        if (isDark === true) { 
            camera.style.display = "none" 
            cameraDark.style.display = "block" 
            movie.style.display = "none" 
            movieDark.style.display = "block" 
            steplight.style.display = "none" 
            stepDark.style.display = "block" 
        } else {
            camera.style.display = "block" 
            cameraDark.style.display = "none" 
            movie.style.display = "block" 
            movieDark.style.display = "none"
            steplight.style.display = "block" 
            stepDark.style.display = "none"  
        }
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
        changesLogosHeader()
        changesIcons()
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
        changesLogosHeader()
        changesIcons()
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
    .then(stream => {//me devuelve un objeto, sea audio o video
        video.srcObject = stream;//aqui al nodo video le estoy seteando la propiedad
        //srcObjet y el parametro stream que paso cuando capturo la promesa).
        video.play()//esta propiedad es para que empiece a reproducir el src.

        recorder = RecordRTC(stream, {//esta información es la forma de preparar
            //y usar la librería para obtener el gif con las caracteristicas especificas
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
        two.classList.add('off');
        stepTwo.classList.remove('off');
        stepOne.classList.remove('off');
        one.classList.add('off');
    })
    .catch(error => {
        console.error(error)
        alert(`Debe permitir el acceso a la camara`)
    })
}

const recordStart = () => {
    recorder.startRecording(); //con startRecording empezamos a grabar
    btnRecord.classList.add('off');
    btnFinish.classList.remove('off');
}

const recordStop = () => {
    recorder.stopRecording(() => {
        gifBlob = recorder.getBlob(); // recuperamos el video
    }); // Finalizamos la grabacion!!
    btnFinish.classList.add('off');
    btnUpload.classList.remove('off');
}

const uploadGif = async () => {
    let data = new FormData();
    data.append('file', gifBlob, 'Gifos_Project.gif')
    console.log(data.get('file'))
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