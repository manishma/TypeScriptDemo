
module Demo {

    export interface IClock {
        start(): void;
        stop(): void;
    }

    export enum ClockMode {
        Local, Utc
    }

    export class ClockFactory {
        static create(element: HTMLElement, mode: ClockMode): IClock {
            switch (mode) {
                case ClockMode.Local:
                    return new LocalClock(element);
                case ClockMode.Utc:
                    return new UtcClock(element);
            }
        };
    }

    class ClockBase implements IClock {
        element: HTMLElement;
        span: HTMLElement;
        timerToken: number;

        constructor(element: HTMLElement) {
            this.element = element;
            this.element.innerText += "The time is: ";
            this.span = document.createElement('span');
            this.element.appendChild(this.span);
            this.span.innerText = this.getTimeString();
        }

        getTimeString() : string {
            throw new Error('This method is abstract');
        }

        start() {
            this.timerToken = setInterval(() => this.span.innerText = this.getTimeString(), 500);
        }

        stop() {
            clearTimeout(this.timerToken);
        }

    }

    class UtcClock extends ClockBase {
        constructor(element: HTMLElement) {
            super(element);
        }

        getTimeString(): string {
            return new Date().toUTCString();
        }
    }

    class LocalClock extends ClockBase {
        constructor(element: HTMLElement) {
            super(element);
        }

        getTimeString(): string {
            return new Date().toLocaleString();
        }
    }
}

window.onload = () => {
    Demo.ClockFactory.create(document.getElementById('local_clock'), Demo.ClockMode.Local).start();
    Demo.ClockFactory.create(document.getElementById('utc_clock'), Demo.ClockMode.Utc).start();
};