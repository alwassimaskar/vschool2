document.getElementById("sponge1").addEventListener("click", one);
function one() {
    
    var nbr1 = document.getElementById("sponge1").value * 5;
    document.getElementById("sponge").value = nbr1;
}

document.getElementById("star1").addEventListener("click", tow);

function tow() {
    
    var nbr2 = document.getElementById("star1").value * 7;
    document.getElementById("star").value = nbr2;
}

document.getElementById("MrMoney1").addEventListener("click", three);

function three() {
    var nbr3 = document.getElementById("MrMoney1").value * 11;
    document.getElementById("MrMoney").value = nbr3;
}


