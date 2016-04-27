'use strict';
require('./patch-module');

var chai = require('chai');
chai.config.includeStack = true;

var path = require('path');
var compiler = require('../compiler');
var builder = compiler.createBuilder();
var autotest = require('./autotest');
var fs = require('fs');

describe('compiler/expression-toString', function() {
    var autoTestDir = path.join(__dirname, 'fixtures/expression-toString/autotest');

    autotest.scanDir(autoTestDir, function run(dir) {
        var input = fs.readFileSync(path.join(dir, 'input.js'), {encoding: 'utf8'});
        var parsed = builder.parseExpression(input);
        return parsed.toString();
    });
});