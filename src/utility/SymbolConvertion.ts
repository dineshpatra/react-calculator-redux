import {Immutable} from './Types';

export const Symbols:Immutable<{[key:string]: {unicode:string}}> = {
    PLUS : {
        unicode   : "\u002B"
    },
    MINUS : {
        unicode : "\u2212"
    },
    DIVISION : {
        unicode : "\u00F7"
    },
    MULTIPLICATION : {
        unicode  : "\u00D7"
    },
    SQUARE : {
        unicode  : "\u00B2"
    },
    EQUAL : {
        unicode : "="
    },
    RESET : {
        unicode : "CE"
    },
    BACK : {
        unicode : "\u21BA"
    },
    PERCENTAGE : {
        unicode : "%"
    }
};


export const convertMathTOJS = (str:string):string|number => {
    str = str.replace(new RegExp(Symbols.MINUS.unicode,         "g"), "-")
             .replace(new RegExp(Symbols.DIVISION.unicode,      "g"), "/")
             .replace(new RegExp(Symbols.MULTIPLICATION.unicode, "g"), "*")
             .replace(new RegExp(Symbols.PERCENTAGE.unicode,     "g"), "/100*")
             .replace(new RegExp("(\\d+(\\.\\d+)?)" + Symbols.SQUARE.unicode, "g"), "Math.pow($1, 2)");
    try {
        return eval(str);
    } catch(e) {
        return "Syntax error";
    }
}