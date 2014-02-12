var raptorUtil = require('raptor-util');
var forEachEntry = raptorUtil.forEachEntry;
var createError = raptorUtil.createError;
var extend = raptorUtil.extend;
var escapeXmlAttr = require('raptor-xml/util').escapeXmlAttr;

function attrs(_attrs) {
    if (arguments.length !== 1) {
        this.attr.apply(this, arguments);
    } else if (_attrs) {
        forEachEntry(_attrs, this.attr, this);
    }
    return this;
}

function getFunction(className, name) {
    if (!this._helpers) {
        this._helpers = {};
    }
    var key = className + ':' + name;
    var helper = this._helpers[key];
    if (!helper) {
        helper = this._helpers[key] = classFunc(className, name).bind(this);
    }
    return helper;
}

function getHelperObject(className) {
    if (!this._helpers) {
        this._helpers = {};
    }
    var Helper = this._helpers[className] || (this._helpers[className] = require(className));
    return new Helper(this);
}

exports.extend = function(runtime, target) {
    function renderTemplate(path, data, require) {
        if (typeof require === 'function') {
            path = require.resolve(path);
        }
        runtime.render(path, data, this);
        return this;
    }

    extend(target, {
        __rtmpl: true,
        invokeHandler: function (handler, input) {
            if (typeof handler === 'string') {
                handler = require(handler);
            }
            var func = handler.process || handler.render;
            func.call(handler, input, this);
        },
        getFunction: getFunction,
        getHelperObject: getHelperObject,
        isTagInput: function (input) {
            return input && input.hasOwnProperty('_tag');
        },
        renderTemplate: renderTemplate,
        attr: function (name, value, escapeXml) {
            if (value === null || value === true) {
                value = '';
            } else if (value === undefined || value === false || typeof value === 'string' && value.trim() === '') {
                return this;
            } else {
                value = '="' + (escapeXml === false ? value : escapeXmlAttr(value)) + '"';
            }
            this.write(' ' + name + value);
            return this;
        },
        attrs: attrs,
        t: function (handler, props, body, namespacedProps) {
            if (!props) {
                props = {};
            }
            props._tag = true;
            if (body) {
                props.invokeBody = body;
            }
            if (namespacedProps) {
                extend(props, namespacedProps);
            }
            this.invokeHandler(handler, props);
            return this;
        },
        c: function (func) {
            var output = this.captureString(func);
            return {
                toString: function () {
                    return output;
                }
            };
        },

        a: attrs,
        f: getFunction,
        o: getHelperObject,
        i: renderTemplate
    });
};

