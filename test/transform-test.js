'use strict';

var chai = require('chai');
chai.config.includeStack = true;

var path = require('path');
var compiler = require('../compiler');
var autotest = require('./autotest');
var builder = compiler.createBuilder();
var CompileContext = require('../compiler/CompileContext');
var CodeGenerator = require('../compiler/CodeGenerator');

function createGenerator() {
    var context = new CompileContext('dummy', 'dummy.marko', builder);
    return new CodeGenerator(context);
}

describe('compiler/transform', function() {
    var autoTestDir = path.join(__dirname, 'fixtures/transform/autotest');

    autotest.scanDir(autoTestDir, function run(dir) {
        var getAST = require(path.join(dir, 'index.js'));
        var ast = getAST(compiler);

        var codeGenerator = createGenerator();
        codeGenerator.generateCode(ast);
        return codeGenerator.getCode();
    });

});