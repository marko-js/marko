'use strict';

var HtmlElement = require('./HtmlElement');

class CustomTag extends HtmlElement {
    constructor(def) {
        super('Identifier');
        this.name = def.name;
    }

    generateCode(generator) {
        var name = this.name;
        generator.write(name);
    }
}

module.exports = Identifier;