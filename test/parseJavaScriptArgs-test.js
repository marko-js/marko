'use strict';
require('./util/patch-module');

var chai = require('chai');
chai.config.includeStack = true;
var compiler = require('../compiler');
var autotest = require('./autotest');
var fs = require('fs');
var path = require('path');

describe('parseJavaScriptArgs' , function() {

    var autoTestDir = path.join(__dirname, 'autotests/parseJavaScriptArgs');

    autotest.scanDir(
        autoTestDir,
        function run(dir, helpers, done) {
            var inputPath = path.join(dir, 'input.txt');
            var input = fs.readFileSync(inputPath, {encoding: 'utf8'});
            var parsed = compiler.builder.parseJavaScriptArgs(input);
            helpers.compare(parsed, '.json');
            return done();
        });
});
