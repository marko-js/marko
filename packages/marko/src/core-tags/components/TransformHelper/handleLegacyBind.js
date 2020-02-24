"use strict";

function checkIsInnerBind(el) {
    var curNode = el;

    do {
        if (curNode.data.hasBoundComponent) {
            return true;
        }
    } while ((curNode = curNode.parentNode));

    return false;
}

module.exports = function handleLegacyBind() {
    let el = this.el;
    let context = this.context;
    let builder = this.builder;

    let componentModule = context.legacyComponentModule;
    let rendererModule = context.legacyRendererModule;

    let bindAttr = el.getAttribute("w-bind");

    el.data.hasBoundComponent = true;

    // Remove the w-bind attribute since we don't want it showing up in the output DOM
    el.removeAttribute("w-bind");

    // Set key value so we can get the root using this.el
    el.setAttributeValue("key", builder.literal("_wbind"));

    // Read the value for the w-bind attribute. This will be an AST node for the parsed JavaScript
    let bindAttrValue = bindAttr.value;

    const hasWidgetTypes = context.isFlagSet("hasWidgetTypes");

    if (hasWidgetTypes) {
        context.deprecate(
            "The <widget-types> tag is deprecated. Please remove it. See: https://github.com/marko-js/marko/issues/514"
        );
    }

    if (bindAttrValue != null && !bindAttr.isLiteralValue()) {
        // This is a dynamic expression. The <widget-types> should have been found.
        if (!hasWidgetTypes) {
            this.addError(
                'The <widget-types> tag must be used to declare components when the value of the "w-bind" attribute is a dynamic expression.'
            );
            return;
        }

        el.insertSiblingBefore(
            builder.functionCall(
                builder.memberExpression(
                    builder.identifier("__component"),
                    builder.identifier("t")
                ),
                [
                    builder.memberExpression(
                        builder.identifier("marko_componentTypes"),
                        bindAttrValue,
                        true /* computed */
                    )
                ]
            )
        );
    }

    let isLegacyInnerBind = checkIsInnerBind(el.parentNode);

    // A component is bound to the el...

    let componentProps = {};

    let id = el.getAttributeValue("id");

    if (id) {
        componentProps.id = id;
    }

    this.convertToComponent({
        isLegacyInnerBind,
        componentModule,
        rendererModule,
        isLegacyComponent: true,
        rootNodes: [el]
    });
};
