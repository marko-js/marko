var complain = "MARKO_DEBUG" && require("complain");

module.exports = function attrs(arg) {
    if (typeof arg === "object") {
        var out = "";
        for (var attrName in arg) {
            if (attrName === "style") {
                out += helpers.sa(arg[attrName]);
            } else if (attrName === "class") {
                out += helpers.ca(arg[attrName]);
            } else if (isValidAttrName(attrName)) {
                out += attrHelper(attrName, arg[attrName]);
            }
        }
        return out;
    } else if (typeof arg === "string") {
        // eslint-disable-next-line no-constant-condition
        if ("MARKO_DEBUG") {
            complain(
                "Passing a string as a dynamic attribute value is deprecated - More details: https://github.com/marko-js/marko/wiki/Deprecation:-String-as-dynamic-attribute-value"
            );
        }
        return arg;
    }
    return "";
};

var attrHelper = require("./helper-attr");
var helpers = require("./helpers");

// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
var invalidAttrNameCharacters = /[\s'"</=\\]/u;
var validAttrs = Object.create(null);
var invalidAttrs = Object.create(null);

function isValidAttrName(attrName) {
    if (validAttrs[attrName]) return true;
    if (invalidAttrs[attrName]) return false;

    if (!invalidAttrNameCharacters.test(attrName)) {
        validAttrs[attrName] = true;
        return true;
    } else {
        invalidAttrs[attrName] = true;
        return false;
    }
}
