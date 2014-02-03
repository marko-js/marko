var renderContext = require('raptor-render-context');
var Context = renderContext.Context;
var xmlUtil = require('raptor-xml/util');
var escapeXml = xmlUtil.escapeXml;
var escapeXmlAttr = xmlUtil.escapeXmlAttr;

function _getHandler(name) {
    var Handler = require(name);
    var instance;
    if (Handler.process || Handler.render) {
        instance = Handler;
    } else if (!(instance = Handler.instance)) {
        //See if an instance has already been created
        instance = Handler.instance = new Handler();    //If not, create and store a new instance
    }
    return instance;
}

function notEmpty(o) {
    if (Array.isArray(o) === true) {
        return o.length !== 0;
    }
    return o;
}

module.exports = {
    h: Context.classFunc,
    t: _getHandler,
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