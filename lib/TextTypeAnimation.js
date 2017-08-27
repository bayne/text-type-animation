export default class TextTypeAnimation {
    constructor(element, frames) {
        this.element = element;

        this.frames = (function* () {
            while (true) {
                for (let frame of frames) {
                    yield frame;
                }
            }
        })();

        this.frame = this.frames.next();
        let {content, delay = 150, blink = false} = this.frame.value;
        this.blink = blink;
        this.content = content;
        this.animationDelay = delay;
        this.blinkDelay = 150;
        this.blinkStart = 0;
        this.animationStart = 0;

        this.cursorElement = this.element.ownerDocument.createElement('span');
        this.cursorElement.classList.add('cursor');
        this.element.appendChild(this.cursorElement);

        this.step = this.step.bind(this)
    }

    static process(content) {
        let cursorIndex = content.indexOf('|');
        if (content.length - 1 == cursorIndex) {
            content = content + " ";
        }
        let processed = content.substring(0, cursorIndex) + content.substring(cursorIndex + 1);

        return `${processed.substring(0, cursorIndex)}<span class="cursor">${processed.charAt(cursorIndex)}</span>${processed.substring(cursorIndex + 1)}`;
    }

    step(timestamp) {
        if (this.blink) {
            if (timestamp - this.blinkStart > this.blinkDelay) {
                this.blinkStart = timestamp;
                this.cursorElement.classList.toggle('blink');
            }
        } else {
            if (this.cursorElement.classList.contains('blink')) {
                this.cursorElement.classList.remove('blink');
            }
            this.blinkStart = timestamp;
        }

        if (timestamp - this.animationStart > this.animationDelay) {
            this.frame = this.frames.next();
            this.animationStart = timestamp;

            let {content, delay = 150, blink = false} = this.frame.value;
            this.animationDelay = delay;
            this.blink = blink;

            content = TextTypeAnimation.process(content);

            this.element.innerHTML = content;
        }

        this.element.ownerDocument.defaultView.requestAnimationFrame(this.step);
    }

}
