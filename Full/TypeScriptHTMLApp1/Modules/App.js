/// <reference path="../Scripts/typings/knockout/knockout.d.ts"/>
/// <reference path="../Scripts/typings/jquery/jquery.d.ts"/>
define(["require", "exports", "./Module1"], function (require, exports, M1) {
    "use strict";
    window.onload = function () {
        $("#content").text(new M1.Module1.StringValidator().isAcceptable("fff"));
    };
});
//# sourceMappingURL=App.js.map