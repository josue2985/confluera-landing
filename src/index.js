import { bro } from './bro';
import './styles/main.scss';
import { TimelineLite } from 'gsap';

var tl = new TimelineLite;
console.log(tl)

tl.to("#rectangle", 2, { 
  x:100, 
  y: 75,
  backgroundColor: "#000000",
  ease: Power4.easeIn
})

.to("#rectangle", 1, {
  scaleX: 1.5,
  scaleY: 1.5,
  backgroundColor: "#454545",
  ease: Back.easeOut.config(1.7)
})

.from("#circle", 1, {
  opacity: 0
});