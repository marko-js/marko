'use strict';
var chai = require('chai');
chai.config.includeStack = true;
var compiler = require('../compiler');
var autotest = require('./autotest');
var fs = require('fs');
var path = require('path');

describe('parseJavaScriptArgs' , function() {

    var autoTestDir = path.join(__dirname, 'fixtures/parseJavaScriptArgs/autotest');

    autotest.scanDir(
        autoTestDir,
        function run(dir) {
            var inputPath = path.join(dir, 'input.txt');
            var input = fs.readFileSync(inputPath, {encoding: 'utf8'});
            var parsed = compiler.builder.parseJavaScriptArgs(input);
            return parsed;
        },
        {
            deepEqual: true,
            compareExtension: '.json'
        });
});
