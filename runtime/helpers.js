'use strict';
var isArray = Array.isArray;

function classListHelper(arg, classNames) {
    var len;

    if (arg) {
        if (typeof arg === 'string') {
            if (arg) {
                classNames.push(arg);
            }
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
    var renderer = handler.renderer || handler._;

    if (renderer) {
        return renderer;
    }

    if (typeof handler === 'function') {
        return handler;
    }

    if (typeof (renderer = handler.render) === 'function') {
        return renderer.bind(handler);
    }

    // If the user code has a circular function then the renderer function
    // may not be available on the module. Since we can't get a reference
    // to the actual renderer(input, out) function right now we lazily
    // try to get access to it later.
    return createDeferredRenderer(handler);
}

function LoopStatus(len) {
    this.i = 0;
    this.len = len;
}

LoopStatus.prototype = {
    getLength: function() {
        return this.len;
    },
    isLast: function() {
        return this.i === this.len - 1;
    },
    isFirst: function() {
        return this.i === 0;
    },
    getIndex: function() {
        return this.i;
    }
};

/**
 * Internal helper method to prevent null/undefined from being written out
 * when writing text that resolves to null/undefined
 * @private
 */
exports.s = function strHelper(str) {
    return (str == null) ? '' : str.toString();
};

/**
 * Internal helper method to handle loops with a status variable
 * @private
 */
exports.fv = function forEachStatusVariableHelper(array, callback) {
    if (!array) {
        return;
    }
    if (!array.forEach) {
        array = [array];
    }

    var len = array.length;
    var loopStatus = new LoopStatus(len);

    for (; loopStatus.i < len; loopStatus.i++) {
        var o = array[loopStatus.i];
        callback(o, loopStatus);
    }
};

/**
 * Internal helper method to handle loops without a status variable
 * @private
 */
exports.f = function forEachHelper(array, callback) {
    if (isArray(array)) {
        for (var i=0; i<array.length; i++) {
            callback(array[i]);
        }
    } else if (typeof array === 'function') {
        // Also allow the first argument to be a custom iterator function
        array(callback);
    }
};

exports.fr = function forRangeHelper(from, to, step, callback) {
    if (step == null) {
        step = from <= to ? 1 : -1;
    }

    var i;

    if (step > 0) {
        for (i=from; i<=to; i += step) {
            callback(i);
        }
    } else {
        for (i=from; i>=to; i += step) {
            callback(i);
        }
    }

};

/**
 * Internal helper method for looping over the properties of any object
 * @private
 */
exports.fp = function forEachPropertyHelper(o, func) {
    if (!o) {
        return;
    }

    if (Array.isArray(o)) {
        for (var i=0; i<o.length; i++) {
            func(i, o[i]);
        }
    } else {
        for (var k in o) {
            if (o.hasOwnProperty(k)) {
                func(k, o[k]);
            }
        }
    }
};

/**
 * Helper to load a custom tag
 */
exports.t = function loadTagHelper(renderer, targetProperty, isRepeated) {
    if (renderer) {
        renderer = resolveRenderer(renderer);
    }

    return renderer;
};

exports.n = function loadNestedTagHelper(targetProperty, isRepeated) {
    return function(input, parent) {
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
    };
};

/**
 * Merges object properties
 * @param  {[type]} object [description]
 * @param  {[type]} source [description]
 * @return {[type]}        [description]
 */
exports.m = function mergeHelper(into, source) {
    for (var k in source) {
        if (source.hasOwnProperty(k) && !into.hasOwnProperty(k)) {
            into[k] = source[k];
        }
    }
    return into;
};

/**
 * Merges nested tags by rendering the body
 * @param  {[type]} object [description]
 * @param  {[type]} source [description]
 * @return {[type]}        [description]
 */
exports.mn = function mergeNestedTagsHelper(input) {
    if (input.renderBody) {
        input.renderBody(null, input);
    }
    input.renderBody = null;
    return input;
};

/**
 * classList(a, b, c, ...)
 * Joines a list of class names with spaces. Empty class names are omitted.
 *
 * classList('a', undefined, 'b') --> 'a b'
 *
 */
exports.cl = function classListHelper() {
    return classList(arguments);
};

/**
 * Loads a template (__helpers.l --> marko_loadTemplate(path))
 */
exports.l = require('./loader');