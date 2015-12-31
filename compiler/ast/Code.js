'use strict';

var Node = require('./Node');
var adjustIndent = require('../util/adjustIndent');

class Code extends Node {
    constructor(def) {
        super('Code');
        this.value = def.value;
    }

    generateCode(codegen) {
        var code = this.value;

        if (!code) {
            return;
        }

        code = adjustIndent(code, codegen.currentIndent);

        codegen.write(code);
    }
}

module.exports = Code;