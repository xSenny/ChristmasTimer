const zile = document.getElementById('days'),
      minute = document.getElementById('minutes'),
      ore = document.getElementById('hours'),
      secunde = document.getElementById('seconds');
const background = document.getElementById('bg-video');
let xYear = 2020;
setInterval(() => {
    findDate();
    
}, 1000);


function findDate(){
    let currentTime = new Date(),
        christmasYear = currentTime.getFullYear()+1;

    // getMonth() method returns the month (from 0 to 11)
    if(currentTime.getMonth() == 0 && currentTime.getDate() == 7){
        christmasYear += 1; 
    }

    let christmasTime = new Date(christmasYear, 0, 7); 
    let dateDiff = Math.floor(christmasTime - currentTime);

    let DAYS = 0, HOURS = 0, MINUTES = 0, SECONDS = 0;

    if(currentTime.getMonth() != 0 || (currentTime.getMonth() == 0 && currentTime.getDate() != 7)){
        DAYS = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
        HOURS = Math.floor((dateDiff) % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        MINUTES = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
        SECONDS = Math.floor((dateDiff) % (1000 * 60) / 1000);
    }
    displayDate(zero(DAYS), zero(HOURS), zero(MINUTES), zero(SECONDS));
    animateSanta(SECONDS, MINUTES);
    if (dateDiff < (1000 * 60 * 60 * 24 * 29)){
        changeBackgrounds(1)
    }
}

function changeBackgrounds(index){
    switch(index){
        case 1:
            changeBackground1();
            break;
        
        default:
            console.log("Problema")
    }
}

function onLoad(){
    console.log('t')
    let currentTime = new Date(),
        christmasYear = currentTime.getFullYear()+1;

    // getMonth() method returns the month (from 0 to 11)
    if(currentTime.getMonth() == 0 && currentTime.getDate() == 7){
        christmasYear += 1; 
    }

    let christmasTime = new Date(christmasYear, 0, 7); 
    let dateDiff = Math.floor(christmasTime - currentTime);
    if (dateDiff < (1000 * 60 * 60 * 24 * 29)){
        changeBackgrounds(1)
    }
}

function changeBackground1(){
        if (background.getAttribute("src") != "bg-christmas-1.mp4"){
            background.setAttribute("src", "bg-christmas-1.mp4");
            background.load();
        }
}
var timer;
function animateSanta(s, m){
    if (s == 45 && m % 15 == 0){
        document.getElementById('santa').style.animation = "fly 300s "
    }else if (s == 7 && m % 7 == 0){
        document.getElementById('lola').style.animation = "flyLola 300s"
    }else if (s == 20 && m == 0){
        document.getElementById('cici').style.animation = "fly 300s"
    }
    
}



function displayDate(d, h, m, s){
    zile.innerHTML = d;
    ore.innerHTML = h;
    minute.innerHTML = m;
    secunde.innerHTML = s;
}

function zero(arg){
    if(arg < 10){
        arg = "0" + arg;
    }
    return arg;
}
