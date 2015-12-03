'use strict';

var HtmlElement = require('./HtmlElement');
var path = require('path');
var removeDashes = require('../util/removeDashes');

function removeExt(filename) {
    var ext = path.extname(filename);
    if (ext) {
        return filename.slice(0, 0 - ext.length);
    } else {
        return filename;
    }
}

function buildInputProps(node, builder) {
    var inputProps = {};

    node.forEachAttribute((attr) => {
        var attrName = attr.name;
        var propName = removeDashes(attrName);
        inputProps[propName] = attr.value;
    });

    return builder.literal(inputProps);
}

class CustomTag extends HtmlElement {
    constructor(el, tagDef) {
        super(el);
        this.type = 'CustomTag';
        this.tagDef = tagDef;
    }

    generateCode(generator) {
        var loadRendererVar = generator.addStaticVar('__renderer', '__helpers.r');
        var tagVar = generator.addStaticVar('__tag', '__helpers.t');

        var builder = generator.builder;
        var context = generator.context;

        var tagDef = this.tagDef;

        var rendererPath = tagDef.renderer;
        if (rendererPath) {
            let rendererRequirePath = context.getRequirePath(rendererPath);
            let requireRendererFunctionCall = builder.require(JSON.stringify(rendererRequirePath));
            let loadRendererFunctionCall = builder.functionCall(loadRendererVar, [ requireRendererFunctionCall ]);

            let rendererVar = generator.addStaticVar(removeExt(rendererPath), loadRendererFunctionCall);
            var inputProps = buildInputProps(this, builder);
            var tagArgs = [ 'out', rendererVar, inputProps ];
            var tagFunctionCall = builder.functionCall(tagVar, tagArgs);
            return tagFunctionCall;
        }
    }
}

module.exports = CustomTag;