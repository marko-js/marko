'use strict';
var getTransformHelper = require('./util/getTransformHelper');

module.exports = function transform(el, context) {
    var transformHelper = getTransformHelper(el, context);

    if (el.type === 'TemplateRoot') {
        transformHelper.handleRootNodes();
        return;
    }

    if (el.hasAttribute('w-body')) {
        let bodyValue = el.getAttributeValue('w-body');
        el.removeAttribute('w-body');

        if (bodyValue) {
            let includeNode = context.createNodeForEl('include');
            includeNode.addProp('_target', bodyValue);
            el.appendChild(includeNode);
        } else {
            el.setAttributeValue('body-slot', null);
        }
    }

    if (el.hasAttribute('body-slot')) {
        el.removeAttribute('body-slot');

        let bodySlotNode = context.createNodeForEl('body-slot');
        el.appendChild(bodySlotNode);
    }

    if (el.tagName === 'widget-types') {
        context.setFlag('hasWidgetTypes');
    } else if (el.tagName === 'include') {
        transformHelper.handleIncludeNode(el);
        transformHelper.getWidgetArgs().compile(transformHelper);
        return;
    } else if (el.tagName === 'body-slot') {
        transformHelper.handleBodySlotNode(el);
        return;
    }

    if (el.hasAttribute('w-el-id')) {
        transformHelper.addError('"w-el-id" attribute is no longer allowed. Use "w-id" instead.');
        return;
    }

    if (el.hasAttribute('w-bind')) {
        el.setFlag('hasWidgetBind');
        transformHelper.handleWidgetBind();
    }

    if (/* New preserve attributes */
        el.hasAttribute('no-update') ||
        el.hasAttribute('no-update-body') ||
        el.hasAttribute('no-update-if') ||
        el.hasAttribute('no-update-body-if') ||
        /* Old preserve attributes */
        el.hasAttribute('w-preserve') ||
        el.hasAttribute('w-preserve-body') ||
        el.hasAttribute('w-preserve-if') ||
        el.hasAttribute('w-preserve-body-if')) {
        transformHelper.handleWidgetPreserve();
    }

    if (el.hasAttribute('ref') || el.hasAttribute('w-id')) {
        transformHelper.assignWidgetId();
    }

    if (el.hasAttribute('for-ref') || el.hasAttribute('w-for')) {
        transformHelper.handleWidgetFor();
    }

    if (el.hasAttribute('w-preserve-attrs')) {
        transformHelper.handleWidgetPreserveAttrs();
    }

    if (el.hasAttribute('w-body')) {
        transformHelper.handleWidgetBody();
    }

    // Handle w-on* properties
    transformHelper.handleWidgetEvents();

    transformHelper.getWidgetArgs().compile(transformHelper);

    // If we need to pass any information to a nested widget then
    // we start that information in the "out" so that it can be picked
    // up later by the nested widget. We call this "widget args" and
    // we generate compiled code that stores the widget args in the out
    // for the next widget and then we also insert cleanup code to remove
    // the data out of the out
    if (el.type !== 'HtmlElement') { // Only custom tags can have nested widgets
        transformHelper.getWidgetArgs().compile(transformHelper);
    }
};
