/// <reference path="Scripts/typings/knockout/knockout.d.ts"/>
var KoDemo;
(function (KoDemo) {
    var Calc = (function () {
        function Calc() {
            var _this = this;
            this.aInner = 0;
            this.bInner = 0;
            this.result = ko.observable(0);
            this.a = ko.pureComputed({ read: function () { return _this.aInner.toString(); },
                write: function (value) { _this.aInner = parseInt(value); },
                owner: this
            });
            this.b = ko.pureComputed({
                read: function () { return _this.bInner.toString(); },
                write: function (value) { _this.bInner = parseInt(value); },
                owner: this
            });
            this.calc = function () {
                _this.result(_this.aInner + _this.bInner);
            };
        }
        return Calc;
    }());
    KoDemo.Calc = Calc;
    var calcStatic = new KoDemo.Calc();
    function init() {
        ko.applyBindings(calcStatic, document.getElementById("content"));
    }
    KoDemo.init = init;
})(KoDemo || (KoDemo = {}));
window.onload = function () {
    KoDemo.init();
};
//# sourceMappingURL=appKo.js.map