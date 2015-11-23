'use strict';

var ok = require('assert').ok;

var HtmlAttribute = require('./HtmlAttribute');

class HtmlAttributeCollection {
    constructor(attributes) {
        this.all = [];
        this.lookup = {};

        if (attributes) {
            if (Array.isArray(attributes)) {
                attributes.forEach((attr) => {
                    this.addAttribute(attr);
                });
            } else {
                for (var attrName in attributes) {
                    if (attributes.hasOwnProperty(attrName)) {
                        var attr = attributes[attrName];
                        attr.name = attrName;
                        this.addAttribute(attr);
                    }
                }
            }
        }
    }

    addAttribute(newAttr) {
        if (arguments.length === 2) {
            let name = arguments[0];
            let expression = arguments[1];
            newAttr = new HtmlAttribute(name, expression);
        }

        ok(HtmlAttribute.isHtmlAttribute(newAttr), 'Invalid attribute');

        var name = newAttr.name;

        if (this.lookup.hasOwnProperty(name)) {
            for (var i=0; i<this.all.length; i++) {
                var curAttr = this.all[i];
                if (curAttr.name === name) {
                    this.all.splice(i, 1);
                    break;
                }
            }
        }

        this.lookup[name] = newAttr;
        this.all.push(newAttr);
    }

    removeAttribute(name) {
        ok(typeof name === 'string', 'Invalid attribute name');

        name = name.toLowerCase();

        if (!this.lookup.hasOwnProperty(name)) {
            return false;
        }

        delete this.lookup[name];

        for (var i=0; i<this.all.length; i++) {
            var curAttr = this.all[i];
            if (curAttr.name === name) {
                this.all.splice(i, 1);
                break;
            }
        }

        return true;
    }

    hasAttribute(name) {
        ok(typeof name === 'string', 'Invalid attribute name');

        name = name.toLowerCase();

        return this.lookup.hasOwnProperty(name);
    }

    hasAttributes() {
        return this.all.length > 0;
    }

    getAttribute(name) {
        return this.lookup[name];
    }

    getAttributes() {
        return this.all;
    }

    toJSON() {
        return this.all;
    }

    toString() {
        return JSON.stringify(this.all);
    }
}

module.exports = HtmlAttributeCollection;