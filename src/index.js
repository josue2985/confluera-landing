/*import { bro } from './bro';*/
import './styles/main.scss';

TweenLite.defaultEase = Linear.easeNone;
var controller = new ScrollMagic.Controller();
var tl = new TimelineMax();
tl.staggerFrom(".box", 1.5, {
  scale: 0,
  cycle: {
    y: [-50, 50]
  },
  stagger: {
    from: "center",
    amount: 0.75
  }
});

var scene = new ScrollMagic.Scene({
  triggerElement: "#stage",
  duration: "30%",
  triggerHook: 0.25
})
  .addIndicators({
    name: "Box Timeline",
    colorTrigger: "white",
    colorStart: "white",
    colorEnd: "white"
  })
  .setTween(tl)
  .addTo(controller);

