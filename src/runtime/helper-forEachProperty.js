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
