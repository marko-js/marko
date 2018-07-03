module.exports = function attrs(arg) {
    if (typeof arg === "object") {
        var out = "";
        for (var attrName in arg) {
            if (attrName === "style") {
                out += helpers.sa(arg[attrName]);
            } else if (attrName === "class") {
                out += helpers.ca(arg[attrName]);
            } else {
                out += attrHelper(attrName, arg[attrName]);
            }
        }
        return out;
    } else if (typeof arg === "string") {
        return arg;
    }
    return "";
};

var attrHelper = require("./helper-attr");
var helpers = require("./helpers");
