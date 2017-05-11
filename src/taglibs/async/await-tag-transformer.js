'use strict';

var isObjectEmpty = require('raptor-util/isObjectEmpty');

module.exports = function transform(el, context) {
    if(!el.argument) {
        context.addError('Invalid <await> tag. Argument is missing. Example: <await(user from data.userProvider)>');
        return;
    }

    var match = /^([$A-Z_][0-9A-Z_$]*) from (.*)$/i.exec(el.argument);

    if(!match) {
        context.addError('Invalid <await> tag. Argument is malformed. Example: <await(user from data.userProvider)>');
        return;
    }

    var varName = match[1];
    var dataProviderAttr = match[2];

    if (!context.util.isValidJavaScriptIdentifier(varName)) {
        context.addError('Invalid <await> tag. Argument\'s variable name should be a valid JavaScript identifier. Example: user, as in <await(user from data.userProvider)>');
        return;
    }

    var builder = context.builder;

    el.setAttributeValue('_var', builder.literal(varName));
    el.setAttributeValue('_dataProvider', builder.parseExpression(dataProviderAttr));
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
            let mergeVar = context.helper('merge');
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
