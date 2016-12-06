class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;

    constructor(element: HTMLElement) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }

    start() {
        this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
    }

    stop() {
        clearTimeout(this.timerToken);
    }

}

window.onload = () => {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
};


namespace DemoNamespace {
    function fun1() {

    }
    export interface IDemo {
        //var1:number;
        var2: string;
    }

    export class Demo implements IDemo {
        private var1: number = 1;
        public var2 = "asa";

        constructor() {
            this.z = () => { return this.var2 };
            //this.init2 = () => { return this.var2 };
        }

        z1 = (): string => this.var2;
        z: () => string;

        x(): string {
            return this.var2;
        }

        y: () => string = () => {
            return this.var2;
        }

        // defaults
        init1 = (a: number =2, z?: string) => {
            return "" + z;
        };

        //overloads
        init2(a: Date): string;
        init2(a: string): string;
        init2(a: Object): string {
            return "";
        }

        // new overloads
        init3(a: Date | string): string {
            return "";
        }

        init4(...numbers: number[]) {
            return numbers.length;
        }

        static s() { return "ss"; }

        get Prop() { return this.var1 }
        set Prop(n: number) { this.var1 = n };
    }
}

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
enum En1 {
    a = 1,
    b = 2,
    c=3
}

var e1: En1 = En1.a;

// interfaces and type comparison

var dd: DemoNamespace.IDemo = { var2: "asas" }

