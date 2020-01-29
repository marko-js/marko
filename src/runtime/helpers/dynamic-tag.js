"use strict";

var complain = "MARKO_DEBUG" && require("complain");
var removeDashes = require("../../compiler/util/removeDashes");
var ComponentsContext = require("../components/ComponentsContext");
var getComponentsContext = ComponentsContext.___getComponentsContext;
var ComponentDef = require("../components/ComponentDef");
var w10NOOP = require("warp10/constants").NOOP;
var RENDER_BODY_TO_JSON = function() {
    return w10NOOP;
};
var FLAG_WILL_RERENDER_IN_BROWSER = 1;
var IS_SERVER = typeof window === "undefined";

/**
 * Helper to render a dynamic tag
 */
module.exports = function dynamicTag(
    out,
    tag,
    getAttrs,
    renderBody,
    args,
    props,
    componentDef,
    key,
    customEvents
) {
    if (tag) {
        var attrs = getAttrs && getAttrs();
        var component = componentDef && componentDef.___component;
        if (typeof tag === "string") {
            if (customEvents) {
                if (!props) {
                    props = {};
                }

                customEvents.forEach(function(eventArray) {
                    props["on" + eventArray[0]] = componentDef.d(
                        eventArray[0],
                        eventArray[1],
                        eventArray[2],
                        eventArray[3]
                    );
                });
            }

            if (renderBody) {
                out.___beginElementDynamic(
                    tag,
                    attrs,
                    key,
                    component,
                    0,
                    0,
                    props
                );
                renderBody(out);
                out.___endElement();
            } else {
                out.___elementDynamic(tag, attrs, key, component, 0, 0, props);
            }
        } else {
            var defaultAttrs = renderBody ? { renderBody: renderBody } : {};
            if (attrs == null) {
                attrs = defaultAttrs;
            } else if (typeof attrs === "object") {
                attrs = Object.keys(attrs).reduce(function(r, key) {
                    r[removeDashes(key)] = attrs[key];
                    return r;
                }, defaultAttrs);
            }

            if (tag._ || tag.renderer || tag.render) {
                var renderer = tag._ || tag.renderer || tag.render;
                out.c(componentDef, key, customEvents);
                renderer(attrs, out);
                out.___assignedComponentDef = null;
            } else {
                var render = (tag && tag.renderBody) || tag;
                var isFn = typeof render === "function";

                if (render.safeHTML) {
                    // eslint-disable-next-line no-constant-condition
                    if ("MARKO_DEBUG") {
                        complain(
                            "Using `<include(x)/>` or the `<${dynamic}/>` tags with a `{ safeHTML: ... }` object is deprecated. Use the unescaped text placeholder syntax instead."
                        );
                    }

                    out.write(tag.safeHTML);
                    return;
                }

                if (isFn) {
                    var flags = componentDef ? componentDef.___flags : 0;
                    var willRerender = flags & FLAG_WILL_RERENDER_IN_BROWSER;
                    var isW10NOOP = render === w10NOOP;
                    var preserve = IS_SERVER ? willRerender : isW10NOOP;
                    out.___beginFragment(key, component, preserve);
                    if (!isW10NOOP && isFn) {
                        var componentsContext = getComponentsContext(out);
                        var parentComponentDef =
                            componentsContext.___componentDef;
                        var globalContext = componentsContext.___globalContext;
                        componentsContext.___componentDef = new ComponentDef(
                            component,
                            parentComponentDef.id +
                                "-" +
                                parentComponentDef.___nextKey(key),
                            globalContext
                        );
                        render.toJSON = RENDER_BODY_TO_JSON;

                        if (args) {
                            render.apply(null, [out].concat(args, attrs));
                        } else {
                            render(out, attrs);
                        }

                        componentsContext.___componentDef = parentComponentDef;
                    }
                    out.___endFragment();
                } else {
                    out.error("Invalid dynamic tag value");
                }
            }
        }
    } else if (renderBody) {
        var compFlags = componentDef ? componentDef.___flags : 0;
        out.___beginFragment(
            key,
            component,
            IS_SERVER
                ? compFlags & FLAG_WILL_RERENDER_IN_BROWSER
                : render === w10NOOP
        );
        renderBody(out);
        out.___endFragment();
    }
};
