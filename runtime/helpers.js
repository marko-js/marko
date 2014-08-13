var escapeXml = require('raptor-util/escapeXml');
var escapeXmlAttr = escapeXml.attr;
var runtime = require('./'); // Circular dependnecy, but that is okay
var extend = require('raptor-util/extend');
var attr = require('raptor-util/attr');
var attrs = require('raptor-util/attrs');
var forEach = require('raptor-util/forEach');

function notEmpty(o) {
    if (Array.isArray(o) === true) {
        return o.length !== 0;
    }
    return o;
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
    l: function(path) {
        return typeof path === 'string' ? runtime.load(path) : path;
    },

    /* Helpers that require a context below: */

    t: function (context, handler, props, body) {
        if (!props) {
            props = {};
        }

        if (body) {
            props.invokeBody = body;
        }

        var func;

        if (!(func = handler.process || handler.render)) {
            if (typeof handler === 'function') {
                func = handler;
            } else {
                throw new Error('Invalid handler: ' + handler);
            }
        }

        func.call(handler, props, context);
    },
    c: function (context, func) {
        var output = context.captureString(func);
        return {
            toString: function () {
                return output;
            }
        };
    },
    i: function(context, path, data) {
        if (!path) {
            return;
        }

        if (typeof path === 'string') {
            runtime.render(path, data, context);
        } else if (typeof path.render === 'function') {
            path.render(data, context);
        } else {
            throw new Error('Invalid template');
        }

        return this;
    },
    xt: extend
};
