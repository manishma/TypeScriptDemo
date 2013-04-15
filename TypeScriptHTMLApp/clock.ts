
module Demo {
    export class Clock {
        element: HTMLElement;
        span: HTMLElement;
        timerToken: number;

        constructor(element: HTMLElement) {
            this.element = element;
            this.element.innerText += "The time is: ";
            this.span = document.createElement('span');
            this.element.appendChild(this.span);
            this.span.innerText = new Date().toUTCString();
        }

        start() {
            this.timerToken = setInterval(() => this.span.innerText = new Date().toUTCString(), 500);
        }

        stop() {
            clearTimeout(this.timerToken);
        }

    }
}

window.onload = () => {
    var el = document.getElementById('clock');
    var clock = new Demo.Clock(el);
    clock.start();
};