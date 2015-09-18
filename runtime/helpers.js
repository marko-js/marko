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
var extend = require('raptor-util/extend');
var attr = require('raptor-util/attr');
var attrs = require('raptor-util/attrs');
var forEach = require('raptor-util/forEach');
var markoRegExp = /.html|\.marko(.xml|.html)?$/;
var arrayFromArguments = require('raptor-util/arrayFromArguments');
var logger = require('raptor-logging').logger(module);

var viewEngine;
var req = require;

try {
    viewEngine = req('view-engine');
} catch(e) {}

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

var WARNED_INVOKE_BODY = 0;

module.exports = {
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
    /**
     * Internal helper method to handle loops without a status variable
     * @private
     */
    f: forEach,
    /**
     * Internal helper method to handle native for loops
     * @private
     */
    fl: function (array, func) {
        if (array != null) {
            if (!Array.isArray(array)) {
                array = [array];
            }
            func(array, 0, array.length);
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
    e: function (o) {
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
     * Internal helper to prevent an object from being escaped
     * @private
     */
    nx: function (str) {
        return {
            toString: function () {
                return str;
            }
        };
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
    as: attrs,
    /**
     * Loads a template
     */
    l: function(path, req) {
        if (typeof path === 'string') {
            if (path.charAt(0) === '.' && req.resolve) { // Check if the path is relative
                // The path is relative so use require.resolve to fully resolve the path
                path = req.resolve(path);
            }

            if (!viewEngine || markoRegExp.test(path)) {
                return runtime.load(path);
            } else {
                return viewEngine.load(path);
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
    },

    // ----------------------------------
    // The helpers listed below require an out
    // ----------------------------------


    /**
     * Invoke a tag handler render function
     */
    t: function (out, renderFunc, input, renderBody, options) {
        if (!input) {
            input = {};
        }

        var hasOutParam;
        var targetProperty;
        var parent;
        var hasNestedTags;
        var isRepeated;

        if (options) {
            hasOutParam = options.hasOutParam;
            parent = options.parent;
            targetProperty = options.targetProperty;
            hasNestedTags = options.hasNestedTags;
            isRepeated = options.isRepeated;
        }

        if (renderBody) {
            if (hasNestedTags) {
                renderBody(out, input);
            } else {
                input.renderBody = renderBody;
                input.invokeBody = function() {
                    if (!WARNED_INVOKE_BODY) {
                        WARNED_INVOKE_BODY = 1;
                        logger.warn('invokeBody(...) deprecated. Use renderBody(out) instead.', new Error().stack);
                    }

                    if (!hasOutParam) {
                        var args = arrayFromArguments(arguments);
                        args.unshift(out);
                        renderBody.apply(this, args);
                    } else {
                        renderBody.apply(this, arguments);
                    }
                };
            }
        }

        if (renderFunc) {
            renderFunc(input, out);
        } else if (targetProperty) {
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
        }
    },
    /**
     * Internal helper method that captures the output of rendering.
     * This function works by swapping out the underlying writer to
     * a temporary writer that buffers a string. The provided function
     * is executed and the old writer is restored. Finally, the buffered
     * string is returned.
     */
    c: function (out, func) {
        var output = out.captureString(func);
        return {
            toString: function () {
                return output;
            }
        };
    },
    /**
     * Internal method to handle includes/partials
     * @private
     */
    i: function(out, path, data) {
        if (!path) {
            return;
        }

        if (data.body) {
            data.invokeBody = function() {
                if (!WARNED_INVOKE_BODY) {
                    WARNED_INVOKE_BODY = 1;
                    logger.warn('data.invokeBody() deprecated. Use data.body instead.', new Error().stack);
                }
                return data.body;
            };
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
    /**
     * Internal helper method to do a shallow copy of the properties of one object to another.
     * @private
     */
    xt: extend
};
