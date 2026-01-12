
import gsap from 'gsap';

export function initPageAnimations() {
  
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }
  
  const tl = gsap.timeline({
    defaults: { ease: 'power3.out' }
  });
  
  
  tl.from('header', {
    y: -50,
    opacity: 0,
    duration: 0.8
  })
  .from('.hero-section', {
    y: 30,
    opacity: 0,
    duration: 0.7
  }, '-=0.3')
  .from('.feature-card', {
    y: 30,
    opacity: 0,
    stagger: 0.15,
    duration: 0.6
  }, '-=0.4');
  
  return tl;
}


export function waitForSplash() {
  return new Promise((resolve) => {
    if (document.getElementById('splash-screen')) {
      window.addEventListener('splashComplete', resolve, { once: true });
    } else {
      
      resolve(true);
    }
  });
}