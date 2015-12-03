'use strict';
var Literal = require('./Literal');
var ok = require('assert').ok;

class HtmlAttribute {
    constructor(def) {
        ok(def, 'Invalid attribute definition');

        this.name = def.name.toLowerCase();
        this.value = def.value;
        this.argument = def.argument;
        this.def = def.def; // The attribute definition loaded from the taglib (if any)
    }

    isLiteralValue() {
        return this.value instanceof Literal;
    }

    isLiteralString() {
        return this.isLiteralValue() &&
            typeof this.value.value === 'string';
    }

    isLiteralBoolean() {
        return this.isLiteralValue() &&
            typeof this.value.value === 'boolean';
    }
}

HtmlAttribute.isHtmlAttribute = function(attr) {
    return (attr instanceof HtmlAttribute);
};

module.exports = HtmlAttribute;