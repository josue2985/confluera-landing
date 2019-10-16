/*import { bro } from './bro';*/
import './styles/main.scss';


const video = document.getElementById('video');
const long = document.getElementById('long');
let scrollpos = 0;
let lastpos;
const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
  triggerElement: long,
  triggerHook: "onEnter"
});
const startScrollAnimation = () => {
  scene
    .addTo(controller)
    .duration(long.clientHeight)
    .on("progress", (e) => {
      scrollpos = e.progress;
    });

  setInterval(() => {
    if (lastpos === scrollpos) return;
    requestAnimationFrame(() => {
      video.currentTime = video.duration * scrollpos;
      video.pause();
      lastpos = scrollpos;
      // console.log(video.currentTime, scrollpos);
    });
  }, 50);
};

const preloadVideo = (v, callback) => {
  const ready = () => {
    v.removeEventListener('canplaythrough', ready);

    video.pause();
    var i = setInterval(function() {
      if (v.readyState > 3) {
        clearInterval(i);
        video.currentTime = 0;
        callback();
      }
    }, 50);
  };
  v.addEventListener('canplaythrough', ready, false);
  v.play();
};

preloadVideo(video, startScrollAnimation);

// startScrollAnimation();