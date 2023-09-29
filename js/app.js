
document.addEventListener("DOMContentLoaded", () => {

  const play = document.querySelector(".play");

  const pause = document.querySelector(".pause");

  const audio = document.querySelector(".audio audio");

  play.addEventListener("click", () => {
    audio.play();
    update();
  });
  pause.addEventListener("click", () => {
    audio.pause();
  });

  const seasons = document.querySelectorAll(".season"),
    video = document.querySelector(".video video");

  seasons.forEach((season) => {
    season.addEventListener("click", () => {
      video.src = season.getAttribute("video-src");
    });
  });


  const durations = document.querySelectorAll(".duration");

  let audioDuration = 120; 

  durations.forEach((duration) => {
    duration.addEventListener("click", () => {
      audioDuration = duration.getAttribute("audio-duration");
      console.log(audioDuration);
      update();
    });
  });

  const path = document.querySelector(".rect"),
  remainingTimeEl = document.querySelector(".audio-remaining-time");

  const pathLenght = path.getTotalLength();

  path.style.strokeDasharray = pathLenght;

 const renderRemainingTime = (timeInSec) =>{
  let min= Math.floor(timeInSec / 60);
  let sec = Math.floor(timeInSec % 60);
  
  min = min < 10 ? `0${min}` : min;
  sec = sec < 10 ? `0${sec}` : sec;
  
  remainingTimeEl.innerHTML = `${min}:${sec}`;
  }
  
  const update = () => {

    if (audio.currentTime >= audioDuration){
    audio.pause();
    audio.currentTime = 0; 
    }
    
    let portionPlayed = audio.currentTime / audioDuration;

    path.style.strokeDashoffset = -portionPlayed * pathLenght;

    let remainingTimeinSec = audioDuration - audio.currentTime;
    renderRemainingTime(remainingTimeinSec);

    if(!audio.paused){
      window.requestAnimationFrame(update);
    }
  }
  update();

});



