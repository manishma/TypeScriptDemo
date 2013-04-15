/// <reference path="Scripts/jquery.d.ts" />

module Demo {

    export class ClockWithJQuery {
        private element: JQuery;
        private span: JQuery;
        private timerToken: number;

        constructor(element: JQuery) {

            this.element = element;
            this.element.text("The time is: ");
            this.span = $('<span></span>').appendTo(element);
            this.updateText();

            element.append($('<span>&nbsp;&nbsp;&nbsp;</span>'));
            $('<button />').text('start').appendTo(element).click(() => this.start());
            $('<button />').text('stop').appendTo(element).click(() => this.stop());
        }

        private updateText(): void {
            this.span.text(new Date().toUTCString());
        }

        start() {
            this.timerToken = setInterval(() => this.updateText(), 500);
        }

        stop() {
            clearTimeout(this.timerToken);
        }

    }
}

$(() => {
    var el = $('#clock');
    var clock = new Demo.ClockWithJQuery(el);
    clock.start();
});