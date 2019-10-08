const theBird = document.querySelector("#theBird");
const main = document.querySelector("main");

// Fuglens y-posisjon
let ypos = 100;
let fart = 3;
let flaksekraft = 16;
let g = 0.6;
let bakgrunnsfart = -5; // Skal gå til venstre
let bakgrunnspos = 0;

// Så lenge denne er true, skal spillet kjøre
let theGameIsOn = true;

function flyttBakgrunn() {
    bakgrunnspos += bakgrunnsfart;
    main.style.backgroundPosition = `${bakgrunnspos}px 0`;
}

// Fuglen flakser
function flaks() {
    fart = -flaksekraft;
}

document.addEventListener("click", flaks);

// Flytter fuglen nedover
function fallNed() {
    fart += g;
    ypos += fart;
    theBird.style.top = ypos + "px";
    theBird.style.transform = `rotate(${fart * 2}deg)`;
}

function sjekkOmFuglenTrefferBakken() {
    if(ypos > 350) {
        theGameIsOn = false;
    }
}

function gameLoop() {

    fallNed();
    flyttBakgrunn();
    sjekkOmFuglenTrefferBakken();
    if(theGameIsOn) {
        requestAnimationFrame(gameLoop);
    }
    
}

// Starter loopen
gameLoop();