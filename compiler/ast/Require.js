'use strict';
var ok = require('assert').ok;
var Node = require('./Node');

class Require extends Node {
    constructor(def) {

        /*
        <var foo=require('foo')/>
        <require module='./foo' var=foo/>

        <static>
            <var foo=require('foo')/>
            <require module='./foo' var=foo/>
        </static>
         */
        throw new Error('TODO Determine require syntax');

        super('Require');
        this.module = def.module;
        this.varName = def.var;
        this.isStatic = def.static !== false;

        ok(this.module, '"module" is required');
        ok(this.varName, '"var" is required');
    }

    generateCode(generator) {

        var modulePath = this.module;
        var varName = this.varName;
        var isStatic = this.isStatic;
        var builder = generator.builder;
        var requireFunctionCall = builder.functionCall('require', [modulePath]);

        if (varName) {
            if (isStatic) {
                generator.addStaticVar(varName, requireFunctionCall);
            } else {
                return builder.vars([
                    name: varName,
                ])
                return requireFunctionCall;
            }

        } else {
            if (isStatic) {
                generator.addStaticStatement(requireFunctionCall);
            } else {

            }
            generator.addStaticStatement()
            template.functionCall('require', module);
        }


        if (isStatic) {

        }

        generator.builder.functionCall('require')





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

module.exports = Require;