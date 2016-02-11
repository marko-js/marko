'use strict';

var Node = require('./Node');

class Slot extends Node {
    constructor(def) {
        super('Slot');
        this.onDone = def.onDone;
        this.codegenSlot = null;
    }

    generateCode(codegen) {
        if (this.onDone) {
            codegen.onDone((codegen) => {
                this.onDone(this, codegen);
            });
        }
        // At the time the code for this node is to be generated we instead
        // create a slot. A slot is just a marker in the output code stream
        // that we can later inject code into. The injection happens after
        // the entire tree has been walked.
        this.codegenSlot = codegen.beginSlot(this);
    }

    setContent(content) {
        this.codegenSlot.setContent(content);
    }

    toJSON() {
        return {
            type: this.type
        };
    }
}

module.exports = Slot;