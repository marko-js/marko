'use strict';

module.exports = function transform(el, context) {
    var parentNode = el.parentNode;

    if (parentNode.tagName !== 'await') {
        context.addError(el, 'The <' + el.tagName + '> should be nested within an <await> tag.');
        return;
    }

    var targetProp;

    if (el.tagName === 'await-error') {
        targetProp = 'renderError';
    } else if (el.tagName === 'await-timeout') {
        targetProp = 'renderTimeout';
    } else if (el.tagName === 'await-placeholder') {
        targetProp = 'renderPlaceholder';
    }

    var builder = context.builder;

    parentNode.setAttributeValue(targetProp, builder.renderBodyFunction(el.body));
    el.detach();
};
