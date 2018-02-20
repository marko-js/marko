'use strict';

require('../__util__/test-init');

var chai = require('chai');
chai.config.includeStack = true;

var expect = require('chai').expect;
var nodePath = require('path');
require('../../compiler');
var autotest = require('../autotest');
var marko = require('../../');
var markoCompiler = require('../../compiler');

describe('api-compiler', function () {
    var autoTestDir = nodePath.join(__dirname, './fixtures');

    autotest.scanDir(autoTestDir, function run(dir, helpers, done) {
        var test = require(nodePath.join(dir, 'test.js'));
        test.check(marko, markoCompiler, expect, helpers, done);
    }, { timeout: 10000 });
});
