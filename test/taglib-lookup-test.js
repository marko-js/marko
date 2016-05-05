'use strict';
require('./patch-module');

var chai = require('chai');
chai.config.includeStack = true;

var expect = require('chai').expect;
var nodePath = require('path');
require('../compiler');
var autotest = require('./autotest');
var taglibLookup = require('../compiler').taglibLookup;

describe('taglib-lookup' , function() {
    var autoTestDir = nodePath.join(__dirname, 'autotests/taglib-lookup');

    autotest.scanDir(autoTestDir, function run(dir, helpers, done) {
        var test = require(nodePath.join(dir, 'test.js'));
        test.check(taglibLookup, expect);
        done();
    });
});
