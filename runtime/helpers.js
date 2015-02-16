var escapeXml = require('raptor-util/escapeXml');
var escapeXmlAttr = escapeXml.attr;
var runtime = require('./'); // Circular dependnecy, but that is okay
var extend = require('raptor-util/extend');
var attr = require('raptor-util/attr');
var attrs = require('raptor-util/attrs');
var forEach = require('raptor-util/forEach');
var markoRegExp = /\.marko(.xml|.html)?$/;
var req = require;

function notEmpty(o) {
    if (o == null) {
        return false;
    } else if (Array.isArray(o)) {
        return !!o.length;
    } else if (o === '') {
        return false;
    }

    return true;
}

module.exports = {
    s: function(str) {
        return (str == null) ? '' : str;
    },

    fv: function (array, callback) {
        if (!array) {
            return;
        }
        if (!array.forEach) {
            array = [array];
        }
        var i = 0;
        var len = array.length;
        var loopStatus = {
                getLength: function () {
                    return len;
                },
                isLast: function () {
                    return i === len - 1;
                },
                isFirst: function () {
                    return i === 0;
                },
                getIndex: function () {
                    return i;
                }
            };
        for (; i < len; i++) {
            var o = array[i];
            callback(o || '', loopStatus);
        }
    },
    f: forEach,
    fl: function (array, func) {
        if (array != null) {
            if (!Array.isArray(array)) {
                array = [array];
            }
            func(array, 0, array.length);
        }
    },
    fp: function (o, func) {
        if (!o) {
            return;
        }
        for (var k in o) {
            if (o.hasOwnProperty(k)) {
                func(k, o[k]);
            }
        }
    },
    e: function (o) {
        return !notEmpty(o);
    },
    ne: notEmpty,
    x: escapeXml,
    xa: escapeXmlAttr,
    nx: function (str) {
        return {
            toString: function () {
                return str;
            }
        };
    },
    a: attr,

    as: attrs,

    /**
     * Loads a template
     */
    l: function(path) {
        if (typeof path === 'string') {
            if (markoRegExp.test(path)) {
                return runtime.load(path);
            } else {
                return req('view-engine').load(path);
            }
        } else if (path.render) {
            // Assume it is already a pre-loaded template
            return path;
        } else {
            return runtime.load(path);
        }
    },
    /**
     * Returns the render function for a tag handler
     */
    r: function(handler) {
        var renderFunc;
        if (typeof handler === 'function') {
            renderFunc = handler;
        } else {
            renderFunc = handler.renderer || handler.render;
        }

        if (typeof renderFunc !== 'function') {
            throw new Error('Invalid handler: ' + handler);
        }

        return renderFunc;
    },

    // ----------------------------------
    // Helpers that require an out below:
    // ----------------------------------


    /**
     * Invoke a tag handler render function
     */
    t: function (out, renderFunc, input, body) {
        if (!input) {
            input = {};
        }

        if (body) {
            input.invokeBody = body;
        }

        renderFunc(input, out);
    },
    c: function (out, func) {
        var output = out.captureString(func);
        return {
            toString: function () {
                return output;
            }
        };
    },
    i: function(out, path, data) {
        if (!path) {
            return;
        }

        if (typeof path === 'string') {
            runtime.render(path, data, out);
        } else if (typeof path.render === 'function') {
            path.render(data, out);
        } else {
            throw new Error('Invalid template');
        }

        return this;
    },
    xt: extend
};
