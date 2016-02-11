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

    generateCode(codegen) {
        var init = this.init;
        var test = this.test;
        var update = this.update;
        var body = this.body;

        codegen.write('for (');

        if (init) {
            codegen.generateCode(init);
        }

        codegen.write('; ');

        if (test) {
            codegen.generateCode(test);
        }

        codegen.write('; ');

        if (update) {
            codegen.generateCode(update);
        }

        codegen.write(') ');

        codegen.generateBlock(body);

        codegen.write('\n');
    }

    walk(walker) {
        this.init = walker.walk(this.init);
        this.test = walker.walk(this.test);
        this.update = walker.walk(this.update);
        this.body = walker.walk(this.body);
    }
}

module.exports = ForStatement;