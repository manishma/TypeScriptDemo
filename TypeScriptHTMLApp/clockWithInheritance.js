var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Demo;
(function (Demo) {
    (function (ClockMode) {
        ClockMode._map = [];
        ClockMode._map[0] = "Local";
        ClockMode.Local = 0;
        ClockMode._map[1] = "Utc";
        ClockMode.Utc = 1;
    })(Demo.ClockMode || (Demo.ClockMode = {}));
    var ClockMode = Demo.ClockMode;
    var ClockFactory = (function () {
        function ClockFactory() { }
        ClockFactory.create = function create(element, mode) {
            switch(mode) {
                case ClockMode.Local:
                    return new LocalClock(element);
                case ClockMode.Utc:
                    return new UtcClock(element);
            }
        };
        return ClockFactory;
    })();
    Demo.ClockFactory = ClockFactory;    
    var ClockBase = (function () {
        function ClockBase(element) {
            this.element = element;
            this.element.innerText += "The time is: ";
            this.span = document.createElement('span');
            this.element.appendChild(this.span);
            this.span.innerText = this.getTimeString();
        }
        ClockBase.prototype.getTimeString = function () {
            throw new Error('This method is abstract');
        };
        ClockBase.prototype.start = function () {
            var _this = this;
            this.timerToken = setInterval(function () {
                return _this.span.innerText = _this.getTimeString();
            }, 500);
        };
        ClockBase.prototype.stop = function () {
            clearTimeout(this.timerToken);
        };
        return ClockBase;
    })();    
    var UtcClock = (function (_super) {
        __extends(UtcClock, _super);
        function UtcClock(element) {
                _super.call(this, element);
        }
        UtcClock.prototype.getTimeString = function () {
            return new Date().toUTCString();
        };
        return UtcClock;
    })(ClockBase);    
    var LocalClock = (function (_super) {
        __extends(LocalClock, _super);
        function LocalClock(element) {
                _super.call(this, element);
        }
        LocalClock.prototype.getTimeString = function () {
            return new Date().toLocaleString();
        };
        return LocalClock;
    })(ClockBase);    
})(Demo || (Demo = {}));
window.onload = function () {
    Demo.ClockFactory.create(document.getElementById('local_clock'), Demo.ClockMode.Local).start();
    Demo.ClockFactory.create(document.getElementById('utc_clock'), Demo.ClockMode.Utc).start();
};
//@ sourceMappingURL=clockWithInheritance.js.map
