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

'use strict';
var escapeXml = require('raptor-util/escapeXml');
var escapeXmlAttr = escapeXml.attr;
var runtime = require('./'); // Circular dependency, but that is okay
var attr = require('raptor-util/attr');
var notEmpty = require('../helpers/notEmpty');

var isArray = Array.isArray;
var STYLE_ATTR = 'style';
var CLASS_ATTR = 'class';
var escapeEndingScriptTagRegExp = /<\//g;

function classListHelper(arg, classNames) {
    var len;

    if (arg) {
        if (typeof arg === 'string') {
            classNames.push(arg);
        } else if (typeof (len = arg.length) === 'number') {
            for (var i=0; i<len; i++) {
                classListHelper(arg[i], classNames);
            }
        } else if (typeof arg === 'object') {
            for (var name in arg) {
                if (arg.hasOwnProperty(name)) {
                    var value = arg[name];
                    if (value) {
                        classNames.push(name);
                    }
                }
            }
        }
    }
}

function classList(classList) {
    var classNames = [];
    classListHelper(classList, classNames);
    return classNames.join(' ');
}

function createDeferredRenderer(handler) {
    function deferredRenderer(input, out) {
        deferredRenderer.renderer(input, out);
    }

    // This is the initial function that will do the rendering. We replace
    // the renderer with the actual renderer func on the first render
    deferredRenderer.renderer = function(input, out) {
        var rendererFunc = handler.renderer || handler.render;
        if (typeof rendererFunc !== 'function') {
            throw new Error('Invalid tag handler: ' + handler);
        }
        // Use the actual renderer from now on
        deferredRenderer.renderer = rendererFunc;
        rendererFunc(input, out);
    };

    return deferredRenderer;
}

function resolveRenderer(handler) {
    var renderer = handler.renderer;

    if (renderer) {
        return renderer;
    }

    if (typeof handler === 'function') {
        return handler;
    }

    if (typeof (renderer = handler.render) === 'function') {
        return renderer;
    }

    // If the user code has a circular function then the renderer function
    // may not be available on the module. Since we can't get a reference
    // to the actual renderer(input, out) function right now we lazily
    // try to get access to it later.
    return createDeferredRenderer(handler);
}

function LoopStatus(getLength, isLast, isFirst, getIndex) {
    this.getLength = getLength;
    this.isLast = isLast;
    this.isFirst = isFirst;
    this.getIndex = getIndex;
}

module.exports = exports = {
    /**
     * Internal helper method to prevent null/undefined from being written out
     * when writing text that resolves to null/undefined
     * @private
     */
    s: function(str) {
        return (str == null) ? '' : str;
    },
    /**
     * Internal helper method to handle loops with a status variable
     * @private
     */
    fv: function (array, callback) {
        if (!array) {
            return;
        }
        if (!array.forEach) {
            array = [array];
        }
        var i = 0;
        var len = array.length;
        var loopStatus = new LoopStatus(
                function getLength() {
                    return len;
                },
                function isLast() {
                    return i === len - 1;
                },
                function isFirst() {
                    return i === 0;
                },
                function getIndex() {
                    return i;
                });

        for (; i < len; i++) {
            var o = array[i];
            callback(o, loopStatus);
        }
    },

    /**
     * Internal helper method to handle loops without a status variable
     * @private
     */
    f: function forEach(array, callback) {
        if (isArray(array)) {
            for (var i=0; i<array.length; i++) {
                callback(array[i]);
            }
        } else if (typeof array === 'function') {
            // Also allow the first argument to be a custom iterator function
            array(callback);
        }
    },
    /**
     * Internal helper method for looping over the properties of any object
     * @private
     */
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
    /**
     * Internal method to check if an object/array is empty
     * @private
     */
    e: function empty(o) {
        return !notEmpty(o);
    },
    /**
     * Internal method to check if an object/array is not empty
     * @private
     */
    ne: notEmpty,
    /**
     * Internal method to escape special XML characters
     * @private
     */
    x: escapeXml,
    /**
     * Internal method to escape special XML characters within an attribute
     * @private
     */
    xa: escapeXmlAttr,

    /**
     * Escapes the '</' sequence in the body of a <script> body to avoid the `<script>` being
     * ended prematurely.
     *
     * For example:
     * var evil = {
     * 	name:  '</script><script>alert(1)</script>'
     * };
     *
     * <script>var foo = ${JSON.stringify(evil)}</script>
     *
     * Without escaping the ending '</script>' sequence the opening <script> tag would be
     * prematurely ended and a new script tag could then be started that could then execute
     * arbitrary code.
     */
    xs: function(val) {
        return (typeof val === 'string') ? val.replace(escapeEndingScriptTagRegExp, '\\u003C/') : val;
    },

    /**
     * Internal method to render a single HTML attribute
     * @private
     */
    a: attr,

    /**
     * Internal method to render multiple HTML attributes based on the properties of an object
     * @private
     */
    as: function(arg) {
        if (typeof arg === 'object') {
            var out = '';
            for (var attrName in arg) {
                out += attr(attrName, arg[attrName]);
            }
            return out;
        } else if (typeof arg === 'string') {
            return arg;
        }
        return '';
    },

    /**
     * Internal helper method to handle the "style" attribute. The value can either
     * be a string or an object with style propertes. For example:
     *
     * sa('color: red; font-weight: bold') ==> ' style="color: red; font-weight: bold"'
     * sa({color: 'red', 'font-weight': 'bold'}) ==> ' style="color: red; font-weight: bold"'
     */
    sa: function(style) {
        if (!style) {
            return '';
        }

        if (typeof style === 'string') {
            return attr(STYLE_ATTR, style, false);
        } else if (typeof style === 'object') {
            var parts = [];
            for (var name in style) {
                if (style.hasOwnProperty(name)) {
                    var value = style[name];
                    if (value) {
                        parts.push(name + ':' + value);
                    }
                }
            }
            return parts ? attr(STYLE_ATTR, parts.join(';'), false) : '';
        } else {
            return '';
        }
    },

    /**
     * Internal helper method to handle the "class" attribute. The value can either
     * be a string, an array or an object. For example:
     *
     * ca('foo bar') ==> ' class="foo bar"'
     * ca({foo: true, bar: false, baz: true}) ==> ' class="foo baz"'
     * ca(['foo', 'bar']) ==> ' class="foo bar"'
     */
    ca: function(classNames) {
        if (!classNames) {
            return '';
        }

        if (typeof classNames === 'string') {
            return attr(CLASS_ATTR, classNames, false);
        } else {
            return attr(CLASS_ATTR, classList(classNames), false);
        }
    },

    /**
     * Loads a template (__helpers.l --> loadTemplate(path))
     */
    l: function(path) {
        if (typeof path === 'string') {
            return runtime.load(path);
        } else {
            // Assume it is already a pre-loaded template
            return path;
        }
    },

    // ----------------------------------
    // The helpers listed below require an out
    // ----------------------------------


    /**
     * Invoke a tag handler render function
     */
    t: function (renderer, targetProperty, isRepeated, hasNestedTags) {
        if (renderer) {
            renderer = resolveRenderer(renderer);
        }

        if (targetProperty || hasNestedTags) {
            return function(input, out, parent, renderBody) {
                // Handle nested tags
                if (renderBody) {
                    renderBody(out, input);
                }

                if (targetProperty) {
                    // If we are nested tag then we do not have a renderer
                    if (isRepeated) {
                        var existingArray = parent[targetProperty];
                        if (existingArray) {
                            existingArray.push(input);
                        } else {
                            parent[targetProperty] = [input];
                        }
                    } else {
                        parent[targetProperty] = input;
                    }
                } else {
                    // We are a tag with nested tags, but we have already found
                    // our nested tags by rendering the body
                    renderer(input, out);
                }
            };
        } else {
            return renderer;
        }
    },

    /**
     * Internal method to handle includes/partials
     * @private
     */
    i: function(out, template, data) {
        if (!template) {
            return;
        }

        if (typeof template.render === 'function') {
            template.render(data, out);
        } else {
            throw new Error('Invalid template: ' + template);
        }

        return this;
    },

    /**
     * Merges object properties
     * @param  {[type]} object [description]
     * @param  {[type]} source [description]
     * @return {[type]}        [description]
     */
    m: function(into, source) {
        for (var k in source) {
            if (source.hasOwnProperty(k) && !into.hasOwnProperty(k)) {
                into[k] = source[k];
            }
        }
        return into;
    },

    /**
     * classList(a, b, c, ...)
     * Joines a list of class names with spaces. Empty class names are omitted.
     *
     * classList('a', undefined, 'b') --> 'a b'
     *
     */
    cl: function() {
        return classList(arguments);
    }
};

var deprecate = require('./deprecate');
var emptyNotEmptyDeprecationUrl = 'https://github.com/marko-js/marko/issues/357';
deprecate(exports, 'e', 'empty() helper is deprecated. See: ' + emptyNotEmptyDeprecationUrl);
deprecate(exports, 'ne', 'notEmpty() helper is deprecated. See: ' + emptyNotEmptyDeprecationUrl);