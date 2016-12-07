import {Module2 as M2} from "./Module2";
import * as M2_1 from "./Module2";


export module Module1 {
    export class StringValidator implements M2.IStringValidator {
        public isAcceptable(s: string): boolean {
            return M2.validator(s);
        }
    }
    export class StringValidator2
        extends StringValidator
        implements M2_1.Module2.IStringValidator{
        public isAcceptable(s: string): boolean {
            return !M2.validator(s);
        }
    }
}