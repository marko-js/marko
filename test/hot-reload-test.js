'use strict';
require('./patch-module');
require('../node-require').install();

var chai = require('chai');
chai.config.includeStack = true;

var expect = require('chai').expect;
var nodePath = require('path');
require('../compiler');
var autotest = require('./autotest');
var marko = require('../');
var hotReload = require('../hot-reload');
hotReload.enable();
describe('hot-reload' , function() {
    var autoTestDir = nodePath.join(__dirname, 'autotests/hot-reload');

    autotest.scanDir(autoTestDir, function run(dir, helpers, done) {
        var test = require(nodePath.join(dir, 'test.js'));
        test.check(marko, hotReload, expect);
        done();
    });
});
