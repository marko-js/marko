'use strict';
var chai = require('chai');
chai.config.includeStack = true;
var path = require('path');
var adjustIndent = require('../compiler/util/adjustIndent');
var autotest = require('./autotest');
var fs = require('fs');

describe('compiler/util/adjustIndent', function() {
    var autoTestDir = path.join(__dirname, 'fixtures/adjustIndent/autotest');

    autotest.scanDir(
        autoTestDir,
        function run(dir) {
            var inputPath = path.join(dir, 'input.txt');
            var testSettings = require(path.join(dir, 'test.js'));
            var input = fs.readFileSync(inputPath, { encoding: 'utf8' });
            var newIndentation = testSettings.newIndentation;
            var output = adjustIndent(input, newIndentation);
            return output;
        },
        {
            compareExtension: '.txt'
        });
});