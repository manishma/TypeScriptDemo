/// <reference path="Scripts/jquery.d.ts" />
var Demo;
(function (Demo) {
    var ClockWithJQuery = (function () {
        function ClockWithJQuery(element) {
            var _this = this;
            this.element = element;
            this.element.text("The time is: ");
            this.span = $('<span></span>').appendTo(element);
            this.updateText();
            element.append($('<span>&nbsp;&nbsp;&nbsp;</span>'));
            $('<button />').text('start').appendTo(element).click(function () {
                return _this.start();
            });
            $('<button />').text('stop').appendTo(element).click(function () {
                return _this.stop();
            });
        }
        ClockWithJQuery.prototype.updateText = function () {
            this.span.text(new Date().toUTCString());
        };
        ClockWithJQuery.prototype.start = function () {
            var _this = this;
            this.timerToken = setInterval(function () {
                return _this.updateText();
            }, 500);
        };
        ClockWithJQuery.prototype.stop = function () {
            clearTimeout(this.timerToken);
        };
        return ClockWithJQuery;
    })();
    Demo.ClockWithJQuery = ClockWithJQuery;    
})(Demo || (Demo = {}));
$(function () {
    var el = $('#clock');
    var clock = new Demo.ClockWithJQuery(el);
    clock.start();
});
//@ sourceMappingURL=clockWithJQuery.js.map
