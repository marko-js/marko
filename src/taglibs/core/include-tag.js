var RENDER_BODY_TOKEN = "%FN";
var RENDER_BODY_TO_JSON = function() {
    return RENDER_BODY_TOKEN;
};
var FLAG_WILL_RERENDER_IN_BROWSER = 1;
var IS_SERVER = typeof window === "undefined";

function doInclude(input, out, throwError) {
    var target = input._target;
    var arg = input._arg || input;
    var renderBody = (target && target.renderBody) || target;

    if (target) {
        if (target.renderer) {
            return target.renderer(arg, out), true;
        } else if (target.render) {
            return target.render(arg, out), true;
        } else if (target.safeHTML) {
            return out.write(target.safeHTML), true;
        } else if (
            typeof renderBody !== "function" &&
            renderBody !== RENDER_BODY_TOKEN
        ) {
            if (typeof target === "string") {
                // TODO: deprecate this
                return target && out.text(target), true;
            } else if (throwError) {
                out.error("Invalid include target");
            }
        }
    }

    if (renderBody) {
        var componentsContext = out.___components;
        var componentDef =
            componentsContext && componentsContext.___componentDef;
        var willRerenderInBrowser =
            componentDef &&
            componentDef.___flags & FLAG_WILL_RERENDER_IN_BROWSER;
        var key = (componentDef && componentDef.id) + " " + out.___assignedKey;
        var isFn = renderBody !== RENDER_BODY_TOKEN;
        var insertMarkers = (IS_SERVER && willRerenderInBrowser) || !isFn;
        if (insertMarkers) out.comment("F^" + key);
        if (renderBody !== RENDER_BODY_TOKEN) {
            renderBody.toJSON = RENDER_BODY_TO_JSON;
            renderBody(out, arg);
        }
        if (insertMarkers) out.comment("F/" + key);
    }
}

function includeTag(input, out) {
    doInclude(input, out, true);
}

includeTag.___doInclude = doInclude;

module.exports = includeTag;
