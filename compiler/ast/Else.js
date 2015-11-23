'use strict';

var Node = require('./Node');

class Else extends Node {
    constructor(def) {
        super('Else');
        this.body = this.makeContainer(def.body);
        this.matched = false;
    }

    generateCode(generator) {
        if (!this.matched) {
            generator.addError('Unmatched else statement');
            return;
        }
        var body = this.body;

        generator.write('else ');
        generator.generateBlock(body);
        generator.write('\n');
    }
}

module.exports = Else;