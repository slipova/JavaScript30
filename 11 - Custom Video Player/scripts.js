const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');

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

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
skipButtons.forEach(button => button.addEventListener('click', skip));

toggle.addEventListener('click', togglePlay);