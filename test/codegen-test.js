'use strict';
require('./patch-module');

var chai = require('chai');
chai.config.includeStack = true;
var expect = require('chai').expect;

var path = require('path');
var compiler = require('../compiler');
var builder = compiler.createBuilder();
var autotest = require('./autotest');

var CompileContext = require('../compiler/CompileContext');
var CodeGenerator = require('../compiler/CodeGenerator');
var CodeWriter = require('../compiler/CodeWriter');

function createCodeGenerator(context) {
    return new CodeGenerator(context);
}

function createCodeWriter(context) {
    return new CodeWriter(context);
}

describe('compiler/codegen', function() {
    var autoTestDir = path.join(__dirname, 'autotests/codegen');

    autotest.scanDir(autoTestDir, function run(dir, helpers, done) {
        var main = require(path.join(dir, 'index.js'));
        var generateCodeFunc = main;

        var context = new CompileContext('dummy', 'dummy.marko', builder);
        var codegen = createCodeGenerator(context);
        var codeWriter = createCodeWriter(context);

        var ast = generateCodeFunc(builder, codegen);
        var finalAST = codegen.generateCode(ast);

        console.log(module.id, 'FINAL AST', JSON.stringify(finalAST, null, 4));

        codeWriter.write(finalAST);
        helpers.compare(codeWriter.getCode(), '.js');
        done();
    });

    it('should not allow a return outside a function', function() {
        let builder = compiler.createBuilder();

        var context = new CompileContext('dummy', 'dummy.marko', builder);
        var codegen = createCodeGenerator(context);

        var rootNode = builder.program([
            builder.returnStatement('foo')
        ]);

        expect(function() {
            codegen.generateCode(rootNode);
        }).to.throw('"return" not allowed outside a function body');
    });
});