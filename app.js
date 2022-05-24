const displayKey = document.querySelector(".key h2");
const displayKeyCode = document.querySelector(".keyCode h2");
const displayLocation = document.querySelector(".eventlocation h4")
const displayWhich = document.querySelector(".eventwhich h4")
const displayCode = document.querySelector(".eventcode h4")
const keyCodeDiv = document.querySelector(".keyCode");
const overlay = document.querySelector(".overlay");

window.addEventListener("keydown", (e) => {
    overlay.classList.add("hide");
    displayKey.innerHTML = e.key;  //displays the key pressed
    displayLocation.innerHTML = e.location //displays the location of the key pressed
    displayWhich.innerHTML = e.which
    displayCode.innerHTML = e.code
    displayKeyCode.innerHTML = e.keyCode; //displays the key code
    if (e.keyCode === 32) {
        displayKey.innerHTML = `spacebar`; //space bar doesn't have a 'pressed key' so checking that if the keycode is 32(spacebar) write space in the pressed key 
}
});