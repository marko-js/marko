'use strict';

require('../__util__/test-init');

var chai = require('chai');
chai.config.includeStack = true;
var expect = require('chai').expect;

var path = require('path');
var compiler = require('../../compiler');
var builder = compiler.createBuilder();
var autotest = require('../autotest');

var CompileContext = require('marko/compiler/CompileContext');
var CodeGenerator = require('marko/compiler/CodeGenerator');
var CodeWriter = require('marko/compiler/CodeWriter');

function createCodeGenerator(context) {
    return new CodeGenerator(context);
}

function createCodeWriter(context) {
    return new CodeWriter(context, builder);
}

describe('compiler/codegen', function () {
    var autoTestDir = path.join(__dirname, './fixtures');

    autotest.scanDir(autoTestDir, function run(dir, helpers, done) {
        var main = require(path.join(dir, 'index.js'));
        var generateCodeFunc = main;

        var context = new CompileContext('dummy', path.join(dir, 'dummy.marko'), builder);
        var codegen = createCodeGenerator(context);
        var codeWriter = createCodeWriter(context);

        var ast = generateCodeFunc(builder, codegen);
        var finalAST = codegen.generateCode(ast);

        codeWriter.write(finalAST);

        var actualSrc = codeWriter.getCode();
        actualSrc = actualSrc.replace(/marko\/dist\//g, 'marko/src/');

        helpers.compare(actualSrc, '.js');
        done();
    });

    it('should not allow a return outside a function', function () {
        let builder = compiler.createBuilder();

        var context = new CompileContext('dummy', path.join(autoTestDir, 'dummy.marko'), builder);
        var codegen = createCodeGenerator(context);

        var rootNode = builder.program([builder.returnStatement('foo')]);

        expect(function () {
            codegen.generateCode(rootNode);
        }).to.throw('"return" not allowed outside a function body');
    });
});