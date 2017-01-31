'use strict';
var getTransformHelper = require('./util/getTransformHelper');

module.exports = function transform(el, context) {
    var transformHelper = getTransformHelper(el, context);

    if (el.type === 'TemplateRoot') {
        transformHelper.handleRootNodes();
        return;
    }

    if (el.hasAttribute('w-body')) {
        context.deprecate('The "w-body" attribute is deprecated. Please use "<include(...)" instead. See: https://github.com/marko-js/marko/issues/492');
        let builder = context.builder;
        let bodyValue = el.getAttributeValue('w-body');
        el.removeAttribute('w-body');

        let includeNode = context.createNodeForEl('include');

        if (!bodyValue) {
            bodyValue = builder.memberExpression(
                builder.identifier('widget'),
                builder.identifier('b'));

            includeNode.data.bodySlot = true;
        }

        includeNode.addProp('_target', bodyValue);
        el.appendChild(includeNode);
    }

    if (el.tagName === 'widget-types') {
        context.setFlag('hasWidgetTypes');
    } else if (el.tagName === 'include') {
        transformHelper.handleIncludeNode(el);
        transformHelper.getWidgetArgs().compile(transformHelper);
        return;
    }

    if (el.hasAttribute('w-el-id')) {
        transformHelper.addError('"w-el-id" attribute is no longer allowed. Use "w-id" instead.');
        return;
    }

    if (el.hasAttribute('_widgetbind') || el.hasAttribute('w-bind')) {
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

    if (el.hasAttribute('w-body')) {
        transformHelper.handleWidgetBody();
    }

    // Handle w-preserve-attrs and :no-update attributes
    transformHelper.handleWidgetPreserveAttrs();

    // Handle w-on* properties
    transformHelper.handleWidgetEvents();

    // If we need to pass any information to a nested widget then
    // we start that information in the "out" so that it can be picked
    // up later by the nested widget. We call this "widget args" and
    // we generate compiled code that stores the widget args in the out
    // for the next widget and then we also insert cleanup code to remove
    // the data out of the out
    transformHelper.getWidgetArgs().compile(transformHelper);
};
