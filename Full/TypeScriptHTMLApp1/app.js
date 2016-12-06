var Greeter = (function () {
    function Greeter(element) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }
    Greeter.prototype.start = function () {
        var _this = this;
        this.timerToken = setInterval(function () { return _this.span.innerHTML = new Date().toUTCString(); }, 500);
    };
    Greeter.prototype.stop = function () {
        clearTimeout(this.timerToken);
    };
    return Greeter;
}());
window.onload = function () {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
};
var DemoNamespace;
(function (DemoNamespace) {
    function fun1() {
    }
    var Demo = (function () {
        function Demo() {
            var _this = this;
            this.var1 = 1;
            this.var2 = "asa";
            this.z1 = function () { return _this.var2; };
            this.y = function () {
                return _this.var2;
            };
            // defaults
            this.init1 = function (a, z) {
                if (a === void 0) { a = 2; }
                return "" + z;
            };
            this.z = function () { return _this.var2; };
            //this.init2 = () => { return this.var2 };
        }
        Demo.prototype.x = function () {
            return this.var2;
        };
        Demo.prototype.init2 = function (a) {
            return "";
        };
        // new overloads
        Demo.prototype.init3 = function (a) {
            return "";
        };
        Demo.prototype.init4 = function () {
            var numbers = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                numbers[_i - 0] = arguments[_i];
            }
            return numbers.length;
        };
        Demo.s = function () { return "ss"; };
        Object.defineProperty(Demo.prototype, "Prop", {
            get: function () { return this.var1; },
            set: function (n) { this.var1 = n; },
            enumerable: true,
            configurable: true
        });
        ;
        return Demo;
    }());
    DemoNamespace.Demo = Demo;
})(DemoNamespace || (DemoNamespace = {}));
new DemoNamespace.Demo().x();
var v1 = DemoNamespace.Demo.s();
var d = new DemoNamespace.Demo();
d.var2 = "asa";
d.Prop = 2;
d.init2("");
d.init3("asa");
d.init3(new Date());
d.init4(1, 2, 3, 4, 5);
// compiler eror
//d.init3(12)
///////////////
var En1;
(function (En1) {
    En1[En1["a"] = 1] = "a";
    En1[En1["b"] = 2] = "b";
    En1[En1["c"] = 3] = "c";
})(En1 || (En1 = {}));
var e1 = En1.a;
// interfaces and type comparison
var dd = { var2: "asas" };
//# sourceMappingURL=app.js.map