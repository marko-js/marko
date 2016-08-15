'use strict';

var Node = require('./Node');
var adjustIndent = require('../util/adjustIndent');

class Scriptlet extends Node {
    constructor(def) {
        super('Scriptlet');
        this.code = def.code;
    }

    generateCode(codegen) {
        return this;
    }

    writeCode(writer) {
        var code = this.code;

        if (!code) {
            return;
        }

        code = adjustIndent(code, writer.currentIndent);

        writer.write(code);
        writer.write('\n');
    }
}

module.exports = Scriptlet;