var Demo;
(function (Demo) {
    var Clock = (function () {
        function Clock(element) {
            this.element = element;
            this.element.innerText += "The time is: ";
            this.span = document.createElement('span');
            this.element.appendChild(this.span);
            this.span.innerText = new Date().toUTCString();
        }
        Clock.prototype.start = function () {
            var _this = this;
            this.timerToken = setInterval(function () {
                return _this.span.innerText = new Date().toUTCString();
            }, 500);
        };
        Clock.prototype.stop = function () {
            clearTimeout(this.timerToken);
        };
        return Clock;
    })();
    Demo.Clock = Clock;    
})(Demo || (Demo = {}));
window.onload = function () {
    var el = document.getElementById('clock');
    var clock = new Demo.Clock(el);
    clock.start();
};
//@ sourceMappingURL=clock.js.map
