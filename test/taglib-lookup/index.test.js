'use strict';

require('../__util__/test-init');

var chai = require('chai');
chai.config.includeStack = true;

var expect = require('chai').expect;
var nodePath = require('path');
var autotest = require('../autotest');
var markoCompiler = require('../../compiler');

markoCompiler.buildTaglibLookup(__dirname);

describe('taglib-lookup', function () {
    var autoTestDir = nodePath.join(__dirname, './fixtures');

    autotest.scanDir(autoTestDir, function run(dir, helpers, done) {
        var test = require(nodePath.join(dir, 'test.js'));
        test.check(markoCompiler, expect, helpers);
        done();
    });
});