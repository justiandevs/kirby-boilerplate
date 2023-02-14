import barba from '@barba/core';
import gsap from 'gsap';
import './index.css'

barba.init({
  transitions: [{
    name: 'opacity-transition',
    leave(data) {
      return gsap.to(data.current.container, {
        opacity: 0,
        display: "none"
      });
    },
    enter(data) {
      return gsap.from(data.next.container, {
        opacity: 0,
      });
    }
  }]
});

console.log('Hey Kirby, Twig, BarbaJS, GSAP and SCSS!')
