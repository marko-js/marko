'use strict';

var Node = require('./Node');
var escapeXmlAttr = require('raptor-util/escapeXml').attr;
var HtmlAttributeCollection = require('./HtmlAttributeCollection');

class HtmlElement extends Node {
    constructor(def) {
        super('HtmlElement');
        this.tagName = def.tagName;
        this._attributes = def.attributes;

        if (!(this._attributes instanceof HtmlAttributeCollection)) {
            this._attributes = new HtmlAttributeCollection(this._attributes);
        }
        this.body = this.makeContainer(def.body);
        this.argument = def.argument;
        this.allowSelfClosing = false;
        this.startTagOnly = false;
    }

    generateHtmlCode(generator) {
        var tagName = this.tagName;
        var body = this.body;
        var startTagOnly = this.startTagOnly;
        var allowSelfClosing = this.allowSelfClosing;
        var hasBody = body && body.length;

        // Starting tag
        generator.addWriteLiteral('<' + tagName);

        var attributes = this._attributes && this._attributes.all;

        if (attributes) {
            for (let i=0; i<attributes.length; i++) {
                let attr = attributes[i];
                let attrName = attr.name;
                let attrValue = attr.value;


                if (attr.isLiteralValue()) {
                    var literalValue = attrValue.value;
                    if (typeof literalValue === 'boolean') {
                        if (literalValue === true) {
                            generator.addWriteLiteral(' ' + attrName);
                        }
                    } else if (literalValue != null) {
                        generator.addWriteLiteral(' ' + attrName + '="' + escapeXmlAttr(literalValue) + '"');
                    }

                } else if (attrValue) {
                    generator.addWriteLiteral(' ' + attrName + '="');
                    generator.isInAttribute = true;
                    // TODO Deal with escaping dynamic HTML attribute expression
                    generator.addWrite(attrValue);
                    generator.isInAttribute = false;
                    generator.addWriteLiteral('"');
                } else if (attr.argument) {
                    generator.addWriteLiteral(' ' + attrName + '(');
                    generator.addWriteLiteral(attr.argument);
                    generator.addWriteLiteral(')');
                }
            }
        }

        if (hasBody) {
            generator.addWriteLiteral('>');
        } else {
            if (startTagOnly) {
                generator.addWriteLiteral('>');
            } else if (allowSelfClosing) {
                generator.addWriteLiteral('/>');
            }
        }

        // Body
        if (hasBody) {
            generator.generateStatements(body);
        }

        // Ending tag
        if (tagName instanceof Node) {
            generator.addWriteLiteral('</');
            generator.addWrite(tagName);
            generator.addWriteLiteral('>');
        } else {
            if (hasBody) {
                generator.addWriteLiteral('</' + tagName + '>');
            } else {
                if (!startTagOnly && !allowSelfClosing) {
                    generator.addWriteLiteral('></' + tagName + '>');
                }
            }
        }
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
}

module.exports = HtmlElement;