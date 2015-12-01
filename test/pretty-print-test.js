'use strict';

var chai = require('chai');
chai.config.includeStack = true;
var expect = require('chai').expect;

var path = require('path');
var compiler = require('../compiler');
var builder = compiler.createBuilder();
var autotest = require('./autotest');

describe('compiler/pretty-print', function() {
    var autoTestDir = path.join(__dirname, 'fixtures/pretty-print/autotest');

    autotest.scanDir(
        autoTestDir,
        function run(dir) {
            var getAST = require(path.join(dir, 'index.js'));
            var ast = getAST(builder);
            return ast;
        },
        {
            deepEqual: true,
            compareExtension: '.json'
        });
});