'use strict';
require('./patch-module');

var chai = require('chai');
chai.config.includeStack = true;

var expect = require('chai').expect;
var nodePath = require('path');
require('../compiler');
var autotest = require('./autotest');
var markoCompiler = require('../compiler');

describe('taglib-lookup' , function() {
    var autoTestDir = nodePath.join(__dirname, 'autotests/taglib-lookup');

    autotest.scanDir(autoTestDir, function run(dir, helpers, done) {
        var test = require(nodePath.join(dir, 'test.js'));
        test.check(markoCompiler, expect, helpers);
        done();
    });
});
