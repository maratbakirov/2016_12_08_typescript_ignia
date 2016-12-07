/// <reference path="../Scripts/typings/knockout/knockout.d.ts"/>
/// <reference path="../Scripts/typings/jquery/jquery.d.ts"/>

//import {Module1 as M1} from "./Module1";
import  M1  = require("./Module1");

window.onload = () => {
    $("#content").text(new M1.Module1.StringValidator().isAcceptable("fff"));
}