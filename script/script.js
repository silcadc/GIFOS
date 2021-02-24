//click - navigation bar
let headerCross = document.getElementById("burger")
headerCross.addEventListener("click", () => {
    headerCross.classList.add("burgerOff")
    document.querySelector("#cross").classList.remove("crossOff")
    document.querySelector("#menu").classList.remove("menuOff")
})

let headerBurger = document.getElementById("cross")
headerBurger.addEventListener("click", () => {
    headerBurger.classList.add("crossOff")
    document.querySelector("#burger").classList.remove("burgerOff")
    document.querySelector("#menu").classList.add("menuOff")
})

//click - GIFOS Finder - First Section
let magnifying = document.getElementById("magnifying")
magnifying.addEventListener("click", () => {
    magnifying.classList.add("magnifyingOff")
    document.querySelector("#crossMagnifying").classList.remove("finderOff")
})

let crossMagnifying = document.getElementById("crossMagnifying")
crossMagnifying.addEventListener("click", () => {
    crossMagnifying.classList.add("finderOff")
    document.querySelector("#magnifying").classList.remove("magnifyingOff")
})

