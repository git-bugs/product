import './style.scss';

import gsap from 'gsap';

gsap.from('h1', {
  x: 1000,
  duration: 2,
  ease: 'expo.inOut',
});
