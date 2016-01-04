'use strict';

var Node = require('./Node');
var Literal = require('./Literal');
var escapeXmlAttr = require('raptor-util/escapeXml').attr;
var HtmlAttributeCollection = require('./HtmlAttributeCollection');

class StartTag extends Node {
    constructor(def) {
        super('StartTag');

        this.tagName = def.tagName;
        this.attributes = def.attributes;
        this.argument = def.argument;
        this.selfClosing = def.selfClosing;
        this.dynamicAttributes = def.dynamicAttributes;
    }

    generateCode(codegen) {
        var tagName = this.tagName;
        var selfClosing = this.selfClosing;
        var dynamicAttributes = this.dynamicAttributes;

        var builder = codegen.builder;

        // Starting tag
        codegen.addWriteLiteral('<');

        codegen.addWrite(tagName);

        var attributes = this.attributes;

        if (attributes) {
            for (let i=0; i<attributes.length; i++) {
                let attr = attributes[i];
                let attrName = attr.name;
                let attrValue = attr.value;

                if (attr.isLiteralValue()) {
                    var literalValue = attrValue.value;
                    if (typeof literalValue === 'boolean') {
                        if (literalValue === true) {
                            codegen.addWriteLiteral(' ' + attrName);
                        }
                    } else if (literalValue != null) {
                        codegen.addWriteLiteral(' ' + attrName + '="' + escapeXmlAttr(literalValue) + '"');
                    }

                } else if (attrValue) {
                    codegen.addWriteLiteral(' ' + attrName + '="');
                    codegen.isInAttribute = true;
                    // TODO Deal with escaping dynamic HTML attribute expression
                    codegen.addWrite(attrValue);
                    codegen.isInAttribute = false;
                    codegen.addWriteLiteral('"');
                } else if (attr.argument) {
                    codegen.addWriteLiteral(' ' + attrName + '(');
                    codegen.addWriteLiteral(attr.argument);
                    codegen.addWriteLiteral(')');
                }
            }
        }

        if (dynamicAttributes) {
            dynamicAttributes.forEach(function(attrsExpression) {
                codegen.addStaticVar('attrs', '__helpers.as');
                let attrsFunctionCall = builder.functionCall('attrs', [attrsExpression]);
                codegen.addWrite(attrsFunctionCall);
            });
        }

        if (selfClosing) {
            codegen.addWriteLiteral('/>');
        } else {
            codegen.addWriteLiteral('>');
        }
    }
}

class EndTag extends Node {
    constructor(def) {
        super('EndTag');
        this.tagName = def.tagName;
    }

    generateCode(codegen) {
        var tagName = this.tagName;
        codegen.addWriteLiteral('</');
        codegen.addWrite(tagName);
        codegen.addWriteLiteral('>');
    }
}

class HtmlElement extends Node {
    constructor(def) {
        super('HtmlElement');

        var tagName = def.tagName;

        this.tagName = null;
        this.dynamicTagName = null;

        if (tagName instanceof Node) {
            if (tagName instanceof Literal) {
                this.tagName = tagName.value;
            } else {
                this.dynamicTagName = tagName;
            }
        } else if (typeof tagName === 'string'){
            this.tagName = tagName;
        }

        this._attributes = def.attributes;

        if (!(this._attributes instanceof HtmlAttributeCollection)) {
            this._attributes = new HtmlAttributeCollection(this._attributes);
        }
        this.body = this.makeContainer(def.body);
        this.argument = def.argument;
        this.allowSelfClosing = false;
        this.startTagOnly = false;
        this.dynamicAttributes = undefined;
        this.bodyOnlyIf = undefined;
    }

    generateHtmlCode(codegen) {
        var tagName = this.tagName;

        // Convert the tag name into a Node so that we generate the code correctly
        if (tagName) {
            tagName = codegen.builder.literal(tagName);
        } else {
            tagName = this.dynamicTagName;
        }

        var attributes = this._attributes && this._attributes.all;
        var body = this.body;
        var argument = this.argument;
        var hasBody = body && body.length;
        var startTagOnly = this.startTagOnly;
        var allowSelfClosing = this.allowSelfClosing === true;
        var bodyOnlyIf = this.bodyOnlyIf;
        var dynamicAttributes = this.dynamicAttributes;
        var selfClosing = false;

        var builder = codegen.builder;

        if (hasBody || bodyOnlyIf) {
            startTagOnly = false;
            selfClosing = false;
        } else {
            if (allowSelfClosing) {
                selfClosing = true;
                startTagOnly = true;
            }
        }


        var startTag = new StartTag({
            tagName: tagName,
            attributes: attributes,
            argument: argument,
            selfClosing: selfClosing,
            dynamicAttributes: dynamicAttributes
        });

        var endTag;

        if (!startTagOnly) {
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
            if (startTagOnly) {
                codegen.generateCode(startTag);
            } else {
                codegen.generateCode(startTag);
                codegen.generateCode(body);
                codegen.generateCode(endTag);
            }

        }
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

    setAttributeValue(name, value) {
        this._attributes.setAttributeValue(name, value);
    }

    removeAttribute(name) {
        if (this._attributes) {
            this._attributes.removeAttribute(name);
        }
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

    setTagName(newTagName) {
        this.tagName = newTagName;
        this.dynamicTagName = null;
    }

    getDynamicTagName(dynamicTagName) {
        this.tagName = null;
        this.dynamicTagName = dynamicTagName;
    }

    toJSON() {
        return {
            type: this.type,
            tagName: this.tagName,
            attributes: this._attributes,
            argument: this.argument,
            body: this.body,
            bodyOnlyIf: this.bodyOnlyIf,
            dynamicAttributes: this.dynamicAttributes
        };
    }

    setBodyOnlyIf(condition) {
        this.bodyOnlyIf = condition;
    }
}

module.exports = HtmlElement;