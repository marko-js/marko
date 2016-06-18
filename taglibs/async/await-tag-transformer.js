'use strict';

var isObjectEmpty = require('raptor-util/isObjectEmpty');

module.exports = function transform(el, context) {
    if(!el.argument) {
        context.addError(el, 'Invalid <await> tag. Argument is missing. Example: <await(user from data.userProvider)>');
        return;
    }

    var parts = el.argument.split(' from ');

    if(parts.length !== 2) {
        context.addError(el, 'Invalid <await> tag. Argument is malformed. Example: <await(user from data.userProvider)>');
        return;
    }

    var varName = parts[0];
    var dataProviderAttr = parts[1];

    if (!context.util.isValidJavaScriptIdentifier(varName)) {
        context.addError(el, 'Invalid <await> tag. Argument\'s variable name should be a valid JavaScript identifier. Example: user, as in <await(user from data.userProvider)>');
        return;
    }

    var builder = context.builder;

    el.setAttributeValue('var', builder.literal(varName));
    el.setAttributeValue('data-provider', builder.parseExpression(dataProviderAttr));
    el.argument = null;

    ////////////////////

    var attrs = el.getAttributes().concat([]);
    var arg = {};

    attrs.forEach((attr) => {
        var attrName = attr.name;
        if (attrName.startsWith('arg-')) {
            let argName = attrName.substring('arg-'.length);
            arg[argName] = attr.value;
            el.removeAttribute(attrName);
        }
    });

    var name = el.getAttributeValue('name');
    if (name == null) {
        el.setAttributeValue('_name', builder.literal(dataProviderAttr));
    }

    if (el.hasAttribute('arg')) {
        if (isObjectEmpty(arg)) {
            arg = el.getAttributeValue('arg');
        } else {
            let mergeVar = context.addStaticVar('__merge', '__helpers.m');
            arg = builder.functionCall(mergeVar, [
                builder.literal(arg), // Input props from the attributes take precedence
                el.getAttributeValue('arg')
            ]);
        }
    } else {
        if (isObjectEmpty(arg)) {
            arg = null;
        } else {
            arg = builder.literal(arg);
        }
    }

    if (arg) {
        el.setAttributeValue('arg', arg);
    }

    var timeoutMessage = el.getAttributeValue('timeout-message');
    if (timeoutMessage) {
        el.removeAttribute('timeout-message');
        el.setAttributeValue('renderTimeout', builder.renderBodyFunction([
            builder.text(timeoutMessage)
        ]));
    }

    var errorMessage = el.getAttributeValue('error-message');
    if (errorMessage) {
        el.removeAttribute('error-message');
        el.setAttributeValue('renderError', builder.renderBodyFunction([
            builder.text(errorMessage)
        ]));
    }

    var placeholder = el.getAttributeValue('placeholder');
    if (placeholder) {
        el.removeAttribute('placeholder');
        el.setAttributeValue('renderPlaceholder', builder.renderBodyFunction([
            builder.text(placeholder)
        ]));
    }
};
