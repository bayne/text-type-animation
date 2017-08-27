# text-type-animation

Create a text animation that looks like typing

![demo](https://user-images.githubusercontent.com/712014/29747839-0c1f82b8-8abc-11e7-8aef-bd5319c0436b.gif)

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

**For blinking cursor**

```css
header h1 {
  font-family: 'Source Code Pro', monospace;
  white-space: pre;
}
header h1 span.cursor {
  background-color: rgb(74, 74, 74);
  color: white;
}
header h1 span.cursor.blink {
  animation: blink 1.00s linear infinite;
}
@keyframes blink {
  0%, 50% {
    background-color: rgb(74, 74, 74);
    color: white;
  }
  51%, 100% {
    background-color: white;
    color: rgb(74,74,74);
  }
}
```

See [example](https://bayne.github.io/text-type-animation/)
