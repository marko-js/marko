var xmlUtil = require('raptor-xml/util');
var escapeXml = xmlUtil.escapeXml;
var escapeXmlAttr = xmlUtil.escapeXmlAttr;

function notEmpty(o) {
    if (Array.isArray(o) === true) {
        return o.length !== 0;
    }
    return o;
}

module.exports = {
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
    f: require('raptor-util').forEach,
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
    }
};