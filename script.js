

var firstSong = document.getElementById("firstSong");
var iconFirst = document.getElementById("firstIcon");


iconFirst.onclick = function(){
  if(firstSong.paused){
    firstSong.play();
    $("#firstIcon").find("i").removeClass('bi-play').toggleClass('bi-pause');
  } else {
    firstSong.pause();
    $("#firstIcon").find("i").removeClass('bi-pause').toggleClass('bi-play');
  }
}

var secondSong = document.getElementById("secondSong");
var iconSecond = document.getElementById("secondIcon");


iconSecond.onclick = function(){
  if(secondSong.paused){
    secondSong.play();
    $("#secondIcon").find("i").removeClass('bi-play').toggleClass('bi-pause');
  } else {
    secondSong.pause();
    $("#secondIcon").find("i").removeClass('bi-pause').toggleClass('bi-play');
  }
}



var thirdSong = document.getElementById("thirdSong");
var thirdIcon = document.getElementById("thirdIcon");


thirdIcon.onclick = function(){
  if(thirdSong.paused){
    thirdSong.play();
    $("#thirdIcon").find("i").removeClass('bi-play').toggleClass('bi-pause');
  } else {
    thirdSong.pause();
    $("#thirdIcon").find("i").removeClass('bi-pause').toggleClass('bi-play');
  }
}



var fourthSong = document.getElementById("fourthSong");
var fourthIcon = document.getElementById("fourthIcon");


fourthIcon.onclick = function(){
  if(fourthSong.paused){
    fourthSong.play();
    $("#fourthIcon").find("i").removeClass('bi-play').toggleClass('bi-pause');
  } else {
    fourthSong.pause();
    $("#fourthIcon").find("i").removeClass('bi-pause').toggleClass('bi-play');
  }
}

submitText = document.getElementById('submitText')
cancelButton = document.getElementById('cancelButton')
submitButton = document.getElementById('submitButton')

function enviar(){
  
  submitText.className = 'text-success'
  submitText.innerText = 'Obrigado pela mensagem. Em breve ela será lida!'
  submitButton.style.display = 'none'
  cancelButton.style.display = 'none'
}