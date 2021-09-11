/* Menu Mobile */

function menuToggle() {
    let menuMobile = document.getElementById('menu-mobile');
    if (menuMobile.style.width == '110px') {
        menuMobile.style.width = '0px';
    } else {
        menuMobile.style.width = '110px';
    }
}

/* header */

window.onscroll = function () { rolagem() };

function rolagem() {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        document.querySelector("#header").style.background = "linear-gradient(to left, #b4ddb4 0%,#83c783 7%,#52b152 20%,#008a00 45%,#005700 73%,#002400 100%)";
        document.querySelector("#header").style.borderBottom = "2px solid darkgreen";
    } else {
        document.querySelector("#header").style.background = "transparent";
        document.querySelector("#header").style.borderBottom = "transparent";
    }
}