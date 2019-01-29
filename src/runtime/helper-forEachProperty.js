var complain = "MARKO_DEBUG" && require("complain");
var isArray = Array.isArray;

/**
 * Internal helper method for looping over the properties of any object
 * @private
 */
module.exports = function forEachPropertyHelper(o, func) {
    if (!o) {
        return;
    }

    if (isArray(o)) {
        for (var i = 0; i < o.length; i++) {
            func(i, o[i]);
        }
    } else if (typeof Map !== "undefined" && o instanceof Map) {
        // eslint-disable-next-line no-constant-condition
        if ("MARKO_DEBUG") {
            complain(
                "Passing a Map to a <for in> loop is deprecated and will be removed in a future version of Marko. Please switch to <for of> instead."
            );
        }
        o.forEach(function(v, k) {
            func(k, v);
        });
    } else {
        for (var k in o) {
            if (o.hasOwnProperty(k)) {
                func(k, o[k]);
            }
        }
    }
};
