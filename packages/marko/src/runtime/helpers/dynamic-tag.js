"use strict";

var complain = "MARKO_DEBUG" && require("complain");
var changeCase = require("./_change-case");
var ComponentsContext = require("../components/ComponentsContext");
var getComponentsContext = ComponentsContext.___getComponentsContext;
var ComponentDef = require("../components/ComponentDef");
var w10NOOP = require("warp10/constants").NOOP;
var RENDER_BODY_TO_JSON = function () {
  return w10NOOP;
};

var FLAG_WILL_RERENDER_IN_BROWSER = 1;
// var FLAG_HAS_RENDER_BODY = 2;
var IS_SERVER = typeof document === "undefined";

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
    if (tag.default) {
      tag = tag.default;
    }

    var attrs = getAttrs && getAttrs();
    var component = componentDef && componentDef.___component;
    if (typeof tag === "string") {
      if (renderBody) {
        out.___beginElementDynamic(
          tag,
          attrs,
          key,
          componentDef,
          addEvents(componentDef, customEvents, props)
        );
        renderBody(out);
        out.___endElement();
      } else {
        out.___elementDynamic(
          tag,
          attrs,
          key,
          componentDef,
          addEvents(componentDef, customEvents, props)
        );
      }
    } else {
      if (attrs == null) {
        attrs = { renderBody: renderBody };
      } else if (typeof attrs === "object") {
        attrs = attrsToCamelCase(attrs);
        if (renderBody) {
          attrs.renderBody = renderBody;
        }
      }

      var renderer =
        tag._ ||
        tag.render ||
        (tag.renderer && tag.renderer.renderer) ||
        tag.renderer;

      // eslint-disable-next-line no-constant-condition
      if ("MARKO_DEBUG") {
        if (tag.renderer && tag.renderer.renderer === renderer) {
          complain(
            "An object with a 'renderer' was passed to the dynamic tag, but renderer was another template."
          );
        }
      }

      if (renderer) {
        out.c(componentDef, key, customEvents);
        renderer(attrs, out);
        out.___assignedComponentDef = null;
      } else {
        var render = (tag && tag.renderBody) || tag;
        var isFn = typeof render === "function";

        // eslint-disable-next-line no-constant-condition
        if ("MARKO_DEBUG") {
          if (render.safeHTML || render.toHTML) {
            throw new Error(
              "Using `<include(x)/>` or the `<${dynamic}/>` tags with a `{ safeHTML: ... }` object is no longer supported. Use the unescaped text placeholder syntax instead."
            );
          }
        }
        if (isFn) {
          var flags = componentDef ? componentDef.___flags : 0;
          var willRerender = flags & FLAG_WILL_RERENDER_IN_BROWSER;
          var isW10NOOP = render === w10NOOP;
          var preserve = IS_SERVER ? willRerender : isW10NOOP;
          out.bf(key, component, preserve);
          if (!isW10NOOP && isFn) {
            var componentsContext = getComponentsContext(out);
            var parentComponentDef = componentsContext.___componentDef;
            var globalContext = componentsContext.___globalContext;
            componentsContext.___componentDef = new ComponentDef(
              component,
              parentComponentDef.id + "-" + parentComponentDef.___nextKey(key),
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
          out.ef();
        } else {
          out.error("Invalid dynamic tag value");
        }
      }
    }
  } else if (renderBody) {
    out.bf(
      key,
      component,
      IS_SERVER &&
        componentDef &&
        componentDef.___flags & FLAG_WILL_RERENDER_IN_BROWSER
    );
    renderBody(out);
    out.ef();
  }
};

function attrsToCamelCase(attrs) {
  var result = {};

  for (var key in attrs) {
    result[changeCase.___dashToCamelCase(key)] = attrs[key];
  }

  return result;
}

function addEvents(componentDef, customEvents, props) {
  var len = customEvents ? customEvents.length : 0;

  if (len === 0) {
    return props;
  }

  var result = props || {};
  var event;

  for (var i = len; i--; ) {
    event = customEvents[i];
    result["on" + event[0]] = componentDef.d(
      event[0],
      event[1],
      event[2],
      event[3]
    );
  }

  return result;
}
