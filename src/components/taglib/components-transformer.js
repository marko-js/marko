'use strict';
var getTransformHelper = require('./util/getTransformHelper');


function tagDefinitionHasOverridingKeyAttribute(el, context) {
    if (!el.hasAttribute('key')) {
        return false;
    }

    var tagDef = el.tagDef;
    if (tagDef && tagDef.hasAttribute('key')) {
        return true;
    }

    return false;
}
module.exports = function transform(el, context) {
    var transformHelper = getTransformHelper(el, context);

    if (el.type === 'TemplateRoot') {
        transformHelper.handleRootNodes();
        return;
    }

    if (el.hasAttribute('w-body')) {
        // This is a legacy code block and should be removed in Marko v5
        context.deprecate('The "w-body" attribute is deprecated. Please use "<include(...)" instead. See: https://github.com/marko-js/marko/issues/492');
        let builder = context.builder;
        let bodyValue = el.getAttributeValue('w-body');
        el.removeAttribute('w-body');
        el.addAttribute({ // The old behavior is that the body content would be preserved if no new body content was provided
            name: 'no-update-body-if',
            argument: '!__component.b'//builder.negate(builder.memberExpression(builder.identifier('__component'), builder.identifier('b')))
        });

        let includeNode = context.createNodeForEl('include');

        if (!bodyValue) {
            bodyValue = builder.memberExpression(
                builder.identifier('__component'),
                builder.identifier('b'));

            includeNode.data.bodySlot = true;
        }

        includeNode.addProp('_target', bodyValue);
        el.appendChild(includeNode);
    }

    if (el.tagName === 'widget-types') {
        context.setFlag('hasWidgetTypes');
    }

    if (el.hasAttribute('w-el-id')) {
        transformHelper.addError('"w-el-id" attribute is no longer allowed. Use "w-id" instead.');
        return;
    }

    if (el.hasAttribute('w-bind')) {
        transformHelper.handleLegacyBind();
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
        transformHelper.handleComponentPreserve();
    }

    // Handle *:key properties (and deprecated w-for/for-key/for-ref)
    transformHelper.handleScopedAttrs();

    if (!tagDefinitionHasOverridingKeyAttribute(el, context)) {
        if (el.hasAttribute('w-id') || el.hasAttribute('ref') || el.hasAttribute('key')) {
            transformHelper.assignComponentId();
        }

        if (context.options.autoKeyEnabled !== false && context.inline !== true) {
            transformHelper.assignComponentId();
        }
    }

    if (el.hasAttribute('w-body')) {
        transformHelper.handleComponentBody();
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
