'use strict';
var ok = require('assert').ok;
var Node = require('./Node');

class ForEach extends Node {
    constructor(def) {
        super('ForEach');
        this.varName = def.varName;
        this.target = def.target;
        this.body = this.makeContainer(def.body);

        ok(this.varName, '"varName" is required');
        ok(this.target, '"target" is required');
    }

    generateCode(generator) {
        var varName = this.varName;
        var target = this.target;

        var builder = generator.builder;

        generator.addStaticVar('forEach', '__helpers.f');

        return builder.functionCall('forEach', [
            target,
            builder.functionDeclaration(null, [varName], this.body)
        ]);
    }
}

module.exports = ForEach;