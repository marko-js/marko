'use strict';

var StartTag = require('./StartTag');
var EndTag = require('./EndTag');

module.exports = function generateCode(node, codegen) {
    var builder = codegen.builder;
    var tagName = node.tagName;

    // Convert the tag name into a Node so that we generate the code correctly
    if (tagName) {
        tagName = codegen.builder.literal(tagName);
    } else {
        tagName = node.tagNameExpression;
    }

    var properties = node.getProperties();

    if (properties) {
        var objectProps = Object.keys(properties).map((propName) => {
            return builder.property(
                builder.identifier(propName),
                properties[propName]);
        });

        node.setAttributeValue('data-marko',
            builder.objectExpression(objectProps),
            false);
    }

    var attributes = node._attributes && node._attributes.all;

    var body = node.body;
    var argument = node.argument;
    var hasBody = body && body.length;
    var openTagOnly = node.openTagOnly;
    var bodyOnlyIf = node.bodyOnlyIf;
    var dynamicAttributes = node.dynamicAttributes;
    var selfClosed = node.selfClosed === true;



    if (hasBody) {
        body = codegen.generateCode(body);
    }

    if (hasBody || bodyOnlyIf) {
        openTagOnly = false;
        selfClosed = false;
    } else if (selfClosed){
        openTagOnly = true;
    }

    var startTag = new StartTag({
        tagName: tagName,
        attributes: attributes,
        properties: properties,
        argument: argument,
        selfClosed: selfClosed,
        dynamicAttributes: dynamicAttributes
    });

    var endTag;

    if (!openTagOnly) {
        endTag = new EndTag({
            tagName: tagName
        });
    }

    if (bodyOnlyIf) {
        var startIf = builder.ifStatement(builder.negate(bodyOnlyIf), [
            startTag
        ]);

        var endIf = builder.ifStatement(builder.negate(bodyOnlyIf), [
            endTag
        ]);

        return [
            startIf,
            body,
            endIf
        ];
    } else {
        if (openTagOnly) {
            return codegen.generateCode(startTag);
        } else {
            return [
                startTag,
                body,
                endTag
            ];
        }
    }
};
