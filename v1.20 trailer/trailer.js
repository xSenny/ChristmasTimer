

setInterval(() => {
  trimiteInapoi();
  
}, 1000);

function trimiteInapoi(){
  let date = new Date();
  if (date.getSeconds() == 35){
    window.location.href = "/../index.html";
    console.log('e');
  }
  console.log(date.getSeconds())

}