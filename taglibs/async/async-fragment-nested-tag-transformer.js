'use strict';

module.exports = function transform(el, context) {
    var parentNode = el.parentNode;

    if (parentNode.tagName !== 'async-fragment') {
        context.addError(el, 'The <' + el.tagName + '> should be nested within an <async-fragment> tag.');
        return;
    }

    var targetProp;

    if (el.tagName === 'async-fragment-error') {
        targetProp = 'renderError';
    } else if (el.tagName === 'async-fragment-timeout') {
        targetProp = 'renderTimeout';
    } else if (el.tagName === 'async-fragment-placeholder') {
        targetProp = 'renderPlaceholder';
    }

    var builder = context.builder;

    parentNode.setAttributeValue(targetProp, builder.renderBodyFunction(el.body));
    el.detach();
};
