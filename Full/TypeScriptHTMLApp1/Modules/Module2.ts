export module Module2 {
    export interface IStringValidator {
        isAcceptable(s: string): boolean;
    }

    export  function validator(s: string): boolean {
        return s == "true";
    }
}

