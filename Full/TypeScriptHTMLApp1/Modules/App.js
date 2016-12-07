/// <reference path="../Scripts/typings/knockout/knockout.d.ts"/>
define(["require", "exports", "./Module1"], function (require, exports, M1) {
    "use strict";
    function Minit() {
        document.getElementById('content').innerText =
            new M1.Module1.StringValidator().isAcceptable("fff").toString();
    }
    exports.Minit = Minit;
});
//# sourceMappingURL=App.js.map