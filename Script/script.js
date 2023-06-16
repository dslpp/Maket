var play = document.querySelector('.play');
var overlay = document.querySelector('.overlay');
var imgvideo = document.querySelector('#imgvideo');
var whatch = document.querySelector('#whatch');
var timevideo = document.querySelector('#timevideo');
var player;

play.addEventListener('click', function() {
  overlay.style.display = 'grid';
  imgvideo.style.display='none';
  whatch.style.display='none';
  timevideo.style.display='none';
  if (!player) {
    player = new YT.Player('player', {
      videoId: 'Rk1MYMPDx3s',
      playerVars: {
        autoplay: 1,
      },
    });
  }
  play.style.display='none';
});

var closeBtn = document.querySelector('.close');

closeBtn.addEventListener('click', function() {
  overlay.style.display = 'none';
  if (player) {
    player.stopVideo();
  }
  play.style.display='grid';
  imgvideo.style.display='grid';
  whatch.style.display='grid';
  timevideo.style.display='grid';
});

