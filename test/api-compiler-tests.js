'use strict';
require('./util/patch-module');
require('marko/node-require').install();

var chai = require('chai');
chai.config.includeStack = true;

var expect = require('chai').expect;
var nodePath = require('path');
require('../compiler');
var autotest = require('./autotest');
var marko = require('../');
var markoCompiler = require('../compiler');

describe('api (compiler)' , function() {
    var autoTestDir = nodePath.join(__dirname, 'autotests/api-compiler');

    autotest.scanDir(autoTestDir, function run(dir, helpers, done) {
        var test = require(nodePath.join(dir, 'test.js'));
        test.check(marko, markoCompiler, expect, helpers, done);
    });
});
