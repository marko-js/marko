'use strict';
var Node = require('./Node');
var UniqueVars = require('../util/UniqueVars');

function createVarsArray(vars) {
    return Object.keys(vars).map(function(varName) {
        var varInit = vars[varName];
        return {
            id: varName,
            init: varInit
        };
    });
}

class TemplateRoot extends Node {
    constructor(def) {
        super('TemplateRoot');
        this.body = this.makeContainer(def.body);
        this._uniqueVars = new UniqueVars();
        this.staticVars = {};

        this.addStaticVar('str', '__helpers.s');
        this.addStaticVar('empty', '__helpers.e');
        this.addStaticVar('notEmpty', '__helpers.ne');
        this.addStaticVar('escapeXml', '__helpers.x');
    }

    generateCode(generator) {
        var body = this.body;
        var staticVars = this.staticVars;

        var builder = generator.builder;
        var program = builder.program;
        var functionDeclaration = builder.functionDeclaration;
        var vars = builder.vars;
        var returnStatement = builder.returnStatement;
        var slot = builder.slot;

        var staticsSlot = slot();

        var outputNode = program([
            functionDeclaration('create', ['__helpers'], [
                staticsSlot,

                returnStatement(
                    functionDeclaration('render', ['data', 'out'], body))
            ]),
            '(module.exports = require("marko").c(__filename)).c(create)'
        ]);

        generator.generateCode(outputNode);

        staticsSlot.setContent([
            vars(createVarsArray(staticVars))
        ]);
    }

    toJSON(prettyPrinter) {
        return {
            type: this.type,
            body: this.body,
            staticVars: this.staticVars
        };
    }

    addStaticVar(name, init) {
        var actualVarName = this._uniqueVars.addVar(name, init);
        this.staticVars[actualVarName] = init;
        return actualVarName;
    }
}

module.exports = TemplateRoot;