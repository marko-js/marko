"use strict";

var escape = require("./escape-xml");
var escapeDoubleQuotes = escape.d;
var escapeSingleQuotes = escape.s;

module.exports = function attr(name, value) {
    if (value == null || value === false) {
        return "";
    }

    var result = " " + name;

    if (value === true) {
        return result;
    }

    result += "=";

    switch (typeof value) {
        case "number":
            return result + value;
        case "object":
            return (
                result +
                (value instanceof RegExp
                    ? doubleQuote(value.source)
                    : singleQuote(JSON.stringify(value)))
            );
        default:
            return result + doubleQuote(value);
    }
};

function doubleQuote(value) {
    return '"' + escapeDoubleQuotes(value) + '"';
}

function singleQuote(value) {
    return "'" + escapeSingleQuotes(value) + "'";
}
