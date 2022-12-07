const zile = document.getElementById('days'),
      minute = document.getElementById('minutes'),
      ore = document.getElementById('hours'),
      secunde = document.getElementById('seconds');
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