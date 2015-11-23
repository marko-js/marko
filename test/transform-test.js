'use strict';

var chai = require('chai');
chai.config.includeStack = true;

var path = require('path');
var compiler = require('../compiler');
var autotest = require('./autotest');

describe('compiler/transform', function() {
    var autoTestDir = path.join(__dirname, 'fixtures/transform/autotest');

    autotest.scanDir(autoTestDir, function run(dir) {
        var getAST = require(path.join(dir, 'index.js'));
        var ast = getAST(compiler);
        return compiler.generateCode(ast);
    });

});