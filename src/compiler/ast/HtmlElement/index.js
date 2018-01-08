'use strict';

var Node = require('../Node');
var Literal = require('../Literal');
var HtmlAttributeCollection = require('../HtmlAttributeCollection');
var generateHTMLCode = require('./html/generateCode');
var generateVDOMCode = require('./vdom/generateCode');
var vdomUtil = require('../../util/vdom');

function beforeGenerateCode(event) {
    var tagName = event.node.tagName;
    var context = event.context;

    var tagDef = typeof tagName === 'string' ? context.getTagDef(tagName) : undefined;
    if (tagDef && tagDef.htmlType === 'svg') {
        context.pushFlag('SVG');
    }

    if (tagName === 'script') {
        context.pushFlag('SCRIPT_BODY');
    }
    if (tagName === 'style') {
        context.pushFlag('STYLE_BODY');
    }
}

function afterGenerateCode(event) {
    var tagName = event.node.tagName;
    var context = event.context;

    var tagDef = typeof tagName === 'string' ? context.getTagDef(tagName) : undefined;

    if (tagDef && tagDef.htmlType === 'svg') {
        context.popFlag('SVG');
    }

    if (tagName === 'script') {
        context.popFlag('SCRIPT_BODY');
    }
    if (tagName === 'style') {
        context.popFlag('STYLE_BODY');
    }
}

class HtmlElement extends Node {
    constructor(def) {
        super('HtmlElement');
        this.tagName = null;
        this.tagNameExpression = null;
        this.setTagName(def.tagName);
        this.tagString = def.tagString;
        this._attributes = def.attributes;
        this._properties = def.properties;
        this.body = this.makeContainer(def.body);
        this.argument = def.argument;

        if (!(this._attributes instanceof HtmlAttributeCollection)) {
            this._attributes = new HtmlAttributeCollection(this._attributes);
        }

        this.openTagOnly = def.openTagOnly;
        this.selfClosed = def.selfClosed;
        this.dynamicAttributes = undefined;
        this.bodyOnlyIf = undefined;
        this.runtimeFlags = 0; // Runtime flags are used to flag VDOM nodes with important information (flags are OR'd together)
        this.key = undefined;

        this.on('beforeGenerateCode', beforeGenerateCode);
        this.on('afterGenerateCode', afterGenerateCode);
    }

    addRuntimeFlag(value) {
        this.runtimeFlags |= value;
    }

    setKey(key) {
        this.key = key;
    }

    generateHTMLCode(codegen) {
        if (codegen.context.isMacro(this.tagName)) {
            // At code generation time, if node tag corresponds to a registered macro
            // then invoke the macro based on node HTML element instead of generating
            // the code to render an HTML element.
            return codegen.builder.invokeMacroFromEl(this);
        }

        return generateHTMLCode(this, codegen);
    }

    generateVDOMCode(codegen) {
        if (codegen.context.isMacro(this.tagName)) {
            // At code generation time, if node tag corresponds to a registered macro
            // then invoke the macro based on node HTML element instead of generating
            // the code to render an HTML element.
            return codegen.builder.invokeMacroFromEl(this);
        }

        return generateVDOMCode(this, codegen, vdomUtil);
    }

    addDynamicAttributes(expression) {
        if (!this.dynamicAttributes) {
            this.dynamicAttributes = [];
        }

        this.dynamicAttributes.push(expression);
    }

    getAttribute(name) {
        return this._attributes != null && this._attributes.getAttribute(name);
    }

    getAttributeValue(name) {
        var attr = this._attributes != null && this._attributes.getAttribute(name);
        if (attr) {
            return attr.value;
        }
    }

    addAttribute(attr) {
        this._attributes.addAttribute(attr);
    }

    setAttributeValues(attrs) {
        if (!attrs) {
            return;
        }

        for(var attrName in attrs) {
            var attrValue = attrs[attrName];
            this.setAttributeValue(attrName, attrValue);
        }
    }

    setAttributeValue(name, value, escape) {
        this._attributes.setAttributeValue(name, value, escape);
    }

    setPropertyValue(name, value) {
        if (!this._properties) {
            this._properties = {};
        }
        this._properties[name] = value;
    }

    getProperties() {
        return this._properties;
    }

    replaceAttributes(newAttributes) {
        this._attributes.replaceAttributes(newAttributes);
    }

    removeAttribute(name) {
        if (this._attributes) {
            this._attributes.removeAttribute(name);
        }
    }

    removeAllAttributes() {
        this._attributes.removeAllAttributes();
    }

    hasAttribute(name) {
        return this._attributes != null && this._attributes.hasAttribute(name);
    }

    getAttributes() {
        return this._attributes.all;
    }

    get attributes() {
        return this._attributes.all;
    }

    forEachAttribute(callback, thisObj) {
        var attributes = this._attributes.all.concat([]);

        for (let i=0, len=attributes.length; i<len; i++) {
            callback.call(thisObj, attributes[i]);
        }
    }

    setTagName(tagName) {
        this.tagName = null;
        this.tagNameExpression = null;

        if (tagName instanceof Node) {
            if (tagName instanceof Literal) {
                this.tagName = tagName.value;
                this.tagNameExpression = tagName;
            } else {
                this.tagNameExpression = tagName;
            }
        } else if (typeof tagName === 'string') {
            this.tagNameExpression = new Literal({value: tagName});
            this.tagName = tagName;
        }
    }

    isLiteralTagName() {
        return this.tagName != null;
    }

    toJSON() {
        return {
            type: this.type,
            tagName: this.tagName,
            attributes: this._attributes,
            tagString: this.tagString,
            argument: this.argument,
            body: this.body,
            bodyOnlyIf: this.bodyOnlyIf,
            dynamicAttributes: this.dynamicAttributes
        };
    }

    setBodyOnlyIf(condition) {
        this.bodyOnlyIf = condition;
    }

    walk(walker) {
        this.setTagName(walker.walk(this.tagNameExpression));
        this._attributes.walk(walker);
        this.body = walker.walk(this.body);
    }
}

module.exports = HtmlElement;
