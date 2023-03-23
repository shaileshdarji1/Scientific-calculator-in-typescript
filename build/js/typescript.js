"use strict";
let display = document.getElementById("screen");
function deg() {
    display.value = ((180 / Math.PI) * Number(display.value)).toFixed(2);
}
function fe() {
    display.value = Number.parseFloat(display.value).toExponential();
}
function memoryclear() {
    localStorage.removeItem("memory");
    let clrbtn = document.getElementById("memoryclear");
    let rcbtn = document.getElementById("memoryrecall");
    clrbtn.disabled = true;
    rcbtn.disabled = true;
}
function memoryrecall() {
    display.value = localStorage.getItem("memory");
}
function memoryplus() {
    display.value = eval(localStorage.getItem("memory") + "+" + display.value);
    localStorage.setItem("memory", display.value);
    let clrbtn = document.getElementById("memoryclear");
    let rcbtn = document.getElementById("memoryrecall");
    clrbtn.disabled = false;
    rcbtn.disabled = false;
}
function memoryminus() {
    display.value = eval(localStorage.getItem("memory") + "-" + display.value);
    localStorage.setItem("memory", display.value);
    let clrbtn = document.getElementById("memoryclear");
    let rcbtn = document.getElementById("memoryrecall");
    clrbtn.disabled = false;
    rcbtn.disabled = false;
}
function memorystore() {
    localStorage.setItem("memory", display.value);
    let clrbtn = document.getElementById("memoryclear");
    let rcbtn = document.getElementById("memoryrecall");
    clrbtn.disabled = false;
    rcbtn.disabled = false;
}
function trigonometry() {
    document.getElementById("myDropdown1").style.display = "block";
    document.getElementById("trigonometry").style.backgroundColor = "lightskyblue";
    document.getElementById("myDropdown2").style.display = "none";
    document.getElementById("function").style.backgroundColor = "#f3f3f3";
}
function sin() {
    display.value = Math.sin(Number(display.value) * Math.PI / 180).toFixed(2);
}
function cos() {
    display.value = Math.cos(Number(display.value) * Math.PI / 180).toFixed(2);
}
function tan() {
    display.value = Math.tan(Number(display.value) * Math.PI / 180).toFixed(2);
}
function specialfunction() {
    document.getElementById("myDropdown2").style.display = "block";
    document.getElementById("function").style.backgroundColor = "lightskyblue";
    document.getElementById("myDropdown1").style.display = "none";
    document.getElementById("trigonometry").style.backgroundColor = "#f3f3f3";
}
function abs() {
    display.value = Math.abs(Number(display.value)).toFixed(2);
}
function floor() {
    display.value = Math.floor(Number(display.value)).toString();
}
function ceil() {
    display.value = Math.ceil(Number(display.value)).toString();
}
// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.trigonometry')) {
        document.getElementById("myDropdown1").style.display = "none";
        document.getElementById("trigonometry").style.backgroundColor = "#f3f3f3";
    }
    if (!event.target.matches('.function')) {
        document.getElementById("myDropdown2").style.display = "none";
        document.getElementById("function").style.backgroundColor = "#f3f3f3";
    }
};
function twopower() {
    display.value = Math.pow(2, Number(display.value)).toString();
}
function pi() {
    if (display.value.length === 0) {
        display.value = Math.PI.toFixed(2);
    }
    else {
        display.value = (eval(display.value) * Math.PI).toFixed(2);
    }
}
function e() {
    var val = Math.exp(1);
    if (display.value.length === 0) {
        display.value = Math.exp(1).toFixed(2);
    }
    else {
        display.value = (eval(display.value) * val).toFixed(2);
    }
}
function allclear() {
    display.value = "";
}
function del() {
    display.value = display.value.slice(0, -1);
}
function square() {
    display.value = Math.pow(Number(display.value), 2).toString();
}
function inverse() {
    display.value = (1 / Number(display.value)).toFixed(2);
}
function absolute() {
    display.value = Math.abs(Number(display.value)).toString();
}
function exp() {
    display.value = Math.exp(Number(display.value)).toFixed(2);
}
function sqrt() {
    display.value = Math.sqrt(Number(display.value)).toFixed(2);
}
function factorial() {
    var fact = Number(display.value);
    var f = 1;
    for (var i = 1; i <= fact; i++) {
        f = f * i;
    }
    display.value = f.toString();
}
function pow() {
    if (display.value.length == 0) {
        display.value = "1";
    }
    else {
        display.value = Math.pow(10, Number(display.value)).toString();
    }
}
function log() {
    display.value = Math.log10(Number(display.value)).toFixed(4);
}
function ln() {
    display.value = Math.log(Number(display.value)).toFixed(4);
}
function sign() {
    if (display.value.startsWith("-")) {
        display.value = display.value.substring(1);
    }
    else {
        display.value = "-" + display.value;
    }
}
function input(n) {
    display.value += n;
}
function calc() {
    display.value = eval(display.value);
}
