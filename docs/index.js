import TextTypeAnimation from 'text-type-animation';
const frames = [
  {content: '|', delay: 2000, blink: true},
  {content: 'b|'},
  {content: 'br|'},
  {content: 'bri|'},
  {content: 'bria|'},
  {content: 'brian|'},
  {content: 'brian p|'},
  {content: 'brian pa|'},
  {content: 'brian pay|'},
  {content: 'brian payn|'},
  {content: 'brian payne|'},
  {content: 'brian payne.|', delay: 3000, blink: true},
  {content: 'brian payne|.'},
  {content: 'brian payn|e.'},
  {content: 'brian pay|ne.'},
  {content: 'brian pa|yne.'},
  {content: 'brian p|ayne.', delay: 800},
  {content: 'brian |ayne.', delay: 400},
  {content: 'brian|ayne.', delay: 350},
  {content: 'bria|ayne.', delay: 500},
  {content: 'bri|ayne.', delay: 250},
  {content: 'br|ayne.', delay: 330},
  {content: 'b|ayne.', delay: 200},
  {content: '|bayne.', delay: 3000, blink: true},
  {content: '|ayne.'},
  {content: '|yne.'},
  {content: '|ne.'},
  {content: '|e.'},
  {content: '|.'}
];

let animation = new TextTypeAnimation(document.querySelector('header h1'), frames);
window.requestAnimationFrame(animation.step);
