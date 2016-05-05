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

function createCodeGenerator() {
    var context = new CompileContext('dummy', 'dummy.marko', builder);
    return new CodeGenerator(context);
}

describe('compiler/codegen', function() {
    var autoTestDir = path.join(__dirname, 'autotests/codegen');

    autotest.scanDir(autoTestDir, function run(dir, helpers, done) {
        var main = require(path.join(dir, 'index.js'));
        var generateCodeFunc = main;
        var codegen = createCodeGenerator();
        var ast = generateCodeFunc(builder, codegen);
        codegen.generateCode(ast);
        helpers.compare(codegen.getCode(), '.js');
        done();
    });

    it('should not allow a return outside a function', function() {
        let builder = compiler.createBuilder();

        expect(function() {
            var rootNode = builder.program([
                builder.returnStatement('foo')
            ]);

            var codegen = createCodeGenerator();
            codegen.generateCode(rootNode);
        }).to.throw('"return" not allowed outside a function body');
    });
});