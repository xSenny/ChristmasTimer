const zile = document.getElementById('days'),
      minute = document.getElementById('minutes'),
      ore = document.getElementById('hours'),
      secunde = document.getElementById('seconds');
      textbg = document.getElementById('textbg');
const background = document.getElementById('video');
let xYear = 2020;
setInterval(() => {
    findDate();
    
}, 1000);


function findDate(){
    let currentTime = new Date(),
        christmasYear = currentTime.getFullYear();

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
    displayDate(zero(DAYS), zero(HOURS), zero(MINUTES), zero(SECONDS), DAYS);
    animateSanta(SECONDS, MINUTES);
    if (SECONDS == 0 && MINUTES == 0 && HOURS == 0){
        startEvent(SECONDS, MINUTES, HOURS);
    }
    // spawnLola(SECONDS, HOURS, MINUTES);
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
        if (background.getAttribute("src") != "bg-christmas-2.mp4"){
            background.setAttribute("src", "bg-christmas-2.mp4");
            background.load();
        }
}

function animateSanta(s, m){
    if (s == 45 && m % 15 == 0){
        document.getElementById('santa').style.animation = "fly 300s "
    }else if (s == 7 && m % 7 == 0){
        document.getElementById('lola').style.animation = "flyLola 300s"
    }else if (s == 20 && m == 0){
        document.getElementById('cici').style.animation = "fly 300s"
    }
    
}

// function spawnLola(s, h, m){
//     if (s == 59 && h == 23 && m == 59){
//         document.getElementById('anunt').style.opacity = 1;
//         document.getElementById('anunt').style.animation = "animate-pop 1s"
//     }else if (s == 55 && h == 23 && m == 59){
//         document.getElementById('anunt').style.opacity = 0;
//         document.getElementById('anunt').style.animation = "animate-pop-reversed 1s"
//     }
// }

function displayDate(d, h, m, s, date){
    zile.innerHTML = d;
    ore.innerHTML = h;
    minute.innerHTML = m;
    secunde.innerHTML = s;
    textbg.innerHTML = date;
}

function zero(arg){
    if(arg < 10){
        arg = "0" + arg;
    }
    return arg;
}

function startEvent(s, m, h){
    window.location.href = "v1.20 trailer/trailer.html";
}
