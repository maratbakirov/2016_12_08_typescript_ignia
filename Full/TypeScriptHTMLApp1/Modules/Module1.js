var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./Module2"], function (require, exports, Module2_1) {
    "use strict";
    var Module1;
    (function (Module1) {
        var StringValidator = (function () {
            function StringValidator() {
            }
            StringValidator.prototype.isAcceptable = function (s) {
                return Module2_1.Module2.validator(s);
            };
            return StringValidator;
        }());
        Module1.StringValidator = StringValidator;
        var StringValidator2 = (function (_super) {
            __extends(StringValidator2, _super);
            function StringValidator2() {
                _super.apply(this, arguments);
            }
            StringValidator2.prototype.isAcceptable = function (s) {
                return !Module2_1.Module2.validator(s);
            };
            return StringValidator2;
        }(StringValidator));
        Module1.StringValidator2 = StringValidator2;
    })(Module1 = exports.Module1 || (exports.Module1 = {}));
});
//# sourceMappingURL=Module1.js.map