# text-type-animation

Create a text animation that looks like typing

![](https://user-images.githubusercontent.com/712014/29747795-5b3c52e2-8aba-11e7-9c7e-c0aa23afcb75.gif)

## Install

```
npm install text-type-animation --save
```

## Usage

**index.js**

```js
import TextTypeAnimation from 'text-type-animation';

const frames = [
  {content: '|', delay: 2000, blink: true},
  {content: 'b|'},
  {content: 'br|'},
  {content: 'bri|'},
  {content: 'bria|'},
  {content: 'brian|'},
  {content: 'brian.|', delay: 3000, blink: true},
  {content: 'brian|.'},
  {content: 'bria|n.'},
  {content: 'bri|an.'},
  {content: 'br|ian.'},
  {content: 'b|rian.'},
  {content: '|brian.'}
];

let animation = new TextTypeAnimation(document.querySelector('header h1'), frames);
window.requestAnimationFrame(animation.step);
```

See [example](#)
