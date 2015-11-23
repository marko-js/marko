'use strict';

var Node = require('./Node');

class Slot extends Node {
    constructor(def) {
        super('Slot');

        this.generatorSlot = null;
    }

    generateCode(generator) {
        // At the time the code for this node is to be generated we instead
        // create a slot. A slot is just a marker in the output code stream
        // that we can later inject code into. The injection happens after
        // the entire tree has been walked.
        this.generatorSlot = generator.createSlot();
    }

    setContent(content) {
        this.generatorSlot.setContent(content, {
            statement: this.statement
        });
    }

    toJSON() {
        return {
            type: this.type
        };
    }
}

module.exports = Slot;