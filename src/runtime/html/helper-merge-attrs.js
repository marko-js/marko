var complain = "MARKO_DEBUG" && require("complain");
var attrsHelper = require("./helper-attrs");

/**
 * Merges attribute objects into a string
 * @param  {[type]} object [description]
 * @param  {[type]} source [description]
 * @return {[type]}        [description]
 */
function mergeAttrs() {
    var result = "";
    var currentAttrs = {};
    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i];
        if (typeof source === "string") {
            // eslint-disable-next-line no-constant-condition
            if ("MARKO_DEBUG") {
                complain(
                    "Passing a string as dynamic attributes ('<div ${string}>' or '<div ...string>') is deprecated, use an object instead."
                );
            }

            if (source[0] !== " ") {
                source = " " + source;
            }

            result += attrsHelper(currentAttrs) + source;
            currentAttrs = {};
        } else if (source != null) {
            for (var k in source) {
                if (source.hasOwnProperty(k)) {
                    currentAttrs[k] = source[k];
                }
            }
        }
    }

    return result + attrsHelper(currentAttrs);
}

module.exports = mergeAttrs;
