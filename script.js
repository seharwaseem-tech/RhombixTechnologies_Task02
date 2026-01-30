var settingsmenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn");

function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height");
}

darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if(document.body.classList.contains("dark-theme")){
        localStorage.setItem("theme","dark");
    } else {
        localStorage.setItem("theme","light");
    }
};

// page refresh hone par
if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark-theme");
    darkBtn.classList.add("dark-btn-on");
} else {
    document.body.classList.remove("dark-theme");
    darkBtn.classList.remove("dark-btn-on");
}
