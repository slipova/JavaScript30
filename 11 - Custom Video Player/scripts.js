const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const toggle = player.querySelector('.toggle');

// toggle between play and pause

function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
};

function updateButton() {
  const icon = video.paused ? '►' : '❚ ❚'
  toggle.textContent = icon;
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

toggle.addEventListener('click', togglePlay);