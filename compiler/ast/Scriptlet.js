'use strict';

var Node = require('./Node');
var adjustIndent = require('../util/adjustIndent');

class Scriptlet extends Node {
    constructor(def) {
        super('Scriptlet');
        this.code = def.code;
    }

    generateCode(codegen) {
        var code = this.code;

        if (!code) {
            return;
        }

        code = adjustIndent(code, codegen.currentIndent);

        codegen.write(code);
        codegen.write('\n');
    }
}

module.exports = Scriptlet;