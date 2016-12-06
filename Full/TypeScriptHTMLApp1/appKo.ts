/// <reference path="Scripts/typings/knockout/knockout.d.ts"/>

namespace KoDemo {

    export class Calc {
        aInner: number =0;
        bInner = 0;
        result = ko.observable(0);
        a = ko.pureComputed<string>(
            {read: ()=> { return this.aInner.toString();},
            write:(value) => { this.aInner = parseInt(value); },
             owner:this
        });
        b = ko.pureComputed<string>(
            {
                read: () => { return this.bInner.toString(); },
                write: (value) => { this.bInner = parseInt(value); },
                owner: this
            });

        calc = () => {
            this.result(this.aInner + this.bInner);
        }
    }
    var calcStatic: Calc = new KoDemo.Calc();
    export function init() {
        ko.applyBindings(calcStatic, document.getElementById("content"));
    }

}

window.onload = function() {
    KoDemo.init();
};
