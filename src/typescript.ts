let display = document.getElementById("screen") as HTMLInputElement;
function deg(): void {
    display.value = ((180 / Math.PI) * Number(display.value)).toFixed(2);
}
function fe(): void {
    display.value = Number.parseFloat(display.value).toExponential();
}
function memoryclear(): void {
    localStorage.removeItem("memory");
    let clrbtn = document.getElementById("memoryclear") as HTMLButtonElement
    let rcbtn = document.getElementById("memoryrecall") as HTMLButtonElement
    clrbtn.disabled = true;
    rcbtn.disabled = true;
}
function memoryrecall(): void {
    display.value = localStorage.getItem("memory")!;
}
function memoryplus(): void {
    display.value = eval(localStorage.getItem("memory") + "+" + display.value);
    localStorage.setItem("memory", display.value);
    let clrbtn = document.getElementById("memoryclear") as HTMLButtonElement
    let rcbtn = document.getElementById("memoryrecall") as HTMLButtonElement
    clrbtn.disabled = false;
    rcbtn.disabled = false;

}
function memoryminus(): void {
    display.value = eval(localStorage.getItem("memory") + "-" + display.value);
    localStorage.setItem("memory", display.value);
    let clrbtn = document.getElementById("memoryclear") as HTMLButtonElement
    let rcbtn = document.getElementById("memoryrecall") as HTMLButtonElement
    clrbtn.disabled = false;
    rcbtn.disabled = false;

}
function memorystore(): void {
    localStorage.setItem("memory", display.value);
    let clrbtn = document.getElementById("memoryclear") as HTMLButtonElement
    let rcbtn = document.getElementById("memoryrecall") as HTMLButtonElement
    clrbtn.disabled = false;
    rcbtn.disabled = false;

}
function trigonometry(): void {
    document.getElementById("myDropdown1")!.style.display = "block";
    document.getElementById("trigonometry")!.style.backgroundColor = "lightskyblue";
    document.getElementById("myDropdown2")!.style.display = "none";
    document.getElementById("function")!.style.backgroundColor = "#f3f3f3";
}
function sin(): void {
    display.value = Math.sin(Number(display.value) * Math.PI / 180).toFixed(2);

}
function cos(): void {
    display.value = Math.cos(Number(display.value) * Math.PI / 180).toFixed(2);

}
function tan(): void {
    display.value = Math.tan(Number(display.value) * Math.PI / 180).toFixed(2);

}
function specialfunction(): void {
    document.getElementById("myDropdown2")!.style.display = "block";
    document.getElementById("function")!.style.backgroundColor = "lightskyblue";
    document.getElementById("myDropdown1")!.style.display = "none";
    document.getElementById("trigonometry")!.style.backgroundColor = "#f3f3f3";

}
function abs(): void {
    display.value = Math.abs(Number(display.value)).toFixed(2);
}
function floor(): void {
    display.value = Math.floor(Number(display.value)).toString();
}
function ceil(): void {
    display.value = Math.ceil(Number(display.value)).toString();
}
// Close the dropdown if the user clicks outside of it
window.onclick = function (event): void {

    if (!(event.target as HTMLElement).matches('.trigonometry')) {
        document.getElementById("myDropdown1")!.style.display = "none";
        document.getElementById("trigonometry")!.style.backgroundColor = "#f3f3f3";
    }

    if (!(event.target as HTMLElement).matches('.function')) {
        document.getElementById("myDropdown2")!.style.display = "none";
        document.getElementById("function")!.style.backgroundColor = "#f3f3f3";
    }
}

function twopower(): void {
    display.value = Math.pow(2, Number(display.value)).toString();
}
function pi(): void {
    if (display.value.length === 0) {
        display.value = Math.PI.toFixed(2);
    }
    else {
        display.value = (eval(display.value) * Math.PI).toFixed(2);
    }
}

function e(): void {
    var val = Math.exp(1);
    if (display.value.length === 0) {
        display.value = Math.exp(1).toFixed(2);
    }
    else {
        display.value = (eval(display.value) * val).toFixed(2);
    }
}
function allclear(): void {
    display.value = "";
}
function del(): void {
    display.value = display.value.slice(0, -1);
}

function square(): void {
    display.value = Math.pow(Number(display.value), 2).toString();
}

function inverse(): void {
    display.value = (1 / Number(display.value)).toFixed(2);
}

function absolute(): void {
    display.value = Math.abs(Number(display.value)).toString();
}
function exp(): void {
    display.value = Math.exp(Number(display.value)).toFixed(2);
}
function sqrt(): void {
    display.value = Math.sqrt(Number(display.value)).toFixed(2);
}
function factorial(): void {
    var fact = Number(display.value);
    var f = 1;
    for (var i = 1; i <= fact; i++) {
        f = f * i;
    }
    display.value = f.toString();
}
function pow(): void {
    if (display.value.length == 0) {
        display.value = "1";
    }
    else {
        display.value = Math.pow(10, Number(display.value)).toString();
    }
}
function log(): void {
    display.value = Math.log10(Number(display.value)).toFixed(4);
}
function ln(): void {
    display.value = Math.log(Number(display.value)).toFixed(4);
}
function sign(): void {
    if (display.value.startsWith("-")) {
        display.value = display.value.substring(1);
    }
    else {
        display.value = "-" + display.value;
    }
}
function input(n: any): void {
    display.value += n;
}

function calc(): void {
    display.value = eval(display.value);
}


