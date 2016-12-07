/// <reference path="../Scripts/typings/knockout/knockout.d.ts"/>

//import {Module1 as M1} from "./Module1";
import  M1  = require("./Module1");

export function Minit() {
    document.getElementById('content').innerText =
        new M1.Module1.StringValidator().isAcceptable("fff").toString();
}