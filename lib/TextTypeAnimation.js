export default class TextTypeAnimation {
    constructor(element, frames) {
        this.document = element.ownerDocument;
        this.cursorElement = this.document.createElement('span');
        this.cursorElement.classList.add('cursor');
        this.leftElement = this.document.createElement('span');
        this.rightElement = this.document.createElement('span');

        element.appendChild(this.leftElement);
        element.appendChild(this.cursorElement);
        element.appendChild(this.rightElement);

        this.frames = (function* () {
            while (true) {
                for (let frame of frames) {
                    yield frame;
                }
            }
        })();

        this.frame = this.frames.next();
        let {content, delay = 150, blink = false} = this.frame.value;

        this.cursorElement.classList.toggle('blink', blink);

        content = TextTypeAnimation.process(content);
        this.leftElement.innerHTML = content.left;
        this.cursorElement.innerHTML = content.highlighted;
        this.rightElement.innerHTML = content.right;

        this.animationDelay = delay;
        this.blinkDelay = 400;
        this.blinkStart = 0;
        this.animationStart = 0;

        this.step = this.step.bind(this)
    }

    static process(content) {
        let cursorIndex = content.indexOf('|');
        if (content.length - 1 == cursorIndex) {
            content = content + " ";
        }
        let processed = content.substring(0, cursorIndex) + content.substring(cursorIndex + 1);
        return {
            left: processed.substring(0, cursorIndex),
            highlighted: processed.charAt(cursorIndex),
            right: processed.substring(cursorIndex + 1)
        };
    }

    step(timestamp) {

        if (timestamp - this.animationStart > this.animationDelay) {
            this.frame = this.frames.next();
            this.animationStart = timestamp;

            let {content, delay = 150, blink = false} = this.frame.value;
            this.animationDelay = delay;

            this.cursorElement.classList.toggle('blink', blink);

            content = TextTypeAnimation.process(content);

            this.leftElement.innerHTML = content.left;
            this.cursorElement.innerHTML = content.highlighted;
            this.rightElement.innerHTML = content.right;
        }

        this.document.defaultView.requestAnimationFrame(this.step);
    }

}
