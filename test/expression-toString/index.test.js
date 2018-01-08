'use strict';

require('../__util__/test-init');

var chai = require('chai');
chai.config.includeStack = true;

var path = require('path');
var compiler = require('../../compiler');
var builder = compiler.createBuilder();
var autotest = require('../autotest');
var fs = require('fs');

describe('compiler/expression-toString', function () {
    var autoTestDir = path.join(__dirname, './fixtures');

    autotest.scanDir(autoTestDir, function run(dir, helpers, done) {
        var input = fs.readFileSync(path.join(dir, 'input.js'), { encoding: 'utf8' });
        var parsed = builder.parseExpression(input);
        helpers.compare(parsed.toString(), '.js');
        done();
    });
});