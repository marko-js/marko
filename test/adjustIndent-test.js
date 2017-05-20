'use strict';
require('./util/test-init');

var chai = require('chai');
chai.config.includeStack = true;
var path = require('path');
var adjustIndent = require('marko/compiler/util/adjustIndent');
var autotest = require('./autotest');
var fs = require('fs');

describe('adjustIndent', function() {
    var autoTestDir = path.join(__dirname, 'autotests/adjustIndent');

    autotest.scanDir(
        autoTestDir,
        function run(dir, helpers, done) {
            var inputPath = path.join(dir, 'input.txt');
            var testSettings = require(path.join(dir, 'test.js'));
            var input = fs.readFileSync(inputPath, { encoding: 'utf8' });
            var newIndentation = testSettings.newIndentation;
            var output = adjustIndent(input, newIndentation);
            helpers.compare(output, '.txt');
            done();
        });
});
