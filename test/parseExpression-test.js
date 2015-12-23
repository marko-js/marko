'use strict';
var chai = require('chai');
chai.config.includeStack = true;
var parseExpression = require('../compiler/util/parseExpression');
var autotest = require('./autotest');
var fs = require('fs');
var path = require('path');

describe('parseExpression' , function() {

    var autoTestDir = path.join(__dirname, 'fixtures/parseExpression/autotest');

    autotest.scanDir(
        autoTestDir,
        function run(dir) {
            var inputPath = path.join(dir, 'input.txt');
            var input = fs.readFileSync(inputPath, {encoding: 'utf8'});
            var parsed = parseExpression(input);
            return parsed;
        },
        {
            deepEqual: true,
            compareExtension: '.json'
        });
});
