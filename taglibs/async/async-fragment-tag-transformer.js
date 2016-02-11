'use strict';

var isObjectEmpty = require('raptor-util/isObjectEmpty');

module.exports = function transform(el, context) {
    var varName = el.getAttributeValue('var');
    if (varName) {
        if (varName.type !== 'Literal' || typeof varName.value !== 'string') {
            context.addError(el, 'The "var" attribute value should be a string');
            return;
        }

        varName = varName.value;

        if (!context.util.isValidJavaScriptIdentifier(varName)) {
            context.addError(el, 'The "var" attribute value should be a valid JavaScript identifier');
            return;
        }
    } else {
        context.addError(el, 'The "var" attribute is required');
        return;
    }

    var attrs = el.getAttributes().concat([]);
    var arg = {};
    var builder = context.builder;

    attrs.forEach((attr) => {
        var attrName = attr.name;
        if (attrName.startsWith('arg-')) {
            let argName = attrName.substring('arg-'.length);
            arg[argName] = attr.value;
            el.removeAttribute(attrName);
        }
    });

    var dataProviderAttr = el.getAttribute('data-provider');
    if (!dataProviderAttr) {
        context.addError(el, 'The "data-provider" attribute is required');
        return;
    }

    if (dataProviderAttr.value == null) {
        context.addError(el, 'A value is required for the "data-provider" attribute');
        return;
    }

    if (dataProviderAttr.value.type == 'Literal') {
        context.addError(el, 'The "data-provider" attribute value should not be a literal ' + (typeof dataProviderAttr.value.value));
        return;
    }

    var name = el.getAttributeValue('name');
    if (name == null) {
        el.setAttributeValue('_name', builder.literal(dataProviderAttr.rawValue));
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
