'use strict';

require('../__util__/test-init');
require('require-self-ref');

var nodePath = require('path');
var chai = require('chai');
chai.config.includeStack = true;

var expect = require('chai').expect;
var autotest = require('../autotest');

describe('marko-debug-babel-plugin', function () {
    var autoTestDir = nodePath.join(__dirname, './fixtures');

    autotest.scanDir(autoTestDir, function run(dir, helpers, done) {
        var test = require(nodePath.join(dir, 'test.js'));
        test.check(expect, helpers, done);
    });
});