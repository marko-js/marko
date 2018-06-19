"use strict";
var isArray = Array.isArray;
var RENDER_BODY_TOKEN = "%FN";
var RENDER_BODY_TO_JSON = function() {
    return RENDER_BODY_TOKEN;
};
var FLAG_WILL_RERENDER_IN_BROWSER = 1;
var IS_SERVER = typeof window === "undefined";

function isFunction(arg) {
    return typeof arg == "function";
}

function classList(arg, classNames) {
    var len;

    if (arg) {
        if (typeof arg == "string") {
            if (arg) {
                classNames.push(arg);
            }
        } else if (typeof (len = arg.length) == "number") {
            for (var i = 0; i < len; i++) {
                classList(arg[i], classNames);
            }
        } else if (typeof arg == "object") {
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

function createDeferredRenderer(handler) {
    function deferredRenderer(input, out) {
        deferredRenderer.renderer(input, out);
    }

    // This is the initial function that will do the rendering. We replace
    // the renderer with the actual renderer func on the first render
    deferredRenderer.renderer = function(input, out) {
        var rendererFunc = handler.renderer || handler._ || handler.render;
        if (!isFunction(rendererFunc)) {
            throw Error("Invalid renderer");
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

    if (isFunction(handler)) {
        return handler;
    }

    // If the user code has a circular function then the renderer function
    // may not be available on the module. Since we can't get a reference
    // to the actual renderer(input, out) function right now we lazily
    // try to get access to it later.
    return createDeferredRenderer(handler);
}

var helpers = {
    /**
     * Internal helper method to prevent null/undefined from being written out
     * when writing text that resolves to null/undefined
     * @private
     */
    s: function strHelper(str) {
        return str == null ? "" : str.toString();
    },

    /**
     * Internal helper method to handle loops without a status variable
     * @private
     */
    f: function forEachHelper(array, callback) {
        if (isArray(array)) {
            for (var i = 0; i < array.length; i++) {
                callback(array[i]);
            }
        } else if (isFunction(array)) {
            // Also allow the first argument to be a custom iterator function
            array(callback);
        }
    },

    /**
     * Helper to render a dynamic tag
     */
    d: function dynamicTag(tag, attrs, out, componentDef, key, customEvents) {
        if (tag) {
            if (typeof tag === "string") {
                var component = componentDef && componentDef.component;
                var events =
                    customEvents &&
                    customEvents.reduce((events, eventArray) => {
                        events["on" + eventArray[0]] = componentDef.d(
                            eventArray[1],
                            eventArray[2],
                            eventArray[3]
                        );
                        return events;
                    }, {});
                if (attrs.renderBody) {
                    var renderBody = attrs.renderBody;
                    var otherAttrs = Object.assign({}, attrs);
                    delete otherAttrs.renderBody;
                    out.beginElement(
                        tag,
                        otherAttrs,
                        key,
                        component,
                        0,
                        0,
                        events
                    );
                    renderBody(out);
                    out.endElement();
                } else {
                    out.element(tag, attrs, key, component, 0, 0, events);
                }
            } else if (tag._ || tag.renderer || tag.render) {
                var renderer = tag._ || tag.renderer || tag.render;
                out.c(componentDef, key, customEvents);
                renderer(attrs, out);
                out.___assignedComponentDef = null;
            } else {
                var render = (tag && tag.renderBody) || tag;
                var isFn = typeof render === "function";
                var isToken = render === RENDER_BODY_TOKEN;

                if (isFn || isToken) {
                    var flags = componentDef ? componentDef.___flags : 0;
                    var parentId = componentDef ? componentDef.id : "";
                    var willRerender = flags & FLAG_WILL_RERENDER_IN_BROWSER;
                    var resolvedKey = parentId + " " + key;
                    var insertMarkers = IS_SERVER ? willRerender : isToken;
                    if (insertMarkers) out.comment("F^" + resolvedKey);
                    if (isFn) {
                        render.toJSON = RENDER_BODY_TO_JSON;
                        render(out, attrs);
                    }
                    if (insertMarkers) out.comment("F/" + resolvedKey);
                } else {
                    out.error("Invalid dynamic tag value");
                }
            }
        }
    },

    /**
     * Helper to load a custom tag
     */
    t: function loadTagHelper(renderer) {
        if (renderer) {
            renderer = resolveRenderer(renderer);
        }

        return function wrappedRenderer(
            input,
            out,
            componentDef,
            key,
            customEvents
        ) {
            out.c(componentDef, key, customEvents);
            renderer(input, out);
            out.___assignedComponentDef = null;
        };
    },

    /**
     * classList(a, b, c, ...)
     * Joines a list of class names with spaces. Empty class names are omitted.
     *
     * classList('a', undefined, 'b') --> 'a b'
     *
     */
    cl: function classListHelper() {
        var classNames = [];
        classList(arguments, classNames);
        return classNames.join(" ");
    }
};

module.exports = helpers;
