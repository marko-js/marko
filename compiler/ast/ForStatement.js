'use strict';

var Node = require('./Node');

class ForStatement extends Node {
    constructor(def) {
        super('ForStatement');
        this.init = def.init;
        this.test = def.test;
        this.update = def.update;
        this.body = this.makeContainer(def.body);
    }

    generateCode(generator) {
        var init = this.init;
        var test = this.test;
        var update = this.update;
        var body = this.body;

        generator.write('for (');

        if (init) {
            generator.generateCode(init);
        }

        generator.write('; ');

        if (test) {
            generator.generateCode(test);
        }

        generator.write('; ');

        if (update) {
            generator.generateCode(update);
        }

        generator.write(') ');

        generator.generateBlock(body);

        generator.write('\n');
    }
}

module.exports = ForStatement;