const player = document.querySelector('.player');
const video = player.querySelector('.viewer');


// toggle between play and pause

function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
};

video.addEventListener('click', togglePlay);