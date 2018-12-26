"use strict";
var getTransformHelper = require("./util/getTransformHelper");

function tagDefinitionHasOverridingKeyAttribute(el) {
    if (!el.hasAttribute("key")) {
        return false;
    }

    var tagDef = el.tagDef;
    if (tagDef && !tagDef.isDynamicTag && tagDef.hasAttribute("key")) {
        return true;
    }

    return false;
}
module.exports = function transform(el, context) {
    var transformHelper = getTransformHelper(el, context);

    if (el.type === "TemplateRoot") {
        transformHelper.handleRootNodes();
        if (
            !context.isFlagSet("hasLegacyWidgetBind") &&
            context.isFlagSet("hasLegacyWidgetAttr")
        ) {
            let builder = context.builder;
            let getWidgetFromOut = context.helper("getWidgetFromOut");
            el.prependChild(
                builder.vars({
                    widget: builder.functionCall(getWidgetFromOut, [
                        builder.identifier("out")
                    ]),
                    __component: builder.identifier("widget"),
                    component: builder.memberExpression("__component", "_c")
                })
            );
        }
        return;
    }

    if (el.tagName === "widget-types") {
        context.setFlag("hasWidgetTypes");
    }

    if (el.hasAttribute("w-el-id")) {
        transformHelper.addError(
            '"w-el-id" attribute is no longer allowed. Use "w-id" instead.'
        );
        return;
    }

    if (el.hasAttribute("w-bind")) {
        transformHelper.handleLegacyBind();
    }

    if (
        /* New preserve attributes */
        el.hasAttribute("no-update") ||
        el.hasAttribute("no-update-body") ||
        el.hasAttribute("no-update-if") ||
        el.hasAttribute("no-update-body-if")
    ) {
        transformHelper.handleComponentPreserve();
    }

    // Handle *:scoped properties
    transformHelper.handleScopedAttrs();

    if (!tagDefinitionHasOverridingKeyAttribute(el, context)) {
        if (el.hasAttribute("ref") || el.hasAttribute("key")) {
            transformHelper.assignComponentId();
        }

        if (
            context.options.autoKeyEnabled !== false &&
            context.inline !== true
        ) {
            transformHelper.assignComponentId();
        }
    }

    // Handle w-preserve-attrs and :no-update attributes
    transformHelper.handleComponentPreserveAttrs();

    // Handle w-on* properties
    transformHelper.handleComponentEvents();

    // If we need to pass any information to a nested component then
    // we start that information in the "out" so that it can be picked
    // up later by the nested component. We call this "component args" and
    // we generate compiled code that stores the component args in the out
    // for the next component and then we also insert cleanup code to remove
    // the data out of the out
    transformHelper.getComponentArgs().compile(transformHelper);
};
