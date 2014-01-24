/*
 * Copyright 2011 eBay Software Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The {@link raptor/render-context/Context} class represents a "rendering context"
 * suitable for rendering HTML to a writer. A context object is required when rendering
 * a template and the context object contains a reference to an underlying writer object that is
 * used to capture the rendered output.
 */
'use strict';
var extend = require('raptor-util').extend;
var createError = require('raptor-util').createError;
var forEachEntry = require('raptor-util').forEachEntry;
var escapeXmlAttr = require('raptor-xml/utils').escapeXmlAttr;
var StringBuilder = require('../strings/StringBuilder');
var nextUniqueId = 0;
function _classFunc(className, name) {
    var Clazz = require(className);
    var func = Clazz[name] || Clazz.prototype && Clazz.prototype[name];
    if (!func) {
        throw createError(new Error('Helper function not found with name "' + name + '" in class "' + className + '"'));
    }
    return func;
}
function Context(writer) {
    this.writer = writer;
    this.w = this.write;
    this.listeners = {};
    this.attributes = {};
}
Context.classFunc = _classFunc;
var proto = {
        getAttributes: function () {
            return this.attributes;
        },
        getAttribute: function (name) {
            return this.attributes[name];
        },
        uniqueId: function () {
            return 'c' + nextUniqueId++;
        },
        write: function (str) {
            if (str !== null && str !== undefined) {
                if (typeof str !== 'string') {
                    str = str.toString();
                }
                this.writer.write(str);
            }
            return this;
        },
        getOutput: function () {
            return this.writer.toString();
        },
        captureString: function (func, thisObj) {
            var sb = new StringBuilder();
            this.swapWriter(sb, func, thisObj);
            return sb.toString();
        },
        swapWriter: function (newWriter, func, thisObj) {
            var oldWriter = this.writer;
            try {
                this.writer = newWriter;
                func.call(thisObj);
            } finally {
                this.writer = oldWriter;
            }
        },
        createNestedContext: function (writer) {
            var context = require('raptor-render-context').createContext(writer);
            context.attributes = this.getAttributes();
            return context;
        },
        invokeHandler: function (handler, input) {
            if (typeof handler === 'string') {
                handler = require(handler);
            }
            var func = handler.process || handler.render;
            func.call(handler, input, this);
        },
        getFunction: function (className, name) {
            if (!this._helpers) {
                this._helpers = {};
            }
            var key = className + ':' + name;
            var helper = this._helpers[key];
            if (!helper) {
                helper = this._helpers[key] = _classFunc(className, name).bind(this);
            }
            return helper;
        },
        getHelperObject: function (className) {
            if (!this._helpers) {
                this._helpers = {};
            }
            var Helper = this._helpers[className] || (this._helpers[className] = require(className));
            return new Helper(this);
        },
        isTagInput: function (input) {
            return input && input.hasOwnProperty('_tag');
        },
        renderTemplate: function (name, data) {
            require('raptor-templates').render(name, data, this);
            return this;
        },
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
        attrs: function (attrs) {
            if (arguments.length !== 1) {
                this.attr.apply(this, arguments);
            } else if (attrs) {
                forEachEntry(attrs, this.attr, this);
            }
            return this;
        },
        t: function (handler, props, body, dynamicAttributes, namespacedProps) {
            if (!props) {
                props = {};
            }
            props._tag = true;
            if (body) {
                props.invokeBody = body;
            }
            if (dynamicAttributes) {
                props.dynamicAttributes = dynamicAttributes;
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
        }
    };
// Add short-hand method names that should be used in compiled templates *only*
proto.a = proto.attrs;
proto.f = proto.getFunction;
proto.o = proto.getHelperObject;
proto.i = proto.renderTemplate;
Context.prototype = proto;
module.exports = Context;