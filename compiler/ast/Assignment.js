'use strict';

var Node = require('./Node');

class Assignment extends Node {
    constructor(def) {
        super('Assignment');
        this.left = def.left;
        this.right = def.right;
    }

    generateCode(generator) {
        var left = this.left;
        var right = this.right;

        generator.generateCode(left);
        generator.write(' = ');
        generator.generateCode(right);
    }
}

module.exports = Assignment;